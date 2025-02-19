export default function TermsAndConditions() {
  return (
    <div className="min-h-screen py-20 dark:bg-dark-primary transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white transition-colors">
            Terms and Conditions
          </h1>
          
          <div className="prose dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                Welcome to www.restaurantreviews.com.au (the "Website"), operated by Restaurant Review Pty. Ltd. 
                (ACN 612 034 447) ("we," "us," or "our"). By accessing or using the Website, you agree to be bound 
                by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please do not use the Website.
              </p>
            </section>

            {/* Use of the Website */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">2. Use of the Website</h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-400 transition-colors">
                <li>You must be at least 18 years of age to use the Website.</li>
                <li>
                  You agree to use the Website for lawful purposes only. You may not use the Website:
                  <ul className="list-circle pl-6 mt-2 space-y-2">
                    <li>To post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.</li>
                    <li>To impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                    <li>To interfere with or disrupt the operation of the Website or the servers or networks connected to the Website.</li>
                    <li>To violate any applicable local, state, national or international law.</li>
                  </ul>
                </li>
                <li>You are solely responsible for the content of your reviews and other submissions to the Website.</li>
              </ul>
            </section>

            {/* Restaurant Reviews */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">3. Restaurant Reviews</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 transition-colors">
                <li>Reviews must be based on genuine experiences.</li>
                <li>You agree not to submit false, misleading, or defamatory reviews.</li>
                <li>We reserve the right to remove or edit any review that we deem to be inappropriate or in violation of these Terms.</li>
                <li>You grant us a non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, and distribute your reviews in any format.</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">4. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 transition-colors">
                <li>The content of the Website, including but not limited to text, graphics, logos, images, and software, is the property of Restaurant Review Pty. Ltd. and is protected by copyright and other intellectual property laws.</li>
                <li>You may not reproduce, modify, or distribute any content from the Website without our prior written consent.</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">5. Disclaimer</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 transition-colors">
                <li>We make no warranties, express or implied, about the accuracy, completeness, reliability, or suitability of the information on the Website.</li>
                <li>We are not liable for any loss or damage arising from your use of the Website.</li>
                <li>Restaurant Review Pty. Ltd. does not endorse or guarantee the quality of any restaurant reviewed on the Website.</li>
              </ul>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">6. Indemnification</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                You agree to indemnify and hold us harmless from any claims, damages, or expenses (including legal fees) 
                arising from your use of the Website or your breach of these Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">7. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                These Terms will be governed by and construed in accordance with the laws of Queensland, Australia.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">8. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                We reserve the right to modify these Terms at any time. Your continued use of the Website following any 
                changes constitutes acceptance of those changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 