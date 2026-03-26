'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function Contact() {
  const { language, setLanguage } = useLanguage()

  const contactData = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      }
    },
    ar: {
      title: 'تواصل معنا',
      subtitle: 'تواصل معنا',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        send: 'إرسال الرسالة'
      },
      info: {
        title: 'معلومات التواصل',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        address: 'العنوان'
      }
    }
  }

  const data = language === 'en' ? contactData.en : contactData.ar

  return (
    <main dir={language === 'ar' ? 'rtl' : 'ltr'} className={`font-arabic pt-32 sm:pt-40 lg:pt-44 ${language === 'ar' ? 'font-arabic' : ''}`}>
      <Header />


      <div className="container mx-auto px-4 py-20">

        <div className={`max-w-4xl mx-auto ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-foreground/70">
              {data.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className={language === 'ar' ? 'text-right' : 'text-left'}>
                  {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {data.form.name}
                  </label>
                  <Input placeholder={data.form.name} className={language === 'ar' ? 'text-right' : 'text-left'} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {data.form.email}
                  </label>
                  <Input type="email" placeholder={data.form.email} className={language === 'ar' ? 'text-right' : 'text-left'} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {data.form.message}
                  </label>
                  <Textarea placeholder={data.form.message} rows={5} className={language === 'ar' ? 'text-right' : 'text-left'} />
                </div>
                <Button className="w-full">
                  {data.form.send}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className={language === 'ar' ? 'text-right' : 'text-left'}>
                    {data.info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                      <p className="font-medium">{data.info.email}</p>
                      <p className="text-foreground/70">info@fromandtopeople.com</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                      <p className="font-medium">{data.info.phone}</p>
                      <p className="text-foreground/70">+216 51 634 426</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                      <p className="font-medium">{data.info.address}</p>
                      <p className="text-foreground/70">
                        {language === 'ar' ? 'قابس، تونس' : 'Gabes, Tunisia'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </main>
  )
}
