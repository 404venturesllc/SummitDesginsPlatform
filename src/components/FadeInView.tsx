import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInView({ children, delay = 0 }: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
