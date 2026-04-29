'use client'

import Image from 'next/image'
import { Check, Lightbulb, Leaf, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProgramAboutPageProps {
  language: 'en' | 'ar'
}

// Workshops data
const workshops = {
  en: [
    {
      title: 'Saaf Workshop',
      months: 'From March 27 to April 19',
      description: 'Discover palm leaf material extracted from palm trees, essential to Tunisian oasis craft heritage. Learn preparation stages from cleaning and drying to softening, then traditional braiding and weaving techniques. Create handcrafted baskets or decorative items, experimenting with innovative forms while highlighting Saaf as a natural, sustainable material and recontextualizing traditional crafts in contemporary design.',
      image: '/images/workshops/saaf.jpg',
      highlights: ['Palm Leaf Preparation', 'Traditional Braiding Techniques', 'Sustainable Material Innovation', 'Contemporary Craft Forms'],
    },
    {
      title: 'Smar Workshop',
      months: 'From 1 May to 30 June',
      description: 'Explore Smar natural plant fiber from southern Tunisia\'s wetlands, rich in heritage value and contemporary creative potential. Learn collection, drying, preparation, weaving, and shaping techniques. Create unique pieces experimenting with forms and designs, understanding Smar as a sustainable local material and recontextualizing traditional craft knowledge in modern design approaches.',
      image: '/images/workshops/smar.jpg',
      highlights: ['Fiber Collection & Preparation', 'Weaving & Shaping Techniques', 'Sustainable Local Materials', 'Modern Craft Innovation'],
    },
    {
      title: 'Fibres Vegetales',
      months: 'From 12 to 21 June',
      description: 'Comprehensive exploration of plant fibers from local ecosystems. Master identification, extraction, treatment, and transformation techniques for sustainable textile and material applications in contemporary craft.',
      image: '/images/workshops/fibres.jpg',
      highlights: ['Plant Fiber Extraction', 'Treatment Processes', 'Textile Transformation', 'Sustainable Applications'],
    },
    {
      title: 'Wool Felting Workshop',
      months: 'From 3 to 26 July',
      description: 'Discover the traditional technique of wool felting, transforming natural wool into a cohesive material through pressure, moisture, and movement. Learn the stages of the process, from preparing the fibers to mastering basic felting techniques, while understanding the properties of wool and its shaping potential. Create unique artistic or functional pieces through hands-on practice, exploring innovative forms and designs. Highlight the value of this traditional craft and its relevance in contemporary sustainable design approaches.',
      image: '/images/workshops/felting.jpg',
      highlights: ['Fiber Preparation', 'Basic Felting Techniques', 'Sustainable Material Innovation', 'Contemporary Craft Forms'],
    },
    {
      title: 'Molding & Modeling Workshop',
      months: 'From 7 to 30 August',
      description: 'Hands-on workshop exploring molding and modeling techniques with natural materials. Learn form creation, casting methods, and surface finishing rooted in traditional practices adapted for contemporary ecological design.',
      image: '/images/workshops/moulage.jpg',
      highlights: ['Molding Techniques', 'Natural Material Casting', 'Surface Finishing', 'Ecological Form Design'],
    },

  ],
  ar: [
    {
      title: 'ورشة السعف',
      months: ' من 27 مارس الى 19 افريل',
      description: 'تُعدّ ورشة السَّعف فضاءً لاكتشاف هذه المادة النباتية المستخرجة من أوراق النخيل، والتي تُشكّل جزءًا أساسيًا من التراث الحرفي في تونس، خاصة في المناطق الواحية. يتعرّف المشاركون خلال الورشة على مراحل تحضير السعف، من تنظيفه وتجفيفه إلى تليينه، ثم يتعلمون تقنيات التضفير والنسج التقليدية. ومن خلال التطبيق العملي، يُنجز المشاركون قطعًا يدوية مثل السلال أو العناصر الزخرفية، مع فسح المجال للتجريب والابتكار في الأشكال. كما تسلّط الورشة الضوء على أهمية السعف كمادة طبيعية ومستدامة، وتدعو إلى إعادة توظيف الحرف التقليدية ضمن مقاربات تصميمية معاصرة.',
      image: '/images/bootcamps/smar-workshop.jpeg',
      highlights: ['تحضير أوراق النخيل', 'تقنيات التضفير التقليدية', 'الابتكار بالمواد المستدامة', 'الأشكال الحرفية المعاصرة'],
    },
    {
      title: 'ورشة السّمار',
      months: 'من 1 ماي إلى 30 جوان',
      description: 'تُعدّ ورشة السَّمّار فضاءً لاكتشاف هذا الليف النباتي الطبيعي المستخرج من المناطق الرطبة في الجنوب التونسي، بوصفه مادةً تحمل قيمة تراثية وإمكانات إبداعية معاصرة. يتعرّف المشاركون خلال الورشة على مختلف مراحل العمل، من جمع الألياف وتجفيفها وتحضيرها، إلى تقنيات النسج والتشكيل الأساسية. ومن خلال التطبيق العملي، يُتاح لهم ابتكار قطعهم الخاصة والتجريب في الأشكال والتصاميم، مع فهم أعمق لأهمية السَّمّار كخامة مستدامة مرتبطة بالبيئة المحلية. كما تفتح الورشة مجالًا للتفكير في سبل إعادة توظيف المعارف الحرفية التقليدية ضمن مقاربات تصميمية حديثة.',
      image: '/images/bootcamps/saaf-workshop.jpeg',
      highlights: ['جمع وتحضير الألياف', 'تقنيات النسج والتشكيل', 'المواد المحلية المستدامة', 'التصاميم الحرفية المعاصرة'],
    },
        {
      title: 'الألياف النباتية',
      months: 'من 12 الى21 جوان',
      description: 'استكشاف شامل للألياف النباتية من النظم البيئية المحلية. إتقان تحديد واستخلاص ومعالجة وتحويل التقنيات لتطبيقات مستدامة في النسيج والمواد الحرفية المعاصرة.',
      image: '/images/bootcamps/fibres-workshop.jpg',
      highlights: ['استخلاص الألياف النباتية', 'عمليات المعالجة', 'تحويل النسيج', 'التطبيقات المستدامة'],
    },

        {
      title: 'ورشة التلبيد بالصوف',
      months: 'من 3 إلى 26 جويلية',
      description: 'تُعدّ ورشة التلبيد  فضاءً لاكتشاف هذه التقنية التقليدية التي تعتمد على تحويل الصوف الطبيعي إلى مادة متماسكة عبر الضغط والرطوبة والحركة، وذلك بمرافقة حرفي من الكاف. يتعرّف المشاركون خلال الورشة على مراحل العمل، من تحضير الألياف إلى تقنيات التلبيد الأساسية، مع فهم خصائص الصوف وإمكانياته التشكيلية. ومن خلال التطبيق العملي، يُنجز المشاركون قطعًا فنية أو وظيفية، مع فسح المجال للتجريب في الأشكال والتصاميم. كما تسلّط الورشة الضوء على قيمة هذه الحرفة التقليدية وتدعو إلى إعادة توظيفها ضمن مقاربات تصميمية معاصرة ومستدامة.',
      image: '/images/bootcamps/felting-workshop.jpeg',
      highlights: ['تحضير الألياف الطبيعية', 'تقنيات التلبيد التقليدية', 'التشكيل الفني والوظيفي', 'إعادة توظيف الحرف المستدامة'],
    },
        {
      title: 'ورشة القوالب والنحت',
      months: 'من 7 إلى 30 اوت',
      description: 'ورشة عملية حول تقنيات القوالب والنحت بمواد طبيعية. تعلم إنشاء الأشكال، طرق الصب، وتشطيب السطح متجذّرة في الممارسات التقليدية المُكيّفة للتصميم الإيكولوجي المعاصر.',
      image: '/images/bootcamps/moulage-workshop.jpeg',
      highlights: ['تقنيات القوالب', 'صب المواد الطبيعية', 'تشطيب السطح', 'تصميم الأشكال الإيكولوجية'],
    },


  ],
}

// Labels from Program page
const labels = {
  en: {
    programTitle: 'Program Structure',
    programSubtitle: 'A 18-month intensive journey through four transformative modules',
    overview: 'Program Overview',
    details: 'Key Details',
    duration: 'Duration',
    participants: 'Participants',
    location: 'Location',
    investment: 'Investment',
    hours: '120+ contact hours',
    count: '30+ participants ',
    tunisia: 'South Tunisia',
    price: 'Subsidized for emerging artists',
    readyToApply: 'Ready to Apply?',
    applyText: 'We are looking for passionate artists, designers, and makers driven by curiosity and creativity.',
    applyButton: 'Apply Now',
    journeyTitle: '18-Month Journey',
  },
  ar: {
    programTitle: 'هيكل البرنامج',
    programSubtitle: 'رحلة مكثفة لمدة 18 شهر من خلال أربع وحدات تحويلية',
    overview: 'نظرة عامة على البرنامج',
    details: 'التفاصيل الرئيسية',
    duration: 'المدة',
    participants: 'المشاركون',
    location: 'الموقع',
    investment: 'الاستثمار',
    hours: '+120 ساعة تلامس',
    count: '+30 مشارك ',
    tunisia: 'جنوب تونس',
    price: 'مدعوم للفنانين الناشئين',
    readyToApply: 'هل أنت مستعد للتقديم؟',
    applyText: 'نحتاج فنانين وديزاينرز وحرفيين مثاليين مدفوعين بالشغف والفضول.',
    applyButton: 'قدم الآن',
    journeyTitle: 'رحلة 18 شهر',
  },
}

// About content
const aboutContent = {
  en: {
    aboutTitle: 'About the Program',
    aboutSubtitle: 'Understanding the roots, vision, and philosophy behind From & To People',
    aboutLabel: 'About',
    vision: 'Vision & Philosophy',
    visionText:
      'From & To People is grounded in a belief that artistic practice, ecological consciousness, and traditional craftsmanship are interconnected ways of knowing and being in the world. The program brings together artists, designers, artisans, and practitioners from diverse backgrounds to create, learn, and transform together.',
    roots: 'Rooted in South Tunisia',
    rootsText:
      'Based in South Tunisia, the program draws from the rich cultural and ecological heritage of the region. We work with local communities, respect traditional knowledge systems, and create spaces where contemporary practice meets ancestral wisdom. Our location is not incidental—it is core to our mission of fostering global and local exchange.',
    approach: 'Our Three Pillars',
    whyMatter: 'Why This Matters',
    matterText:
      'In a time of ecological crisis and cultural homogenization, we believe in the power of art to imagine alternative futures. This program creates a space where artistic innovation, ecological responsibility, and cultural preservation work in concert. We are committed to supporting emerging artists while honoring the knowledge systems that sustain our communities.',
  },
  ar: {
    aboutTitle: 'عن البرنامج',
    aboutSubtitle: 'فهم الجذور والرؤية والفلسفة وراء برنامج من وإلى الناس',
    aboutLabel: 'حول',
    vision: 'الرؤية والفلسفة',
    visionText:
      'يستند برنامج "من وإلى الناس" إلى الاعتقاد بأن الممارسة الفنية والوعي الإيكولوجي والحرفية التقليدية هي طرق مترابطة للمعرفة والوجود في العالم. يجمع البرنامج فنانين مصممين وحرفيين وممارسين من خلفيات متنوعة للإنشاء والتعلم والتحول معاً.',
    roots: 'متجذر في جنوب تونس',
    rootsText:
      'يقع البرنامج في جنوب تونس ويستقي من التراث الثقافي والإيكولوجي الغني للمنطقة. نحن نعمل مع المجتمعات المحلية، نحترم أنظمة المعرفة التقليدية، وننشئ مساحات حيث تلتقي الممارسة المعاصرة بالحكمة الأسلافية.',
    approach: 'أركاننا الثلاثة',
    whyMatter: 'لماذا هذا مهم',
    matterText:
      'في عصر الأزمة البيئية والتجانس الثقافي، نؤمن بقوة الفن في تخيل مستقبليات بديلة. يخلق هذا البرنامج مساحة حيث تعمل الابتكارات الفنية والمسؤولية البيئية والحفاظ الثقافي معاً. نحن ملتزمون بدعم الفنانين الناشئين مع احترام أنظمة المعرفة التي تستدام مجتمعاتنا.',
  },
}

// Three Pillars data
const pillars = {
  en: [
    {
      title: 'Material & Ecology',
      text: 'Understanding materials, waste, and sustainability as central to artistic and design practice. We believe that how we create is as important as what we create.',
      icon: Leaf,
    },
    {
      title: 'Knowledge & Craft',
      text: 'Valuing traditional craftsmanship and contemporary methodologies as equal forms of expertise. Both ways of knowing inform and enrich our artistic practice.',
      icon: Lightbulb,
    },
    {
      title: 'Community & Culture',
      text: 'Creating inclusive spaces for dialogue, exchange, and collective knowledge building. Art is a tool for social transformation and cultural expression.',
      icon: Users,
    },
  ],
  ar: [
    {
      title: 'المادة والإيكولوجيا',
      text: 'فهم المواد والنفايات والاستدامة كعناصر أساسية في الممارسة الفنية والتصميمية. نحن نؤمن بأن طريقة إنشاؤنا مهمة بقدر ما نصنعه.',
      icon: Leaf,
    },
    {
      title: 'المعرفة والحرفة',
      text: 'تقدير الحرفية التقليدية والمنهجيات المعاصرة كأشكال متساوية من الخبرة. كلا طريقتي المعرفة تثري ممارستنا الفنية.',
      icon: Lightbulb,
    },
    {
      title: 'المجتمع والثقافة',
      text: 'إنشاء مساحات شاملة للحوار والتبادل وبناء المعرفة الجماعية. الفن هو أداة للتحول الاجتماعي والتعبير الثقافي.',
      icon: Users,
    },
  ],
}

// New Timeline Data based on "Feuille de calcul sans titre.xlsx"
const timelineStations = {
  en: [
    {
      phase: 'Phase 1',
      title: 'Material Study & Hand-Crafting',
      period: 'Months 1 - 6',
      details: 'Intensive workshops on Saaf, Smar, Paper, Wool Felting, and Molding.',
      
    },
    {
      phase: 'Phase 2',
      title: 'Experimentation & Design',
      period: 'Months 7 - 8',
      details: 'Creative exploration, prototyping, and refining contemporary forms.',
      
    },
    {
      phase: 'Phase 3',
      title: 'Professional Production',
      period: 'Months 9 - 11',
      details: 'Finalizing designs and entering the production cycle for collections.',
      
    },
    {
      phase: 'Phase 4',
      title: 'Support & Incubation',
      period: 'Months 12 - 15',
      details: 'Technical support, financial modeling, and legal setup for artisans.',
      
    },
    {
      phase: 'Phase 5',
      title: 'Exhibition & Market',
      period: 'Months 16 - 18',
      details: 'Marketing products and major exhibitions in Djerba and Tunis.',
      
    }
  ],
  ar: [
    {
      phase: 'المرحلة 1',
      title: 'دراسة المواد والحرف اليدوية',
      period: 'الأشهر 1 - 6',
      details: 'ورش عمل مكثفة حول السعف، السمار، الورق، تلبيد الصوف، والقوالب.',
      
    },
    {
      phase: 'المرحلة 2',
      title: 'التجريب والتصميم',
      period: 'الأشهر 7 - 8',
      details: 'الاستكشاف الإبداعي، صنع النماذج الأولية، وتطوير الأشكال المعاصرة.',
      
    },
    {
      phase: 'المرحلة 3',
      title: 'الإنتاج المهني',
      period: 'الأشهر 9 - 11',
      details: 'الانتهاء من التصاميم وبدء دورة الإنتاج للمجموعات الفنية.',
      
    },
    {
      phase: 'المرحلة 4',
      title: 'الدعم والمرافقة',
      period: 'الأشهر 12 - 15',
      details: 'الدعم الفني، النمذجة المالية، والإجراءات القانونية للحرفيين.',
      
    },
    {
      phase: 'المرحلة 5',
      title: 'المعارض والتسويق',
      period: 'الأشهر 16 - 18',
      details: 'تسويق المنتجات وتنظيم معارض كبرى في جربة وتونس العاصمة.',
      
    }
  ]
}



export function ProgramAboutPage({ language }: ProgramAboutPageProps) {
  const modules = language === 'en' ? workshops.en : workshops.ar
  const text = language === 'en' ? labels.en : labels.ar
  const about = language === 'en' ? aboutContent.en : aboutContent.ar
  const pillarData = language === 'en' ? pillars.en : pillars.ar

  return (
    <section id="program-about" className={`min-h-screen py-20 bg-white ${language === 'ar' ? 'font-arabic' : ''}`}>
      {/* Hero Section - Combined About & Program */}
      <div className="container mx-auto px-4 mb-20">
        <div className={`max-w-4xl ${language === 'ar' ? 'text-right' : 'text-center'} mx-auto`}>
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{about.aboutLabel}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            {about.aboutTitle}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">{about.aboutSubtitle}</p>
          <p className="text-lg text-foreground/70 leading-relaxed">{about.visionText}</p>
        </div>
      </div>

      {/* Rooted in South Tunisia */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className={`${language === 'ar' ? 'text-right' : ''}`}>
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <div className="w-1 h-10 bg-primary" />
              {about.roots}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{about.rootsText}</p>
          </div>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="container mx-auto px-4 mb-20">
        <div className={`max-w-4xl mx-auto ${language === 'ar' ? 'text-right' : 'text-center'} mb-16`}>
          <h2 className="text-3xl font-bold text-primary">{about.approach}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillarData.map((pillar, i) => {
            const IconComponent = pillar.icon
            return (
              <div key={i} className="group relative">
                <div className="relative h-full bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-1 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className={`text-foreground/70 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                      {pillar.text}
                    </p>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-primary/20 group-hover:border-primary/50 rounded-sm transition-colors" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Why This Matters */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto bg-secondary rounded-lg p-12 border border-border">
          <div className={`${language === 'ar' ? 'text-right' : ''}`}>
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
              <div className="w-1 h-10 bg-primary" />
              {about.whyMatter}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{about.matterText}</p>
          </div>
        </div>
      </div>

      {/* Program Section Divider */}
      <div className="container mx-auto px-4 mb-20">
        <div className={`max-w-4xl ${language === 'ar' ? 'text-right' : 'text-center'} mx-auto`}>
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{text.overview}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            {text.programTitle}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">{text.programSubtitle}</p>
        </div>
      </div>

      {/* Key Details Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { label: text.duration, value: '18 Months' },
            { label: text.participants, value: text.count },
            { label: text.location, value: text.tunisia },
            { label: text.investment, value: text.price },
          ].map((item, i) => (
            <div key={i} className="group relative bg-gradient-to-b from-white via-white/80 to-secondary/30 border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm hover:backdrop-blur-md h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs md:text-sm text-foreground/70 font-semibold uppercase tracking-widest mb-3 relative z-10 group-hover:text-primary/90 transition-colors">
                {item.label}
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-primary via-primary/80 to-foreground bg-clip-text text-transparent relative z-10 leading-tight">
                {item.value}
              </p>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl -skew-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
            </div>
          ))}
        </div>
      </div>

{/* Modules - 2x2 Grid */}
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {modules.slice(0, 5).map((module, i) => (
      <div key={i} className="group relative">
        
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

        <div className="relative bg-white border border-border rounded-lg overflow-hidden h-full group/image">
          <div className="h-64 md:h-72 lg:h-80 relative overflow-hidden">
            <Image
              src={module.image}
              alt={module.title}
              fill
              className="object-cover object-center group-hover/image:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 opacity-0 group-hover/image:opacity-100 transition-opacity" />
          </div>
          <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

          <div className="p-8 md:p-10">
            <div className="flex items-start gap-6">

              <div className="flex-shrink-0 pt-2">
                <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-lg text-white text-xl font-bold shadow-lg">
                  {i + 1}
                </div>
              </div>

              <div className={`flex-1 ${language === 'ar' ? 'text-right' : ''}`}>
                <p className="text-sm font-semibold text-primary/80 uppercase tracking-wider mb-2 bg-primary/5 px-3 py-1 rounded-full inline-block w-fit">
                  {module.months}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {module.title}
                </h3>

                <p className="text-foreground/75 leading-relaxed mb-6 line-clamp-3 text-sm md:text-base">
                  {module.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {module.highlights.slice(0,4).map((highlight, j) => (
                    <div key={j} className="flex items-center gap-3 p-2 bg-muted/50 hover:bg-primary/5 rounded-lg transition-colors group/highlight">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground/80 group-hover/highlight:text-primary transition-colors">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>

      {/* Full Detailed Timeline Visualization */}
  <div className="container mx-auto px-4 mt-32 mb-20">
    <div className={`max-w-5xl mx-auto ${language === 'ar' ? 'text-right' : 'text-center'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">
        {text.journeyTitle}
      </h2>
      
      <div className="relative">
        {/* Background Line */}
        <div className="absolute top-0 left-8 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/10 via-primary to-primary/10 hidden md:block" />
        
        <div className="space-y-12">
          {(language === 'en' ? timelineStations.en : timelineStations.ar).map((station, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Desktop Connector Dot */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />
              
              {/* Content Card */}
              <div className="w-full md:w-[45%] group">
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-3">
                    
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-tighter">{station.phase}</p>
                      <p className="text-sm text-foreground/50">{station.period}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{station.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{station.details}</p>
                </div>
              </div>
              
              {/* Spacer for Desktop */}
              <div className="md:w-[10%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

    </section>
  )
}

