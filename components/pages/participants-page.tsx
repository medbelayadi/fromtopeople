'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ParticipantsPageProps {
  language: 'en' | 'ar'
}

const participants = {
  en: [
    {
      name: 'Ahlem Aloui',
      practice: 'Arts',
      bio: 'Artist exploring the intersection of traditional weaving techniques and contemporary ecological design.',
      specialty: 'Textiles',
      initials: 'AB',
      image: '/images/participants/ahlem-aloui.jpeg',
    },
    {
      name: 'Amel Mokhtari',
      practice: 'Arts',
      bio: 'Contemporary sculptor working with recycled materials and found objects from the region.',
      specialty: 'Sculpture',
      initials: 'KM',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Arij Jaadari',
      practice: 'Arts',
      bio: 'Documentary photographer capturing the cultural landscape and community stories.',
      specialty: 'Photography',
      initials: 'SZ',
      image: '/images/participants/arij-jaadari.jpeg',
    },
    {
      name: 'Emna Abdelaziz',
      practice: 'Arts',
      bio: 'Ceramicist blending traditional pottery techniques with experimental approaches.',
      specialty: 'Ceramics',
      initials: 'HA',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Farah Jaouali',
      practice: 'Arts',
      bio: 'Designer working on visual communication and cultural representation in design.',
      specialty: 'Design',
      initials: 'NR',
      image: '/images/participants/farah-jawali.jpeg',
    },
    {
      name: 'Fathia Hmidi',
      practice: 'Arts',
      bio: 'Performance artist exploring embodied knowledge and community engagement through movement.',
      specialty: 'Performance',
      initials: 'LM',
      image: '/images/participants/fathia-hmidi.jpeg',
    },
    {
      name: 'Hafsia Othmen',
      practice: 'Arts',
      bio: 'Artist working with various mediums to express cultural narratives.',
      specialty: 'Mixed Media',
      initials: 'P7',
      image: '/images/participants/hafsya-othman.jpeg',
    },
    {
      name: 'Imen Hourabi',
      practice: 'Arts',
      bio: 'Digital artist exploring the intersection of technology and traditional art forms.',
      specialty: 'Digital Art',
      initials: 'P8',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Jalila Rahal',
      practice: 'Arts',
      bio: 'Installation artist creating immersive experiences that challenge perceptions.',
      specialty: 'Installation',
      initials: 'P9',
      image: '/images/participants/jalila-rahal.jpeg',
    },

      {
      name: 'Karima Fattouche',
      practice: 'Arts',
      bio: 'Sculptor working with sustainable materials and found objects.',
      specialty: 'Sculpture',
      initials: 'P11',
      image: '/images/participants/none.jpeg',
    },

    {
      name: 'Karima Litayem',
      practice: 'Arts',
      bio: 'Textile artist preserving and innovating traditional weaving techniques.',
      specialty: 'Textiles',
      initials: 'P10',
      image: '/images/participants/karima-lutayem.jpeg',
    },
  
    {
      name: 'Leila Abeda',
      practice: 'Arts',
      bio: 'Photographer documenting social and environmental changes.',
      specialty: 'Photography',
      initials: 'P12',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Maha Chair',
      practice: 'Arts',
      bio: 'Ceramicist exploring traditional and contemporary pottery techniques.',
      specialty: 'Ceramics',
      initials: 'P13',
      image: '/images/participants/maha-chair.jpeg',
    },
    {
      name: 'Maram Souayah',
      practice: 'Arts',
      bio: 'Designer focusing on cultural representation and visual communication.',
      specialty: 'Design',
      initials: 'P14',
      image: '/images/participants/maram-swayah.jpeg',
    },
    {
      name: 'Maroua Kaabia',
      practice: 'Arts',
      bio: 'Performance artist exploring themes of identity and community.',
      specialty: 'Performance',
      initials: 'P15',
      image: '/images/participants/marwa-kaabia.jpeg',
    },
    {
      name: 'Marwa Bouajar',
      practice: 'Arts',
      bio: 'Artist combining various mediums to create unique expressions.',
      specialty: 'Mixed Media',
      initials: 'P16',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Maryem Mallas',
      practice: 'Arts',
      bio: 'Digital designer bridging traditional and modern design practices.',
      specialty: 'Digital Design',
      initials: 'P17',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Mohamed Aziz Sassi',
      practice: 'Arts',
      bio: 'Installation artist creating site-specific works that engage viewers.',
      specialty: 'Installation',
      initials: 'P18',
      image: '/images/participants/med-aziz-sassi.jpeg',
    },
    {
      name: 'Mohamed Mahmoudi',
      practice: 'Arts',
      bio: 'Textile designer exploring sustainable and innovative fabric techniques.',
      specialty: 'Textiles',
      initials: 'P19',
      image: '/images/participants/mohamed-mahmoudi.jpeg',
    },
    {
      name: 'Monem Abid',
      practice: 'Arts',
      bio: 'Sculptor working with recycled and natural materials.',
      specialty: 'Sculpture',
      initials: 'P20',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Nour Amorri',
      practice: 'Arts',
      bio: 'Documentary photographer capturing cultural and social narratives.',
      specialty: 'Photography',
      initials: 'P21',
      image: '/images/participants/nour-amorri.jpeg',
    },
    {
      name: 'Raja Bohli',
      practice: 'Arts',
      bio: 'Ceramicist blending traditional techniques with contemporary forms.',
      specialty: 'Ceramics',
      initials: 'P22',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Rim Assadi',
      practice: 'Arts',
      bio: 'Designer creating visual identities that reflect cultural values.',
      specialty: 'Design',
      initials: 'P23',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Rim Nefoussi',
      practice: 'Arts',
      bio: 'Performance artist exploring movement and community engagement.',
      specialty: 'Performance',
      initials: 'P24',
      image: '/images/participants/rim-nefoussi.jpeg',
    },

    {
      name: 'Rim Selmi',
      practice: 'Arts',
      bio: 'Visual artist exploring themes of identity and belonging.',
      specialty: 'Visual Arts',
      initials: 'P25',
      image: '/images/participants/rim-selmi.jpeg',

    },

        {
      name: 'Saber Kouiri',
      practice: 'Arts',
      bio: 'Visual artist exploring themes of identity and belonging.',
      specialty: 'Visual Arts',
      initials: 'P25',
      image: '/images/participants/none.jpeg',

    },

        {
      name: 'Safa Mabrouk',
      practice: 'Arts',
      bio: 'Visual artist exploring themes of identity and belonging.',
      specialty: 'Visual Arts',
      initials: 'P25',
      image: '/images/participants/none.jpeg',

    }
  ,

      {
      name: 'Sameh Fattouche',
      practice: 'Arts',
      bio: 'Visual artist exploring themes of identity and belonging.',
      specialty: 'Visual Arts',
      initials: 'P25',
      image: '/images/participants/samah-fattouch.jpeg',

    },

        {
      name: 'Souleima Alia',
      practice: 'Arts',
      bio: 'Visual artist exploring themes of identity and belonging.',
      specialty: 'Visual Arts',
      initials: 'P25',
      image: '/images/participants/soulayma-aalaya.jpeg',

    },

        {
      name: 'Tasnim Said',
      practice: 'Arts',
      bio: 'Visual artist exploring themes of identity and belonging.',
      specialty: 'Visual Arts',
      initials: 'P25',
      image: '/images/participants/none.jpeg',

    },
  ],
  ar: [
    {
      name: 'أحلام العلوي',
      practice: 'فنون',
      bio: 'فنانة تستكشف تقاطع تقنيات النسج التقليدية والتصميم الإيكولوجي المعاصر.',
      specialty: 'النسيج',
      initials: 'AB',
      image: '/images/participants/ahlem-aloui.jpeg',
    },
    {
      name: 'أمال المختاري',
      practice: 'التثبيت النحتي',
      bio: 'نحات معاصر يعمل مع المواد المعاد تدويرها والأشياء المجدة من المنطقة.',
      specialty: 'فنون',
      initials: 'KM',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'أريج جعداري',
      practice: 'فنون',
      bio: 'مصورة توثيقية تلتقط المشهد الثقافي وقصص المجتمع.',
      specialty: 'فنون',
      initials: 'SZ',
      image: '/images/participants/arij-jaadari.jpeg',
    },
    {
      name: 'أمنة عبد العزيز',
      practice: 'فنون',
      bio: 'خزاف يمزج تقنيات الفخار التقليدية مع الأساليب التجريبية.',
      specialty: 'السيراميك',
      initials: 'HA',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'فرح الجوالي',
      practice: 'فنون',
      bio: 'ديزاينر يعمل على التواصل البصري والتمثيل الثقافي في التصميم.',
      specialty: 'التصميم',
      initials: 'NR',
      image: '/images/participants/farah-jawali.jpeg',
    },
    {
      name: 'فتحية حميدي',
      practice: 'الأداء والحركة',
      bio: 'فنانة أداء تستكشف المعرفة المتجسدة والمشاركة المجتمعية من خلال الحركة.',
      specialty: 'فنون',
      initials: 'LM',
      image: '/images/participants/fathia-hmidi.jpeg',
    },
    {
      name: 'حفصية عثمان',
      practice: 'الوسائط المختلطة',
      bio: 'فنان يعمل مع وسائط مختلفة للتعبير عن السرديات الثقافية.',
      specialty: 'فنون ',
      initials: 'P7',
      image: '/images/participants/hafsya-othman.jpeg',
    },
    {
      name: 'إيمان هورابي',
      practice: 'فنون',
      bio: 'فنان رقمي يستكشف تقاطع التكنولوجيا والأشكال الفنية التقليدية.',
      specialty: 'الفن الرقمي',
      initials: 'P8',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'جليلة رحال',
      practice: 'فنون',
      bio: 'فنان تثبيت يخلق تجارب غامرة تتحدى الإدراكات.',
      specialty: 'التثبيت',
      initials: 'P9',
      image: '/images/participants/jalila-rahal.jpeg',
    },
    {
      name: ' كريمة فطوش',
      practice: 'فنون ',
      bio: 'فنان نسيج يحافظ على تقنيات النسيج التقليدية ويبتكرها.',
      specialty: 'النسيج',
      initials: 'P10',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'كريمة ليتيم',
      practice: 'فنون',
      bio: 'نحات يعمل مع مواد مستدامة وأشياء موجودة.',
      specialty: 'النحت',
      initials: 'P11',
      image: '/images/participants/karima-lutayem.jpeg',
    },
    {
      name: 'ليلى عبادة',
      practice: 'فنون',
      bio: 'مصور يوثق التغييرات الاجتماعية والبيئية.',
      specialty: 'التصوير',
      initials: 'P12',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'مها شير',
      practice: 'فنون',
      bio: 'خزاف يستكشف تقنيات الفخار التقليدية والمعاصرة.',
      specialty: 'السيراميك',
      initials: 'P13',
      image: '/images/participants/maha-chair.jpeg',
    },
    {
      name: 'مرام سويح',
      practice: 'تصميم الجرافيك',
      bio: 'مصمم يركز على التمثيل الثقافي والتواصل البصري.',
      specialty: 'فنون',
      initials: 'P14',
      image: '/images/participants/maram-swayah.jpeg',
    },
    {
      name: 'مروة كعبية',
      practice: 'فن الأداء',
      bio: 'فنان أداء يستكشف مواضيع الهوية والمجتمع.',
      specialty: 'فنون',
      initials: 'P15',
      image: '/images/participants/marwa-kaabia.jpeg',
    },
    {
      name: 'مروى بوعجار',
      practice: 'الوسائط المختلطة',
      bio: 'فنان يجمع بين وسائط مختلفة لإنشاء تعبيرات فريدة.',
      specialty: 'فنون ',
      initials: 'P16',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'مريم ملاس',
      practice: 'التصميم الرقمي',
      bio: 'مصمم رقمي يربط بين الممارسات التقليدية والحديثة.',
      specialty: 'فنون',
      initials: 'P17',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'محمد عزيز ساسي',
      practice: 'التثبيت',
      bio: 'فنان تثبيت يخلق أعمالاً خاصة بالموقع تشارك المشاهدين.',
      specialty: 'فنون',
      initials: 'P18',
      image: '/images/participants/med-aziz-sassi.jpeg',
    },
    {
      name: 'محمد محمودي',
      practice: 'تصميم النسيج',
      bio: 'مصمم نسيج يستكشف تقنيات القماش المستدامة والمبتكرة.',
      specialty: 'فنون',
      initials: 'P19',
      image: '/images/participants/mohamed-mahmoudi.jpeg',
    },
    {
      name: 'منعم عبيد',
      practice: 'النحت',
      bio: 'نحات يعمل مع مواد معاد تدويرها وطبيعية.',
      specialty: 'فنون',
      initials: 'P20',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'نور عمري',
      practice: 'التصوير',
      bio: 'مصور توثيقي يلتقط السرديات الثقافية والاجتماعية.',
      specialty: 'فنون',
      initials: 'P21',
      image: '/images/participants/nour-amorri.jpeg',
    },
    {
      name: 'رجاء بهلي',
      practice: 'فنون السيراميك',
      bio: 'خزاف يمزج التقنيات التقليدية مع الأشكال المعاصرة.',
      specialty: 'فنون',
      initials: 'P22',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'ريم عصادي',
      practice: 'تصميم الجرافيك',
      bio: 'مصمم يخلق هويات بصرية تعكس القيم الثقافية.',
      specialty: 'فنون',
      initials: 'P23',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'ريم نفوسي',
      practice: 'فنون',
      bio: 'فنان أداء يستكشف الحركة والمشاركة المجتمعية.',
      specialty: 'الأداء',
      initials: 'P24',
      image: '/images/participants/rim-nefoussi.jpeg',
    },
    {
      name: 'ريم  السالمي',
      practice: 'فنون بصرية',
      bio: 'فنان بصري يستكشف مواضيع الهوية والانتماء.',
      specialty: 'فنون',
      initials: 'P25',
      image: '/images/participants/none.jpeg',     
    },
{
      name: 'صابر كويري',
      practice: 'فنون بصرية',
      bio: 'فنان بصري يستكشف مواضيع الهوية والانتماء.',
      specialty: 'فنون',
      initials: 'P25',
      image: '/images/participants/none.jpeg',     
    },
{
      name: 'صفاء مبروك',
      practice: 'فنون بصرية',
      bio: 'فنان بصري يستكشف مواضيع الهوية والانتماء.',
      specialty: 'فنون',
      initials: 'P25',
      image: '/images/participants/none.jpeg',     
    },
{     
      name: 'سماح فطوش',
      practice: 'فنون بصرية',
      bio: 'فنان بصري يستكشف مواضيع الهوية والانتماء.',
      specialty: 'فنون',
      initials: 'P25',
      image: '/images/participants/samah-fattouch.jpeg',     
    },
{
      name: 'سليمة علية',
      practice: 'فنون بصرية',
      bio: 'فنان بصري يستكشف مواضيع الهوية والانتماء.',
      specialty: 'فنون',
      initials: 'P25',
      image: '/images/participants/soulayma-aalaya.jpeg',     
    },
{
      name: 'تسنيم سعيد',
      practice: 'فنون بصرية',
      bio: 'فنان بصري يستكشف مواضيع الهوية والانتماء.',
      specialty: 'فنون',
      initials: 'P25',
      image: '/images/participants/none.jpeg',     
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
