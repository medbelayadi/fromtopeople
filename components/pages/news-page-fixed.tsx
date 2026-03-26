'use client'

import { Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface NewsPageProps {
  language: 'en' | 'ar'
}

const news = {
  en: [
    {
      id: 1,
      date: 'Jan 24, 2026',
      category: 'Announcement',
      title: 'Program Launch Session',
      excerpt: 'Introductory session for the From & To People program to present participants and team, and start the program journey.',
      content: 'As part of the launch of the From & To People program, Danseurs Citoyens Sud organized an introductory session on January 24, marking a concrete and pivotal starting point for the implementation of the program. The activity included the presentation of the young creatives selected to participate in the different phases of the program, as well as an introduction to the team responsible for its implementation. This meeting created a space for acquaintance and direct interaction between participants and the coordinating team, contributing to a collaborative and supportive working dynamic.',
      gallery: [
        '/images/news/ron001.jpeg',
        '/images/news/ron002.jpeg',
        '/images/news/ron003.jpeg',
        '/images/news/ron004.jpeg',
        '/images/news/ron005.jpeg',
        '/images/news/ron006.jpeg',
        '/images/news/roncontre.jpg'
      ]
    },
    {
      id: 2,
      date: 'Feb 13-14, 2026',
      category: 'Event',
      title: 'Field Visits Recap',
      excerpt: 'Participants explored the artisanal ecosystem in Southern Tunisia and learned about local resources for sustainable craft projects.',
      content: 'A look back at the field visits organized within the framework of the From & To People program, which offered participants the opportunity to explore the components of the artisanal ecosystem in Southern Tunisia and discover the natural resources of the Mediterranean oases of Gabès. The itinerary included the Chenini oasis and the Traditional Crafts Museum on February 13, followed by visits to the wool processing and spinning factory in Ouedhref, as well as local workshops for Margoum weaving and Smar fiber crafts. This experience strengthened participants understanding of the importance of local resources in traditional crafts and inspired new possibilities for sustainable projects using contemporary artistic approaches.',
      gallery: [
        '/images/news/vist005.png',      '/images/news/ron007.jpeg',    '/images/news/ron008.jpeg',        '/images/news/ron009.jpeg',       '/images/news/ron010.jpeg',       '/images/news/ron011.jpeg',      '/images/news/visits.jpg'      ]
    },
    {
      id: 3,
      date: 'Feb 2026',
      category: 'Opportunity',
      title: 'Applications Open',
      excerpt: 'Emerging artists, designers, and artisans from southern Tunisia are invited to join the program and participate in a collective lab.',
content: 'We held an Open Call for emerging artists, designers, and artisans from southern Tunisia as part of the From & To People program. This initiative invited participants to join a collective lab and engage in a comprehensive training pathway connecting technical skills, critical thinking, and environmentally responsible practices. The program offered: 10 months of professional training + support to obtain a Vocational Competency Certificate, hands-on labs and professional mentoring (individual & group), 5 production grants for selected workshops + facilitated loans, and opportunities to showcase works in national and international exhibitions. This open call marked the beginning of a new generation of practitioners reimagining the future through a renewed relationship between people, materials, and nature.' ,
     gallery: [

        '/images/news/opencall2.jpeg',
      ]
    },
  ],
  ar: [
    {
      id: 1,
      date: '24 جانفي 2026',
      category: 'حدث',
      title: 'جلسة إطلاق البرنامج',
      excerpt: 'جلسة تعريفية لبرنامج من وإلى الناس لتقديم المشاركين والفريق وبدء مسار البرنامج.',
      content: 'في إطار انطلاق برنامج من وإلى الناس، نظّمت الراقصون المواطنون الجنوب يوم 24 جانفي جلسة تقديمية مثّلت نقطة فعلية ومفصلية لبدء تنفيذ البرنامج. تضمّن النشاط تقديم الشباب المبدعين الذين تم اختيارهم للمشاركة في مختلف مراحل البرنامج، إلى جانب التعريف بالفريق المشرف على البرنامج. شكّل هذا اللقاء محطة أساسية للتعارف وبناء روابط مباشرة بين المشاركين والإطار المشرف، بما يساهم في خلق ديناميكية عمل جماعية داعمة لاستكمال البرنامج وتحقيق أهدافه.',
      gallery: [
        '/images/news/ron001.jpeg',
        '/images/news/ron002.jpeg',
        '/images/news/ron003.jpeg',
        '/images/news/ron004.jpeg',
        '/images/news/ron005.jpeg',
        '/images/news/ron006.jpeg',
        '/images/news/roncontre.jpg'
      ]
    },
    {
      id: 2,
      date: '13-14 فيفري 2026',
      category: 'حدث',
      title: 'ملخص الزيارات الميدانية',
      excerpt: 'استكشف المشاركون النظام الحيوي للصناعات الحرفية في جنوب تونس وتعرفوا على الموارد المحلية لإنشاء مشاريع مستدامة.',
      content: 'عودة بالصور إلى الزيارات الميدانية ضمن برنامج من وإلى الناس، والتي أتاحت للمشاركين فرصة اكتشاف مكوّنات النظام الحيوي للصناعات الحرفية في جنوب تونس، والتعرّف على الموارد الطبيعية الموجودة بواحات قابس المتوسطيّة. شمل مسار الزيارات واحة شنني ومتحف الصناعات التقليدية يوم 13 فيفري، تلتها يوم 14 فيفري زيارات إلى معمل الصوف والغزل بوذرف، إضافة إلى مجموعة من الورش المحلية لنسج المرقوم وورشات السّمار. مثّلت هذه التجربة محطة لتعزيز فهم المشاركين لأهمية الموارد المحلية في الصناعات الحرفية التقليدية، واستلهام إمكانيات جديدة لبناء مشاريع مستدامة باستخدام مقاربات فنية معاصرة.',
      gallery: [
        '/images/news/vist005.png',
        '/images/news/visit010.jpeg',
        '/images/news/visit011.png',
        '/images/news/vist001.png',
        '/images/news/vist002.png',
        '/images/news/visits.jpg',
        '/images/news/visit003.png',
         '/images/news/visit004.png',
         '/images/news/vist007.png',
          '/images/news/visit008.jpeg',
            '/images/news/visit009.jpeg',

      ]
    },
    {
      id: 3,
      date: 'فيفري 2026',
      category: 'فرصة',
      title: 'فتح باب الترشحات',
      excerpt: 'ندعو الفنانين والمصمّمين والحرفيين الناشئين في جنوب تونس للانضمام إلى البرنامج والمشاركة في مختبر جماعي.',
content: 'أُقيمت دعوة مفتوحة للفنانين والمصمّمين والحرفيين الناشئين من جنوب تونس ضمن برنامج من وإلى الناس. هدفت هذه المبادرة إلى إشراك المشاركين في مختبر جماعي ومسار تكويني متكامل يربط بين المهارات التقنية، التفكير النقدي، والممارسات البيئية المسؤولة. ما قدّمه البرنامج خلال هذه المبادرة: تكوين مهني  , مرافقة لاجتياز شهادة كفاءة مهنية، مختبرات عملية وتأطير احترافي فردي وجماعي، 5 منح إنتاجية لورشات مختارة و قروض ميسّرة، وعرض الأعمال في معارض وطنية ودولية. مثّلت هذه الدعوة المفتوحة بداية جيل جديد من الممارسين القادرين على إعادة تخيّل المستقبل من خلال علاقة متجدّدة بين الإنسان والمادة والطبيعة.' ,     
gallery: [

        '/images/news/opencall2.jpeg',
      ]
    },
  ],
}

const labels = {
  en: {
    title: ' News',
    subtitle: 'Updates, announcements, and stories from the From & To People program',
    readMore: 'Read Full Story',
    allNews: 'All News',
  },
  ar: {
    title: ' الأخبار',
    subtitle: 'التحديثات والإعلانات والقصص من برنامج من وإلى الناس',
    readMore: 'اقرأ القصة الكاملة',
    allNews: 'جميع الأخبار',
  },
}

const categoryColors = {
  Announcement: 'bg-blue-100 text-blue-800',
  Event: 'bg-emerald-100 text-emerald-800',
  Opportunity: 'bg-amber-100 text-amber-800',
  Partnership: 'bg-rose-100 text-rose-800',
  'إعلان': 'bg-blue-100 text-blue-800',
  'حدث': 'bg-emerald-100 text-emerald-800',
  'فرصة': 'bg-amber-100 text-amber-800',
  'شراكة': 'bg-rose-100 text-rose-800',
}

export function NewsPage({ language }: NewsPageProps) {
const newsData = language === 'en' ? [...news.en].reverse() : [...news.ar].reverse()
  const text = language === 'en' ? labels.en : labels.ar
  const dir = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <section id="news" className={`min-h-screen py-20 bg-white ${language === 'ar' ? 'font-arabic' : ''}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className={`max-w-4xl ${language === 'ar' ? 'text-right' : 'text-center'}`}>
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {language === 'ar' ? 'أخبار' : 'News'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            {text.title}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">{text.subtitle}</p>
        </div>
      </div>

      {/* Full Posts Sections */}
      <div className="space-y-24 mt-24">
        {newsData.map((item) => (
          <section 
            key={item.id} 
            id={`news-${item.id}`}
            className={`py-20 ${language === 'ar' ? 'text-right' : ''}`}
          >
            <div className="container mx-auto px-4 max-w-6xl">
              {/* Header */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`text-sm font-bold px-4 py-2 rounded-full capitalize ${
                      categoryColors[item.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-foreground/70 text-sm">{item.date}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{item.title}</h2>
                <div className="h-1 w-24 bg-primary" />
              </div>

              {/* Full Content */}
              <div className="prose prose-xl max-w-none mb-16">
                <p>{item.content}</p>
              </div>

              {/* Responsive Masonry Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
                {item.gallery.map((imgSrc, idx) => {
                  let sizeClasses = 'col-span-1 row-span-1' // default small
                  if (idx === 0) sizeClasses = 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2' // large
                  else if (idx === 1 || idx === 2) sizeClasses = 'md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2' // medium

                  return (
                    <div
                      key={idx}
                      className={`group relative overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/20 hover:border-primary/30 rounded-lg ${sizeClasses}`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`News gallery image ${idx + 1}`}
                        width={450}
                        height={300}
                        loading="lazy"
                        className="w-full h-full object-cover block group-hover:scale-[1.03] transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Index overlay removed */}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
