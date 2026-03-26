'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamPage } from '@/components/pages/team-page'
import { useLanguage } from '@/lib/language-context'

export default function TeamPageComponent() {
  const { language } = useLanguage()

  return (
    <main dir={language === 'ar' ? 'rtl' : 'ltr'} className="-mt-16 md:-mt-20">
      <Header />
      <TeamPage />
      <Footer language={language} />
    </main>
  )
}
