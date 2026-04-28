'use client'

import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function SloganSection() {
  const { language } = useLanguage()

  const isArabic = language === 'ar'

  return (
    <section
      id="slogan"
      className="relative min-h-[90vh] md:min-h-[80vh] overflow-hidden"
    >
      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: "url('/images/homepage/home1.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          backgroundImage: "url('/images/homepage/home11.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      />

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[90vh] md:min-h-[80vh]">

          {/* Left Column for Arabic */}
          <div className={`flex flex-col justify-start md:justify-center pt-12 md:pt-0 ${isArabic ? 'items-start' : 'hidden md:flex'}`}>
            {isArabic && (
              <div className="max-w-lg text-right font-arabic">
               
                <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold mt-4 drop-shadow-md">
                 يسعى البرنامج لإعادة تخيّل المستقبل بشكل مستدام عبر الفن والمعرفة الأصيلة، مستكشفًا حلولًا مبتكرة للأزمات البيئية والاجتماعية والاقتصادية، ومعيدًا بناء الروابط الحيوية بين الإنسان والطبيعة من خلال تدخل بشري واعٍ ومسؤول.
                </p>
                <Link href="/program" className="mt-8 inline-block">
                  <Button 
                    className="bg-primary text-white font-semibold px-10 py-7 text-lg rounded-sm hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    المزيد
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Right Column for English */}
          <div className={`flex flex-col justify-start md:justify-center pt-12 md:pt-0 ${!isArabic ? 'items-end' : ''}`}>
            {!isArabic && (
              <div className="max-w-lg text-right">

                <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold mt-4 drop-shadow-md">
                  The program aims to reimagine the future sustainably through art and authentic knowledge, exploring innovative solutions to environmental, social, and economic challenges, and rebuilding the vital connections between humans and nature through conscious and responsible human intervention.
                </p>
                <Link href="/contact" className="mt-8 inline-block">
                  <Button 
                    className="bg-primary text-white font-semibold px-10 py-7 text-lg rounded-sm hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
