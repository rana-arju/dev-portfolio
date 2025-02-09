"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const codeVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <motion.div
        className="text-5xl md:text-6xl lg:text-9xl font-bold text-[#f9004d] dark:text-[#ff3366] mb-4 font-mono"
        variants={codeVariants}
        initial="initial"
        animate="animate"
      >
        404
      </motion.div>
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Oops! Page Not Found
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>
      <motion.div variants={buttonVariants} initial="initial" animate="animate">
        <Button
          asChild
          className="bg-[#f9004d] hover:bg-[#d0003f] text-white dark:bg-[#ff3366] dark:hover:bg-[#e62e5c]"
        >
          <Link href="/">Return to Home</Link>
        </Button>
      </motion.div>
      <motion.div
        className="mt-12 text-gray-600 dark:text-gray-400 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
          <code>
            {`
// 404 Error Handler
function handleError(error) {
  if (error.status === 404) {
    console.log("Page not found");
    redirectTo('/');
  }
}
          `.trim()}
          </code>
        </pre>
      </motion.div>
    </div>
  );
}
