

import Link from 'next/link'
import Image from 'next/image'

import { Microscope, Building2, Handshake, Image as ImageIcon, BookOpen } from 'lucide-react'

const MicroscopeIcon = () => <Microscope className="w-6 h-6" />
const Building2Icon = () => <Building2 className="w-6 h-6" />
const HandshakeIcon = () => <Handshake className="w-6 h-6" />
const ImageIconComponent = () => <ImageIcon className="w-6 h-6" />
const LearningIcon = () => <BookOpen className="w-6 h-6" />

interface ProgramOverviewProps {
  language: 'en' | 'ar'
}

const bootcamps = {
  en: [
{
  title: 'Module 1: Life and Artistic Skills',
  description: [
    'This module aims to develop participants’ personal, social, and creative skills through four intensive experimental residencies, each lasting six days.',
    'This part focuses on:',
    '• Personal and social skills',
    '• Developing a contemporary artistic vision that engages with the local environmental and social context',
    '• Rethinking concepts of production and consumption'
  ],
  months: 'Months 1-3',
  image: '/images/bootcamps/material-ecology.jpg',
  color: 'from-blue-500/20 to-indigo-500/20'
},
    {
      title: 'Module 2: Professional Training in Contemporary Arts and Sustainable Crafts',
        description: [
    'This module combines craft, design, and artistic practice within an ecological approach aimed at developing sustainable production skills rooted in local knowledge.',
    
    'The module is organized into three integrated tracks:',
    
    '• References and concepts',
    '• Techniques and materials',
    '• Research, design, and production',
      ],
      months: 'Months 4-6',
      image: '/images/bootcamps/contemporary-practices.jpg',
      color: 'from-blue-500/20 to-indigo-500/20'
    },

  ],
  ar: [
    {
      title: ' الوحدة الأولى: المهارات الحياتية والفنية',
         description: [
    'تهدف هذه الوحدة إلى تطوير المهارات الشخصية والاجتماعية والإبداعية للمشاركين، من خلال أربعة إقامات تجريبية مكثّفة تمتدّ كل إقامة منها على ستة أيام.',
    
    'يركّز هذا الجزء على:',
    
    '• المهارات الشخصية والاجتماعية',
    '• المهارات الإدراكية والنقدية',
    '• تشكيل رؤية فنية معاصرة تتفاعل مع السياق البيئي والاجتماعي المحلي وتعيد التفكير في مفاهيم الإنتاج والاستهلاك.',
      ],
      months: 'الأشهر 1-3',
      image: '/images/bootcamps/material-ecology.jpg',
      color: 'from-blue-500/20 to-indigo-500/20'
    },
{
  title: ' الوحدة الثانية: التكوين المهني في الفنون المعاصرة والحرف المستدامة',
  description: [
    'تجمع هذه الوحدة بين الجانب الحرفي، التصميمي، والفني ضمن مقاربة إيكولوجية تهدف إلى تطوير مهارات إنتاج مستدامة متجذّرة في المعرفة المحلية.',
    'تُنظم الوحدة في ثلاثة مسارات متكاملة:',
    '• المرجعيات والمفاهيم',
    '• التقنيات والمواد',
    '• البحث والتصميم والإنتاج',
  ],
  months: 'الأشهر 4-6',
  image: '/images/bootcamps/contemporary-practices.jpg',
  color: 'from-blue-500/20 to-indigo-500/20'
},

  ],
}

const labels = {
  en: {
    title: 'Program Structure',
    subtitle: 'Training Path',
    viewDetails: 'View Details',
  },
  ar: {
    title: 'هيكل البرنامج',
    subtitle: ' المسار التكويني',
    viewDetails: 'عرض التفاصيل',
  },
}

export function ProgramOverview({ language }: ProgramOverviewProps) {
  const camps = language === 'en' ? bootcamps.en : bootcamps.ar
  const text = language === 'en' ? labels.en : labels.ar

  return (
    <section
      id="program"
      className={`py-20 bg-gradient-to-b from-white via-white to-primary/5 relative ${language === 'ar' ? 'font-arabic' : ''}`}
    >
      {/* Enhanced decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with improved styling */}
        <div className={`max-w-3xl mx-auto mb-16 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">
              {language === 'ar' ? 'عن البرنامج' : 'About the Program'}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            {text.title}
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Bootcamps Grid - 2x2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {camps.map((camp, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                language === 'ar' ? 'text-right' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 lg:h-80 overflow-hidden">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${camp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay`}
                />
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20 z-5" />

                {/* Month Badge */}
                
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {camp.title}
                  </h3>
                  {Array.isArray(camp.description) ? (
                    <div className="text-foreground/70 mb-6 leading-relaxed space-y-2">
                      {camp.description.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {camp.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <Link href="/program" className="block w-fit">
                    <span className="text-primary font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      {text.viewDetails}
                      <svg
                        className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          language === 'ar' ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <div className="w-8 h-8 border border-primary/20 rounded-lg transform rotate-45 group-hover:border-primary/50 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Timeline & Activities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center mt-20 p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-primary/10">
          {/* Activities List with improved styling */}
          <div className={`${language === 'ar' ? 'lg:order-2 text-right' : ''}`}>
            <div className="mb-8">
              <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
                {language === 'ar' ? 'الأنشطة' : 'Activities'}
              </span>
              <h3 className="text-3xl font-bold text-foreground mt-2">
                {language === 'ar' ? 'الأنشطة الرئيسية' : 'Key Activities'}
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  en: 'Technical Research Laboratories',
                  ar: ' مختبرات البحث التقنية',
                  icon: <MicroscopeIcon />,
                  description: language === 'ar' ? '   يتم اختبار الأعمال المنتجة في فضاءات عرض تجريبية قبل عرضها في معارض وطنية ودولية. كما يمكن دمج المشاريع النهائية في Concept Store فعلي ورقمي لترويج وتوزيع الأعمال الفنية والحرفية التي تلتزم بالمعايير البيئية والجمالية.' : 'Hands-on laboratories focused on material experimentation and technical exploration, where participants study the properties of local materials, test transformation techniques, and analyze their impact on form, function, and environmental sustainability. These labs also include safety protocols and material life-cycle tracking.'
                },
                {
                  en: 'Critical–Practical Learning Sessions',
                  ar: 'جلسات التعلم النقدي–التطبيقي ',
                  icon: <LearningIcon />,
                  description: language === 'ar' ? 'مكون نظري وتحليلي يربط بين تاريخ الفن، التصميم المعاصر، الحرف، والوظيفة الاجتماعية. يتضمن جلسات قراءة منظمة، تحليل المراجع والمناهج، ومناقشات نقدية تهدف إلى تطوير التفكير المفاهيمي ومهارات التقييم لدى المشاركين.' : 'A theoretical and analytical component that connects art history, contemporary design, crafts, and social function. It includes structured readings, analysis of references and methodologies, and critical discussions aimed at developing participants’ conceptual thinking and evaluation skills.'
                },
                {
                  en: 'Professional Mentorship and Project Development',
                  ar: 'التوجيه المهني وتطوير المشاريع',
                  icon: <HandshakeIcon />,
                  description: language === 'ar' ? 'يحصل المشاركون على توجيه فردي وجماعي يركز على حل التحديات التقنية والجمالية، تطوير خطط الإنتاج، وبناء النماذج الأولية. تتقدم المشاريع عبر مراحل مثل التجريب، الاختبار، التحسين، والتحضير للعرض أو للاستخدام العملي.' : 'Participants receive individual and collective mentoring focused on solving technical and aesthetic challenges, developing production plans, and building prototypes. Projects advance through stages such as experimentation, testing, refinement, and preparation for exhibition or practical use.'
                },
                {
                  en: 'Exhibition, Distribution, and Public Presentation',
                  ar: '   المعارض و الترويج و التقديم للسوق',
                  icon: <ImageIconComponent />,
                  description: language === 'ar' ? 'يتم اختبار الأعمال المنتجة في فضاءات عرض تجريبية قبل عرضها في معارض وطنية ودولية. كما يمكن دمج المشاريع النهائية في متجر فعلي ورقمي لترويج وتوزيع الأعمال الفنية والحرفية التي تلتزم بالمعايير البيئية والجمالية.' : 'The works produced during the program are tested in experimental exhibition spaces and later presented in national and international exhibitions. Final projects may also be integrated into a physical and digital Concept Store for promotion and distribution of environmentally and aesthetically responsible artistic and craft products.'
                },
              ].map((activity, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className={`flex-shrink-0 ${language === 'ar' ? 'order-2' : ''}`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform group-hover:from-primary/20 group-hover:to-primary/10">
                      {activity.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-foreground mb-1">
                      {language === 'ar' ? activity.ar : activity.en}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Geometric Visual */}
          <div className={`relative h-96 flex items-center justify-center ${language === 'ar' ? 'lg:order-1' : ''}`}>
            <div className="relative w-80 h-80">
              {/* Animated outer ring */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg animate-pulse" />
              <div className="absolute inset-4 border-2 border-primary/30 rounded-lg" />
              <div className="absolute inset-8 border border-primary/40 rounded-lg" />
              
              {/* Floating geometric shapes */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl transform rotate-45 animate-float" />
              </div>
              
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <div className="w-12 h-12 bg-primary/15 rounded-lg transform rotate-12 animate-float-delayed" />
              </div>
              
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2">
                <div className="w-20 h-20 border-4 border-primary/20 rounded-full animate-pulse" />
              </div>

              {/* Center content with animated gradient */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-2xl animate-soft-pulse">
                    <div>
                      <div className="text-5xl font-bold text-white">18</div>
                      <p className="text-sm text-white/90 mt-1">
                        {language === 'ar' ? 'شهر' : 'Months'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-48 h-48 border border-primary/20 rounded-lg absolute -top-24 -left-24">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
        @keyframes soft-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        .animate-soft-pulse {
          animation: soft-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}