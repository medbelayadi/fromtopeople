'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NewsPage } from '@/components/pages/news-page-fixed'
import { useLanguage } from '@/lib/language-context'

export default function NewsPageComponent() {
  const { language, setLanguage } = useLanguage()

  return (
    <main dir={language === 'ar' ? 'rtl' : 'ltr'} className="pt-24 sm:pt-28 lg:pt-32">
      <Header />
      <NewsPage language={language} />
      <Footer language={language} />
    </main>
  )
}

