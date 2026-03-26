'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/lib/language-context'

type NavItem = { label: string; href: string } | { label: string; items: { label: string; href: string }[] }

const navItems = {
  en: [
    { label: 'Home', href: '/' } as NavItem,
    { label: 'Program', href: '/program' } as NavItem,
    // { label: 'Participants', href: '/participants' } as NavItem, // Removed as included in Community dropdown
    { 
      label: 'Community', 
      items: [
        { label: 'Participants', href: '/participants' },
        { label: 'Program Team', href: '/team' },
        { label: 'Scientific Community', href: '/scientific-community' },
      ]
    } as NavItem,
    { label: 'News', href: '/news' } as NavItem,
    { label: 'Contact', href: '/contact' } as NavItem,
  ],
  ar: [
    { label: 'الرئيسية', href: '/' } as NavItem,
    { label: 'البرنامج', href: '/program' } as NavItem,
    // { label: 'المشاركون', href: '/participants' } as NavItem, // Removed as included in Community dropdown
    { 
      label: 'المجتمع', 
      items: [
        { label: 'المشاركون', href: '/participants' },
        { label: 'فريق البرنامج', href: '/team' },
        { label: 'المجتمع العلمي', href: '/scientific-community' },
      ]
    } as NavItem,
    { label: 'الأخبار', href: '/news' } as NavItem,
    { label: 'تواصل معنا', href: '/contact' } as NavItem,
  ],
} as Record<'en' | 'ar', NavItem[]>


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const items = language === 'en' ? navItems.en : navItems.ar
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'

  const communityItem = items.find(item => typeof item === 'object' && 'items' in item)

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%] rounded-2xl bg-white/40 backdrop-blur-md shadow-lg border border-white/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4" dir={dir}>
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/logo-web.png"
              alt="From & To People"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" dir={dir}>
            {items.map((item) => {
              if ('items' in item && item.items && item.items.length > 0) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <button className={`px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:bg-white/20 rounded-md flex items-center gap-1 group ${isArabic ? 'font-arabic' : ''}`}>
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform group-hover:rotate-180 ${isArabic ? 'rotate-180' : ''}`} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10} className="w-48 font-arabic">
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.label} asChild>
                          <a
                            href={subItem.href}
                            className={`w-full text-sm ${isArabic ? 'font-arabic' : ''}`}
                          >
                            {subItem.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              return (
                <a
                  key={item.label}
                  href={(item as { href: string }).href}
                  className={`px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:bg-white/20 rounded-md ${isArabic ? 'font-arabic' : ''}`}
                >
                  {item.label}
                </a>
              )

            })}

          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1 border border-white/40 rounded-md p-1 bg-white/20 backdrop-blur-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-semibold transition-all rounded-sm ${language === 'en'
                  ? 'bg-primary text-white'
                  : 'text-foreground/70 hover:text-white'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 text-xs font-semibold transition-all rounded-sm font-arabic ${language === 'ar'
                  ? 'bg-primary text-white'
                  : 'text-foreground/70 hover:text-white'
                  }`}
              >
                AR
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-white/20 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className={`lg:hidden border-t border-white/30 mt-3 pt-3 flex flex-col gap-2 ${isArabic ? 'font-arabic text-right' : ''}`}
            dir={dir}
          >
            {items.map((item) => {
              if ('items' in item && item.items && item.items.length > 0) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <button className="w-full text-left px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:bg-white/20 rounded-md flex items-center justify-between">
                        {item.label}
                        <ChevronDown className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10} className="w-56 font-arabic">
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.label} asChild>
                          <a
                            href={subItem.href}
                            className={`w-full text-sm ${isArabic ? 'font-arabic' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              return (
                <a
                  key={item.label}
                  href={(item as { href: string }).href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:bg-white/20 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )

            })}

          </nav>
        )}
      </div>
    </header>
  )
}

