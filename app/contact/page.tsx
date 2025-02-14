export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-4">Developed by [Your Company Name]</p>
        <p className="mb-4">
          Email:{" "}
          <a href="mailto:support@restaurantreviewsapp.com" className="text-orange-600 hover:underline">
            support@restaurantreviewsapp.com
          </a>
        </p>
        <p className="mb-8">[Your Physical Address, if applicable]</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-3 py-2 border rounded-md"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

