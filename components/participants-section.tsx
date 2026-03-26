import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useLanguage } from '@/lib/language-context'
import { useRef } from 'react'

interface ParticipantsSectionProps {
  language: 'en' | 'ar'
}

const participants = {
  en: [
    {
      name: 'Amira Ben Ali',
      practice: 'Textile Design & Sustainability',
      bio: 'Artist exploring the intersection of traditional weaving techniques and contemporary ecological design.',
      image: '/images/participants/part1.jpeg',
    },
    {
      name: 'Karim Mohamed',
      practice: 'Sculptural Installation',
      bio: 'Contemporary sculptor working with recycled materials and found objects from the region.',
      image: '/images/participants/part2.jpeg',
    },
    {
      name: 'Samira Zahra',
      practice: 'Photography & Documentation',
      bio: 'Documentary photographer capturing the cultural landscape and community stories.',
      image: '/images/participants/part3.jpeg',
    },
    {
      name: 'Hassan Ahmed',
      practice: 'Ceramic Arts',
      bio: 'Ceramicist blending traditional pottery techniques with experimental approaches.',
      image: '/images/participants/part4.jpeg',
    },
    {
      name: 'Noor Al-Rashid',
      practice: 'Graphic Design',
      bio: 'Designer working on visual communication and cultural representation in design.',
      image: '/images/participants/part5.jpeg',
    },
    {
      name: 'Layla Mansour',
      practice: 'Performance & Movement',
      bio: 'Performance artist exploring embodied knowledge and community engagement through movement.',
      image: '/images/participants/part6.jpeg',
    },
    {
      name: 'Participant 7',
      practice: 'Mixed Media',
      bio: 'Artist working with various mediums to express cultural narratives.',
      image: '/images/participants/part7.jpeg',
    },
    {
      name: 'Participant 8',
      practice: 'Digital Art',
      bio: 'Digital artist exploring the intersection of technology and traditional art forms.',
      image: '/images/participants/part8.jpeg',
    },
    {
      name: 'Participant 9',
      practice: 'Installation Art',
      bio: 'Installation artist creating immersive experiences that challenge perceptions.',
      image: '/images/participants/part9.jpeg',
    },
    {
      name: 'Participant 10',
      practice: 'Textile Arts',
      bio: 'Textile artist preserving and innovating traditional weaving techniques.',
      image: '/images/participants/part10.jpeg',
    },
    {
      name: 'Participant 11',
      practice: 'Sculpture',
      bio: 'Sculptor working with sustainable materials and found objects.',
      image: '/images/participants/part11.jpeg',
    },
    {
      name: 'Participant 12',
      practice: 'Photography',
      bio: 'Photographer documenting social and environmental changes.',
      image: '/images/participants/part12.jpeg',
    },
    {
      name: 'Participant 13',
      practice: 'Ceramics',
      bio: 'Ceramicist exploring traditional and contemporary pottery techniques.',
      image: '/images/participants/part13.jpeg',
    },
    {
      name: 'Participant 14',
      practice: 'Graphic Design',
      bio: 'Designer focusing on cultural representation and visual communication.',
      image: '/images/participants/part14.jpeg',
    },
    {
      name: 'Participant 15',
      practice: 'Performance Art',
      bio: 'Performance artist exploring themes of identity and community.',
      image: '/images/participants/part15.jpeg',
    },
    {
      name: 'Participant 16',
      practice: 'Mixed Media',
      bio: 'Artist combining various mediums to create unique expressions.',
      image: '/images/participants/part16.jpeg',
    },
    {
      name: 'Participant 17',
      practice: 'Digital Design',
      bio: 'Digital designer bridging traditional and modern design practices.',
      image: '/images/participants/part17.jpeg',
    },
    {
      name: 'Participant 18',
      practice: 'Installation',
      bio: 'Installation artist creating site-specific works that engage viewers.',
      image: '/images/participants/part18.jpeg',
    },
    {
      name: 'Participant 19',
      practice: 'Textile Design',
      bio: 'Textile designer exploring sustainable and innovative fabric techniques.',
      image: '/images/participants/part19.jpeg',
    },
    {
      name: 'Participant 20',
      practice: 'Sculpture',
      bio: 'Sculptor working with recycled and natural materials.',
      image: '/images/participants/part20.jpeg',
    },
    {
      name: 'Participant 21',
      practice: 'Photography',
      bio: 'Documentary photographer capturing cultural and social narratives.',
      image: '/images/participants/part21.jpeg',
    },
    {
      name: 'Participant 22',
      practice: 'Ceramic Arts',
      bio: 'Ceramicist blending traditional techniques with contemporary forms.',
      image: '/images/participants/part22.jpeg',
    },
    {
      name: 'Participant 23',
      practice: 'Graphic Design',
      bio: 'Designer creating visual identities that reflect cultural values.',
      image: '/images/participants/part23.jpeg',
    },
    {
      name: 'Participant 24',
      practice: 'Performance',
      bio: 'Performance artist exploring movement and community engagement.',
      image: '/images/participants/part24.jpeg',
    },
  ],
  ar: [
    {
      name: 'أميرة بن علي',
      practice: 'تصميم النسيج والاستدامة',
      bio: 'فنانة تستكشف تقاطع تقنيات النسج التقليدية والتصميم الإيكولوجي المعاصر.',
      image: '/images/participants/part1.jpeg',
    },
    {
      name: 'كريم محمد',
      practice: 'التثبيت النحتي',
      bio: 'نحات معاصر يعمل مع المواد المعاد تدويرها والأشياء المجدة من المنطقة.',
      image: '/images/participants/part2.jpeg',
    },
    {
      name: 'سميرة زهراء',
      practice: 'التصوير الفوتوغرافي والتوثيق',
      bio: 'مصورة توثيقية تلتقط المشهد الثقافي وقصص المجتمع.',
      image: '/images/participants/part3.jpeg',
    },
    {
      name: 'حسن أحمد',
      practice: 'فنون السيراميك',
      bio: 'خزاف يمزج تقنيات الفخار التقليدية مع الأساليب التجريبية.',
      image: '/images/participants/part4.jpeg',
    },
    {
      name: 'نور الرشيد',
      practice: 'تصميم الجرافيك',
      bio: 'ديزاينر يعمل على التواصل البصري والتمثيل الثقافي في التصميم.',
      image: '/images/participants/part5.jpeg',
    },
    {
      name: 'ليلى منصور',
      practice: 'الأداء والحركة',
      bio: 'فنانة أداء تستكشف المعرفة المتجسدة والمشاركة المجتمعية من خلال الحركة.',
      image: '/images/participants/part6.jpeg',
    },
    {
      name: 'المشارك 7',
      practice: 'الوسائط المختلطة',
      bio: 'فنان يعمل مع وسائط مختلفة للتعبير عن السرديات الثقافية.',
      image: '/images/participants/part7.jpeg',
    },
    {
      name: 'المشارك 8',
      practice: 'الفن الرقمي',
      bio: 'فنان رقمي يستكشف تقاطع التكنولوجيا والأشكال الفنية التقليدية.',
      image: '/images/participants/part8.jpeg',
    },
    {
      name: 'المشارك 9',
      practice: 'فن التثبيت',
      bio: 'فنان تثبيت يخلق تجارب غامرة تتحدى الإدراكات.',
      image: '/images/participants/part9.jpeg',
    },
    {
      name: 'المشارك 10',
      practice: 'فنون النسيج',
      bio: 'فنان نسيج يحافظ على تقنيات النسيج التقليدية ويبتكرها.',
      image: '/images/participants/part10.jpeg',
    },
    {
      name: 'المشارك 11',
      practice: 'النحت',
      bio: 'نحات يعمل مع مواد مستدامة وأشياء موجودة.',
      image: '/images/participants/part11.jpeg',
    },
    {
      name: 'المشارك 12',
      practice: 'التصوير',
      bio: 'مصور يوثق التغييرات الاجتماعية والبيئية.',
      image: '/images/participants/part12.jpeg',
    },
    {
      name: 'المشارك 13',
      practice: 'السيراميك',
      bio: 'خزاف يستكشف تقنيات الفخار التقليدية والمعاصرة.',
      image: '/images/participants/part13.jpeg',
    },
    {
      name: 'المشارك 14',
      practice: 'تصميم الجرافيك',
      bio: 'مصمم يركز على التمثيل الثقافي والتواصل البصري.',
      image: '/images/participants/part14.jpeg',
    },
    {
      name: 'المشارك 15',
      practice: 'فن الأداء',
      bio: 'فنان أداء يستكشف مواضيع الهوية والمجتمع.',
      image: '/images/participants/part15.jpeg',
    },
    {
      name: 'المشارك 16',
      practice: 'الوسائط المختلطة',
      bio: 'فنان يجمع بين وسائط مختلفة لإنشاء تعبيرات فريدة.',
      image: '/images/participants/part16.jpeg',
    },
    {
      name: 'المشارك 17',
      practice: 'التصميم الرقمي',
      bio: 'مصمم رقمي يربط بين الممارسات التقليدية والحديثة.',
      image: '/images/participants/part17.jpeg',
    },
    {
      name: 'المشارك 18',
      practice: 'التثبيت',
      bio: 'فنان تثبيت يخلق أعمالاً خاصة بالموقع تشارك المشاهدين.',
      image: '/images/participants/part18.jpeg',
    },
    {
      name: 'المشارك 19',
      practice: 'تصميم النسيج',
      bio: 'مصمم نسيج يستكشف تقنيات القماش المستدامة والمبتكرة.',
      image: '/images/participants/part19.jpeg',
    },
    {
      name: 'المشارك 20',
      practice: 'النحت',
      bio: 'نحات يعمل مع مواد معاد تدويرها وطبيعية.',
      image: '/images/participants/part20.jpeg',
    },
    {
      name: 'المشارك 21',
      practice: 'التصوير',
      bio: 'مصور توثيقي يلتقط السرديات الثقافية والاجتماعية.',
      image: '/images/participants/part21.jpeg',
    },
    {
      name: 'المشارك 22',
      practice: 'فنون السيراميك',
      bio: 'خزاف يمزج التقنيات التقليدية مع الأشكال المعاصرة.',
      image: '/images/participants/part22.jpeg',
    },
    {
      name: 'المشارك 23',
      practice: 'تصميم الجرافيك',
      bio: 'مصمم يخلق هويات بصرية تعكس القيم الثقافية.',
      image: '/images/participants/part23.jpeg',
    },
    {
      name: 'المشارك 24',
      practice: 'الأداء',
      bio: 'فنان أداء يستكشف الحركة والمشاركة المجتمعية.',
      image: '/images/participants/part24.jpeg',
    },
  ],
}

const labels = {
  en: {
    title: 'Participants',
    subtitle: 'A Diverse Community of Artists,  and Artisans',
    viewMore: 'View All Participants',
  },
  ar: {
    title: 'المشاركون',
    subtitle: 'مجتمع متنوع من الفنانين والحرفيين',
    viewMore: 'عرض جميع المشاركين',
  },
}

export function ParticipantsSection({
  language,
}: ParticipantsSectionProps) {
  const data = language === 'en' ? participants.en : participants.ar
  const text = language === 'en' ? labels.en : labels.ar
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="participants"
      className={`py-20 bg-white ${language === 'ar' ? 'font-arabic' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-2xl mb-16 ${language === 'ar' ? 'mr-auto text-right' : 'mx-auto text-center'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {text.title}
          </h2>
          <p className="text-foreground/70">{text.subtitle}</p>
        </div>

        {/* Participants Carousel with Custom Navigation */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl rounded-full p-3 border border-gray-200 hover:border-primary transition-all duration-300 transform hover:scale-110"
            aria-label="Previous participants"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl rounded-full p-3 border border-gray-200 hover:border-primary transition-all duration-300 transform hover:scale-110"
            aria-label="Next participants"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-12 py-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.slice(0, 12).map((participant, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-72 sm:w-80 snap-start"
              >
                <div className="bg-white border border-border rounded-lg p-4 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Participant Image */}
                  <div className="relative w-full aspect-[4/5] mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={participant.image}
                      alt={participant.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {participant.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-2">
                    {participant.practice}
                  </p>
                  <p
                    className={`text-sm text-foreground/70 leading-relaxed line-clamp-3 ${
                      language === 'ar' ? 'text-right' : ''
                    }`}
                  >
                    {participant.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link href="/participants">
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold px-10 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-primary/20 hover:border-primary/40">
              {text.viewMore}
            </Button>
          </Link>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
