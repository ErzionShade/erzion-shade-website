'use client'

import './globals.css'
import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper'
import { usePathname } from 'next/navigation'
import CustomCursor from './components/CustomCursor'
import { useEffect } from 'react'
import Head from 'next/head'
import Footer from './components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  // ===== [1] REALME C53 NUCLEAR FIX =====
  useEffect(() => {
    // 1A. Meta tag injection for ColorOS
    const meta = document.createElement('meta')
    meta.name = "theme-color"
    meta.content = "#000000"
    document.head.appendChild(meta)

    // 1B. Fullscreen height hack
    const handleResize = () => {
      document.documentElement.style.setProperty(
        '--realme-height',
        `${window.innerHeight}px`
      )
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    // 1C. Force black navbar in WebView
    if (/Realme|Oppo/i.test(navigator.userAgent)) {
      document.documentElement.style.backgroundColor = '#000000'
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // ===== [2] UNIVERSAL VIEWPORT FIX =====
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh', 
      `${window.innerHeight * 0.01}px`
    )
  }, [])

  return (
    <html lang="en" className="bg-black"> {/* Root black lock */}
      <Head>
        {/* CORE META TAGS */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="color-scheme" content="dark" />
        
        {/* REALME C53 SPECIFIC */}
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <body className="bg-black text-white overflow-x-hidden">
        {/* ===== [3] BULLETPROOF BACKGROUND LAYER ===== */}
        <div className="fixed inset-0 bg-black -z-50"
          style={{
            height: 'calc(var(--vh, 1vh) * 100)',
            minHeight: '-webkit-fill-available',
          }} 
        />

        {/* ===== [4] MAIN CONTENT ===== */}
        <Navbar />
        <PageWrapper key={path}>
          {children}
        </PageWrapper>
        <CustomCursor />
        <Footer />
      </body>
    </html>
  )
}  