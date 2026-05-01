'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLanguage } from '@/lib/language-context'

interface TeamMember {
  nameEn: string
  nameAr: string
  roleEn: string
  roleAr: string
  bioShortEn: string
  bioShortAr: string
  bioFullEn: string
  bioFullAr: string
  image: string
}

export function TeamPage() {

  const [organigramOpen, setOrganigramOpen] = React.useState(false)
  const { language } = useLanguage()
  const isArabic = language === 'ar'

  const teamDataEn: TeamMember[] = [

  {
      nameEn: 'Ahmed Guerfel',
      nameAr: 'أحمد قرفال',
      roleEn: 'Founder & Strategic Advisor',
      roleAr: 'المؤسس و المستشار الاستراتيجي  ',
      bioShortEn: 'Multidisciplinary artist and choreographer based in Gabès with over 15 years of experience in cultural management.',
      bioShortAr: 'فنان وكوريغراف متعدد التخصصات مقيم في قابس، يتمتع بخبرة تزيد عن 15 عاماً في الإدارة الثقافية.',
      bioFullEn: 'Ahmed is the founder of Citizens Dancers South. He has led more than forty artistic projects and uses the body to challenge traditional aesthetics, exploring connections between cultural systems and social dynamics.',
      bioFullAr: 'أحمد هو مؤسس "الراقصون المواطنون الجنوب". قاد أكثر من أربعين مشروعاً فنياً ويستخدم الجسد لتحدي الجماليات التقليدية، مستكشفاً الروابط بين النظم الثقافية والديناميكيات الاجتماعية.',
      image: '/images/team/ahmedg.jpg'
    },
    {
      nameEn: 'Aymen Gharbi',
      nameAr: 'أيمن الغربي',
      roleEn: 'Curator & Strategic Advisor',
      roleAr: 'قيم فني ومستشار استراتيجي',
      bioShortEn: 'Architect-trained curator working at the intersection of art, technology, and heritage.',
      bioShortAr: 'قيم فني مهندس معماري يعمل في تقاطع الفن والتكنولوجيا والتراث.',
      bioFullEn: 'Co-director of INTERFERENCE Tunis and SEE DJERBA, Aymen explores how digital installations can become tools for storytelling and reclaiming urban environments.',
      bioFullAr: 'مدير مشارك لمشاريع INTERFERENCE وSEE DJERBA، يستكشف أيمن كيف يمكن للتجهيزات الرقمية أن تصبح أدوات لسرد القصص واستعادة البيئات الحضرية.',
      image: '/images/team/aymeng.jpeg'
    },
    {
      nameEn: 'Mohamed Amine Hammouda',
      nameAr: 'محمد أمين حمودة',
      roleEn: 'Visual Artist & Strategic Advisor',
      roleAr: 'فنان تشكيلي ومستشار استراتيجي',
      bioShortEn: 'Visual artist and teacher focusing on the natural resources and ecological systems of Gabès.',
      bioShortAr: 'فنان تشكيلي ومدرس يركز على الموارد الطبيعية والنظم الإيكولوجية في قابس.',
      bioFullEn: 'His work highlights the potential of the oasis through handmade dyes and fibers, reviving lost stories that existed before industrialization.',
      bioFullAr: 'يسلط عمله الضوء على إمكانات الواحة من خلال الأصباغ والألياف المصنوعة يدويًا، محيياً القصص المفقودة التي كانت موجودة قبل التصنيع.',
      image: '/images/team/aminh.jpg'
    },
    {
      nameEn: 'Hedya Wannen',
      nameAr: 'هادية ونان',
      roleEn: 'Finance Manager',
      roleAr: 'المديرة المالية',
      bioShortEn: 'Specialist in financial management for NGOs with expertise in budget oversight and financial reporting.',
      bioShortAr: 'متخصصة في الإدارة المالية للمنظمات غير الحكومية مع خبرة في الرقابة على الميزانية والتقارير المالية.',
      bioFullEn: 'Hedya plays a central role in structuring the organization’s financial systems, ensuring transparency, sustainability, and efficiency across DCS operations.',
      bioFullAr: 'تلعب هدية دوراً مركزياً في هيكلة النظم المالية للمنظمة، مما يضمن الشفافية والاستدامة والكفاءة في جميع عمليات الجمعية.',
      image: '/images/team/hediaw.png'
    },
    {
      nameEn: 'Mohamed Belayedi',
      nameAr: ' محمد بالعيادي',
      roleEn: 'comunication and Ecosystem Department Lead',
      roleAr: 'رئيس قسم الإتصال و العلاقات',
      bioShortEn: 'Software Engineering student and community manager focused on social inclusion through art.',
      bioShortAr: 'طالب هندسة برمجيات ومدير مجتمع يركز على الإدماج الاجتماعي من خلال الفن.',
      bioFullEn: 'Mohamed leads the Ecosystem Department and Community Management, using art and movement to promote youth empowerment and meaningful community contribution.',
      bioFullAr: 'يقود محمد قسم النظام البيئي وإدارة المجتمع، مستخدماً الفن والحركة لتعزيز تمكين الشباب والمساهمة المجتمعية الهادفة.',
      image: '/images/team/mohamedb.png'
    },
    {
      nameEn: 'Anis Amorri',
      nameAr: 'أنيس عمري',
      roleEn: 'People & Culture Manager',
      roleAr: 'مدير قسم الموارد البشرية والثقافة',
      bioShortEn: 'Expert in human resources and organizational well-being with a background in music and tourism.',
      bioShortAr: 'خبير في الموارد البشرية والرفاه التنظيمي مع خلفية في الموسيقى والسياحة.',
      bioFullEn: 'Anis fosters a collaborative organizational environment, supporting team development and building a creative, people-centered workplace culture.',
      bioFullAr: 'يعمل أنيس على تعزيز بيئة تنظيمية تعاونية، ويدعم تطوير الفريق وبناء ثقافة عمل إبداعية تركز على الإنسان.',
      image: '/images/team/anisa.jpg'
    },
  {
      nameEn: 'Ameni Belgacem',
      nameAr: 'أماني بلقاسم',
      roleEn: 'Program Administrative Assistant',
      roleAr: 'مساعدة إدارية للبرامج',
      bioShortEn: 'Youth leader and social impact strategist focused on professional development and national programs.',
      bioShortAr: 'قائدة شبابية واستراتيجية أثر اجتماعي تركز على التطوير المهني والبرامج الوطنية.',
      bioFullEn: 'Ameni connects global opportunities with local transformation. At DCS, she contributes to the planning and implementation of impactful programs through strategic planning and operational management.',
      bioFullAr: 'تربط أماني الفرص العالمية بالتحول المحلي. في الجمعية، تساهم في تخطيط وتنفيذ البرامج المؤثرة من خلال التخطيط الاستراتيجي والإدارة التشغيلية.',
      image: '/images/team/amenib.jpeg'
    },
    {
      nameEn: 'Jassem Belayadi',
      nameAr: 'جاسم بالعيادي',
      roleEn: 'Logistics Coordinator & Tech Lead',
      roleAr: 'المنسق اللوجستي و المسوول التقني',
      bioShortEn: 'Mathematics graduate passionate about cultural logistics, light, and sound technology.',
      bioShortAr: 'خريج رياضيات وشغوف باللوجستيك الثقافي وتقنيات الإضاءة والصوت.',
      bioFullEn: 'Jassem has been involved in over 30 residencies and 5 festivals. He manages administrative documentation and ensures technical excellence in artistic projects.',
      bioFullAr: 'شارك جاسم في أكثر من 30 إقامة فنية و5 مهرجانات. يدير الوثائق الإدارية ويضمن التميز التقني في المشاريع الفنية.',
      image: '/images/team/jassemb.jpg'
    },
    {
      nameEn: 'Amira Bouallague',
      nameAr: 'أميرة بوعلاق',
      roleEn: 'Financial Assistant',
      roleAr: 'مساعدة مالية',
      bioShortEn: 'Business Administration specialist with a background in banking and credit management.',
      bioShortAr: 'متخصصة في إدارة الأعمال مع خلفية في العمل المصرفي وإدارة القروض.',
      bioFullEn: 'Amira manages payments, financial archiving, and compliance verification. Her structured approach ensures the transparency of DCS financial operations.',
      bioFullAr: 'تدير أميرة المدفوعات والأرشفة المالية والتحقق من الامتثال. يضمن نهجها المنظم شفافية العمليات المالية للجمعية.',
      image: '/images/team/amirab.jpg'
    },
    {
      nameEn: 'Mohamed Ali Choura',
      nameAr: 'محمد علي شورى',
      roleEn: 'Logistics Assistant',
      roleAr: 'مساعد لوجستي',
      bioShortEn: 'Dedicated logistics assistant with experience in international festivals and community projects.',
      bioShortAr: 'مساعد لوجستي متفانٍ ذو خبرة في المهرجانات الدولية والمشاريع المجتمعية.',
      bioFullEn: 'Mohamed Ali contributes to the organization of artistic events and civil society initiatives, known for his effective communication with teams and artists.',
      bioFullAr: 'يساهم محمد علي في تنظيم الفعاليات الفنية ومبادرات المجتمع المدني، ويتميز بتواصله الفعال مع الفرق والفنانين.',
      image: '/images/team/dalich.jpeg'
    }
  ]

const team = teamDataEn

  const t = {
    programTeam: language === 'en' ? 'Program Team' : 'فريق البرنامج',
    organigram: language === 'en' ? 'Organigramme' : 'الرسم التنظيمي',
    meetOurTeam: language === 'en' ? 'Meet Our Team' : 'تعرف على فريقنا',

  } as const

  return (
  <div className={`min-h-screen ${isArabic ? 'font-arabic text-right' : ''}`}>
{/* Slogan Section - Full Width at Top */}
    <section
      id="slogan"
className="relative min-h-[100vh] sm:min-h-[90vh] md:min-h-[80vh] lg:min-h-[90vh] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/team/back.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

{/* Content container - Using responsive positioning */}
      <div className="absolute top-20 left-0 right-0 z-10 md:top-auto md:bottom-0">
        <div className="container mx-auto px-4 pt-12 md:pt-24 pb-12 md:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column for Arabic */}
            <div className={`${isArabic ? 'block' : 'hidden md:block'}`}>
              {isArabic && (
                <div className="max-w-lg text-right font-arabic">
                  <h2 className="text-blue-600 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
                    فريق البرنامج
                  </h2>
                  <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-semibold mt-4 drop-shadow-md">
                    يضم فريق تسيير برنامج من وإلى الناس مجموعة متنوعة من الممارسين والمنسقين والميسّرين، الذين يعملون على ضمان تنفيذ البرنامج بكفاءة وفعالية. ويستند الفريق إلى خبرات متعددة في مجالات الفن، والإيكولوجيا، وإدارة المشاريع الثقافية، لمرافقة المشاركين في مختلف مراحل مسارهم، من البحث والتجريب إلى الإنتاج والعرض.

                    ومن خلال العمل التشاركي والمرافقة المستمرة، يساهم الفريق في خلق بيئة قائمة على التعلم والتبادل والإبداع الجماعي، مع الحفاظ على ارتباط وثيق بالمعارف المحلية والممارسات المستدامة.
                  </p>
                </div>
              )}
            </div>

{/* Right Column for English - Now matching Arabic styling */}
            <div className={`${!isArabic ? 'block' : 'hidden md:block'}`}>
              {!isArabic && (
                <div className="max-w-lg text-left">
                  <h1 className="text-blue-600 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
                    Program Team
                  </h1>
                  <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-semibold mt-4 drop-shadow-md">
                    The operating team of From and To the People brings together a diverse group of practitioners, coordinators, and facilitators dedicated to ensuring the program's effective implementation. Drawing on expertise in art, ecology, and cultural management, the team supports participants throughout their journey—from research and experimentation to production and public presentation.

                    Through close collaboration and continuous guidance, the team cultivates an environment of learning, exchange, and collective creation, while maintaining a strong connection to local knowledge and sustainable practices.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Main Content Section */}
      <section className="pb-24 bg-gradient-to-br from-slate-50 via-white to-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          
          
          
          {/* Organigramme Section */}
          <section className="mb-40 text-center pt-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-blue-600 drop-shadow-lg text-center leading-tight">
              <>
                {language === 'en' ? 'Organigram' : 'الهيكل التنظيمي'}
              </>
            </h2>

            <div className="w-full max-w-6xl mx-auto aspect-video relative rounded-2xl shadow-2xl overflow-hidden">
              <Image 
                src="/images/team/organigramme.png" 
                alt="Organigramme"
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </section>

          {/* Team Members Grid */}
          <section>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center text-foreground/90 drop-shadow-lg">
              {t.meetOurTeam}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {team.map((member, index) => {
                const name = language === 'en' ? member.nameEn : member.nameAr
                const role = language === 'en' ? member.roleEn : member.roleAr
                const bioShort = language === 'en' ? member.bioShortEn : member.bioShortAr
                
                return (
                  <Card 
                    key={index} 
className="border-0 bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <CardHeader className="pb-4 relative overflow-hidden flex flex-col items-center justify-center">
                      {/* Removed hover gradient overlay */}
                    <div className="relative z-10 mb-8 w-40 h-40 md:w-48 md:h-48 ring-12 ring-transparent">
                        <Avatar className="w-full h-full border-6 border-white/80 shadow-2xl">
                          <Image 
                            src={member.image} 
                            alt={name}
                            fill 
                            className="object-cover rounded-full"
                          />
                        </Avatar>
                      </div>
                      <div className="text-center space-y-2">
                        <CardTitle className="text-xl md:text-2xl font-bold leading-tight">
                          {name}
                        </CardTitle>
                        <Badge className="px-6 py-2 text-sm uppercase font-bold tracking-wider bg-blue-600 text-white shadow-xl">
                          {role}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 flex flex-col justify-center min-h-[120px]">
                      <CardDescription className="text-center leading-relaxed text-lg text-foreground/80">
                        {bioShort}
                      </CardDescription>
                    </CardContent>

                  </Card>
                )
              })}
            </div>
          </section>
        </div>
      </section>



      {/* Organigramme Modal */}
      <Dialog open={organigramOpen} onOpenChange={setOrganigramOpen}>
        <DialogContent className="max-w-7xl max-h-[95vh] p-6 md:p-12">
          <Image 
            src="/images/team/organigramme.png"
            alt="Program Organigramme - Full View"
            fill
            className="object-contain"
            sizes="95vw"
            priority
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}