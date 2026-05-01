import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'

interface ParticipantsSectionProps {
  language: 'en' | 'ar'
}

const participants = {
  en: [
    {
      name: 'Raja Bohli',
      practice: 'Management IT',
      bio: 'Technical specialist in management informatics with professional experience in tourism and administrative support.',
      image: '/images/participants/raja-best.jpg',
    },
    {
      name: 'Rim Assadi',
      practice: 'Fine Arts',
      bio: 'Visual arts graduate specializing in sculpture. Skilled in Arabic calligraphy and exploring traditional decorative arts.',
      image: '/images/participants/rim-best.jpg',
    },
    {
      name: 'Amal Mokhtari',
      practice: '_',
      bio: '_',
      image: '/images/participants/amel-best.jpg',
    },
  ],
  ar: [
    {
      name: 'رجاء بهلي',
      practice: 'إعلامية التصرف',
      bio: 'تقنية في إعلامية التصرف مع خبرة في قطاع السياحة. تجمع بين الكفاءة التقنية والرغبة المستمرة في التطوير المهني.',
      image: '/images/participants/raja-best.jpg',
    },
    {
      name: 'ريم عصادي',
      practice: 'فنون تشكيلية',
      bio: 'فنانة متخصصة في النحت والخط العربي. تبحث في التراث من خلال تقنيات يدوية وفنية متنوعة.',
      image: '/images/participants/rim-best.jpg',
    },
    {
      name: 'أمال المختاري',
      practice: ' _',
      bio: ' _',
      image: '/images/participants/amel-best.jpg',
    },
  ],
}

const labels = {
  en: {
    title: 'Participants of the Month',
    subtitle: 'From March 17 to April 16',
    viewMore: 'View All Participants',
  },
  ar: {
    title: 'مشاركو الشهر',
    subtitle: 'من 17 مارس إلى 16 أبريل',
    viewMore: 'عرض جميع المشاركين',
  },
}

export function ParticipantsSection({
  language,
}: ParticipantsSectionProps) {
  const data = language === 'en' ? participants.en : participants.ar
  const text = language === 'en' ? labels.en : labels.ar

  return (
    <section
      id="participants"
      className={`py-20 bg-white ${language === 'ar' ? 'font-arabic' : ''}`}
    >
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className={`max-w-2xl mb-16 ${language === 'ar' ? 'mr-auto text-right' : 'mx-auto text-center'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {text.title}
          </h2>
          <p className="text-foreground/70">{text.subtitle}</p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.slice(0, 3).map((participant, i) => (
            <div key={i}>
              <div className="bg-white border border-border rounded-lg p-4 hover:shadow-xl transition-all duration-300 h-full">

                {/* Image */}
                <div className="relative w-full aspect-[4/5] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={participant.image}
                    alt={participant.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {participant.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-2">
                  {participant.practice}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3">
                  {participant.bio}
                </p>

              </div>
            </div>
          ))}
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
    </section>
  )
}