'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProgramOverview } from '@/components/program-overview'
import { AboutSection } from '@/components/about-section'
import { ParticipantsSection } from '@/components/participants-section'
import { NewsSection } from '@/components/news-section'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { SloganSection } from '@/components/slogan-section'

export default function Home() {
  const { language, setLanguage } = useLanguage()

  return (
    <main dir={language === 'ar' ? 'rtl' : 'ltr'} className="-mt-16 md:-mt-20">
      <Header />
      <Hero language={language} />


      <ProgramOverview language={language} />
      <NewsSection language={language} />
      <SloganSection  /> 
      <AboutSection language={language} />
      <ParticipantsSection language={language} />
      <Footer language={language} />
    </main>
  )
}
