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
    {
  nameEn: 'Gmar Naceur',
  nameAr: 'قمر ناصر',
  expertiseEn: 'Artisan in Plant Fibers',
  expertiseAr: 'حرفية مختصة في الألياف النباتية',
  bioEn: 'Gmar Naceur is a craftswoman specializing in plant fibers, focusing on the design and production of a variety of traditional handcrafted objects such as umbrellas, baskets (couffa), fans, and skouj. Her practice is rooted in preserving the authenticity of traditional craftsmanship while continuously improving the quality of her products to meet contemporary market demands. Through her experience, she has built strong relationships with clients and participated in numerous regional, local, and national festivals, where she has showcased her work and contributed to promoting Tunisian traditional crafts. Alongside her professional activity, she has been an active scout leader for the past three years, supporting the education and development of children and youth by fostering their leadership and life skills. She is also an engaged member of the Association for Oasis Preservation, contributing to initiatives that aim to protect environmental heritage and strengthen community-based work.',
  bioAr: 'أنا قمر ناصر، أنشط في مجال الحرف اليدوية المختصة في الألياف النباتية، حيث أختص في تصميم وصناعة منتجات تقليدية متنوعة على غرار المظلات، القفاف (القوفة)، المراوح والسكوج، مع الحرص على الحفاظ على الطابع التراثي وتطوير الجودة بما يتماشى مع متطلبات السوق. وقد مكّنتني خبرتي في هذا المجال من كسب ثقة الحرفاء والمشاركة في عدة مهرجانات جهوية ومحلية ووطنية، حيث عرضت منتوجاتي وساهمت في التعريف بالحرف التقليدية التونسية. إلى جانب نشاطي المهني، أعمل قائدة في الحركة الكشفية منذ ثلاث سنوات، أساهم من خلالها في تأطير الأطفال والناشئة وتنمية مهاراتهم التربوية والقيادية. كما أنني عضوة فاعلة في جمعية صيانة الواحة، أشارك في الأنشطة والمبادرات الهادفة إلى المحافظة على التراث البيئي وتعزيز العمل الجمعياتي.',
  mainImage: '/images/participants/gmar-naceur.jpg',
  workshopImages: [
    '/images/participants/gmar-naceur1.jpeg',
    '/images/participants/gmar-naceur2.jpeg',
    '/images/participants/gmar-naceur3.jpeg'
  ]
},
{
  nameEn: 'Achwek Bechraoui',
  nameAr: 'أشواق بشراوي',
  expertiseEn: 'Bio-Industry Engineer & Cluster Development Officer',
  expertiseAr: 'مهندسة في الصناعات الحيوية ووكيلة تطوير الأقطاب',
  bioEn: 'Achwek Bechraoui is a bio-industry engineer and Cluster Development Officer within the “Creative Tunisia” project implemented by UNIDO. She specializes in developing value chains for plant-based fibers in Gabès, contributing to the structuring and sustainability of local production ecosystems. She is also involved in the co-management of the “Gabès Design Hub,” where she supports creative initiatives and promotes environmentally conscious practices. With a background in fostering innovation at the Tunisian Agency for the Promotion of Industry, she works on bridging traditional crafts with modern industrial processes. As a member of the scientific community of the “From & To People” program, she contributes to strengthening sustainable craft practices and enhancing the value of local materials through training and collaborative projects.',
  bioAr: 'أشواق بشراوي مهندسة في الصناعات الحيوية ووكيلة تطوير الأقطاب ضمن مشروع “تونس الإبداعية” التابع لمنظمة اليونيدو. تتخصص في تطوير سلاسل القيمة للألياف النباتية في قابس، مساهمةً في هيكلة النظم الإنتاجية المحلية وتعزيز استدامتها. وتشارك في الإدارة المشتركة لـ “قطب التصميم بقابس”، حيث تدعم المشاريع الإبداعية وتروّج للممارسات المستدامة. وبفضل خبرتها في دعم الابتكار ضمن الوكالة التونسية للنهوض بالصناعة، تعمل على الربط بين الحرف التقليدية والصناعة الحديثة. وهي عضو في المجتمع العلمي لبرنامج “من وإلى الناس”، حيث تساهم في تعزيز الممارسات الحرفية المستدامة وتثمين المواد المحلية من خلال التكوين والمشاريع التشاركية.',
  mainImage: '/images/participants/achwek-bechraoui.jpg',
  workshopImages: [
    '/images/bootcamps/achwek1.jpeg',
    '/images/bootcamps/achwek2.jpeg',
    '/images/bootcamps/achwek3.jpeg'
  ]
}
  ]

  return (
    <div className={`min-h-screen pt-32 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
      {/* Page Intro */}
      <section className="w-screen py-20 bg-gradient-to-br from-slate-50 via-white to-primary/5 -mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-foreground to-primary bg-clip-text text-transparent mb-12 leading-[0.9] -tracking-[0.02em] pb-8 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-4xl leading-relaxed mt-8">
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
            <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] min-h-[50vh] lg:min-h-[70vh] max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 gap-8 lg:gap-0">
              {/* Image Column */}
              <div className="relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] md:aspect-[4/5] max-h-[450px] rounded-2xl">
                <Image
                  src={expert.mainImage}
                  alt={name}
                  fill
                  className="object-cover object-top lg:hover:scale-105 transition-transform duration-700 lg:group-hover:scale-110 rounded-2xl"
                  sizes="(max-width: 768px) 90vw, 40vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 lg:group-hover:from-black/20 lg:group-hover:to-black/20 transition-all duration-700 rounded-2xl" />
              </div>

              {/* Content Column */}
              <div className="flex flex-col justify-center px-6 sm:px-8 py-8 lg:py-12 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <Badge className="mb-6 px-6 py-2 text-sm bg-gradient-to-r from-primary to-secondary w-fit uppercase tracking-wider font-semibold mx-auto lg:mx-0">
                  {expertise}
                </Badge>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-foreground">
                  {name}
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 text-foreground/80 px-4 lg:px-0">
                  {bio}
                </p>
                
                <Button className="w-fit px-8 py-4 text-base mx-auto lg:mx-0 bg-primary text-primary-foreground border-2 border-primary/50 hover:bg-primary/90 hover:border-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold uppercase tracking-wide">
                  {translations.viewCV}
                </Button>
              </div>
            </div>

            {/* Per-expert Workshops Gallery */}
            <section className="w-screen py-8 bg-gradient-to-r from-muted/50 to-primary/10 mt-2 lg:mt-4">
              <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {expert.workshopImages.map((imgSrc, imgIndex) => (
                  <div 
                    key={imgIndex}
                    className="group relative aspect-[4/3] sm:aspect-[3/2] rounded-2xl overflow-hidden shadow-xl lg:hover:shadow-2xl lg:hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${name} workshop`}
                      fill
                      className="object-cover object-center lg:group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 lg:group-hover:opacity-100 transition-all duration-400 rounded-2xl" />
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
