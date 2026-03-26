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

interface TeamPageProps {
}

export function TeamPage({}: TeamPageProps) {
  const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(null)
  const [organigramOpen, setOrganigramOpen] = React.useState(false)
  const { language } = useLanguage()
  const isArabic = language === 'ar'

  const teamDataEn: TeamMember[] = [
    {
      nameEn: 'Sara Ben Ali',
      nameAr: 'سارة بن علي',
      roleEn: 'Program Manager',
      roleAr: 'مديرة البرنامج',
      bioShortEn: 'Leads the overall vision, coordination, and implementation of the From & To People program. With 12+ years in cultural and artistic projects, she ensures seamless execution across all modules.',
      bioShortAr: 'تقود الرؤية العامة والتنسيق والتنفيذ لبرنامج من وإلى الناس. مع أكثر من 12 عاماً في المشاريع الثقافية والفنية، تضمن تنفيذاً سلساً لجميع الوحدات.',
      bioFullEn: 'Sara has extensive experience managing large-scale artistic training programs in Tunisia. She specializes in bridging traditional crafts with contemporary ecological practices, having previously coordinated similar initiatives in South Tunisia. Her leadership style emphasizes collaboration and knowledge sharing.',
      bioFullAr: 'لسارة خبرة واسعة في إدارة برامج تكوين فني كبيرة في تونس. تتخصص في ربط الحرف التقليدية بالممارسات الإيكولوجية المعاصرة، وقد نسقت سابقاً مبادرات مشابهة في جنوب تونس. أسلوب قيادتها يركز على التعاون ومشاركة المعرفة.',
      image: '/placeholder-user.jpg'
    },
    {
      nameEn: 'Khaled Trabelsi',
      nameAr: 'خالد الترابلسي',
      roleEn: 'Ecology Coordinator',
      roleAr: 'منسق الإيكولوجيا',
      bioShortEn: 'Oversees material ecology and sustainability workshops. Expert in local plant resources and zero-waste design practices.',
      bioShortAr: 'يشرف على ورش المادة والإيكولوجيا والاستدامة. خبير في موارد النباتات المحلية وممارسات التصميم الخالي من النفايات.',
      bioFullEn: 'Khaled brings deep knowledge of Gabes oasis ecology to the program. He guides participants in material research and sustainable crafting techniques using local biodiversity.',
      bioFullAr: 'يجلب خالد معرفة عميقة بإيكولوجيا واحة قابس إلى البرنامج. يوجه المشاركين في بحث المواد وتقنيات الحرفة المستدامة باستخدام التنوع البيولوجي المحلي.',
      image: '/placeholder-user.jpg'
    },
    {
      nameEn: 'Nour El Houda',
      nameAr: 'نور الهدى',
      roleEn: 'Arts Assistant',
      roleAr: 'مساعدة الفنون',
      bioShortEn: 'Supports contemporary arts practice module. Emerging visual artist specializing in experimental media.',
      bioShortAr: 'تدعم وحدة الممارسة الفنية المعاصرة. فنانة تشكيلية ناشئة متخصصة في الوسائط التجريبية.',
      bioFullEn: 'Nour is a rising star in Tunisian contemporary art scene. She facilitates studio practice and mentorship sessions, drawing from her own award-winning experimental work.',
      bioFullAr: 'نور نجمة صاعدة في المشهد الفني المعاصر التونسي. تسهل الممارسة الاستوديو وجلسات التوجيه، مستمدة من عملها التجريبي الحائز على جوائز.',
      image: '/placeholder-user.jpg'
    },
    {
      nameEn: 'Fatima Gharsallah',
      nameAr: 'فاطمة غرسالله',
      roleEn: 'Craft Specialist',
      roleAr: 'خبيرة الحرف',
      bioShortEn: 'Master artisan leading craft & knowledge module. Preserves South Tunisian traditional techniques.',
      bioShortAr: 'حرفية رئيسية تقود وحدة الحرفة والمعرفة. تحافظ على التقنيات التقليدية في جنوب تونس.',
      bioFullEn: 'Fatima represents generations of craft knowledge from South Tunisia. She teaches heritage techniques adapted for contemporary ecological design.',
      bioFullAr: 'تمثل فاطمة أجيالاً من معرفة الحرفة في جنوب تونس. تعلم تقنيات تراثية معدلة للتصميم الإيكولوجي المعاصر.',
      image: '/placeholder-user.jpg'
    },
    {
      nameEn: 'Youssef Ben Salem',
      nameAr: 'يوسف بن سالم',
      roleEn: 'Administrative Coordinator',
      roleAr: 'منسق إداري',
      bioShortEn: 'Handles logistics, participant coordination, and program administration.',
      bioShortAr: 'يتولى اللوجستيك والتنسيق مع المشاركين والإدارة.',
      bioFullEn: 'Youssef ensures smooth operations across all program phases. Experienced in cultural event management and participant support.',
      bioFullAr: 'يضمن يوسف سلاسة العمليات في جميع مراحل البرنامج. ذو خبرة في إدارة الفعاليات الثقافية ودعم المشاركين.',
      image: '/placeholder-user.jpg'
    },
    {
      nameEn: 'Lina Karray',
      nameAr: 'لينا قراي',
      roleEn: 'Communication Manager',
      roleAr: 'مديرة التواصل',
      bioShortEn: 'Manages outreach, documentation, and public presentation for the program.',
      bioShortAr: 'تدير التواصل والتوثيق والعروض العامة للبرنامج.',
      bioFullEn: 'Lina specializes in cultural communication and digital storytelling. She documents the program journey and connects it with wider audiences.',
      bioFullAr: 'تتخصص لينا في التواصل الثقافي والسرد الرقمي. توثق رحلة البرنامج وتربطه بالجمهور الأوسع.',
      image: '/placeholder-user.jpg'
    }
  ]

  const teamDataAr: TeamMember[] = teamDataEn.map(member => ({
    ...member,
    nameAr: member.nameAr,
    roleAr: member.roleAr,
    bioShortAr: member.bioShortAr,
    bioFullAr: member.bioFullAr,
  }))

  const team = language === 'en' ? teamDataEn : teamDataAr

  const t = {
    programTeam: language === 'en' ? 'Program Team' : 'فريق البرنامج',
    organigram: language === 'en' ? 'Organigramme' : 'الرسم التنظيمي',
    meetOurTeam: language === 'en' ? 'Meet Our Team' : 'تعرف على فريقنا',
    viewCV: language === 'en' ? 'View CV' : 'عرض السيرة الذاتية'
  } as const

  return (
  <div className={`min-h-screen ${isArabic ? 'font-arabic text-right' : ''}`}>
  {/* Slogan Section - Full Width at Top with negative margin to offset navbar padding */}
    <section
      id="slogan"
      className="relative min-h-[80vh] md:min-h-[90vh] lg:min-h-[100vh] overflow-hidden -mt-32"
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

      {/* Content container - Using absolute positioning */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 pb-12 md:pb-16 lg:pb-20">
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
                <div className="max-w-lg text-right">
                  <h2 className="text-blue-600 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
                    Program Team
                  </h2>
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
          <section className="mb-32 text-center">
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
                    className="group border-0 bg-card/80 backdrop-blur-sm hover:bg-white/90 shadow-xl hover:shadow-2xl hover:-translate-y-6 transition-all duration-700 cursor-pointer overflow-hidden"
                  >
                    <CardHeader className="pb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="relative z-10 mx-auto mb-8 w-32 h-32 md:w-36 md:h-36 ring-8 ring-transparent group-hover:ring-primary/40 transition-all duration-700 group-hover:scale-110">
                        <Avatar className="w-full h-full border-6 border-white/80 shadow-2xl">
                          <Image 
                            src={member.image} 
                            alt={name}
                            fill 
                            className="object-cover rounded-full"
                          />
                        </Avatar>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-4 leading-tight group-hover:text-primary transition-all duration-500">
                        {name}
                      </CardTitle>
                      <Badge className="mx-auto px-8 py-3 text-base uppercase font-bold tracking-wider bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-xl">
                        {role}
                      </Badge>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <CardDescription className="text-center leading-relaxed text-lg text-foreground/80">
                        {bioShort}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="pt-0 px-8 pb-8">
                      <Button 
                        onClick={() => setSelectedMember(member)}
                        className="w-full h-14 font-bold uppercase tracking-wider text-base shadow-2xl hover:shadow-primary/30 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                      >
                        {t.viewCV}
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </section>
        </div>
      </section>

      {/* CV Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl p-8 max-h-[85vh] overflow-hidden bg-gradient-to-b from-background to-muted">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-3xl font-bold mb-2">
              {selectedMember ? (language === 'en' ? selectedMember.nameEn : selectedMember.nameAr) : ''}
            </DialogTitle>
            <Badge variant="outline" className="uppercase font-semibold text-lg px-6 py-2">
              {selectedMember ? (language === 'en' ? selectedMember.roleEn : selectedMember.roleAr) : ''}
            </Badge>
          </DialogHeader>
          <div className="max-h-[50vh] overflow-y-auto px-4 space-y-6">
            <DialogDescription className="text-xl leading-relaxed whitespace-pre-wrap text-foreground/90">
              {selectedMember ? (language === 'en' ? selectedMember.bioFullEn : selectedMember.bioFullAr) : ''}
            </DialogDescription>
          </div>
          <div className="flex justify-center mt-8">
            <Avatar className="w-32 h-32 ring-8 ring-primary/20 shadow-2xl">
              <Image 
                src={selectedMember?.image || '/placeholder-user.jpg'} 
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </Avatar>
          </div>
        </DialogContent>
      </Dialog>

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