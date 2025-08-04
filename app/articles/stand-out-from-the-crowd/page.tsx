// app/articles/stand-out-from-crowd/page.tsx
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
            Stand Out or <span className="text-red-400">Disappear</span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl opacity-85 leading-relaxed ${spaceMono.variable} font-mono`}>
            Most drown in noise.<br />
            You weren't made to echo others.
          </p>
        </header>

        {/* Main Content */}
        <section className={`space-y-8 mb-16 ${spaceMono.variable} font-mono`}>
          <div className="border-l-4 border-red-500 pl-6 sm:pl-8 py-2">
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              In a world copying trends, <span className="font-bold text-white">real identity is rare</span>. 
              Most follow what's safe — but legends walk alone.
            </p>
          </div>

          <div className="border-b-2 border-gray-800 pb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">Your Brand Must Cut Through</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-2xl">•</span>
                <span className="text-lg sm:text-xl opacity-90">Voice that can't be ignored</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-2xl">•</span>
                <span className="text-lg sm:text-xl opacity-90">Design that demands attention</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-2xl">•</span>
                <span className="text-lg sm:text-xl opacity-90">Ideas that challenge norms</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 sm:p-10 border border-gray-800">
            <p className="text-xl sm:text-2xl italic text-gray-200 leading-relaxed">
              "Don't seek attention. <span className="text-red-400">Command it</span>.<br />
              Through clarity. Through courage. Through being unapologetically you."
            </p>
          </div>

          <div className="border-t-2 border-gray-800 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Crowd Won't Validate You</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              If you feel like the "only one" — <span className="italic">good</span>.<br />
              That's the first sign you're onto something real.<br />
              Lead in silence — they'll follow when you refuse to follow.
            </p>
          </div>
        </section>

        {/* Article Footer */}
        <footer className="mt-20 border-t-2 border-gray-800 pt-10 sm:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <p className={`text-lg sm:text-xl text-gray-300 ${spaceMono.variable} font-mono leading-relaxed`}>
              ❝Being different is dangerous.<br />
              That's why it works.❞
            </p>
            
          </div>
        </footer>
      </article>
    </main>
  );
}