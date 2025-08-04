// app/articles/simplicity-is-power/page.tsx
import { Inter, Space_Mono, Playfair_Display } from 'next/font/google';

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
        {/* Article Header */}
        <header className="mb-16">
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight ${playfair.variable} font-serif`}>
            Simplicity is <span className="text-red-400">Power</span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl opacity-85 leading-relaxed ${spaceMono.variable} font-mono`}>
            The deepest truths are spoken in the fewest words.<br />
            Complexity is where weak thinkers hide.
          </p>
        </header>

        {/* Main Content */}
        <section className={`space-y-8 mb-16 ${spaceMono.variable} font-mono`}>
          <div className="border-b-2 border-gray-800 pb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">1. Complexity is a Trap</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              People add layers of confusion to feel "smart". But complexity repels while clarity attracts. The most powerful brands and movements use simple words and clean designs.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-6 sm:pl-8 py-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">2. Simplicity Builds Trust</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              Overly complicated messages create doubt. Simple language makes people feel safe and understood. If you can't explain it simply, you don't understand it deeply.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 sm:p-10 border border-gray-800">
            <p className="text-xl sm:text-2xl italic text-gray-200 leading-relaxed">
              "The art of reduction: Cut until only the essence remains. Remove extra words, steps, and clutter. Every unnecessary detail dilutes your impact."
            </p>
          </div>

          <div className="border-t-2 border-gray-800 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">3. Silence Speaks Loud</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              You don't need to shout with complexity. A single sharp line can shake the soul more than paragraphs of noise. 
              <span className="block mt-4 italic text-white">"Stay hungry. Stay foolish."</span>
              <span className="block mt-2">— 4 words, eternal impact.</span>
            </p>
          </div>
        </section>

        {/* Article Footer */}
        <footer className="mt-20 border-t-2 border-gray-800 pt-10 sm:pt-12">
          <p className={`text-lg sm:text-xl text-gray-300 ${spaceMono.variable} font-mono leading-relaxed`}>
            ❝Simplicity isn't weakness — it's the language of strength. Only masters can say more with less.❞
          </p>
        </footer>
      </article>
    </main>
  );
}