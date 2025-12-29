import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section - Two Column Layout */}
      <section id="home" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--brand)' }}>
              Aya Housing & Property Management
            </h1>
            <h2 className="text-xl sm:text-2xl text-zinc-700 font-medium">
              Reliable, Structured, Hassle-free Property Support
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Aya Housing provides dependable property management services for residential and commercial buildings. We offer both full service management and stand-alone operational support, ensuring properties remain clean, safe, functional and well-maintained through trained staff and routine oversight.
            </p>
            <a 
              href="#contact" 
              className="inline-block text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'var(--brand)' }}
            >
              Reach Out Today
            </a>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group animate-slide-in-right">
            <Image
              src="/building.webp"
              alt="Modern apartment building"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 2. Why Choose Aya Housing - Full Width Blue Background */}
      <section id="why-choose-us" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ backgroundColor: 'var(--brand)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
            Why Choose Aya Housing?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bullet Points */}
            <ul className="space-y-4 text-white text-lg">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Clear systems and consistent reporting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Day and night guarding options.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Flexible, customisable service packages.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Quick response to operational issues.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Reliable monitoring and quality assurance.</span>
              </li>
            </ul>
            
            {/* Team Photo */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group animate-slide-in-right">
              <Image
                src="/Staff.webp"
                alt="Professional team photo showing uniformed guards and Aya Housing staff"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Your Property Partner Section - Two Column Layout */}
      <section id="property-partner" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden group animate-slide-in-left">
            <Image
              src="/presenting.webp"
              alt="Team presenting property report"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              loading="lazy"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--brand)' }}>Your Property Partner</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We offer a range of structured and reliable services tailored to meet your property's operational needs. Our comprehensive approach ensures your property remains well-maintained, secure, and professionally managed.
            </p>
            
            {/* Checklist Style Service List */}
            <div className="space-y-3 mt-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--brand)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-zinc-800">Full Property Management</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--brand)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-zinc-800">Cleaning Services</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--brand)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-zinc-800">Security and Access Management</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--brand)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-zinc-800">Maintenance and Add-on Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview - Two Column Layout with 4 Cards */}
      <section id="services" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in" style={{ color: 'var(--brand)' }}>
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Property Management Card */}
            <div className="bg-white border border-zinc-200 rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden group">
                <Image
                  src="/property_management.webp"
                  alt="Property Management Reports"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand)' }}>Full Property Management</h3>
              <ul className="space-y-2 text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Rent collection and tracking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Tenant communication and support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Supervision of cleaners, guards, caretakers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Routine inspections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Coordination of repairs and maintenance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Monthly reporting.</span>
                </li>
              </ul>
            </div>

            {/* Cleaning Services Card */}
            <div className="bg-white border border-zinc-200 rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden group">
                <Image
                  src="/cleaning_services.webp"
                  alt="Cleaning Services"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand)' }}>Cleaning Services</h3>
              <ul className="space-y-2 text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Hiring and supervising cleaners.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Daily or scheduled cleaning plans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Provision of cleaning materials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Quality checks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Reporting sanitation or structural concerns.</span>
                </li>
              </ul>
            </div>

            {/* Security and Access Management Card */}
            <div className="bg-white border border-zinc-200 rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden group">
                <Image
                  src="/security_guard.webp"
                  alt="Security Guard"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand)' }}>Security and Access Management</h3>
              <ul className="space-y-2 text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Recruitment and supervision of guards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Day and night guarding options.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Visitor and access control.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Incident reporting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                  <span>Routine safety assessments.</span>
                </li>
              </ul>
            </div>

            {/* Maintenance and Add-on Services Card */}
            <div className="bg-white border border-zinc-200 rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden group">
                <Image
                  src="/maintenance.webp"
                  alt="Maintenance Services"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand)' }}>Maintenance and Add-on Services</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">Maintenance Support</h4>
                  <ul className="space-y-1 text-zinc-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Scheduling repairs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Managing contractors.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Quality checks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Maintenance logs.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">Add-on Services</h4>
                  <ul className="space-y-1 text-zinc-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Waste management.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Landscaping and outdoor upkeep.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Move in and move out support.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Inventory management.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--brand)' }}>•</span>
                      <span>Administrative support.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section - Blue Background Card with Image */}
      <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg p-12 text-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ backgroundColor: 'var(--brand)' }}>
            {/* Left Side - Contact Info */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">Get In Touch</h2>
              <p className="text-lg text-white/90 mb-8">
                We're here to help! Reach out to us via WhatsApp or email, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {/* Call Contact */}
                <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                      <p className="text-white/80 text-sm">Call us directly</p>
                    </div>
                  </div>
                  <a
                    href="tel:+252619397197"
                    className="inline-block w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md font-semibold text-center transition-colors duration-300"
                  >
                    Call Now
                  </a>
                  <p className="text-white/70 text-sm mt-2">+252 (0) 619397197</p>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">WhatsApp</h3>
                      <p className="text-white/80 text-sm">Send us a message</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/252619397197?text=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20Aya%20Housing%20%26%20Property%20Management."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold text-center transition-colors duration-300"
                  >
                    Message on WhatsApp
                  </a>
                  <p className="text-white/70 text-sm mt-2">+252 (0) 619397197</p>
                </div>

                {/* Email Contact */}
                <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                      <p className="text-white/80 text-sm">Send us an email</p>
                    </div>
                  </div>
                  <a
                    href="mailto:AyaHousing@outlook.com?subject=Inquiry%20from%20Aya%20Housing%20Website&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20Aya%20Housing%20%26%20Property%20Management.%0D%0A%0D%0AThank%20you."
                    className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-center transition-colors duration-300"
                  >
                    Send Email
                  </a>
                  <p className="text-white/70 text-sm mt-2">AyaHousing@outlook.com</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden group animate-slide-in-right">
              <Image
                src="/hrlady.webp"
                alt="Professional customer service staff"
                fill
                className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
