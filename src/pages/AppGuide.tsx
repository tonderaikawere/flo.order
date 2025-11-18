import { CheckCircle, Smartphone, User, Bell, CreditCard, Settings } from 'lucide-react'

export default function AppGuide() {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "1. Splash Screen",
      description: "When you open the app, you'll see the Flo-Orders branding while the app loads.",
      details: "The splash screen displays our logo and ensures all app components are properly initialized."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "2. Sign In",
      description: "Use your admin-provided credentials to access the system.",
      details: "Accounts are created exclusively by administrators to ensure controlled access. Contact our admin team if you need an account."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "3. Dashboard Overview",
      description: "Access your personalized dashboard with key information.",
      details: "View recent activity, quick stats, and navigate to different sections of the app."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "4. Transactions",
      description: "Monitor all your fuel orders and their status.",
      details: "View transaction history, track order status, and access detailed order information."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "5. Notifications",
      description: "Stay updated with real-time alerts and updates.",
      details: "Receive order confirmations, status changes, and important system notifications."
    }
  ]

  const features = [
    {
      category: "Account Management",
      items: [
        "Admin-controlled account creation",
        "Secure login system",
        "Profile management",
        "Password change functionality"
      ]
    },
    {
      category: "Order Management",
      items: [
        "Place fuel orders",
        "Track order status",
        "View order history",
        "Order confirmation system"
      ]
    },
    {
      category: "Communication",
      items: [
        "Real-time notifications",
        "Status update alerts",
        "System announcements",
        "Admin communications"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-flo-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-flo-dark mb-6">
            Flo-Orders App Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to using the Flo-Orders mobile application. 
            Learn how to navigate, place orders, and manage your fuel requirements efficiently.
          </p>
        </div>

        {/* Getting Started Steps */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-flo-dark mb-12 text-center">
            Getting Started
          </h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-flo-primary/10 text-flo-primary rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-flo-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                      {step.description}
                    </p>
                    <p className="text-gray-600">
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-flo-dark mb-12 text-center">
            App Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-flo-dark mb-4">
                  {feature.category}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-flo-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Account Setup */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-flo-primary to-flo-secondary rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Account Setup</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">How to Get an Account</h3>
                <ul className="space-y-2">
                  <li>• Contact our admin team</li>
                  <li>• Provide your business details</li>
                  <li>• Wait for account approval</li>
                  <li>• Receive login credentials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <p><strong>Adrian King:</strong> +263 77 224 5578</p>
                  <p><strong>Nathan King:</strong> +263 71 221 3338</p>
                  <p><strong>Email:</strong> sales1@floenergy.net</p>
                  <p><strong>Office:</strong> +263 29 2461125-7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <h2 className="text-3xl font-bold text-flo-dark mb-12 text-center">
            Troubleshooting
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-flo-dark mb-4">Common Issues</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-flo-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Login Problems:</strong> Ensure you're using admin-provided credentials
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-flo-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>App Not Loading:</strong> Check your internet connection
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-flo-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Order Issues:</strong> Contact support for assistance
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-flo-dark mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  If you encounter any issues or need assistance, our support team is ready to help.
                </p>
                <div className="space-y-2">
                  <p><strong>Support Email:</strong> sales1@floenergy.net</p>
                  <p><strong>Phone Support:</strong> +263 29 2461125-7</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
