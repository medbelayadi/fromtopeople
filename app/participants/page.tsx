'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ParticipantsPage } from '@/components/pages/participants-page'
import { useLanguage } from '@/lib/language-context'

export default function ParticipantsPageComponent() {
  const { language, setLanguage } = useLanguage()

  return (
    <main dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <ParticipantsPage language={language} />
      <Footer language={language} />
    </main>
  )
}

