interface NewsSectionProps {
  language: 'en' | 'ar'
}

const news = {
  en: [
        {
        date: 'March 2026',
        title: 'Follow-up Meeting with Participants during Ramadan',
        excerpt: 'A follow-up session to review the program’s progress and co-develop the internal charter.',
        image: '/images/news/ramadan03.jpg',
    },

        {
         date: 'March 2026',
         title: 'Launch of the Training Path through Palm Fiber Workshop',
         excerpt: 'The training program of From & To People was launched through a hands-on palm fiber (saaf) workshop.',
         image: '/images/news/saaf1.jpeg',
    },


    {
      date: 'February 2026',
      title: 'Field Visits Recap',
      excerpt: 'Participants explored the artisanal ecosystem in Southern Tunisia, visiting Chenini oasis, Traditional Crafts Museum, local workshops, and wool processing factories, learning about local resources and sustainable craft practices.',
      image: '/images/news/visits.jpg',
    },

  ],
  ar: [
        {
      date: 'مارس 2026',
      title: 'لقاء متابعة مع المشاركين خلال شهر رمضان',
      excerpt: 'جلسة متابعة لمسار برنامج من وإلى الناس وتقدّم مراحله، مع العمل على صياغة الميثاق الداخلي.',
      image: '/images/news/ramadan03.jpg',
    },

        {
      date: 'مارس 2026',
      title: 'افتتاح المسار التكويني من خلال رغّاطة السعف',
      excerpt: 'انطلاق المسار التكويني لبرنامج من وإلى الناس عبر ورشة تطبيقية حول السعف.',
      image: '/images/news/saaf1.jpeg',
    },

    {
      date: 'فيفري 2026',
      title: 'ملخص الزيارات الميدانية',
      excerpt: 'استكشف المشاركون مكوّنات النظام الحيوي للصناعات الحرفية في جنوب تونس، بما في ذلك واحة شنني، متحف الصناعات التقليدية، ورش محلية، ومعمل الصوف والغزل، لتعزيز فهم الموارد المحلية والممارسات المستدامة.',
      image: '/images/news/visits.jpg',
    },


  ],
}

import Image from 'next/image'

const labels = {
  en: {
    title: 'Latest News',
    subtitle: '',
  },
  ar: {
    title: 'آخر الأخبار',
    subtitle: '',
  },
}

export function NewsSection({ language }: NewsSectionProps) {
  const newsData = language === 'en' ? news.en : news.ar
  const text = language === 'en' ? labels.en : labels.ar
  const isArabic = language === 'ar'

  return (
    <section
      id="news"
      className={`py-20 bg-secondary ${language === 'ar' ? 'font-arabic' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-2xl mb-16 ${language === 'ar' ? 'mr-auto text-right' : 'mx-auto text-center'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {text.title}
          </h2>
          <p className="text-foreground/70">{text.subtitle}</p>
        </div>

        {/* News Cards with Image per card */}
        <div className="max-w-4xl mx-auto space-y-8">
          {newsData.map((item, i) => (
            <article 
              key={i} 
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-64 md:h-72 flex ${isArabic ? 'md:flex-row-reverse md:[&amp;:first-child]:w-3/5' : 'md:flex-row md:[&amp;:first-child]:w-2/3'}`}
            >
              {/* Image */}
              <div className="relative w-full md:w-3/5 overflow-hidden rounded-l-lg md:rounded-r-none">
                <Image
                  src={item.image || '/images/news/fieldvisits.jpg'}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-4 md:p-6 justify-between">
                <div className="space-y-2">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wide">
                    {item.date}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/80 mt-1 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
                <a
                  href="/news"
                  className="text-primary font-semibold text-xs md:text-sm hover:underline inline-flex items-center gap-1 self-start md:self-end group-hover:translate-x-1 transition-all"
                >
                  {isArabic ? 'المزيد ←' : 'Read More →'}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className={`text-center mt-20 ${language === 'ar' ? 'text-right' : ''}`}>
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg group"
          >
            {language === 'ar' ? 'عرض جميع الأخبار ←' : 'View All News →'}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
