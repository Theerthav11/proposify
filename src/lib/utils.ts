import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }

  export function splitSlideContent(
    content: string
  ): string[] {
    if (!content.trim()) {
      return [""];
    }

    const MAX_CHARS = 420;
    const slides: string[] = [];

    const blocks = content
      .split(/\n\s*\n/)
      .map((b) => b.trim())
      .filter(Boolean);

    let currentSlide = "";

    const pushSlide = () => {
      if (currentSlide.trim()) {
        slides.push(currentSlide.trim());
        currentSlide = "";
      }
    };

    blocks.forEach((block) => {
      const isBulletBlock =
        block.includes("•") ||
        block.includes("- ") ||
        block.includes("* ");

      if (isBulletBlock) {
        const lines = block
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);

        lines.forEach((line) => {
          if ((currentSlide + "\n" + line).length > MAX_CHARS) {
            pushSlide();
          }

          currentSlide +=
            (currentSlide ? "\n" : "") + line;
        });

        currentSlide += "\n";
      } else {
        const sentences =
          block.match(/[^.!?]+[.!?]+/g) || [block];

        sentences.forEach((sentence) => {
          if ((currentSlide + " " + sentence).length > MAX_CHARS) {
            pushSlide();
          }

          currentSlide +=
            (currentSlide ? " " : "") +
            sentence.trim();
        });

        currentSlide += "\n\n";
      }
    });

    pushSlide();

    return slides;
  }
