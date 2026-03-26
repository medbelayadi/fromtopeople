'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

interface HeroProps {
  language: 'en' | 'ar'
}

// Animated counter component with smoother animation
function AnimatedNumber({ 
  end, 
  duration = 3000,
  suffix = ''
}: { 
  end: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('hero-stats')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Use a smoother easing function - easeOutExpo for slower start, faster middle, slowest end
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      // For more natural counting, use linear for small numbers and easeOut for large
      const currentCount = Math.floor(easeOutExpo * end)
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export function Hero({ language }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 md:py-32"
      style={{
        backgroundImage: "url('/background-pattern.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-900/30 md:bg-blue-900/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${language === 'ar' ? 'font-arabic lg:order-2' : 'lg:order-1'}`}>
            <div className="space-y-4">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance ${
                  language === 'ar' ? 'text-right' : ''
                }`}
              >
                {language === 'ar' ? 'من وإلى الناس' : 'From People, To People'}
              </h1>

                <p
                  className={`text-base md:text-lg text-white/80 leading-relaxed ${
                    language === 'ar' ? 'text-right' : ''
                  }`}
                >
                  {language === 'ar'
                    ? 'مسار نموذجي متكامل يهدف إلى إعادة تخيّل المستقبل بشكل مستدام، من خلال الفن والمعرفة الأصيلة، واستكشاف حلول مبتكرة للأزمات البيئية والاجتماعية والاقتصادية، مع تعزيز الروابط الحيوية بين الإنسان والطبيعة عبر تدخل بشري واعٍ ومسؤول.'
                    : 'A comprehensive, model pathway aimed at reimagining the future sustainably through art and authentic knowledge, exploring innovative solutions to environmental, social, and economic challenges, while strengthening the vital connections between humans and nature through conscious and responsible human intervention.'}
                </p>
            </div>

            {/* CTA Button */}
            <div className={language === 'ar' ? 'flex justify-start' : ''}>
              <Link href="/program" className="block">
                <Button className="bg-white text-primary font-semibold px-8 py-6 text-base rounded-sm hover:bg-white/90">
                  {language === 'ar' ? 'اكتشف البرنامج' : 'Explore Program'}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div id="hero-stats" className="flex gap-8 pt-8">
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  <AnimatedNumber end={18} duration={3000} />
                </div>
                <p className="text-base md:text-lg text-white/70 mt-1">
                  {language === 'ar' ? 'أشهر' : 'Months'}
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  <AnimatedNumber end={30} duration={3500} suffix="+" />
                </div>
                <p className="text-base md:text-lg text-white/70 mt-1">
                  {language === 'ar' ? 'مشارك' : 'Participants'}
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  <AnimatedNumber end={4} duration={2500} />
                </div>
                <p className="text-base md:text-lg text-white/70 mt-1">
                  {language === 'ar' ? 'إقامات الفنية' : 'Artistic Residencies'}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Logo & Name */}
          <div className="relative flex items-center justify-center lg:order-2">
            {/* Bigger Logo */}
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <Image
                src="/LOGOpng.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
