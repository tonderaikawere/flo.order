import { Download, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { useState } from 'react'

interface DownloadButtonProps {
  platform: 'android' | 'ios'
  variant?: 'light' | 'dark'
  className?: string
}

interface ThankYouPopupProps {
  platform: 'android' | 'ios'
  onClose: () => void
}

function ThankYouPopup({ platform, onClose }: ThankYouPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="text-green-600" size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-flo-dark mb-2">
            Thank You for Downloading!
          </h3>
          
          <p className="text-gray-600 mb-4">
            Your {platform === 'android' ? 'Android' : 'iOS'} app download has started successfully.
          </p>
          
          <div className="bg-flo-light p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-700">
              <strong>Next Steps:</strong><br />
              1. Check your downloads folder<br />
              2. {platform === 'android' ? 'Enable "Install from unknown sources" if needed' : 'Follow iOS installation instructions'}<br />
              3. Install and enjoy Flo-Orders!
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="bg-flo-primary text-white px-6 py-2 rounded-md hover:bg-flo-primary/90 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}

export default function DownloadButton({ platform, className }: DownloadButtonProps) {
  const [showThankYou, setShowThankYou] = useState(false)
  
  const handleDownload = () => {
    console.log(`Download button clicked for ${platform}`)
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a')
    
    if (platform === 'android') {
      // Replace with your actual APK file URL or path
      link.href = '/downloads/flo-orders-android.apk'
      link.download = 'flo-orders-android.apk'
      console.log('Attempting to download Android APK')
    } else {
      // For iOS, this would typically redirect to App Store
      // But since you want direct download, you'd need an IPA file (requires enterprise distribution)
      link.href = '/downloads/flo-orders-ios.ipa'
      link.download = 'flo-orders-ios.ipa'
      console.log('Attempting to download iOS IPA')
    }
    
    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Show thank you popup
    setShowThankYou(true)
    console.log('Thank you popup should be showing')
  }

  const isAndroid = platform === 'android'

  return (
    <>
      <button
      onClick={handleDownload}
      className={cn(
        'group relative overflow-hidden',
        'rounded-xl shadow-lg hover:shadow-xl active:shadow-md w-full sm:w-auto',
        'transition-all duration-200 ease-in-out',
        'hover:scale-105 active:scale-95',
        'focus:outline-none focus:ring-4 focus:ring-offset-2',
        'w-full sm:min-w-[240px] max-w-full transform-gpu cursor-pointer select-none',
        // Platform-specific styling
        isAndroid 
          ? 'bg-black hover:bg-gray-900 text-white border-2 border-gray-800 hover:border-green-500 focus:ring-green-500/20' 
          : 'bg-black hover:bg-gray-900 text-white border-2 border-gray-800 hover:border-blue-500 focus:ring-blue-500/20',
        'download-button-enter download-button-pulse',
        className
      )}
    >
      <div className="w-full flex items-center justify-between px-4 py-3 relative z-10">
        <div className="flex items-center min-w-0">
          <div className="flex-shrink-0 mr-3">
            <img 
              src={isAndroid ? '/images/google-icon.webp' : '/images/apple-icon.png'}
              alt=""
              className="w-6 h-6 object-contain transition-all duration-200 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
          <div className="text-left overflow-hidden">
            <div className={cn(
              "text-xs font-medium transition-colors uppercase tracking-wide truncate",
              isAndroid 
                ? "text-gray-300 group-hover:text-green-400" 
                : "text-gray-300 group-hover:text-blue-400"
            )}>
              {isAndroid ? 'GET IT ON' : 'Download on the'}
            </div>
            <div className={cn(
              "text-base font-bold transition-colors truncate",
              isAndroid 
                ? "text-white group-hover:text-green-400" 
                : "text-white group-hover:text-blue-400"
            )}>
              {isAndroid ? 'Google Play' : 'App Store'}
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 ml-4">
          <Download className={cn(
            "w-5 h-5 transition-colors",
            isAndroid 
              ? "text-gray-400 group-hover:text-green-400" 
              : "text-gray-400 group-hover:text-blue-400"
          )} />
        </div>
      </div>
      
      {/* Platform-specific gradient overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
        isAndroid 
          ? "bg-gradient-to-r from-green-500 to-green-600" 
          : "bg-gradient-to-r from-blue-500 to-blue-600"
      )}></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] rounded-xl"></div>
      
      {/* Button press indicator */}
      <div className="absolute inset-0 bg-flo-primary/5 opacity-0 group-active:opacity-100 transition-opacity duration-100 rounded-xl"></div>
    </button>
    
    {showThankYou && (
      <ThankYouPopup 
        platform={platform} 
        onClose={() => setShowThankYou(false)} 
      />
    )}
    </>
  )
}
