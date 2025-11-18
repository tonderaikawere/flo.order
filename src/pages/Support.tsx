export default function Support() {
  return (
    <div className="min-h-screen bg-flo-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-flo-dark mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help with Flo-Orders app, find answers to common questions, and access support resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-flo-primary/10 text-flo-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-flo-dark mb-2">App Support</h3>
            <p className="text-gray-600">Get help with app installation, login issues, and functionality.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-flo-secondary/10 text-flo-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-xl font-semibold text-flo-dark mb-2">Account Help</h3>
            <p className="text-gray-600">Account setup, password reset, and profile management assistance.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-flo-accent/10 text-flo-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="text-xl font-semibold text-flo-dark mb-2">Order Support</h3>
            <p className="text-gray-600">Help with placing orders, tracking deliveries, and order history.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-flo-dark mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">How do I get a Flo-Orders account?</h3>
                <p className="text-gray-600">
                  Accounts are created exclusively by our administrators. Contact Adrian King (+263 77 224 5578) 
                  or Nathan King (+263 71 221 3338) to request account setup.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">I forgot my password. How do I reset it?</h3>
                <p className="text-gray-600">
                  Contact our support team at sales1@floenergy.net or call +263 29 2461125-7 for password reset assistance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">How do I track my fuel orders?</h3>
                <p className="text-gray-600">
                  Use the Transactions section in the app to view all your orders, their status, and delivery information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">What are the minimum order requirements?</h3>
                <p className="text-gray-600">
                  For bulk fuel delivery, the minimum order is 2000 litres. Contact us for specific product requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">How do I update my profile information?</h3>
                <p className="text-gray-600">
                  Go to the Profile section in the app to view and update your personal details and contact information.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-flo-dark mb-6">Contact Support</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-flo-primary pl-4">
                <h3 className="text-lg font-semibold text-flo-dark mb-1">Email Support</h3>
                <p className="text-gray-600 mb-2">For non-urgent inquiries and detailed questions</p>
                <p className="font-medium">sales1@floenergy.net</p>
                <p className="text-sm text-gray-500">Response time: 24-48 hours</p>
              </div>

              <div className="border-l-4 border-flo-secondary pl-4">
                <h3 className="text-lg font-semibold text-flo-dark mb-1">Phone Support</h3>
                <p className="text-gray-600 mb-2">For urgent issues and immediate assistance</p>
                <p className="font-medium">+263 29 2461125-7</p>
                <p className="text-sm text-gray-500">Monday - Friday: 8:00 AM - 5:00 PM</p>
              </div>

              <div className="border-l-4 border-flo-accent pl-4">
                <h3 className="text-lg font-semibold text-flo-dark mb-1">Account Administrators</h3>
                <p className="text-gray-600 mb-2">For account setup and management</p>
                <p className="font-medium">Adrian King: +263 77 224 5578</p>
                <p className="font-medium">Nathan King: +263 71 221 3338</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-flo-dark mb-2">Before contacting support:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Check if your app is updated to the latest version</li>
                <li>• Ensure you have a stable internet connection</li>
                <li>• Have your account information ready</li>
                <li>• Note any error messages you're seeing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-flo-primary to-flo-secondary rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Our support team is ready to assist you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales1@floenergy.net"
              className="bg-white text-flo-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
            >
              Send Email
            </a>
            <a
              href="tel:+263292461125"
              className="bg-flo-secondary text-white px-8 py-3 rounded-md hover:bg-flo-secondary/90 transition-colors font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
