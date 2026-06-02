import { motion } from "framer-motion";

interface VariableProximityProps {
  label: string;
  className?: string;
}

export default function VariableProximity({
  label,
  className = "",
}: VariableProximityProps) {
  return (
    <motion.h1
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className={className}
    >
      {label}
    </motion.h1>
  );
}