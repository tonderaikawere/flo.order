export default function About() {
  return (
    <div className="min-h-screen bg-flo-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-flo-dark mb-6">
            About Flo Energy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 70 years of experience in the fuel industry, Flo Energy is Zimbabwe's trusted energy partner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-flo-dark mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                FLO has a dedicated passion for people and aspires to make every person feel valued for their contribution. 
                This focus on every individual reaching their potential enhances loyalty and dedication within FLO.
              </p>
              <p>
                Our progress and sustainable growth in the energy sector go hand in hand with our desire and responsibility 
                to consciously conserve and preserve our environment.
              </p>
              <p>
                Approachable leadership encourages wisdom and innovation to the forefront which translates to prosperity for all. 
                Hard work ethic forms the FLO cornerstone and within a culture of loyalty, dignity and integrity we continue 
                to elevate FLO in the competitive energy sector.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-flo-dark mb-6">Our Mission</h2>
            <div className="bg-gradient-to-br from-flo-primary to-flo-secondary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Energy for Growth</h3>
              <p className="mb-4">
                Quality products and services that are tailor-made for you. Whether you require one litre or hundreds 
                of thousands of litres, we will create a turn key solution so that you or your company can drive forward.
              </p>
              <p>
                It's our responsibility to make sure that your fuel concerns are minimised, allowing you to focus on 
                your business at hand.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-20">
          <h2 className="text-3xl font-bold text-flo-dark mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-flo-primary/10 text-flo-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⛽</span>
              </div>
              <h3 className="text-xl font-semibold text-flo-dark mb-2">Fuel Supply</h3>
              <p className="text-gray-600">Quality fuel products delivered nationwide with reliability and efficiency.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-flo-secondary/10 text-flo-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="text-xl font-semibold text-flo-dark mb-2">Bulk Delivery</h3>
              <p className="text-gray-600">Bulk fuel delivery services with minimum orders of 2000 litres to your doorstep.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-flo-accent/10 text-flo-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-flo-dark mb-2">Lubricants</h3>
              <p className="text-gray-600">High-grade lubrication products in partnership with Scope Lubricants.</p>
            </div>
          </div>
        </div>

        <div className="bg-flo-dark text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-2">
                <p><strong>Email:</strong> sales1@floenergy.net</p>
                <p><strong>Office:</strong> +263 29 2461125-7</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Bulk Fuel Contacts</h3>
              <div className="space-y-2">
                <p><strong>Adrian King:</strong> +263 77 224 5578</p>
                <p><strong>Nathan King:</strong> +263 71 221 3338</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
