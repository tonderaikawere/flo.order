export default function Contact() {
  return (
    <div className="min-h-screen bg-flo-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-flo-dark mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for support, account setup, or any questions about Flo-Orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-flo-dark mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">General Inquiries</h3>
                <p className="text-gray-600 mb-2">For general questions and support</p>
                <p><strong>Email:</strong> sales1@floenergy.net</p>
                <p><strong>Phone:</strong> +263 29 2461125-7</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">Account Setup</h3>
                <p className="text-gray-600 mb-2">Contact our administrators to create your Flo-Orders account</p>
                <p><strong>Adrian King:</strong> +263 77 224 5578</p>
                <p><strong>Nathan King:</strong> +263 71 221 3338</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-flo-dark mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-flo-dark mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flo-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flo-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flo-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flo-primary"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="account-setup">Account Setup</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="billing">Billing Inquiry</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flo-primary"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-flo-primary text-white py-3 px-6 rounded-md hover:bg-flo-primary/90 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-flo-dark text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Contact our team today to set up your Flo-Orders account and start streamlining your fuel management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales1@floenergy.net"
                className="bg-flo-secondary text-white px-8 py-3 rounded-md hover:bg-flo-secondary/90 transition-colors font-semibold"
              >
                Email Us
              </a>
              <a
                href="tel:+263292461125"
                className="bg-white text-flo-dark px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
