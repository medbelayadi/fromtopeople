'use client'

import { Check, Lightbulb, Leaf, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProgramAboutPageProps {
  language: 'en' | 'ar'
}

// Bootcamps/Modules data from Program page
const bootcamps = {
  en: [
    {
      title: 'Module 1: Material & Ecology',
      months: 'Months 1-3',
      description:
        'Explore the relationship between materials, waste, and sustainability. Engage with hands-on workshops on ecological design, material sourcing, and zero-waste practices.',
      highlights: ['Material Research', 'Waste Valorization', 'Ecological Design', 'Lab Experiments'],
    },
    {
      title: 'Module 2: Contemporary Arts Practice',
      months: 'Months 3-5',
      description:
        'Develop artistic skills through various mediums and methodologies. Learn from invited artists and engage with contemporary art theory and criticism.',
      highlights: ['Studio Practice', 'Artist Mentorship', 'Art Theory', 'Public Engagement'],
    },
    {
      title: 'Module 3: Craft & Knowledge',
      months: 'Months 5-8',
      description:
        'Discover traditional craftsmanship and its contemporary applications. Work with master artisans and learn heritage techniques rooted in South Tunisia.',
      highlights: ['Craft Mastery', 'Traditional Knowledge', 'Mentorship', 'Community Exchange'],
    },
    {
      title: 'Module 4: Public Presentation & Legacy',
      months: 'Months 8-10',
      description:
        'Share your work and insights with the broader community. Organize exhibitions, workshops, and public events that showcase the program outcomes.',
      highlights: ['Exhibition Planning', 'Public Symposium', 'Documentation', 'Future Pathways'],
    },
  ],
  ar: [
    {
      title: 'الوحدة 1: المادة والإيكولوجيا',
      months: 'الأشهر 1-3',
      description: 'استكشف العلاقة بين المواد والنفايات والاستدامة. شارك في ورش عملية حول التصميم الإيكولوجي ومصادر المواد والممارسات الخالية من النفايات.',
      highlights: ['بحث المواد', 'تثمين النفايات', 'التصميم الإيكولوجي', 'تجارب المختبر'],
    },
    {
      title: 'الوحدة 2: الممارسة الفنية المعاصرة',
      months: 'الأشهر 3-5',
      description: 'طور مهاراتك الفنية من خلال وسائط ومنهجيات مختلفة. تعلم من الفنانين المدعوين واشتغل بنظرية الفن المعاصر والنقد.',
      highlights: ['الممارسة الاستوديو', 'توجيه الفنانين', 'نظرية الفن', 'المشاركة العامة'],
    },
    {
      title: 'الوحدة 3: الحرفة والمعرفة',
      months: 'الأشهر 5-8',
      description: 'اكتشف الحرفية التقليدية وتطبيقاتها المعاصرة. اعمل مع الحرفيين الرئيسيين وتعلم التقنيات التراثية المتجذرة في جنوب تونس.',
      highlights: ['إتقان الحرفة', 'المعرفة التقليدية', 'التوجيه', 'تبادل المجتمع'],
    },
    {
      title: 'الوحدة 4: العرض العام والإرث',
      months: 'الأشهر 8-10',
      description: 'شارك عملك ورؤيتك مع المجتمع الأوسع. نظم معارض وورش عمل وفعاليات عامة تعرض نتائج البرنامج.',
      highlights: ['تخطيط المعرض', 'الندوة العامة', 'التوثيق', 'المسارات المستقبلية'],
    },
  ],
}

// Labels from Program page
const labels = {
  en: {
    programTitle: 'Program Structure',
    programSubtitle: 'A 10-month intensive journey through four transformative modules',
    overview: 'Program Overview',
    details: 'Key Details',
    duration: 'Duration',
    participants: 'Participants',
    location: 'Location',
    investment: 'Investment',
    hours: '120+ contact hours',
    count: '25+ participants per cohort',
    tunisia: 'South Tunisia',
    price: 'Subsidized for emerging artists',
    readyToApply: 'Ready to Apply?',
    applyText: 'We are looking for passionate artists, designers, and makers driven by curiosity and creativity.',
    applyButton: 'Apply Now',
    journeyTitle: '10-Month Journey',
  },
  ar: {
    programTitle: 'هيكل البرنامج',
    programSubtitle: 'رحلة مكثفة لمدة 10 أشهر من خلال أربع وحدات تحويلية',
    overview: 'نظرة عامة على البرنامج',
    details: 'التفاصيل الرئيسية',
    duration: 'المدة',
    participants: 'المشاركون',
    location: 'الموقع',
    investment: 'الاستثمار',
    hours: '+120 ساعة تلامس',
    count: '+25 مشارك لكل فوج',
    tunisia: 'جنوب تونس',
    price: 'مدعوم للفنانين الناشئين',
    readyToApply: 'هل أنت مستعد للتقديم؟',
    applyText: 'نحتاج فنانين وديزاينرز وحرفيين مثاليين مدفوعين بالشغف والفضول.',
    applyButton: 'قدم الآن',
    journeyTitle: 'رحلة 10 أشهر',
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
      'يستند برنامج "من وإلى الناس" إلى الاعتقاد بأن الممارسة الفنية والوعي الإيكولوجي والحرفية التقليدية هي طرق مترابطة للمعرفة والوجود في العالم. يجمع البرنامج فنانين وديزاينرز وحرفيين وممارسين من خلفيات متنوعة للإنشاء والتعلم والتحول معاً.',
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

export function ProgramAboutPage({ language }: ProgramAboutPageProps) {
  const modules = language === 'en' ? bootcamps.en : bootcamps.ar
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
            { label: text.duration, value: '10 Months' },
            { label: text.participants, value: text.count },
            { label: text.location, value: text.tunisia },
            { label: text.investment, value: text.price },
          ].map((item, i) => (
            <div key={i} className="bg-secondary p-6 rounded-lg border border-border text-center">
              <p className="text-sm text-foreground/60 font-semibold uppercase tracking-wide mb-2">{item.label}</p>
              <p className="text-2xl font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modules - Horizontal Scroll on Mobile */}
      <div className="container mx-auto px-4">
        <div className="flex flex-row overflow-x-auto gap-6 pb-4 max-w-5xl mx-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
          {modules.map((module, i) => (
            <div key={i} className="group relative w-80 md:w-96 flex-shrink-0 snap-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative bg-white border border-border rounded-lg overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg text-white text-2xl font-bold">
                        {i + 1}
                      </div>
                    </div>
                    <div className={`flex-1 ${language === 'ar' ? 'text-right' : ''}`}>
                      <p className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-2">{module.months}</p>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-6">{module.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {module.highlights.map((highlight, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <Check size={18} className="text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground/80">{highlight}</span>
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

      {/* Timeline Visualization */}
      <div className="container mx-auto px-4 mt-20">
        <div className={`max-w-4xl mx-auto ${language === 'ar' ? 'text-right' : 'text-center'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            {text.journeyTitle}
          </h2>
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary/20" />
            <div className="grid grid-cols-4 gap-4 relative z-10">
              {['Month 1-3', 'Month 3-5', 'Month 5-8', 'Month 8-10'].map((period, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md mb-4" />
                  <p className="text-sm font-semibold text-foreground">{period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className={`max-w-2xl ${language === 'ar' ? 'text-right' : 'text-center'} mx-auto`}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {text.readyToApply}
          </h2>
          <p className="text-foreground/70 mb-8">
            {text.applyText}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-sm">
            {text.applyButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
