import { motion } from "framer-motion";

export default function VariableProximity({
  label,
  className = "",
}) {
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