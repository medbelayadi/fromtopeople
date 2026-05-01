'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'

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
      image: '/images/participants/amal-mokhtari.png',
    },
    {
      name: 'Arij Jaadari',
      practice: 'Visual Arts',
      bio: 'Visual arts professor and researcher in creativity. Active in civil society and director of scientific and artistic clubs.',
      specialty: 'Art Theory',
      initials: 'SZ',
      image: '/images/participants/arij-jaadari.jpeg',
    },
    {
      name: 'Emna Abdelaziz',
      practice: 'Heritage Sciences',
      bio: 'Researcher in heritage sciences and civil society activist. Focused on documenting intangible heritage and making a social impact.',
      specialty: 'Heritage Research',
      initials: 'HA',
      image: '/images/participants/amna-aziz.png',
    },
    {
      name: 'Farah Jaouali',
      practice: 'Fashion Design',
      bio: 'Garment manufacturing specialist with a passion for design. Dedicated to developing technical skills and exploring new creative fields.',
      specialty: 'Garment Manufacturing',
      initials: 'NR',
      image: '/images/participants/farah-jawali.jpeg',
    },
    {
      name: 'Fathia Hmidi',
      practice: 'Digital Printing',
      bio: 'Professional in advertising services and digital printing. Dedicated to personal growth and active engagement in the creative market.',
      specialty: 'Advertising',
      initials: 'LM',
      image: '/images/participants/fathia-hmidi.jpeg',
    },
    {
      name: 'Hafsia Othmen',
      practice: 'Applied Arts',
      bio: 'Specialist in textile arts and design. Committed to using her artistic skills to assist others and contribute to the community.',
      specialty: 'Textiles',
      initials: 'P7',
      image: '/images/participants/hafsya-othman.jpeg',
    },
    {
      name: 'Imen Hourabi',
      practice: 'Fine Arts',
      bio: 'Artist passionate about painting and material mastery. Developed her creative skills through academic study and vocational training.',
      specialty: 'Painting',
      initials: 'P8',
      image: '/images/participants/imen-hourabi.png',
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
      initials: 'P10',
      image: '/images/participants/karima-fattouch.png',
    },
    {
      name: 'Karima Litayem',
      practice: 'Arts',
      bio: 'Textile artist preserving and innovating traditional weaving techniques.',
      specialty: 'Textiles',
      initials: 'P11',
      image: '/images/participants/karima-lutayem.jpeg',
    },
    {
      name: 'Khaoula Maayoufi',
      practice: 'Arts',
      bio: 'Multidisciplinary artist exploring creative expression and cultural narratives through visual media.',
      specialty: 'Visual Arts',
      initials: 'KM',
      image: '/images/participants/khaoula-maayoufi.png',
    },
    {
      name: 'Leila Abeda',
      practice: 'Arts',
      bio: 'Photographer documenting social and environmental changes.',
      specialty: 'Photography',
      initials: 'P12',
      image: '/images/participants/leyla-abada.png',
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
      practice: 'Fashion Design',
      bio: 'Fashion designer valuing traditional manual skills. Focused on creating a unique identity through modernizing artisanal techniques.',
      specialty: 'Fashion Design',
      initials: 'P14',
      image: '/images/participants/maram-swayah.jpeg',
    },
    {
      name: 'Maroua Kaabia',
      practice: 'Environmental Science',
      bio: 'Researcher in climate change and sustainable development. Integrates handcrafts and ecological projects to support local growth.',
      specialty: 'Ecology & Crafts',
      initials: 'P15',
      image: '/images/participants/marwa-kaabia.jpeg',
    },
    {
      name: 'Marwa Bouajar',
      practice: 'Education',
      bio: 'Educator committed to rooting heritage and traditional crafts in children while embracing modern developments.',
      specialty: 'Pedagogy',
      initials: 'P16',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'Maryem Mallas',
      practice: 'Arts',
      bio: 'Digital designer bridging traditional and modern design practices.',
      specialty: 'Digital Design',
      initials: 'P17',
      image: '/images/participants/mariam-mallas.jpeg',
    },

    {
      name: 'Mohamed Mahmoudi',
      practice: 'Communications',
      bio: 'Communications professional focused on interdisciplinary skills. Believes in the power of collaboration and positive exchange.',
      specialty: 'Communications',
      initials: 'P19',
      image: '/images/participants/medmahmoudi.png',
    },
    {
      name: 'Monem Abid',
      practice: 'Arts & Mediation',
      bio: 'Doctoral researcher specializing in digital engraving and automated embroidery. Focused on the intersection of tech and craft.',
      specialty: 'Digital Engraving',
      initials: 'P20',
      image: '/images/participants/monem.png',
    },
    {
      name: 'Nour Amorri',
      practice: 'Fashion & Fine Arts',
      bio: 'Fashion designer and visual artist skilled in painting on diverse surfaces. Active in social programs and textile development.',
      specialty: 'Fashion Design',
      initials: 'P21',
      image: '/images/participants/nour-amorri.jpeg',
    },
    {
      name: 'Raja Bohli',
      practice: 'Management IT',
      bio: 'Technical specialist in management informatics with professional experience in tourism and administrative support.',
      specialty: 'IT Support',
      initials: 'P22',
      image: '/images/participants/rajabohli.png',
    },
    {
      name: 'Rim Assadi',
      practice: 'Fine Arts',
      bio: 'Visual arts graduate specializing in sculpture. Skilled in Arabic calligraphy and exploring traditional decorative arts.',
      specialty: 'Sculpture',
      initials: 'P23',
      image: '/images/participants/rim-assadi.png',
    },

    {
      name: 'Rim Selmi',
      practice: 'Visual Communication',
      bio: 'Visual artist and educator with a passion for history and photography. Enthusiastic about the synergy between teaching and making.',
      specialty: 'Image Design',
      initials: 'P25',
      image: '/images/participants/rim-selmi.jpeg',
    },
    {
      name: 'Saber Kouiri',
      practice: 'Arts',
      bio: 'Visual artist exploring themes of identity and belonging.',
      specialty: 'Visual Arts',
      initials: 'P25',
      image: '/images/participants/saber-kouiri.png',
    },
    {
      name: 'Safa Mabrouk',
      practice: 'Graphic Design',
      bio: 'Graphic designer and educator developing an experimental practice at the intersection of contemporary design and craftsmanship.',
      specialty: 'Graphic Design',
      initials: 'P25',
      image: '/images/participants/safaa.png',
    },
    {
      name: 'Sameh Fattouche',
      practice: 'Fine Arts',
      bio: 'Fine arts professor specializing in painting and creativity theories. Passionate about exploring environmental issues through art.',
      specialty: 'Painting',
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
      image: '/images/participants/tasnim-said.jpg',
    },
    {
      name: 'Rim Belkhir',
      practice: 'Handcrafts',
      bio: 'Artisan creator of beaded bags and jewelry. Focused on continuous learning and enhancing her craft through manual techniques.',
      specialty: 'Beadwork',
      image: '/images/participants/rim-belkhir.jpeg',
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
      image: '/images/participants/amal-mokhtari.png',
    },
    {
      name: 'أريج جعداري',
      practice: 'فنون بصرية',
      bio: 'أستاذة فنون بصرية وباحثة في نظريات الإبداع. ناشطة في المجتمع المدني وتدير نوادي علمية وفنية للشباب.',
      specialty: 'نظريات الإبداع',
      initials: 'SZ',
      image: '/images/participants/arij-jaadari.jpeg',
    },
    {
      name: 'أمنة عبد العزيز',
      practice: 'علوم التراث',
      bio: 'باحثة في علوم التراث وناشطة في المجتمع المدني. تسعى لترك بصمة في الأسرة والمجتمع من خلال البحث والنشاط الاجتماعي.',
      specialty: 'علوم التراث',
      initials: 'HA',
      image: '/images/participants/amna-aziz.png',
    },
    {
      name: 'فرح الجوالي',
      practice: 'تصميم الملابس',
      bio: 'متخصصة في صناعة الملابس، شغوفة بتطوير مهاراتها واكتساب خبرات جديدة في المجال مع الانفتاح على تخصصات متنوعة.',
      specialty: 'صناعة الملابس',
      initials: 'NR',
      image: '/images/participants/farah-jawali.jpeg',
    },
    {
      name: 'فتحية حميدي',
      practice: 'طباعة رقمية',
      bio: 'متخصصة في الخدمات الإشهارية والطباعة الرقمية. شخصية عملية ونشطة تسعى دائمًا لتطوير مهاراتها المهنية.',
      specialty: 'خدمات إشهارية',
      initials: 'LM',
      image: '/images/participants/fathia-hmidi.jpeg',
    },
    {
      name: 'حفصية عثمان',
      practice: 'فنون تطبيقية',
      bio: 'متخصصة في فنون النسيج والفنون التطبيقية. تتميز بروح المساعدة والاجتهاد في العمل الصامت والمثمر.',
      specialty: 'نسيج',
      initials: 'P7',
      image: '/images/participants/hafsya-othman.jpeg',
    },
    {
      name: 'إيمان هورابي',
      practice: 'فنون تشكيلية',
      bio: 'فنانة شغوفة بالرسم، طورت مواهبها من خلال الدراسة الجامعية والتكوين المهني لتعزيز دقة إتقانها للمواد الفنية.',
      specialty: 'رسم',
      initials: 'P8',
      image: '/images/participants/imen-hourabi.png',
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
      image: '/images/participants/karima-fattouch.png',
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
      name: 'خولة معيوفي',
      practice: 'فنون',
      bio: 'فنانة متعددة التخصصات تستكشف التعبير الإبداعي والسرديات الثقافية من خلال الوسائط البصرية.',
      specialty: 'فنون بصرية',
      initials: 'KM',
      image: '/images/participants/khaoula-maayoufi.png',
    },
    {
      name: 'ليلى عبادة',
      practice: 'فنون',
      bio: 'مصور يوثق التغييرات الاجتماعية والبيئية.',
      specialty: 'التصوير',
      initials: 'P12',
      image: '/images/participants/leyla-abada.png',
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
      practice: 'تصميم أزياء',
      bio: 'مصممة أزياء تسعى لتثمين الأشياء اليدوية والتقليدية، تهدف لتطوير بصمتها الخاصة من خلال المهارات الحرفية.',
      specialty: 'تصميم أزياء',
      initials: 'P14',
      image: '/images/participants/maram-swayah.jpeg',
    },
    {
      name: 'مروة كعبية',
      practice: 'علوم البيئة',
      bio: 'باحثة في البيئة والتغيرات المناخية، تدمج بين الصناعات اليدوية والعمل التطوعي لمناصرة القضايا البيئية والإنسانية.',
      specialty: 'بيئة وحرف',
      initials: 'P15',
      image: '/images/participants/marwa-kaabia.jpeg',
    },
    {
      name: 'مروى بوعجار',
      practice: 'تربية',
      bio: 'مربية حريصة على ترسيخ الهوية والتراث والحرف لدى الأجيال القادمة مع مواكبة التطور الحديث.',
      specialty: 'تربية',
      initials: 'P16',
      image: '/images/participants/none.jpeg',
    },
    {
      name: 'مريم ملاس',
      practice: 'التصميم الرقمي',
      bio: 'مصمم رقمي يربط بين الممارسات التقليدية والحديثة.',
      specialty: 'فنون',
      initials: 'P17',
      image: '/images/participants/mariam-mallas.jpeg',
    },

    {
      name: 'محمد محمودي',
      practice: 'اتصال',
      bio: 'إطار في الاتصال يعمل على تجميع الخبرات والمهارات المتنوعة، يؤمن بقوة التعاون داخل المنظومة الإبداعية.',
      specialty: 'اتصال',
      initials: 'P19',
      image: '/images/participants/medmahmoudi.png',
    },
    {
      name: 'منعم عبيد',
      practice: 'فنون ووساطة',
      bio: 'دكتور باحث متخصص في النقش الرقمي بالليزر والتطريز الآلي، مهتم بالربط بين التكنولوجيا والحرف التقليدية.',
      specialty: 'نقش رقمي',
      initials: 'P20',
      image: '/images/participants/monem.png',
    },
    {
      name: 'نور عمري',
      practice: 'أزياء وفنون',
      bio: 'مصممة أزياء وفنانة تشكيلية، تتقن الرسم على مختلف المحامل وتجمع بين الخبرة الميدانية والنشاط الاجتماعي.',
      specialty: 'تصميم أزياء',
      initials: 'P21',
      image: '/images/participants/nour-amorri.jpeg',
    },
    {
      name: 'رجاء بهلي',
      practice: 'إعلامية التصرف',
      bio: 'تقنية في إعلامية التصرف مع خبرة في قطاع السياحة. تجمع بين الكفاءة التقنية والرغبة المستمرة في التطوير المهني.',
      specialty: 'إعلامية التصرف',
      initials: 'P22',
      image: '/images/participants/rajabohli.png',
    },
    {
      name: 'ريم عصادي',
      practice: 'فنون تشكيلية',
      bio: 'فنانة متخصصة في النحت والخط العربي. تبحث في التراث من خلال تقنيات يدوية وفنية متنوعة.',
      specialty: 'نحت',
      initials: 'P23',
      image: '/images/participants/rim-assadi.png',
    },

    {
      name: 'ريم  السالمي',
      practice: 'اتصال بصري',
      bio: 'فنانة بصرية محبة للتاريخ والتصوير والتدريس. مولعة بالصناعات اليدوية وتوظيف الفن في العملية التربوية.',
      specialty: 'تصميم صورة',
      initials: 'P25',
      image: '/images/participants/rim-selmi.jpeg',
    },
    {
      name: 'صابر كويري',
      practice: 'فنون بصرية',
      bio: 'فنان بصري يستكشف مواضيع الهوية والانتماء.',
      specialty: 'فنون',
      initials: 'P25',
      image: '/images/participants/saber-kouiri.png',
    },
    {
      name: 'صفاء مبروك',
      practice: 'تصميم جرافيك',
      bio: 'مصممة جرافيك ومدرسة، تطور ممارسة تجريبية تدمج بين التصميم المعاصر والمهارات الحرفية التقليدية.',
      specialty: 'تصميم جرافيك',
      initials: 'P25',
      image: '/images/participants/safaa.png',
    },
    {
      name: 'سماح فطوش',
      practice: 'فنون تشكيلية',
      bio: 'أستاذة فنون تشكيلية وباحثة في نظريات الإبداع. شغوفة بكل ما يتعلق بمجال الرسم والبحث الفني والأكاديمي.',
      specialty: 'رسم',
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
      image: '/images/participants/tasnim-said.jpg',
    },
    {
      name: 'ريم بلخير',
      practice: 'حرف يدوية',
      bio: 'حرفية متخصصة في صناعة حقائب الخرز والإكسسوارات. تسعى دائمًا لتعلم مهارات يدوية جديدة تثري عملها الإبداعي.',
      specialty: 'خرز وإكسسوارات',
      image: '/images/participants/rim-belkhir.jpeg',
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
  const isMobile = useIsMobile()
  const data = language === 'en' ? participants.en : participants.ar
  const text = language === 'en' ? labels.en : labels.ar
  const colors = ['bg-blue-100', 'bg-emerald-100', 'bg-amber-100', 'bg-rose-100', 'bg-violet-100', 'bg-cyan-100']

// Select hero image based on device type
  const heroImage = isMobile 
    ? '/images/bootcamps/participants-hero-mobile1.jpg'
    : '/images/bootcamps/participants-hero1.jpg'

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
      {/* Hero Section with Background Image */}
      <section 
        id="participants-hero" 
className={`relative overflow-hidden ${isMobile ? '-mt-32 aspect-square' : '-mt-48 min-h-[130vh]'}`}
      >
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url('${heroImage}')`,
              backgroundSize: 'contain',
              backgroundPosition: isMobile ? 'top center' : 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* MINIMIZED OVERLAY: Only 15% opacity to keep the image bright */}
 <div className="absolute inset-0 bg-blue-950/5" />
          
          {/* GRADIENT: Darkens ONLY the side where text is positioned for readability */}
          <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-t' : language === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent via-blue-950/40 to-blue-950/80`} />
        </div>


</section>

{/* Title Section Below Hero */}
<section className="bg-white py-16 md:py-24 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl ${language === 'ar' ? 'text-right' : 'text-center'} mx-auto`}>
            <div className={`flex items-center gap-2 mb-4 ${language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-center'}`}>
              <div className="w-1 h-8 bg-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">{text.cohort}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              {text.title}
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">{text.subtitle}</p>
          </div>
        </div>
      </section>

{/* Participants Grid */}
      <div className="container mx-auto px-4 mt-20">
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
      <div className="container mx-auto px-4 mt-32 mb-20">
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
    </div>
  )
}
