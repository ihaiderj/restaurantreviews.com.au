export default function TermsAndConditions() {
  return (
    <div className="min-h-screen py-20 dark:bg-dark-primary transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white transition-colors">
            Terms and Conditions
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors">
              Last updated: March 15, 2024
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">1. Agreement to Terms</h2>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  By accessing or using Restaurant Reviews, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">2. User Accounts</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">3. User Reviews and Content</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                  By posting reviews or content on Restaurant Reviews, you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 transition-colors">
                  <li>Confirm that you are the owner of the content or have the right to share it</li>
                  <li>Grant us a non-exclusive right to use, modify, and display the content</li>
                  <li>Agree to post honest, accurate, and non-discriminatory reviews</li>
                  <li>Understand that false or misleading reviews may be removed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">4. Restaurant Listings</h2>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  Restaurant owners are responsible for maintaining accurate information about their establishments, including menus, prices, and operating hours. We reserve the right to remove or modify listings that violate our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">5. Reservations and Bookings</h2>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  While we facilitate restaurant reservations, the final agreement is between you and the restaurant. Cancellation policies are set by individual restaurants and should be reviewed before confirming a booking.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">6. Privacy and Data</h2>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  Your use of Restaurant Reviews is also governed by our Privacy Policy. By using our service, you consent to our collection and use of data as outlined in the Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">7. Modifications</h2>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before the changes take effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">8. Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  If you have any questions about these Terms, please contact us at{' '}
                  <a 
                    href="mailto:support@restaurantreviews.com.au" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    support@restaurantreviews.com.au
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 