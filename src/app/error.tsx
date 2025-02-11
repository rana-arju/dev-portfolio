"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  useEffect(() => {
    console?.error(error);
  }, [error]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col pt-24 items-center justify-center bg-gray-50 dark:bg-gray-900 p-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={iconVariants} initial="initial" animate="animate">
        <AlertTriangle
          size={64}
          className="text-[#f9004d] dark:text-[#ff3366] mb-6"
        />
      </motion.div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Oops! Something went wrong
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        We&apos;re sorry, but an unexpected error occurred. Our team has been
        notified and is working on it.
      </p>
      <div className="flex space-x-4">
        <Button
          onClick={reset}
          className="bg-[#f9004d] hover:bg-[#d0003f] text-white dark:bg-[#ff3366] dark:hover:bg-[#e62e5c]"
        >
          Try Again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
      <div className="mt-12 text-gray-600 dark:text-gray-400 font-mono">
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
          <code>
            {`
// Error handling
try {
  // Some code that might throw an error
} catch (error) {
  console.error('An error occurred:', error);
  notifyTeam(error);
  showErrorPage();
}
          `.trim()}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
