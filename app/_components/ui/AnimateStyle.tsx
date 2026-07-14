"use client";

import { motion } from "framer-motion";

export default function AnimatedBox({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <motion.div
    className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}