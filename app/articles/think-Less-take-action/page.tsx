// app/articles/think-less-take-action/page.tsx
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
          <p className={`text-sm text-gray-400 uppercase tracking-wider mb-3 ${spaceMono.variable} font-mono`}>
            ACTION WISDOM
          </p>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight ${playfair.variable} font-serif`}>
            Think Less, <span className="text-red-400">Take Action</span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl opacity-85 leading-relaxed ${spaceMono.variable} font-mono`}>
            Overthinking doesn't build empires —<br />
            movement does.
          </p>
        </header>

        {/* Main Content */}
        <section className={`space-y-8 mb-16 ${spaceMono.variable} font-mono`}>
          <div className="border-b-2 border-gray-800 pb-10">
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              Most people die trapped in their thoughts. Silent builders break that cycle by moving forward, even without perfect clarity. Action turns ideas into reality. Thinking alone is useless without motion.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-6 sm:pl-8 py-2">
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              You won't think your way into greatness. Thinking without action is paralysis. Movement breaks through confusion and doubt. Even small steps build momentum.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 sm:p-10 border border-gray-800">
            <p className="text-xl sm:text-2xl italic text-gray-200 leading-relaxed">
              "Your first steps won't be perfect. Expect awkwardness, mistakes, and failure. That's not a reason to stop — it's proof you're <span className="text-red-400">building</span>."
            </p>
          </div>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            The world rewards movers, not thinkers. Waiting to be "ready" means waiting forever. The market responds to those who act. Hesitation kills opportunity.
          </p>

          <div className="border-t-2 border-gray-800 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">The Courage To Move</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              You don't need full confidence to start. Courage isn't the absence of fear but the decision to move despite it. Hands may shake, heart may race, but you step anyway. This separates the silent builders from the scared.
            </p>
          </div>
        </section>

        {/* Article Footer */}
        <footer className="mt-20 border-t-2 border-gray-800 pt-10 sm:pt-12">
          <p className={`text-lg sm:text-xl text-gray-300 ${spaceMono.variable} font-mono leading-relaxed`}>
            ❝Greatness doesn't belong to the clever. It belongs to those who <span className="font-bold">move</span>.❞
          </p>
        </footer>
      </article>
    </main>
  );
}