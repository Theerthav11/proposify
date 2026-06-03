export interface Theme {
  name: string;
  gradient: string;
  bg: string;
  description: string;
}

export interface ThemeConfig {
  [key: string]: Theme;
}

export const themes: ThemeConfig = {
  Professional: {
      name: "Professional",
      gradient: "from-slate-600 to-slate-800",
      bg: "from-slate-100 to-slate-200",
      description: "Clean and professional",
    },
    Ocean: {
      name: "Ocean",
      gradient: "from-blue-500 to-cyan-400",
      bg: "from-blue-50 to-cyan-50",
      description: "Fresh and modern",
    },
    Sunset: {
      name: "Sunset",
      gradient: "from-orange-500 to-pink-500",
      bg: "from-orange-50 to-pink-50",
      description: "Warm and energetic",
    },
    Forest: {
      name: "Forest",
      gradient: "from-emerald-500 to-green-600",
      bg: "from-emerald-50 to-green-50",
      description: "Natural and calming",
    },
    Purple: {
      name: "Purple",
      gradient: "from-violet-500 to-purple-600",
      bg: "from-violet-50 to-purple-50",
      description: "Creative and bold",
    },
    Dark: {
      name: "Dark",
      gradient: "from-gray-800 to-black",
      bg: "from-gray-100 to-gray-200",
      description: "Sleek and modern",
    },
};