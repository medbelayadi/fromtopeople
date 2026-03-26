'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ParticipantsPageProps {
  language: 'en' | 'ar'
}

const participants = {
  en: [
    {
      name: 'Amira Ben Ali',
      practice: 'Textile Design & Sustainability',
      bio: 'Artist exploring the intersection of traditional weaving techniques and contemporary ecological design.',
      specialty: 'Textiles',
      initials: 'AB',
      image: '/images/participants/part1.jpeg',
    },
    {
      name: 'Karim Mohamed',
      practice: 'Sculptural Installation',
      bio: 'Contemporary sculptor working with recycled materials and found objects from the region.',
      specialty: 'Sculpture',
      initials: 'KM',
      image: '/images/participants/part2.jpeg',
    },
    {
      name: 'Samira Zahra',
      practice: 'Photography & Documentation',
      bio: 'Documentary photographer capturing the cultural landscape and community stories.',
      specialty: 'Photography',
      initials: 'SZ',
      image: '/images/participants/part3.jpeg',
    },
    {
      name: 'Hassan Ahmed',
      practice: 'Ceramic Arts',
      bio: 'Ceramicist blending traditional pottery techniques with experimental approaches.',
      specialty: 'Ceramics',
      initials: 'HA',
      image: '/images/participants/part4.jpeg',
    },
    {
      name: 'Noor Al-Rashid',
      practice: 'Graphic Design',
      bio: 'Designer working on visual communication and cultural representation in design.',
      specialty: 'Design',
      initials: 'NR',
      image: '/images/participants/part5.jpeg',
    },
    {
      name: 'Layla Mansour',
      practice: 'Performance & Movement',
      bio: 'Performance artist exploring embodied knowledge and community engagement through movement.',
      specialty: 'Performance',
      initials: 'LM',
      image: '/images/participants/part6.jpeg',
    },
    {
      name: 'Participant 7',
      practice: 'Mixed Media',
      bio: 'Artist working with various mediums to express cultural narratives.',
      specialty: 'Mixed Media',
      initials: 'P7',
      image: '/images/participants/part7.jpeg',
    },
    {
      name: 'Participant 8',
      practice: 'Digital Art',
      bio: 'Digital artist exploring the intersection of technology and traditional art forms.',
      specialty: 'Digital Art',
      initials: 'P8',
      image: '/images/participants/part8.jpeg',
    },
    {
      name: 'Participant 9',
      practice: 'Installation Art',
      bio: 'Installation artist creating immersive experiences that challenge perceptions.',
      specialty: 'Installation',
      initials: 'P9',
      image: '/images/participants/part9.jpeg',
    },
    {
      name: 'Participant 10',
      practice: 'Textile Arts',
      bio: 'Textile artist preserving and innovating traditional weaving techniques.',
      specialty: 'Textiles',
      initials: 'P10',
      image: '/images/participants/part10.jpeg',
    },
    {
      name: 'Participant 11',
      practice: 'Sculpture',
      bio: 'Sculptor working with sustainable materials and found objects.',
      specialty: 'Sculpture',
      initials: 'P11',
      image: '/images/participants/part11.jpeg',
    },
    {
      name: 'Participant 12',
      practice: 'Photography',
      bio: 'Photographer documenting social and environmental changes.',
      specialty: 'Photography',
      initials: 'P12',
      image: '/images/participants/part12.jpeg',
    },
    {
      name: 'Participant 13',
      practice: 'Ceramics',
      bio: 'Ceramicist exploring traditional and contemporary pottery techniques.',
      specialty: 'Ceramics',
      initials: 'P13',
      image: '/images/participants/part13.jpeg',
    },
    {
      name: 'Participant 14',
      practice: 'Graphic Design',
      bio: 'Designer focusing on cultural representation and visual communication.',
      specialty: 'Design',
      initials: 'P14',
      image: '/images/participants/part14.jpeg',
    },
    {
      name: 'Participant 15',
      practice: 'Performance Art',
      bio: 'Performance artist exploring themes of identity and community.',
      specialty: 'Performance',
      initials: 'P15',
      image: '/images/participants/part15.jpeg',
    },
    {
      name: 'Participant 16',
      practice: 'Mixed Media',
      bio: 'Artist combining various mediums to create unique expressions.',
      specialty: 'Mixed Media',
      initials: 'P16',
      image: '/images/participants/part16.jpeg',
    },
    {
      name: 'Participant 17',
      practice: 'Digital Design',
      bio: 'Digital designer bridging traditional and modern design practices.',
      specialty: 'Digital Design',
      initials: 'P17',
      image: '/images/participants/part17.jpeg',
    },
    {
      name: 'Participant 18',
      practice: 'Installation',
      bio: 'Installation artist creating site-specific works that engage viewers.',
      specialty: 'Installation',
      initials: 'P18',
      image: '/images/participants/part18.jpeg',
    },
    {
      name: 'Participant 19',
      practice: 'Textile Design',
      bio: 'Textile designer exploring sustainable and innovative fabric techniques.',
      specialty: 'Textiles',
      initials: 'P19',
      image: '/images/participants/part19.jpeg',
    },
    {
      name: 'Participant 20',
      practice: 'Sculpture',
      bio: 'Sculptor working with recycled and natural materials.',
      specialty: 'Sculpture',
      initials: 'P20',
      image: '/images/participants/part20.jpeg',
    },
    {
      name: 'Participant 21',
      practice: 'Photography',
      bio: 'Documentary photographer capturing cultural and social narratives.',
      specialty: 'Photography',
      initials: 'P21',
      image: '/images/participants/part21.jpeg',
    },
    {
      name: 'Participant 22',
      practice: 'Ceramic Arts',
      bio: 'Ceramicist blending traditional techniques with contemporary forms.',
      specialty: 'Ceramics',
      initials: 'P22',
      image: '/images/participants/part22.jpeg',
    },
    {
      name: 'Participant 23',
      practice: 'Graphic Design',
      bio: 'Designer creating visual identities that reflect cultural values.',
      specialty: 'Design',
      initials: 'P23',
      image: '/images/participants/part23.jpeg',
    },
    {
      name: 'Participant 24',
      practice: 'Performance',
      bio: 'Performance artist exploring movement and community engagement.',
      specialty: 'Performance',
      initials: 'P24',
      image: '/images/participants/part24.jpeg',
    },
  ],
  ar: [
    {
      name: 'أميرة بن علي',
      practice: 'تصميم النسيج والاستدامة',
      bio: 'فنانة تستكشف تقاطع تقنيات النسج التقليدية والتصميم الإيكولوجي المعاصر.',
      specialty: 'النسيج',
      initials: 'AB',
      image: '/images/participants/part1.jpeg',
    },
    {
      name: 'كريم محمد',
      practice: 'التثبيت النحتي',
      bio: 'نحات معاصر يعمل مع المواد المعاد تدويرها والأشياء المجدة من المنطقة.',
      specialty: 'النحت',
      initials: 'KM',
      image: '/images/participants/part2.jpeg',
    },
    {
      name: 'سميرة زهراء',
      practice: 'التصوير الفوتوغرافي والتوثيق',
      bio: 'مصورة توثيقية تلتقط المشهد الثقافي وقصص المجتمع.',
      specialty: 'التصوير',
      initials: 'SZ',
      image: '/images/participants/part3.jpeg',
    },
    {
      name: 'حسن أحمد',
      practice: 'فنون السيراميك',
      bio: 'خزاف يمزج تقنيات الفخار التقليدية مع الأساليب التجريبية.',
      specialty: 'السيراميك',
      initials: 'HA',
      image: '/images/participants/part4.jpeg',
    },
    {
      name: 'نور الرشيد',
      practice: 'تصميم الجرافيك',
      bio: 'ديزاينر يعمل على التواصل البصري والتمثيل الثقافي في التصميم.',
      specialty: 'التصميم',
      initials: 'NR',
      image: '/images/participants/part5.jpeg',
    },
    {
      name: 'ليلى منصور',
      practice: 'الأداء والحركة',
      bio: 'فنانة أداء تستكشف المعرفة المتجسدة والمشاركة المجتمعية من خلال الحركة.',
      specialty: 'الأداء',
      initials: 'LM',
      image: '/images/participants/part6.jpeg',
    },
    {
      name: 'المشارك 7',
      practice: 'الوسائط المختلطة',
      bio: 'فنان يعمل مع وسائط مختلفة للتعبير عن السرديات الثقافية.',
      specialty: 'الوسائط المختلطة',
      initials: 'P7',
      image: '/images/participants/part7.jpeg',
    },
    {
      name: 'المشارك 8',
      practice: 'الفن الرقمي',
      bio: 'فنان رقمي يستكشف تقاطع التكنولوجيا والأشكال الفنية التقليدية.',
      specialty: 'الفن الرقمي',
      initials: 'P8',
      image: '/images/participants/part8.jpeg',
    },
    {
      name: 'المشارك 9',
      practice: 'فن التثبيت',
      bio: 'فنان تثبيت يخلق تجارب غامرة تتحدى الإدراكات.',
      specialty: 'التثبيت',
      initials: 'P9',
      image: '/images/participants/part9.jpeg',
    },
    {
      name: 'المشارك 10',
      practice: 'فنون النسيج',
      bio: 'فنان نسيج يحافظ على تقنيات النسيج التقليدية ويبتكرها.',
      specialty: 'النسيج',
      initials: 'P10',
      image: '/images/participants/part10.jpeg',
    },
    {
      name: 'المشارك 11',
      practice: 'النحت',
      bio: 'نحات يعمل مع مواد مستدامة وأشياء موجودة.',
      specialty: 'النحت',
      initials: 'P11',
      image: '/images/participants/part11.jpeg',
    },
    {
      name: 'المشارك 12',
      practice: 'التصوير',
      bio: 'مصور يوثق التغييرات الاجتماعية والبيئية.',
      specialty: 'التصوير',
      initials: 'P12',
      image: '/images/participants/part12.jpeg',
    },
    {
      name: 'المشارك 13',
      practice: 'السيراميك',
      bio: 'خزاف يستكشف تقنيات الفخار التقليدية والمعاصرة.',
      specialty: 'السيراميك',
      initials: 'P13',
      image: '/images/participants/part13.jpeg',
    },
    {
      name: 'المشارك 14',
      practice: 'تصميم الجرافيك',
      bio: 'مصمم يركز على التمثيل الثقافي والتواصل البصري.',
      specialty: 'التصميم',
      initials: 'P14',
      image: '/images/participants/part14.jpeg',
    },
    {
      name: 'المشارك 15',
      practice: 'فن الأداء',
      bio: 'فنان أداء يستكشف مواضيع الهوية والمجتمع.',
      specialty: 'الأداء',
      initials: 'P15',
      image: '/images/participants/part15.jpeg',
    },
    {
      name: 'المشارك 16',
      practice: 'الوسائط المختلطة',
      bio: 'فنان يجمع بين وسائط مختلفة لإنشاء تعبيرات فريدة.',
      specialty: 'الوسائط المختلطة',
      initials: 'P16',
      image: '/images/participants/part16.jpeg',
    },
    {
      name: 'المشارك 17',
      practice: 'التصميم الرقمي',
      bio: 'مصمم رقمي يربط بين الممارسات التقليدية والحديثة.',
      specialty: 'التصميم الرقمي',
      initials: 'P17',
      image: '/images/participants/part17.jpeg',
    },
    {
      name: 'المشارك 18',
      practice: 'التثبيت',
      bio: 'فنان تثبيت يخلق أعمالاً خاصة بالموقع تشارك المشاهدين.',
      specialty: 'التثبيت',
      initials: 'P18',
      image: '/images/participants/part18.jpeg',
    },
    {
      name: 'المشارك 19',
      practice: 'تصميم النسيج',
      bio: 'مصمم نسيج يستكشف تقنيات القماش المستدامة والمبتكرة.',
      specialty: 'النسيج',
      initials: 'P19',
      image: '/images/participants/part19.jpeg',
    },
    {
      name: 'المشارك 20',
      practice: 'النحت',
      bio: 'نحات يعمل مع مواد معاد تدويرها وطبيعية.',
      specialty: 'النحت',
      initials: 'P20',
      image: '/images/participants/part20.jpeg',
    },
    {
      name: 'المشارك 21',
      practice: 'التصوير',
      bio: 'مصور توثيقي يلتقط السرديات الثقافية والاجتماعية.',
      specialty: 'التصوير',
      initials: 'P21',
      image: '/images/participants/part21.jpeg',
    },
    {
      name: 'المشارك 22',
      practice: 'فنون السيراميك',
      bio: 'خزاف يمزج التقنيات التقليدية مع الأشكال المعاصرة.',
      specialty: 'السيراميك',
      initials: 'P22',
      image: '/images/participants/part22.jpeg',
    },
    {
      name: 'المشارك 23',
      practice: 'تصميم الجرافيك',
      bio: 'مصمم يخلق هويات بصرية تعكس القيم الثقافية.',
      specialty: 'التصميم',
      initials: 'P23',
      image: '/images/participants/part23.jpeg',
    },
    {
      name: 'المشارك 24',
      practice: 'الأداء',
      bio: 'فنان أداء يستكشف الحركة والمشاركة المجتمعية.',
      specialty: 'الأداء',
      initials: 'P24',
      image: '/images/participants/part24.jpeg',
    },
  ],
}

const labels = {
  en: {
    title: 'Our Participants',
    subtitle: 'A diverse community of artists, designers, and makers creating together',
    cohort: 'Cohort 2026',
  },
  ar: {
    title: 'المشاركون',
    subtitle: 'مجتمع متنوع من الفنانين والديزاينرز والحرفيين يعملون معاً',
    cohort: 'الفوج 2026',
  },
}

export function ParticipantsPage({ language }: ParticipantsPageProps) {
  const data = language === 'en' ? participants.en : participants.ar
  const text = language === 'en' ? labels.en : labels.ar
  const colors = ['bg-blue-100', 'bg-emerald-100', 'bg-amber-100', 'bg-rose-100', 'bg-violet-100', 'bg-cyan-100']

  return (
    <section id="participants" className={`min-h-screen py-20 bg-white ${language === 'ar' ? 'font-arabic' : ''}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className={`max-w-3xl ${language === 'ar' ? 'text-right' : 'text-center'}`}>
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{text.cohort}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            {text.title}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">{text.subtitle}</p>
        </div>
      </div>

      {/* Participants Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map((participant, i) => (
            <div
              key={i}
              className="group relative h-full transition-all duration-300"
            >
              {/* Card Background with gradient */}
              <div className={`absolute inset-0 ${colors[i % colors.length]} opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl -z-10`} />

              {/* Main Card */}
              <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Top Gradient Bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-primary/70 to-transparent" />

                {/* Participant Image */}
                <div className="relative w-full aspect-[4/5] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={participant.image}
                    alt={participant.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {participant.name}
                  </h3>

                  <p className="text-sm font-semibold text-primary/80 mb-4">
                    {participant.practice}
                  </p>

                  <p className={`text-sm text-foreground/70 leading-relaxed flex-1 ${language === 'ar' ? 'text-right' : ''}`}>
                    {participant.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className={`max-w-2xl ${language === 'ar' ? 'text-right' : 'text-center'} mx-auto`}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'ar' ? 'هل تريد الانضمام إلينا؟' : 'Ready to Join Us?'}
          </h2>
          <p className="text-foreground/70 mb-8">
            {language === 'ar'
              ? 'نحن نبحث عن فنانين وديزاينرز وحرفيين شغوفين. تواصل معنا للمزيد من المعلومات حول فرص المشاركة.'
              : 'We are looking for passionate artists, designers, and makers. Get in touch for more information about participation opportunities.'}
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-sm">
            {language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
          </Button>
        </div>
      </div>
    </section>
  )
}
