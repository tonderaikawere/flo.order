export default function Terms() {
  return (
    <div className="min-h-screen bg-flo-light py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-flo-dark mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By downloading, installing, or using the Flo-Orders mobile application, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Account Registration</h2>
              <p className="text-gray-700 mb-4">
                Account creation is exclusively managed by Flo Energy administrators. Users cannot self-register. 
                To obtain an account:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Contact our administrative team</li>
                <li>Provide required business information</li>
                <li>Wait for account approval and credential provision</li>
                <li>Maintain the confidentiality of your login credentials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Permitted Use</h2>
              <p className="text-gray-700 mb-4">
                The Flo-Orders application is intended for legitimate business purposes related to fuel ordering. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use the application only for authorized fuel ordering activities</li>
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not attempt to circumvent security measures</li>
                <li>Not use the application for any illegal or unauthorized purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Orders and Payments</h2>
              <p className="text-gray-700 mb-4">
                All orders placed through the application are subject to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Availability of products and services</li>
                <li>Verification and approval by Flo Energy</li>
                <li>Current pricing and payment terms</li>
                <li>Delivery schedules and minimum order requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The Flo-Orders application and all related content are the property of Flo Energy. 
                This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Software code and functionality</li>
                <li>Trademarks, logos, and branding</li>
                <li>User interface design</li>
                <li>Documentation and content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Flo Energy shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from the use of this application, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Loss of profits or business opportunities</li>
                <li>Data loss or corruption</li>
                <li>Service interruptions</li>
                <li>Third-party actions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">
                Flo Energy reserves the right to terminate or suspend access to the application at any time, 
                with or without cause, including for violations of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> sales1@floenergy.net</p>
                <p><strong>Phone:</strong> +263 29 2461125-7</p>
                <p><strong>Address:</strong> Flo Energy, Zimbabwe</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-flo-dark mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                immediately upon posting. Continued use of the application constitutes acceptance of modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
