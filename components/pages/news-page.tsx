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

interface NewsPageProps {
  language: 'en' | 'ar'
}

const news = {
  en: [
    {
      id: 1,
      date: 'Jan 24, 2026',\n      category: 'Announcement',\n      title: 'Program Launch Session',\n      excerpt: 'Introductory session for the From & To People program to present participants and team, and start the program journey.',\n      content: 'As part of the launch of the From & To People program, Danseurs Citoyens Sud organized an introductory session on January 24, marking a concrete and pivotal starting point for the implementation of the program. The activity included the presentation of the young creatives selected to participate in the different phases of the program, as well as an introduction to the team responsible for its implementation. This meeting created a space for acquaintance and direct interaction between participants and the coordinating team, contributing to a collaborative and supportive working dynamic.',\n      gallery: [\n        '/images/news/ron001.jpeg',\n        '/images/news/ron002.jpeg',\n        '/images/news/ron003.jpeg',\n        '/images/news/ron004.jpeg',\n        '/images/news/ron005.jpeg',\n        '/images/news/roncontre.jpg',\n      ]\n    },
    {
      id: 2,
      date: 'Feb 13-14, 2026',
      category: 'Event',
      title: 'Field Visits Recap',
      excerpt: 'Participants explored the artisanal ecosystem in Southern Tunisia and learned about local resources for sustainable craft projects.',
      content: 'A look back at the field visits organized within the framework of the From & To People program, which offered participants the opportunity to explore the components of the artisanal ecosystem in Southern Tunisia and discover the natural resources of the Mediterranean oases of Gabès. The itinerary included the Chenini oasis and the Traditional Crafts Museum on February 13, followed by visits to the wool processing and spinning factory in Ouedhref, as well as local workshops for Margoum weaving and Smar fiber crafts. This experience strengthened participants’ understanding of the importance of local resources in traditional crafts and inspired new possibilities for sustainable projects using contemporary artistic approaches. This program is supported by the Drosos Foundation.',
      gallery: [
        '/images/news/visits.jpg',
        '/images/bootcamps/material-ecology.jpg',
        '/images/bootcamps/public-presentation.jpg',
        '/images/bootcamps/craft-knowledge.PNG',
      ]
    },
    {
      id: 3,
      date: 'Feb 2026',
      category: 'Opportunity',
      title: 'Applications Open',
      excerpt: 'Emerging artists, designers, and artisans from southern Tunisia are invited to join the program and participate in a collective lab.',
      content: 'Apply here: https://o-dcs.org/ar-form/ (link in bio). Engage in a comprehensive training pathway that connects technical skills, critical thinking, and environmentally responsible practices, and be part of a new experience that opens wider horizons for learning and creativity. What the program offers: 10 months of professional training + support to obtain a Vocational Competency Certificate, hands-on labs and professional mentoring (individual & group), 5 production grants for selected workshops + facilitated loans, and showcasing works in national and international exhibitions. Join us in building a new generation of practitioners capable of reimagining the future through a renewed relationship between people, materials, and nature.',
      gallery: [
        '/images/news/opencall2.jpeg',
        '/images/bootcamps/contemporary-practices.jpg',
        '/images/news/roncontre.jpg',
        '/images/bootcamps/public-presentation.PNG',
      ]
    },
  ],
  ar: [
    {
      id: 1,
      date: '24 جانفي 2026',\n      category: 'حدث',\n      title: 'جلسة إطلاق البرنامج',\n      excerpt: 'جلسة تعريفية لبرنامج من وإلى الناس لتقديم المشاركين والفريق وبدء مسار البرنامج.',\n      content: 'في إطار انطلاق برنامج من وإلى الناس، نظّمت الراقصون المواطنون الجنوب يوم 24 جانفي جلسة تقديمية مثّلت نقطة فعلية ومفصلية لبدء تنفيذ البرنامج. تضمّن النشاط تقديم الشباب المبدعين الذين تم اختيارهم للمشاركة في مختلف مراحل البرنامج، إلى جانب التعريف بالفريق المشرف على البرنامج. شكّل هذا اللقاء محطة أساسية للتعارف وبناء روابط مباشرة بين المشاركين والإطار المشرف، بما يساهم في خلق ديناميكية عمل جماعية داعمة لاستكمال البرنامج وتحقيق أهدافه.',\n      gallery: [\n        '/images/news/ron001.jpeg',\n        '/images/news/ron002.jpeg',\n        '/images/news/ron003.jpeg',\n        '/images/news/ron004.jpeg',\n        '/images/news/ron005.jpeg',\n        '/images/news/roncontre.jpg',\n      ]\n    },
    {
      id: 2,
      date: '13-14 فيفري 2026',
      category: 'حدث',
      title: 'ملخص الزيارات الميدانية',
      excerpt: 'استكشف المشاركون النظام الحيوي للصناعات الحرفية في جنوب تونس وتعرفوا على الموارد المحلية لإنشاء مشاريع مستدامة.',
      content: 'عودة بالصور إلى الزيارات الميدانية ضمن برنامج من وإلى الناس، والتي أتاحت للمشاركين فرصة اكتشاف مكوّنات النظام الحيوي للصناعات الحرفية في جنوب تونس، والتعرّف على الموارد الطبيعية الموجودة بواحات قابس المتوسطيّة. شمل مسار الزيارات واحة شنني ومتحف الصناعات التقليدية يوم 13 فيفري، تلتها يوم 14 فيفري زيارات إلى معمل الصوف والغزل بوذرف، إضافة إلى مجموعة من الورش المحلية لنسج المرقوم وورشات السّمار. مثّلت هذه التجربة محطة لتعزيز فهم المشاركين لأهمية الموارد المحلية في الصناعات الحرفية التقليدية، واستلهام إمكانيات جديدة لبناء مشاريع مستدامة باستخدام مقاربات فنية معاصرة. هذا البرنامج مدعوم من قبل مؤسسة دروسوس.',
      gallery: [
        '/images/news/visits.jpg',
        '/images/bootcamps/material-ecology.jpg',
        '/images/bootcamps/public-presentation.jpg',
        '/images/bootcamps/craft-knowledge.PNG',
      ]
    },
    {
      id: 3,
      date: 'فيفري 2026',
      category: 'فرصة',
      title: 'فتح باب الترشحات',
      excerpt: 'ندعو الفنانين والمصمّمين والحرفيين الناشئين في جنوب تونس للانضمام إلى البرنامج والمشاركة في مختبر جماعي.',
      content: 'لتقديم الترشحات: https://o-dcs.org/ar-form/ (الرابط في البايو). انخرطوا في مسار تكويني متكامل يربط بين المهارات التقنية، التفكير النقدي، والممارسات البيئية المسؤولة، وكونوا جزءًا من تجربة جديدة تفتح آفاقًا أوسع للتعلم والإبداع. ما يقدمه البرنامج: تكوين مهني لمدة 10 أشهر + مرافقة لاجتياز شهادة كفاءة مهنية، مختبرات عملية وتأطير احترافي فردي وجماعي، 5 منح إنتاجية لورشات مختارة + قروض ميسّرة، عرض الأعمال في معارض وطنية ودولية. انضموا لبناء جيل جديد من الممارسين القادرين على إعادة تخيّل المستقبل من خلال علاقة متجدّدة بين الإنسان والمادة والطبيعة.',
      gallery: [
        '/images/news/opencall2.jpeg',
        '/images/bootcamps/contemporary-practices.jpg',
        '/images/news/roncontre.jpg',
        '/images/bootcamps/public-presentation.PNG',
      ]
    },
  ],
}
  en: [
    {
      id: 1,
      date: 'Janfi 24, 2026',
      category: 'Announcement',
      title: 'Program Launch Session',
      excerpt: 'Introductory session for the From & To People program to present participants and team, and start the program journey.',
      content:
        'As part of the launch of the From & To People program, Danseurs Citoyens Sud organized an introductory session on January 24, marking a concrete and pivotal starting point for the implementation of the program. The activity included the presentation of the young creatives selected to participate in the different phases of the program, as well as an introduction to the team responsible for its implementation. This meeting created a space for acquaintance and direct interaction between participants and the coordinating team, contributing to a collaborative and supportive working dynamic.',
    },
    {
      id: 2,
      date: 'Fivri 13-14, 2026',
      category: 'Event',
      title: 'Field Visits Recap',
      excerpt: 'Participants explored the artisanal ecosystem in Southern Tunisia and learned about local resources for sustainable craft projects.',
      content:
        'A look back at the field visits organized within the framework of the From & To People program, which offered participants the opportunity to explore the components of the artisanal ecosystem in Southern Tunisia and discover the natural resources of the Mediterranean oases of Gabès. The itinerary included the Chenini oasis and the Traditional Crafts Museum on February 13, followed by visits to the wool processing and spinning factory in Ouedhref, as well as local workshops for Margoum weaving and Smar fiber crafts. This experience strengthened participants’ understanding of the importance of local resources in traditional crafts and inspired new possibilities for sustainable projects using contemporary artistic approaches. This program is supported by the Drosos Foundation.',
    },
    {
      id: 3,
      date: 'Fivri 2026',
      category: 'Opportunity',
      title: 'Applications Open',
      excerpt: 'Emerging artists, designers, and artisans from southern Tunisia are invited to join the program and participate in a collective lab.',
      content:
        'Apply here: https://o-dcs.org/ar-form/ (link in bio). Engage in a comprehensive training pathway that connects technical skills, critical thinking, and environmentally responsible practices, and be part of a new experience that opens wider horizons for learning and creativity. What the program offers: 10 months of professional training + support to obtain a Vocational Competency Certificate, hands-on labs and professional mentoring (individual & group), 5 production grants for selected workshops + facilitated loans, and showcasing works in national and international exhibitions. Join us in building a new generation of practitioners capable of reimagining the future through a renewed relationship between people, materials, and nature.',
    },
  ],
  ar: [
    {
      id: 1,
      date: '24 جانفي 2026',
      category: 'حدث',
      title: 'جلسة إطلاق البرنامج',
      excerpt: 'جلسة تعريفية لبرنامج من وإلى الناس لتقديم المشاركين والفريق وبدء مسار البرنامج.',
      content:
        'في إطار انطلاق برنامج من وإلى الناس، نظّمت الراقصون المواطنون الجنوب يوم 24 جانفي جلسة تقديمية مثّلت نقطة فعلية ومفصلية لبدء تنفيذ البرنامج. تضمّن النشاط تقديم الشباب المبدعين الذين تم اختيارهم للمشاركة في مختلف مراحل البرنامج، إلى جانب التعريف بالفريق المشرف على البرنامج. شكّل هذا اللقاء محطة أساسية للتعارف وبناء روابط مباشرة بين المشاركين والإطار المشرف، بما يساهم في خلق ديناميكية عمل جماعية داعمة لاستكمال البرنامج وتحقيق أهدافه.',
    },
    {
      id: 2,
      date: '13-14 فيفري 2026',
      category: 'حدث',
      title: 'ملخص الزيارات الميدانية',
      excerpt: 'استكشف المشاركون النظام الحيوي للصناعات الحرفية في جنوب تونس وتعرفوا على الموارد المحلية لإنشاء مشاريع مستدامة.',
      content:
        'عودة بالصور إلى الزيارات الميدانية ضمن برنامج من وإلى الناس، والتي أتاحت للمشاركين فرصة اكتشاف مكوّنات النظام الحيوي للصناعات الحرفية في جنوب تونس، والتعرّف على الموارد الطبيعية الموجودة بواحات قابس المتوسطيّة. شمل مسار الزيارات واحة شنني ومتحف الصناعات التقليدية يوم 13 فيفري، تلتها يوم 14 فيفري زيارات إلى معمل الصوف والغزل بوذرف، إضافة إلى مجموعة من الورش المحلية لنسج المرقوم وورشات السّمار. مثّلت هذه التجربة محطة لتعزيز فهم المشاركين لأهمية الموارد المحلية في الصناعات الحرفية التقليدية، واستلهام إمكانيات جديدة لبناء مشاريع مستدامة باستخدام مقاربات فنية معاصرة. هذا البرنامج مدعوم من قبل مؤسسة دروسوس.',
    },
    {
      id: 3,
      date: 'فيفري 2026',
      category: 'فرصة',
      title: 'فتح باب الترشحات',
      excerpt: 'ندعو الفنانين والمصمّمين والحرفيين الناشئين في جنوب تونس للانضمام إلى البرنامج والمشاركة في مختبر جماعي.',
      content:
        'لتقديم الترشحات: https://o-dcs.org/ar-form/ (الرابط في البايو). انخرطوا في مسار تكويني متكامل يربط بين المهارات التقنية، التفكير النقدي، والممارسات البيئية المسؤولة، وكونوا جزءًا من تجربة جديدة تفتح آفاقًا أوسع للتعلم والإبداع. ما يقدمه البرنامج: تكوين مهني لمدة 10 أشهر + مرافقة لاجتياز شهادة كفاءة مهنية، مختبرات عملية وتأطير احترافي فردي وجماعي، 5 منح إنتاجية لورشات مختارة + قروض ميسّرة، عرض الأعمال في معارض وطنية ودولية. انضموا لبناء جيل جديد من الممارسين القادرين على إعادة تخيّل المستقبل من خلال علاقة متجدّدة بين الإنسان والمادة والطبيعة.',
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
  const newsData = language === 'en' ? news.en : news.ar
  const text = language === 'en' ? labels.en : labels.ar

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

              {/* Photo Gallery */}
              <div>
               
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                  {item.gallery.map((imgSrc, idx) => (
                    <div key={idx} className="group relative overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/20 hover:border-primary/30">
                      <Image
                        src={imgSrc}
                        alt=""
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover block group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
