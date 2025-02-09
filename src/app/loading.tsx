"use client";

import { motion } from "framer-motion";

export default function Loading() {

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: -10,
      transition: { duration: 0.5, yoyo: Number.POSITIVE_INFINITY },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        Loading...
      </div>
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full bg-[#f9004d] dark:bg-[#ff3366]"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.2 }}
          />
        ))}
      </div>
      <div className="mt-12 text-gray-600 dark:text-gray-400 font-mono">
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
          <code>
            {`
// Loading animation
function loadContent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Content loaded!');
    }, 2000);
  });
}
          `.trim()}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
