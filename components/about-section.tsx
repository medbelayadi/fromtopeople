// about-section.tsx
import { GeometricPattern, DecorativeFrame, DiagonalLines } from './geometric-pattern'

interface AboutSectionProps {
  language: 'en' | 'ar'
}

const aboutContent = {
  en: {
    title: 'What the Program Offers',
    vision: 'Technical & Research Labs',
    visionText: 'Hands-on laboratories for experimenting with local materials, testing techniques, and analyzing environmental and functional impact, while ensuring safety and material lifecycle tracking.',
    roots: 'Critical & Applied Learning',
    rootsText: 'Structured sessions connecting art, design, crafts, and social function with guided readings, reference analysis, and regular discussions to develop conceptual thinking and evaluation skills.',
    approach: 'Professional Guidance & Support',
    pillars: [
      {
        title: 'Mentorship',
        text: 'Individual and group mentoring to address technical and aesthetic challenges, develop production plans, and progress projects from prototype to exhibition or practical use.',
      },
      {
        title: 'Financial & Production Support',
        text: 'Production grants up to 20,000 TND per workshop, with optional additional loans under favorable conditions.',
      },
      {
        title: 'Exhibition & Distribution',
        text: 'Testing works in experimental spaces and showcasing them in national/international exhibitions and a physical & digital Concept Store.',
      },
      {
        title: 'Professional Certification (CAP)',
        text: 'Official certificate recognized by the Ministry of Vocational Training, based on practical competency and final applied project evaluation.',
      },
    ],
  },
  ar: {
    title: 'ما الذي يقدّمه البرنامج؟',
    vision: 'مختبرات تقنية وبحثية',
    visionText: 'مختبرات عملية لتجربة المواد المحلية، اختبار التقنيات، وتحليل الأثر البيئي والوظيفي، مع الالتزام بالسلامة وتتبع دورة حياة المواد.',
    roots: 'منهج نقدي–تطبيقي',
    rootsText: 'جلسات منظمة تربط بين الفن، التصميم، الحرف، والوظيفة الاجتماعية مع قراءات وإرشاد ونقاشات منتظمة لتطوير التفكير المفاهيمي ومهارات التقييم.',
    approach: 'الإرشاد المهني والدعم',
    pillars: [
      {
        title: 'التوجيه المهني',
        text: 'إرشاد فردي وجماعي لحل التحديات التقنية والجمالية، تطوير خطط الإنتاج، والتقدم بالمشاريع من النموذج الأولي إلى العرض أو الاستخدام العملي.',
      },
      {
        title: 'الدعم المالي والإنتاجي',
        text: 'منح إنتاجية تصل إلى 20,000 د.ت لكل ورشة، مع إمكانية الحصول على قرض إضافي ميسر.',
      },
      {
        title: 'العرض والتوزيع',
        text: 'اختبار الأعمال في فضاءات تجريبية، ثم عرضها في معارض وطنية ودولية وConcept Store فعلي ورقمي.',
      },
      {
        title: 'شهادة كفاءة مهنية (CAP)',
        text: 'شهادة رسمية معترف بها من وزارة التكوين المهني، مبنية على الكفاءة العملية وإنتاج مشروع تطبيقي نهائي.',
      },
    ],
  },
}
export function AboutSection({ language }: AboutSectionProps) {
  const content = language === 'en' ? aboutContent.en : aboutContent.ar

  return (
    <section
      id="about"
      className={`py-20 bg-white relative overflow-hidden ${language === 'ar' ? 'font-arabic' : ''}`}
    >
      {/* Layered background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <GeometricPattern variant="dense" />
        </div>
        <DiagonalLines className="text-primary opacity-[0.01]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title with geometric frame */}
        <div className="relative inline-block mx-auto mb-16">
          <div className="absolute -inset-6 border border-primary/10 rounded-lg" />
          <div className="absolute -inset-4 border border-primary/20 rounded-lg transform rotate-1" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-primary px-8 py-4">
            {content.title}
          </h2>
        </div>

        {/* Vision Section with decorative elements */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          <DecorativeFrame>
            <div className={`space-y-8 ${language === 'ar' ? 'text-right' : ''}`}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-12 bg-primary/30" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {content.vision}
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {content.visionText}
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-12 bg-primary/30" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {content.roots}
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {content.rootsText}
                </p>
              </div>
            </div>
          </DecorativeFrame>
        </div>

        {/* Three Pillars with enhanced design */}
        <div className="max-w-5xl mx-auto">
          <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-12 text-center relative`}>
            <span className="relative inline-block px-8 py-2">
              {content.approach}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/30" />
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="group relative bg-white p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
                >
                {/* Geometric corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
                
                {/* Number badge with geometric design */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-primary/5 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="relative w-10 h-10 bg-primary text-white flex items-center justify-center text-lg font-bold">
                    {i + 1}
                  </div>
                </div>
                
                <h4 className={`text-lg font-bold text-primary mb-3 ${language === 'ar' ? 'text-right' : ''}`}>
                  {pillar.title}
                </h4>
                <p className={`text-sm text-foreground/70 leading-relaxed line-clamp-3 ${language === 'ar' ? 'text-right' : ''}`}>
                  {pillar.text}
                </p>
                
                {/* Background pattern on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] pointer-events-none transition-opacity duration-500">
                  <GeometricPattern variant="sparse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}