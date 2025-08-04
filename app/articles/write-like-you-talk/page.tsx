// app/articles/write-like-you-talk/page.tsx
import { Inter, Space_Mono, Playfair_Display } from 'next/font/google';

// Load Google Fonts with variables
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceMono = Space_Mono({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-space-mono'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

export default function Article() {
  return (
    <main className={`min-h-screen bg-gray-950 text-gray-100 ${inter.variable} font-sans py-20 sm:py-24 md:py-32 lg:py-40 px-4`}>
      <article className="container mx-auto max-w-3xl">

        {/* Header */}
        <header className="mb-16">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight ${playfair.variable} font-serif`}>
            Write Like You Talk<br />
            <span className="text-red-400 block">Not Like a Textbook</span>
          </h1>

          <p className={`text-lg sm:text-xl md:text-2xl opacity-85 leading-relaxed ${spaceMono.variable} font-mono`}>
            People won't remember your complex sentences.<br />
            They remember how you made them feel.<br />
            And nothing feels more human than talking like... a human.
          </p>
        </header>

        {/* Main Content */}
        <section className={`space-y-8 mb-16 ${spaceMono.variable} font-mono`}>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            Most new creators fall into a trap: they try to sound "smart" by writing stiff, formal, robotic words. But readers don't want to read textbooks — they want a real human voice.
          </p>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            Writing is just talking... slowed down. When you write like you talk, you sound natural, bold, real. You create rhythm. You build trust. You cut through noise.
          </p>

          <div className="border-l-4 border-red-500 pl-6 sm:pl-8 py-2 my-8">
            <p className="text-lg sm:text-xl opacity-90 italic leading-relaxed">
              Want proof? Look at your favorite writer's posts.  
              They sound like a friend — not a lecturer.
            </p>
          </div>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            This is how silent builders grow fast: They sound like someone you'd want to talk to — not a professor you'd avoid.
          </p>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            Strip away the fluff. Ditch the jargon.  
            <span className="block text-white font-bold">Be a mirror, not a megaphone.</span>  
            Talk like a real person. That's how real ones will follow you.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t-2 border-gray-800 pt-10 sm:pt-12">
          <p className={`text-lg sm:text-xl text-gray-300 ${spaceMono.variable} font-mono leading-relaxed mb-4`}>
            ❝The best writing isn’t complicated — it's clear, bold, and human.❞
          </p>
          <p className={`text-lg sm:text-xl text-gray-400 ${spaceMono.variable} font-mono leading-relaxed`}>
            ❝If your voice doesn't sound like you — they'll scroll.❞
          </p>
        </footer>

      </article>
    </main>
  );
}
