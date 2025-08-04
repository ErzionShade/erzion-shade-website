// app/page.tsx
import { Inter, Space_Mono } from 'next/font/google';

// Load Google Fonts with specified subsets and weights
const inter = Inter({ subsets: ['latin'] });
const spaceMono = Space_Mono({ weight: '400', subsets: ['latin'] });

export default function Article() {
  return (
    <main className={`min-h-screen bg-gray-950 text-gray-100 ${inter.className} py-20 sm:py-24 md:py-32 lg:py-40 px-4`}>
      <article className="container mx-auto max-w-3xl">
        {/* Article Header */}
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-center sm:text-left">
            Why Most Creators Stay Broke -<br />
            <span className="text-red-400 block">They Never Found Clarity</span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl opacity-85 mb-16 text-center sm:text-left ${spaceMono.className} leading-relaxed`}>
            They post daily. They chase reach. They talk louder. And still... they're broke.
          </p>
        </header>

        {/* Section: But Why */}
        <section className="mb-16 border-b-2 border-gray-800 pb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">But why?</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            What are they actually chasing?
          </p>
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            Because the game was never about <span className="font-bold text-white">more</span>. It was always about <span className="font-bold text-white">clearer</span>.
          </p>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            Clarity is rare — because noise is addictive.
          </p>
        </section>

        {/* Section: Noise & Direction */}
        <section className="mb-16 border-b-2 border-gray-800 pb-10">
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            Scroll through any timeline. Everyone's saying everything. But nothing lands. Because nothing is clear.
          </p>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            Most creators don't have a niche problem. They have a <span className="font-bold text-white">direction problem</span>.
          </p>
        </section>

        {/* Section: The Unknowns */}
        <section className="mb-16 border-l-4 border-red-500 pl-6 sm:pl-8 py-2">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">They don't know:</h3>
          <ul className="space-y-4 sm:space-y-5">
            <li className="flex items-start">
              <span className="text-red-400 mr-3 text-2xl">•</span>
              <span className="text-lg sm:text-xl opacity-90">Who they're for.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 text-2xl">•</span>
              <span className="text-lg sm:text-xl opacity-90">What they fix.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 text-2xl">•</span>
              <span className="text-lg sm:text-xl opacity-90">Why they're different.</span>
            </li>
          </ul>
          <p className="mt-8 text-lg sm:text-xl opacity-90 leading-relaxed">
            So they copy. They recycle. They repeat.
          </p>
          <p className="mt-4 text-lg sm:text-xl opacity-90 leading-relaxed">
            And when you're unclear — you're forgettable.
          </p>
        </section>

        {/* Section: Virality vs Authority */}
        <section className="mb-16 border-b-2 border-gray-800 pb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">Virality gives you followers. But clarity gives you authority.</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            One viral post might give you 10K likes. But if your bio's a mess... they'll never stay.
          </p>
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            One flashy hook might blow up. But if your next 3 posts are random... you'll confuse.
          </p>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            People don't buy from who's loud. They buy from who's clear.
          </p>
        </section>

        {/* Section: Personal Shift */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-red-400">The Most Dangerous Shift I Made:</h2>
          <blockquote className="mb-8 p-8 sm:p-10 bg-gray-850 rounded-xl border-l-8 border-red-500 shadow-2xl">
            <p className="text-xl sm:text-2xl italic text-gray-200 leading-relaxed">
              "I stopped creating for reach. I started building for resonance. I stopped trying to go viral. I started gaining authority. Clarity isn't in the words. It's in your decisions. In your intention. In the reason why every section exists. Every post connects. Every thread leads to you."
            </p>
          </blockquote>
        </section>

        {/* Section: Real Clarity */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">Clarity isn't what you say.</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            It's what people feel after hearing you.
          </p>
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            Can they describe your brand in 1 sentence?
          </p>
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            Do your ideas have a spine — or just style?
          </p>
          <p className="text-lg sm:text-xl opacity-90 mb-8 leading-relaxed">
            Is your world clean? Or chaotic?
          </p>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            If the answer isn't crystal — they'll leave.
          </p>
        </section>

        {/* Section: Final Truth */}
        <section className="mb-16 border-t-2 border-gray-800 pt-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">Real Growth Doesn't Come From Speed.</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-6 leading-relaxed">
            It Comes From <span className="font-bold text-white">Precision</span>.
          </p>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            Don't chase trend. Build foundation. Brand isn't lightning. It's structure.
          </p>
        </section>

        {/* Footer Quote */}
        <footer className="mt-20 border-t-2 border-gray-800 pt-10 sm:pt-12">
          <p className={`text-lg sm:text-xl text-gray-300 ${spaceMono.className} leading-relaxed`}>
            ❝Before you post more... Fix your clarity. Because if the world can't explain what you do — You don't have a brand.❞
          </p>
        </footer>
      </article>
    </main>
  );
}
