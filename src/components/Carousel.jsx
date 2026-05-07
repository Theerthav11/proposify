import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Carousel.css";

const images = [
  "/images/aip1.png",
  "/images/aip2.png",
  "/images/aip3.png",
  "/images/aip4.png",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">

      <AnimatePresence mode="wait">

        <motion.img
          key={current}
          src={images[current]}
          alt="carousel"
          className="carousel-image"

          initial={{
            opacity: 0,
            scale: 0.9,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          exit={{
            opacity: 0,
            scale: 1.1,
          }}

          transition={{
            duration: 0.6,
          }}
        />

      </AnimatePresence>

    </div>
  );
}