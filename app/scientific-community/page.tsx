'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScientificCommunityPage } from '@/components/pages/scientific-community-page'
import { useLanguage } from '@/lib/language-context'

export default function ScientificCommunityPageComponent() {
  const { language } = useLanguage()

  return (
    <main dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <ScientificCommunityPage language={language} />
      <Footer language={language} />
    </main>
  )
}

