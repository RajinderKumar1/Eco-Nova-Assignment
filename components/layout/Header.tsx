'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/lib/localization';

interface HeaderProps {
  locale?: string;
}

export function Header({ locale = 'en-US' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations(locale);

  const navigation = [
    { name: t.navigation.home, href: '#hero' },
    { name: t.navigation.features, href: '#features' },
    { name: t.navigation.testimonials, href: '#testimonials' },
    { name: t.navigation.contact, href: '#contact' },
  ];

  const handleLanguageSwitch = (lang: 'en' | 'es') => {
    if (lang === 'en') {
      router.push('/');
    } else {
      router.push('/es');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">EcoNova</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              {t.getStarted}
            </Button>

            {/* Language Switcher */}
            <div className="ml-4">
              <select
                onChange={(e) => handleLanguageSwitch(e.target.value as 'en' | 'es')}
                value={locale.startsWith('es') ? 'es' : 'en'}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-green-600 hover:bg-green-700 text-white w-fit">
                  {t.getStarted}
                </Button>

                {/* Language Switcher in Mobile */}
                <select
                  onChange={(e) => {
                    setIsMenuOpen(false);
                    handleLanguageSwitch(e.target.value as 'en' | 'es');
                  }}
                  value={locale.startsWith('es') ? 'es' : 'en'}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
