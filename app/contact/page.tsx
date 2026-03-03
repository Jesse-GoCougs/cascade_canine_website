import Image from "next/image";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us — Cascade Canine",
  description: "Get in touch with Cascade Canine Co. to place an order or ask questions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">

      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/backgrounds/IMG_7715.jpg"
          alt="Contact page background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Page header */}
        <div className="text-center mb-16">
          <p className="text-amber-300 text-lg font-semibold uppercase tracking-widest mb-3">
            Cascade Canine Co.
          </p>
          <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-stone-300 text-lg">
            Questions about an order? Want a custom fit? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left column: info cards */}
          <div className="space-y-6">

            {/* How to order */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">How to Order</h2>
              <p className="text-stone-300 leading-relaxed">
                See a premade you would like to order? Message us via Instagram,
                Facebook Messenger, or email to let us know what size and romper
                name along with the numeric code and we will send you a quote!
              </p>
              <p className="text-stone-300 leading-relaxed mt-3">
                If your pup doesn't fit into a base size we can alter the premade
                of your choosing or make a fully custom fitted romper. Tell us
                your pup's measurements and we'll adjust the pattern to personally
                fit your dog.
              </p>
            </div>

            {/* Contact info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Find Us On</h2>
              <div className="space-y-4">

                {/* Email */}
                <a
                  href="mailto:cascadecanineco@gmail.com"
                  className="flex items-center gap-3 text-stone-300 hover:text-amber-300 transition-colors group"
                >
                  <div className="bg-white/10 group-hover:bg-amber-700/30 rounded-lg p-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Email</p>
                    <p className="font-medium">cascadecanineco@gmail.com</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/cascade_canine_co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-300 hover:text-amber-300 transition-colors group"
                >
                  <div className="bg-white/10 group-hover:bg-amber-700/30 rounded-lg p-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                      <circle cx="12" cy="12" r="4" strokeWidth={2} />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Instagram</p>
                    <p className="font-medium">@cascade_canine_co</p>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Cascadecanineco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-300 hover:text-amber-300 transition-colors group"
                >
                  <div className="bg-white/10 group-hover:bg-amber-700/30 rounded-lg p-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Facebook</p>
                    <p className="font-medium">Cascadecanineco</p>
                  </div>
                </a>

              </div>
            </div>

            {/* Response time */}
            <div className="bg-amber-700/30 backdrop-blur-sm border border-amber-700/50 rounded-xl p-5">
              <p className="text-amber-200 font-medium">Response Time</p>
              <p className="text-stone-300 text-sm mt-1">
                We typically respond within 24–48 hours. For faster responses,
                reach out via Instagram or Facebook Messenger.
              </p>
            </div>

          </div>

          {/* Right column: contact form */}
          <ContactForm />

        </div>
      </div>
    </main>
  );
}
