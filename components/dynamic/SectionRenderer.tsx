'use client';

import { Section } from '@/lib/contentful';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';

interface SectionRendererProps {
  section: Section;
}

export function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.__typename) {
    case 'HeroSection':
      return <HeroSection section={section} />;
    case 'FeaturesSection':
      return <FeaturesSection section={section} />;
    case 'TestimonialsSection':
      
      return <TestimonialsSection section={section} />;
    case 'CtaSection':
      return <CtaSection section={section} />;
    default:
      console.warn(`Unknown section type: ${(section as any).__typename}`);
      return null;
  }
}