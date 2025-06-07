'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Leaf className="w-8 h-8 text-white" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-600"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}