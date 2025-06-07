'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CtaSection as CtaSectionType } from '@/lib/contentful';

interface CtaSectionProps {
  section: CtaSectionType;
}

export function CtaSection({ section }: CtaSectionProps) {
  const {
    title,
    description,
    primaryButtonText,
    primaryButtonUrl,
    secondaryButtonText,
    secondaryButtonUrl,
    backgroundImage,
  } = section;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.url}
            alt={backgroundImage.description || ''}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href={primaryButtonUrl}>{primaryButtonText}</a>
            </Button>
            
            {secondaryButtonText && secondaryButtonUrl && (
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-green-900 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}