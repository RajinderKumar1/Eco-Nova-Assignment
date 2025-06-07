'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FeaturesSection as FeaturesSectionType } from '@/lib/contentful';
import { Leaf, Recycle, Sun, Droplets, Wind, Zap, Globe, Heart, Shield, DivideIcon as LucideIcon } from 'lucide-react';

interface FeaturesSectionProps {
  section: FeaturesSectionType;
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, typeof LucideIcon> = {
  leaf: Leaf,
  recycle: Recycle,
  sun: Sun,
  droplets: Droplets,
  wind: Wind,
  zap: Zap,
  globe: Globe,
  heart: Heart,
  shield: Shield,
};

export function FeaturesSection({ section }: FeaturesSectionProps) {
  const { title, subtitle, featuresCollection } = section;
  const features = featuresCollection.items;

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Leaf;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {feature.image && (
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={feature.image.url}
                      alt={feature.image.description || feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}