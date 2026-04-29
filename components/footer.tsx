import Image from 'next/image'
import { GeometricPattern, DiagonalLines } from './geometric-pattern'

interface FooterProps {
  language: 'en' | 'ar'
}

const footerContent = {
  en: {
    about: 'From & To People is dedicated to building connections and fostering community engagement through innovative programs.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    address: 'Med Ali Street, 6000 Gabes Medina, Gabes, Tunisia, 6000',
    email: 'contact@fromtopeople.com',
    follow: 'Follow Us',
    social: [
      { name: 'Twitter', url: 'https://x.com/adcs_org' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/company/86199626' },
      { name: 'Facebook', url: 'https://www.facebook.com/ASS.DCS?locale=fr_FR' },
      { name: 'Instagram', url: 'https://www.instagram.com/fromandtopeople/' },
    ],
  },
  ar: {
    about: 'من وإلى الناس مكرسة لبناء الاتصالات وتعزيز المشاركة المجتمعية من خلال برامج مبتكرة.',
    quickLinks: 'روابط سريعة',
    contact: 'اتصل بنا',
    address: 'شارع محمد علي 6000 قابس المدينة, قابس, تونس, 6000 ',
    email: 'contact@fromtopeople.com',
    follow: 'تابعنا',
    social: [
      { name: 'تويتر', url: 'https://x.com/adcs_org' },
      { name: 'لينكدإن', url: 'https://www.linkedin.com/company/86199626' },
      { name: 'فيسبوك', url: 'https://www.facebook.com/ASS.DCS?locale=fr_FR' },
      { name: 'إنستجرام', url: 'https://www.instagram.com/fromandtopeople/' },
    ],
  },
}

export function Footer({ language }: FooterProps) {
  const content = language === 'ar' ? footerContent.ar : footerContent.en

  return (
    <footer
      id="contact"
      className={`relative text-white py-20 overflow-hidden ${language === 'ar' ? 'font-arabic text-right' : ''}`}
    >
      {/* Sophisticated background with multiple layers */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/background-pattern.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Multi-layered overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
      
      {/* Diagonal lines pattern */}
      <DiagonalLines className="text-white opacity-[0.03]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section with decorative frame */}
          <div className="space-y-4 relative group">
            <div className="absolute -inset-4 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">

              <div className="w-full h-48 md:h-56 lg:h-64 rounded-lg shadow-2xl overflow-hidden border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13179.530057!2d10.098!3d34.575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd2b5c91a5b57b3%3A0x1234567890abcdef!2sV4M2%2B327%2C%20Boulevard%20Mohammed%20Ali%2C%20Gabes!5e0!3m2!1sen!2stn!4v1722000000000!5m2!1sen!2stn"
                  className="w-full h-full"
                  style={{border:0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>

          {/* Quick Links with geometric bullets */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wide text-white relative inline-block">
              {content.quickLinks}
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-white/40" />
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
                { href: '/program', label: language === 'ar' ? 'البرنامج' : 'Program' },
                { href: '/community', label: language === 'ar' ? 'المجتمع' : 'Community' },
                { href: '/news', label: language === 'ar' ? 'الأخبار' : 'News' },
                { href: '/contact', label: language === 'ar' ? 'تواصل معنا' : 'Contact' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <span className="relative flex items-center justify-center w-5 h-5">
                      <span className="absolute w-1.5 h-1.5 bg-white/60 group-hover:bg-white rounded-full transition-all" />
                      <span className="absolute w-3 h-3 border border-white/30 group-hover:border-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with geometric icons */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wide text-white relative inline-block">
              {content.contact}
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-white/40" />
            </h4>
            <div className="space-y-6 text-sm">
              <div className="group">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
                  <span className="w-4 h-4 border border-white/40 transform rotate-45" />
                  {language === 'ar' ? 'الموقع' : 'Location'}
                </p>
                <p className="text-white/85 pl-6">{content.address}</p>
              </div>
              <div className="group">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
                  <span className="w-4 h-4 border border-white/40" />
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </p>
                <a href={`mailto:${content.email}`} className="text-white/85 hover:text-white transition pl-6 inline-block group-hover:translate-x-1 transition-transform">
                  {content.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links with geometric design */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wide text-white relative inline-block">
              {content.follow}
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-white/40" />
            </h4>
            <ul className="space-y-3 text-sm">
              {content.social.map((social, i) => (
                <li key={i}>
                  <a
                    href={social.url}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <span className="relative flex items-center justify-center w-6 h-6">
                      <span className="absolute inset-0 border border-white/30 group-hover:border-white/60 transform rotate-45 transition-all duration-300" />
                      <span className="absolute w-1.5 h-1.5 bg-white/60 group-hover:bg-white rounded-full" />
                    </span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logos Sections */}
        <div className="w-full mt-24 mb-6">
          <div className={`flex flex-col items-center md:flex-row md:items-center md:justify-center lg:justify-between lg:items-end gap-4 md:gap-8 lg:gap-6 ${language === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            <div className="hidden md:block flex-shrink-0 mb-8 md:mb-0">
              <Image
                src="/LOGOpng.png"
                alt="Main logo"
                width={140}
                height={70}
                className="h-12 md:h-16 lg:h-20 w-auto drop-shadow-2xl opacity-95 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="flex items-center gap-4 md:gap-6 lg:gap-12">
              <Image
                src="/logodcs1.png"
                alt="Partner logo DCS"
                width={140}
                height={70}
                className="h-14 md:h-18 lg:h-24 w-auto drop-shadow-xl opacity-95 hover:opacity-100 transition-all duration-300"
              />
              <Image
                src="/logodrosos1.png"
                alt="Partner logo 2"
                width={140}
                height={70}
                className="h-12 md:h-16 lg:h-20 w-auto drop-shadow-xl opacity-95 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/75 ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
            <p className="relative">
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-white/40 rounded-full" />
              © {new Date().getFullYear()} From & To People. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
            </p>
            <div className={`flex gap-8 text-xs uppercase tracking-wide ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 relative group">
                {language === 'ar' ? ' العودة الى اعلى الصفحة' : 'top of the page'}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
