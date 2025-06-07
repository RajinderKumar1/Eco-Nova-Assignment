'use client';

import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from '@/lib/localization';

interface FooterProps {
  locale?: string;
}

export function Footer({ locale = 'en-US' }: FooterProps) {
  const t = useTranslations(locale);

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EcoNova</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Innovating for a sustainable future through cutting-edge eco-friendly technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#hero" className="block text-gray-400 hover:text-white transition-colors">
                {t.navigation.home}
              </Link>
              <Link href="#features" className="block text-gray-400 hover:text-white transition-colors">
                {t.navigation.features}
              </Link>
              <Link href="#testimonials" className="block text-gray-400 hover:text-white transition-colors">
                {t.navigation.testimonials}
              </Link>
              <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                {t.navigation.contact}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>idrajinder9@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+917340843147</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                {t.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}