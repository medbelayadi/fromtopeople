'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProgramAboutPage } from '@/components/pages/program-about-page'
import { useLanguage } from '@/lib/language-context'

export default function ProgramPageComponent() {
  const { language, setLanguage } = useLanguage()

  return (
    <main dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <ProgramAboutPage language={language} />
      <Footer language={language} />
    </main>
  )
}

