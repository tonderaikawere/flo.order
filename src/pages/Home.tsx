import { Download, Smartphone, Shield, Zap, Users, CheckCircle } from 'lucide-react'
import DownloadButton from '../components/DownloadButton'
import SEO from '../components/SEO'

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Ordering",
      description: "Quick and efficient fuel ordering process"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transactions",
      description: "Safe and encrypted payment processing"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Admin Controlled",
      description: "Account creation managed by administrators"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Designed for seamless mobile experience"
    }
  ]

  const appFeatures = [
    "Splash screen with Flo-Orders branding",
    "Secure sign-in (admin-created accounts only)",
    "Comprehensive dashboard with overview",
    "Transaction history and status tracking",
    "Real-time notifications",
    "Profile management and settings"
  ]

  return (
    <div className="min-h-screen">
      <SEO 
        title="Flo-Orders Mobile App Download | Flo Energy Zimbabwe"
        description="Download Flo-Orders mobile app for Android and iOS. Professional fuel ordering and management solution by Flo Energy Zimbabwe. 70+ years of fuel industry experience."
        keywords="Flo Orders app download, Flo Energy mobile app, fuel ordering app Zimbabwe, Android fuel app, iOS fuel app, mobile fuel management, bulk fuel ordering"
        url="https://flo-orders.floenergy.net/"
      />
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-flo-primary to-flo-secondary text-white min-h-screen flex items-center justify-center py-12 sm:py-16 px-4"
        style={{
          backgroundImage: 'url(/images/flo-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          minHeight: '100vh'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-flo-primary/80 to-flo-secondary/80"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                Flo-Orders
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
                Streamline your fuel ordering process with our innovative mobile application. 
                Professional fuel management at your fingertips.
              </p>
            </div>
            
            {/* Call to Action */}
            <div className="w-full max-w-md space-y-2">
              <p className="text-lg text-blue-200 font-medium">Get started today</p>
              <p className="text-sm text-blue-300">Download the app and streamline your fuel management</p>
            </div>
            
            {/* Download Buttons */}
            <div className="w-full max-w-xs space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-6">
              <div className="relative w-full">
                <DownloadButton 
                  platform="android"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl opacity-50 -z-10"></div>
              </div>
              <div className="relative w-full">
                <DownloadButton 
                  platform="ios"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl opacity-50 -z-10"></div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Download size={20} />
                <span>Free Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield size={20} />
                <span>Secure & Safe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-flo-dark mb-4">
              Why Choose Flo-Orders?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of fuel ordering with our feature-rich mobile application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-flo-primary/10 text-flo-primary rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-flo-dark mb-6">
                Complete Fuel Management Solution
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Flo-Orders provides a comprehensive platform for managing your fuel orders 
                with controlled access and professional oversight.
              </p>
              
              <div className="space-y-4">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-flo-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-flo-primary to-flo-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Contact our admin team to create your account and start using Flo-Orders today.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Adrian King:</strong> +263 77 224 5578</p>
                  <p><strong>Nathan King:</strong> +263 71 221 3338</p>
                  <p><strong>Email:</strong> sales1@floenergy.net</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-flo-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Download Flo-Orders Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing community of businesses streamlining their fuel management with Flo-Orders
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButton 
              platform="android"
              variant="light"
              className="w-full sm:w-auto"
            />
            <DownloadButton 
              platform="ios"
              variant="light"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
