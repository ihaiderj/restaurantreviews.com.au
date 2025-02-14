import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-600">
              Connecting food lovers with great restaurants since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://placehold.co/800x400/png"
                alt="Our team discussing restaurant reviews"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We believe everyone deserves to have amazing dining experiences. Our mission is to create a trusted platform where food enthusiasts can discover, share, and celebrate great restaurants across Australia.
              </p>
              <p className="text-gray-600">
                By combining authentic user reviews, beautiful photography, and powerful search tools, we're making it easier than ever to find your next favorite restaurant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "Former restaurant owner with a passion for connecting people through food.",
                image: "https://placehold.co/200x200/png"
              },
              {
                name: "Michael Chen",
                role: "Head of Product",
                bio: "Tech enthusiast focused on creating intuitive user experiences.",
                image: "https://placehold.co/200x200/png"
              },
              {
                name: "Emma Williams",
                role: "Community Manager",
                bio: "Food blogger turned community builder, bringing foodies together.",
                image: "https://placehold.co/200x200/png"
              }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We believe in genuine, unbiased reviews that help users make informed decisions."
              },
              {
                title: "Community",
                description: "Building meaningful connections between restaurants and food lovers."
              },
              {
                title: "Innovation",
                description: "Constantly improving our platform to better serve our users and restaurants."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <a
            href="mailto:contact@restaurantreviews.com.au"
            className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
} 