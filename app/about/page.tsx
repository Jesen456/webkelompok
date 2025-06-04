export default function AboutPage() {
  const team = [
    { role: "Manager", names: ["Ambar", "Prety"] },
    { role: "Customer Support", names: ["Alfredo", "Indri", "Aldin"] },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Company Description */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">About Glamoure Glow</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Glamoure Glow, every product is crafted with passion and precision to bring you the finest in natural
            skincare. We believe that beauty comes from within, and our mission is to enhance your natural radiance with
            clean, effective, and sustainable skincare solutions. Our commitment to quality means using only the purest
            ingredients, sourced ethically and processed with care to maintain their natural benefits.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From our luxurious soaps to our nourishing treatments, each product is designed to pamper your skin while
            respecting the environment. We take pride in our eco-friendly practices and sustainable packaging, ensuring
            that your beauty routine contributes to a healthier planet.
          </p>
        </section>

        {/* CEO Quote */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
              "We take pride in creating products that not only make you look beautiful but also make you feel confident
              and radiant. Every ingredient is chosen with care, every formula is tested with love, and every product is
              made to give you the glow you desire."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-gold-400 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Cahya</p>
                <p className="text-gray-600">CEO, Glamoure Glow</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Structure */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((department, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">{department.role}</h3>
                <div className="space-y-4">
                  {department.names.map((name, nameIndex) => (
                    <div key={nameIndex} className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-gold-400 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{name.charAt(0)}</span>
                      </div>
                      <span className="text-lg text-gray-700 font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
