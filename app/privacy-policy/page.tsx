export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 dark:bg-dark-primary transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white transition-colors">
            Privacy Policy
          </h1>
          
          <div className="prose dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                Restaurant Review Pty. Ltd. (ACN 612 034 447) ("we," "us," or "our") is committed to protecting the privacy 
                of your personal information. This Privacy Policy explains how we collect, use, and disclose your personal 
                information in relation to www.restaurantreviews.com.au.
              </p>
            </section>

            {/* Collection of Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">2. Collection of Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                We may collect personal information from you when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 transition-colors">
                <li>Create an account on the Website.</li>
                <li>Submit a restaurant review.</li>
                <li>Contact us.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mt-4 transition-colors">
                The types of personal information we may collect include your name, email address, and any other 
                information you choose to provide.
              </p>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">3. Use of Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                We may use your personal information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 transition-colors">
                <li>Provide you with access to the Website and its features.</li>
                <li>Process your restaurant reviews.</li>
                <li>Communicate with you about the Website.</li>
                <li>Improve the Website and our services.</li>
              </ul>
            </section>

            {/* Disclosure of Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">4. Disclosure of Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                We may disclose your personal information to:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-400 transition-colors">
                <li>Our related entities and business partners for promotional purposes. This may include providing you with information about products, services, events, or promotions that we or our partners believe may be of interest to you. We will only do this with your express consent, and you will have the option to opt-out of receiving such communications at any time.</li>
                <li>Third-party service providers who assist us in operating our Website or providing our services (e.g., IT support, marketing agencies). We will ensure that these service providers are contractually obligated to protect your personal information.</li>
                <li>Government authorities or law enforcement agencies if required by law or to protect our legal rights.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mt-4 transition-colors">
                We will not sell your personal information to third parties for marketing purposes without your express consent.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">5. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. 
                However, no data transmission over the Internet is completely secure.
              </p>
            </section>

            {/* Access and Correction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">6. Access and Correction</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                You have the right to access and correct your personal information. Contact us if you would like to do so.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">7. Changes to Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                We may update this Privacy Policy from time to time. Any changes will be posted on the Website.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">8. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a 
                  href="mailto:support@restaurantreviews.com.au"
                  className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                >
                  support@restaurantreviews.com.au
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

