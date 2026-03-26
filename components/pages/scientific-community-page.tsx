'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

interface Expert {
  nameEn: string
  nameAr: string
  expertiseEn: string
  expertiseAr: string
  bioEn: string
  bioAr: string
  mainImage: string
  workshopImages: string[]
}

interface ScientificCommunityPageProps {
  language: 'en' | 'ar'
}

export function ScientificCommunityPage({ language }: ScientificCommunityPageProps) {
  const translations = {
    viewCV: language === 'en' ? 'View CV' : 'عرض السيرة الذاتية'
  }

  const title = language === 'en' ? 'Scientific Community' : 'المجتمع العلمي'

  const introText = language === 'en' 
    ? 'The community of the "From & To People" program consists of emerging artists, designers, and craftspeople, along with leading researchers and practitioners, who guide participants throughout the 10-month training path, including practical workshops, research experiments, collective laboratories, and professional mentoring, aiming to develop technical, critical, and ecological skills while connecting traditional knowledge with contemporary practices.'
    : 'يتكوّن مجتمع برنامج "من وإلى الناس" من فنانين، مصمّمين، وحرفيين ناشئين، بالإضافة إلى باحثين وممارسين رائدين، يوجّهون المشاركين خلال مسار تكويني يمتد عشرة أشهر، يشمل ورش عمل عملية، تجارب بحثية، مختبرات جماعية، وتأطيراً مهنياً، بهدف تطوير مهارات تقنية، نقدية، وإيكولوجية، وربط المعرفة التقليدية بالممارسات المعاصرة.'

  const experts: Expert[] = [
   {
      nameEn: 'Mohamed Amine Hammouda',
      nameAr: 'محمد أمين حمودة',
      expertiseEn: 'Visual Artist & Art Educator',
      expertiseAr: 'فنان تشكيلي وأستاذ فنون',
      bioEn: 'Mohamed Amine Hammouda is a visual artist and a teacher at the Higher Institute of Arts and Crafts in Gabes. His work is rooted in experimental research that explores and highlights the natural resources of Gabes, fostering new discussions about the oasis and the region’s future potential. Hamouda creates handmade dyes, fibers, and papers using exclusively plants and natural elements from the oasis, documenting its biodiversity and rich ecological systems. By exploring media and materials derived from local plant diversity, he revives lost and forgotten stories that existed before industrial colonization. Since 2013, he has exhibited both in Tunisia and internationally, with recent shows including “Ragata… The Silk Road” (2023), “Fire and Embers” in the joint exhibition “Hira Fen” (2023), and Art Abu Dhabi (2023).',
      bioAr: 'محمد أمين حمودة هو فنان تشكيلي وأستاذ بالمعهد العالي للفنون والحرف بقابس. يرتكز عمله على البحث التجريبي الذي يستكشف ويبرز الموارد الطبيعية لقابس، مما يفتح نقاشات جديدة حول الواحة وإمكانات مستقبل المنطقة. يقوم حمودة بإنتاج أصباغ وألياف وورق يدوي الصنع باستخدام النباتات والعناصر الطبيعية من الواحة حصراً، موثقاً تنوعها البيولوجي وأنظمتها البيئية الغنية. ومن خلال استكشاف وسائط ومواد مستمدة من التنوع النباتي المحلي، يحيي قصصاً منسية كانت موجودة قبل الاستعمار الصناعي. منذ سنة 2013، عرض أعماله في تونس وعلى المستوى الدولي، ومن بين معارضه الأخيرة “Ragata… The Silk Road” (2023) و“Fire and Embers” ضمن المعرض المشترك “Hira Fen” (2023) وArt Abu Dhabi (2023).',
      mainImage: '/images/participants/med-hammouda.jpg',
      workshopImages: [
        '/images/bootcamps/ham002.jpeg',
        '/images/bootcamps/ham003.jpeg',
        '/images/bootcamps/ham004.jpeg'
      ]
    },
  ]

  return (
    <div className={`min-h-screen pt-32 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
      {/* Page Intro */}
      <section className="w-screen py-24 bg-gradient-to-br from-slate-50 via-white to-primary/5 -mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-foreground to-primary bg-clip-text text-transparent mb-16 leading-[0.9] -tracking-[0.02em] pb-8 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-4xl leading-relaxed mt-12">
            {introText}
          </p>
        </div>
      </section>

      {/* Experts - Alternating Full-width Sections */}
      {experts.map((expert, index) => {
        const isEven = index % 2 === 1
        const name = language === 'en' ? expert.nameEn : expert.nameAr
        const expertise = language === 'en' ? expert.expertiseEn : expert.expertiseAr
        const bio = language === 'en' ? expert.bioEn : expert.bioAr

        return (
          <div key={index} className="w-screen py-20 bg-gradient-to-b even:from-slate-50 even:to-white odd:bg-white/70">
            <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] min-h-[60vh] md:min-h-[70vh] lg:h-[70vh] max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
              {/* Image Column */}
              <div className={`relative overflow-hidden aspect-[4/5] max-h-[500px] mx-auto ${isEven ? 'lg:order-2' : ''}`}>
                <Image
                  src={expert.mainImage}
                  alt={name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5 lg:group-hover:from-black/20 lg:group-hover:to-black/20 transition-all duration-700 shadow-lg" />
              </div>

              {/* Content Column */}
              <div className={`relative p-4 lg:p-8 xl:p-12 2xl:p-16 pt-4 lg:pt-6 flex flex-col pb-6 lg:pb-12 mb-6 lg:mb-12 ${isEven ? 'lg:text-right lg:pl-0 lg:pr-12' : 'lg:pr-0 lg:pl-12'}`}>
                <Badge className="mb-4 px-4 py-1.5 text-sm bg-gradient-to-r from-primary to-secondary w-fit uppercase tracking-wider font-semibold">
                  {expertise}
                </Badge>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-foreground">
                  {name}
                </h2>
                
                <p className="text-base md:text-base lg:text-base leading-relaxed mb-8 max-w-4xl text-foreground/80">
                  {bio}
                </p>
                
                <Button className="w-fit px-8 py-6 text-base bg-primary text-primary-foreground border-2 border-primary/50 hover:bg-primary/90 hover:border-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold uppercase tracking-wide">
                  {translations.viewCV}
                </Button>
              </div>
            </div>

            {/* Per-expert Workshops Gallery */}
            <section className="w-screen py-8 bg-gradient-to-r from-muted/50 to-primary/10 mt-2 lg:mt-4">
              <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-7xl mx-auto">
                {expert.workshopImages.map((imgSrc, imgIndex) => (
                  <div 
                    key={imgIndex}
                    className="group relative aspect-[3/2] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${name} workshop`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )
      })}

    </div>
  )
}
