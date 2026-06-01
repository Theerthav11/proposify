import { useMemo, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Palette, X, Crown, Plus, Play, Share2, Send, ChevronDown,} from "lucide-react";
import BottomInsertToolbar from "../components/ui/BottomInsertToolbar.js";
import LayoutSidebar from "../components/ui/LayoutSidebar.js";

interface VersionType {
  version: string;
  content: string;
}

interface SubsectionType {
  id: number | string;
  name: string;
  currentVersion: string;
  versions: VersionType[];
}

interface SectionType {
  id: number | string;
  name: string;
  subsections: SubsectionType[];
}

interface GeneratedSlideType {
  id: number | string;
  title: string;
  content: string;
  sectionName: string;
  subsectionName: string;
  layout: string;
  elements: any[];
  sectionColor: string;
  showSectionTitle: boolean;
  isCustom?: boolean;
}

export default function Generate() {

   const navigate = useNavigate();

  const [generatedSlides, setGeneratedSlides] =
   useState<GeneratedSlideType[]>([]);

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]); // useref for store references to slide elements on the right panel so you can automatically scroll to them.

    useEffect(() => {                      // If the user manually scrolls the right panel, the left sidebar should automatically select the visible slide
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.getAttribute("data-index")
            );

            setActiveSlide(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [generatedSlides]);

  const [editableSlides, setEditableSlides] =   // initialize it from generatedSlides(add slide i between)
   useState<GeneratedSlideType[]>([]);

    useEffect(() => {
      setEditableSlides(generatedSlides);
    }, [generatedSlides]); 

  const proposalData: SectionType[] =
    JSON.parse(
      localStorage.getItem("generatedProposal") || "[]"
    );
  const savedSections = localStorage.getItem("generatedProposal");

  const [sections, setSections] =
    useState<SectionType[]>([]);

    useEffect(() => {
      if (savedSections) {
        setSections(JSON.parse(savedSections));
      }
    }, [savedSections]);

  // const [slides] =
  //   useState<SectionType[]>(proposalData);

  const [activeSlide, setActiveSlide] =
    useState(0);

  const [uploadedFile, setUploadedFile] =
    useState<File | null>(null);

  const [message, setMessage] =
    useState("");

  const [zoom, setZoom] = useState(1);
  const [showAgent, setShowAgent] =
  useState(false);

  const [showThemePanel, setShowThemePanel] =
  useState(false);

  const [selectedTheme, setSelectedTheme] =
    useState("Professional"); 

  const [showLayoutPanel, setShowLayoutPanel] = useState(false);

    // chaged for theme
    // Theme definitions (like Gamma)
  const themes = {
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

  const currentTheme = themes[selectedTheme as keyof typeof themes];

  // Section colors for slides
  const sectionColors = [
    "from-blue-500 to-cyan-400",
    "from-violet-500 to-purple-400",
    "from-emerald-500 to-green-400",
    "from-orange-500 to-amber-400",
    "from-pink-500 to-rose-400",
    "from-indigo-500 to-blue-400",
    "from-red-500 to-pink-400",
    "from-yellow-500 to-orange-400",
  ];   // eneded the change
  
    function splitSlideContent(content: string): string[] {
      if (!content.trim()) {
        return [""];
      }

      const MAX_CHARS = 420;

      const slides: string[] = [];

      // Split into blocks
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

        // Detect bullet list
        const isBulletBlock =
          block.includes("•") ||
          block.includes("- ") ||
          block.includes("* ");

        // ----------------------------------------
        // BULLET CONTENT
        // ----------------------------------------

        if (isBulletBlock) {

          const lines = block
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);

          lines.forEach((line) => {

            if (
              (currentSlide + "\n" + line).length >
              MAX_CHARS
            ) {
              pushSlide();
            }

            currentSlide +=
              (currentSlide ? "\n" : "") + line;
          });

          currentSlide += "\n";

        }

        // ----------------------------------------
        // NORMAL PARAGRAPH
        // ----------------------------------------

        else {

          // Split into sentences
          const sentences =
            block.match(/[^.!?]+[.!?]+/g) || [block];

          sentences.forEach((sentence) => {

            if (
              (currentSlide + " " + sentence).length >
              MAX_CHARS
            ) {
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
  /* =========================
     GENERATE SLIDES
  ========================= */

  useEffect(() => {
    const slidesData: GeneratedSlideType[] = [];

    sections.forEach((section) => {
      (section.subsections || []).forEach((subsection, subsectionIndex) => {
        const content =
          subsection.versions?.find(
            (v) => v.version === subsection.currentVersion
          )?.content || "";

          if (content.includes("[NEW_SLIDE]")) {
          return content
            .split("[NEW_SLIDE]")
            .map((part) => part.trim())
            .filter(Boolean);
        }

        const splitContent = splitSlideContent(content);

        splitContent.forEach((part, splitIndex) => {
          slidesData.push({
            id: `${subsection.id}-${splitIndex}`,
            title:
              splitContent.length > 1
                ? `${subsection.name} (${splitIndex + 1}/${splitContent.length})`
                : subsection.name,
            content: part,
            sectionName: section.name,
            subsectionName: subsection.name,
            layout: "blank",
            elements: [],
            sectionColor: currentTheme.gradient,
            showSectionTitle:
              subsectionIndex === 0 && splitIndex === 0,
          });
        });
      });
    });

    setGeneratedSlides(slidesData);
  }, [sections, currentTheme.gradient]);// Re-generate when theme changes(new change)

const currentSlide: GeneratedSlideType =
  generatedSlides[activeSlide] || {
    id: "default-slide",
    title: "",
    content: "",
    sectionName: "",
    subsectionName: "",
    layout: "blank",
    elements: [],
    sectionColor:currentTheme.gradient,  // changed for theme
    showSectionTitle: false,
  };

  const handleAddSlide = () => {
      const newSlide: GeneratedSlideType = {
      id: Date.now(),
      title: "New Slide",
      content: "Click here to edit content",
      sectionName: currentSlide.sectionName, // important
      subsectionName: currentSlide.subsectionName,
      layout: "blank",
      elements: [],
      sectionColor: currentTheme.gradient,
      showSectionTitle: false,
      isCustom: true,
    };
  
    

    setGeneratedSlides((prev) => {
    const updated = [...prev];
    updated.splice(activeSlide + 1, 0, newSlide);
    return updated;
  });

    const newIndex = activeSlide + 1;

    setTimeout(() => {
      setActiveSlide(newIndex);

      slideRefs.current[newIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  // function applyLayout(layoutId:string) {
  //   const updated=[...slides];
  //     updated[activeSlide]={
  //     ...updated[activeSlide],
  //     layout:layoutId
  //     }
  //   setSlides(updated);
  // } // added for apply layout for all slides

  return (

    <div className="h-screen flex overflow-hidden bg-[#EDF5FF]">

      {/* =========================================================
         SIDEBAR
      ========================================================= */}

      <div
        className="
          w-[240px]
          min-w-[240px]
          bg-[#F8FAFC]
          border-r
          border-[#CBD5E1]
          flex
          flex-col
          overflow-hidden
        "
      >

        {/* HEADER */}

        <div className="p-5 border-b border-[#CBD5E1]">

          <div className="flex items-center gap-3">

            <div
              className="
                w-11
                h-11
                rounded-2xl
                bg-[#2563EB]
                flex
                items-center
                justify-center
                text-white
              "
            >
              <Sparkles size={20} />
            </div>

            <div>

              <h2 className="font-bold text-[#0F172A]">
                AI Presentation
              </h2>

              <p className="text-xs text-[#64748B]">
                Gamma Style Editor
              </p>

            </div>

          </div>

          {/* NEW BUTTON */}

          <button
             onClick={handleAddSlide}
            className="
            px-4
            py-2
            rounded-2xl
            bg-white/80
            backdrop-blur-lg
            border
            border-white/40
            shadow-sm
            hover:shadow-lg
            hover:scale-[1.02]
            transition-all
            duration-300
            flex
            items-center
            gap-2
            text-[#0F172A]
            font-medium
            "
          >
            <Plus size={18} />
            New Slide
          </button>
          <button
            onClick={() => navigate("/proposal-builder")}
            className="
            mt-4
            w-full
            px-4
            py-2
            rounded-2xl
            bg-white/80
            backdrop-blur-lg
            border
            border-white/40
            shadow-sm
            hover:shadow-lg
            hover:scale-[1.02]
            transition-all
            duration-300
            flex
            items-center
            gap-2
            text-[#0F172A]
            font-medium
            "
          >
            <Plus size={18} />
            Edit Proposal
          </button>

        </div>

        {/* =========================================================
            SLIDE NAVIGATION
          ========================================================= */}

          <div className="flex-1 overflow-y-auto px-3 py-4">

            {sections.map(
              (section, sectionIndex) => {

                const sectionColor =
                  currentTheme.gradient; // changed for theme change

                return (

                  <div
                    key={section.id}
                    className="mb-5"
                  >

                    {/* =========================================================
                      SECTION HEADER
                    ========================================================= */}

                    <div className="mb-3 px-1">

                      {/* SECTION TOP LABEL */}

                      <div className="flex items-center gap-2 mb-2">

                        {/* COLOR DOT */}

                        <div
                          className={`
                            w-2.5
                            h-2.5
                            rounded-full
                            bg-gradient-to-r
                            ${sectionColor}
                          `}
                        />

                        {/* SECTION NAME */}

                        <h2
                          className="
                            text-[11px]
                            font-semibold
                            text-[#334155]
                            tracking-wide
                            uppercase
                          "
                        >
                          {section.name}
                        </h2>

                      </div>

                      {/* LINE */}

                      <div className="h-[1px] bg-[#E2E8F0]" />

                    </div>

                    {/* =========================================================
                      SUBSECTION AREA
                    ========================================================= */}

                    <div className="space-y-3">

                      {section.subsections?.map(
                        (
                          subsection: SubsectionType
                        ) => {

                          const content =
                            subsection.versions?.find(
                              (
                                v: VersionType
                              ) =>
                                v.version ===
                                subsection.currentVersion
                            )?.content || "";

                          const splitContent =
                           splitSlideContent(content);

                           const sidebarSlides = generatedSlides.filter(
                              (slide) =>
                                slide.sectionName === section.name &&
                                slide.subsectionName === subsection.name
                            );

                          return (

                            <div
                              key={subsection.id}
                              className="
                                bg-[#F8FAFC] border-b border-white/40 shadow-sm
                                rounded-2xl
                                p-2
                              "
                            >

                              {/* SUBSECTION TITLE */}

                              <div className="mb-2">

                              <h3
                                className="
                                  text-[11px]
                                  font-semibold
                                  text-[#0F172A]
                                  truncate
                                "
                              >
                                {subsection.name}
                              </h3>

                            </div>

                              {/* =========================================================
                                SLIDES
                              ========================================================= */}

                              <div className="space-y-2">

                                {splitContent.map(
                                  (
                                    part: string,
                                    splitIndex: number
                                  ) => {

                                    const slideIndex =
                                      generatedSlides.findIndex(
                                        (
                                          slide: GeneratedSlideType
                                        ) =>
                                          slide.id ===
                                          `${subsection.id}-${splitIndex}`
                                      );

                                    return (

                                      <div
                                        key={`${subsection.id}-${splitIndex}`}

                                       onClick={() => {       // Update left sidebar click
                                          setActiveSlide(slideIndex);
                                          slideRefs.current[slideIndex]?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "center",
                                          });
                                        }}

                                        className={`
                                          relative
                                          cursor-pointer
                                          rounded-xl
                                          overflow-hidden
                                          border
                                          transition-all
                                          duration-300

                                          ${
                                            activeSlide ===
                                            slideIndex
                                              ? "border-[#3B82F6] bg-[#EFF6FF] shadow-md"
                                              : "border-[#CBD5E1] hover:bg-[#F1F5F9]"
                                          }
                                        `}
                                      >

                                        {/* SECTION LABEL */}

                                        <div
                                          className={`
                                            absolute
                                            top-2
                                            left-2
                                            z-10
                                            px-2
                                            py-1
                                            rounded-full
                                            text-[8px]
                                            font-bold
                                            text-white
                                            bg-gradient-to-r
                                            ${sectionColor}
                                          `}
                                        >
                                          {section.name}
                                        </div>

                                        {/* THUMBNAIL */}

                                        <div
                                          className="
                                            h-[72px]
                                            bg-white/85 backdrop-blur-xl
                                            hover:scale-[1.02]
                                            hover:shadow-xl
                                            relative
                                            overflow-hidden
                                          "
                                        >

                                          <div className="absolute inset-0 flex">

                                            {/* LEFT */}

                                            <div
                                              className="
                                                w-[60%]
                                                p-2
                                                flex
                                                flex-col
                                                justify-center
                                              "
                                            >

                                              <div
                                                className="
                                                  w-10
                                                  h-1.5
                                                  rounded-full
                                                  bg-[#0F172A]
                                                  mb-1
                                                "
                                              />

                                              <div
                                                className="
                                                  w-8
                                                  h-1
                                                  rounded-full
                                                  bg-[#94A3B8]
                                                  mb-1
                                                "
                                              />

                                              <div
                                                className="
                                                  w-14
                                                  h-1
                                                  rounded-full
                                                  bg-[#CBD5E1]
                                                "
                                              />

                                            </div>

                                            {/* RIGHT */}

                                            <div
                                              className={`
                                                w-[40%]
                                                relative
                                                bg-gradient-to-br
                                                ${sectionColor}
                                              `}
                                            >

                                              <div
                                                className="
                                                  absolute
                                                  -left-5
                                                  top-0
                                                  w-[40px]
                                                  h-full
                                                  bg-white/85 backdrop-blur-xl
                                                  rounded-r-full
                                                "
                                              />

                                            </div>

                                          </div>

                                          {/* NUMBER */}

                                          <div
                                            className="
                                              absolute
                                              bottom-1
                                              left-1
                                              w-5
                                              h-5
                                              rounded-full
                                              bg-white/85 backdrop-blur-xl
                                              shadow
                                              flex
                                              items-center
                                              justify-center
                                              text-[9px]
                                              font-bold
                                              text-[#2563EB]
                                            "
                                          >
                                            {slideIndex + 1}
                                          </div>

                                        </div>

                                        {/* INFO */}

                                        <div className="p-2 bg-white/85 backdrop-blur-xl">

                                          <h4
                                            className="
                                              text-[10px]
                                              font-semibold
                                              text-[#0F172A]
                                              line-clamp-1
                                            "
                                          >
                                            {subsection.name}

                                            {splitContent.length >
                                              1 &&
                                              ` (${splitIndex + 1})`}
                                          </h4>

                                        </div>

                                      </div>

                                    );

                                  }
                                )}

                              </div>

                            </div>

                          );

                        }
                      )}

                    </div>

                  </div>

                );

              }
            )}

          </div>
        </div>

      {/* =========================================================
         MAIN AREA
      ========================================================= */}

      <div className="flex-1 flex flex-col overflow-hidden">

        {/* TOPBAR */}

        <div
          className="
            h-[74px]
            bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-sm
            flex
            items-center
            justify-between
            px-8
          "
        >

          <div>

            <h1
              className="
                text-xl
                font-bold
                text-[#0F172A]
              "
            >
              LangGraph Presentation
            </h1>

            {/* <p
              className="
                text-sm
                text-[#64748B]
              "
            >
              Stateful Multi-Agent AI Applications
            </p> */}

          </div>

          <div className="flex items-center gap-4">

          {/* THEME */}

          <button
            onClick={() =>
              setShowThemePanel(!showThemePanel)
            }
            className="
              text-sm
              text-[#0F172A]
              flex
              items-center
              gap-2
              font-medium
            "
          >
            <Palette size={16} />
            Theme
          </button>

          {/* SHARE */}

          <button
            className="
            px-4
            py-2
            rounded-2xl
            bg-white/80
            backdrop-blur-lg
            border
            border-white/40
            shadow-sm
            hover:shadow-lg
            hover:scale-[1.02]
            transition-all
            duration-300
            flex
            items-center
            gap-2
            text-[#0F172A]
            font-medium
            "
          >
            <Share2 size={16} />
            Share
          </button>

          {/* AGENT BUTTON */}

          <button
            onClick={() =>
              setShowAgent(!showAgent)
            }
            className="
            px-4
            py-2
            rounded-2xl
            bg-white/80
            backdrop-blur-lg
            border
            border-white/40
            shadow-sm
            hover:shadow-lg
            hover:scale-[1.02]
            transition-all
            duration-300
            flex
            items-center
            gap-2
            text-[#0F172A]
            font-medium
            "
          >

            <Sparkles
              size={16}
              className="text-[#2563EB]"
            />

            <span
              className="
                text-sm
                font-medium
                text-[#0F172A]
              "
            >
              Agent
            </span>

            <ChevronDown
              size={16}
              className={`
                transition-transform
                ${
                  showAgent
                    ? "rotate-180"
                    : ""
                }
              `}
            />

          </button>

          {/* PRESENT */}

          <button
            onClick={() =>
              navigate("/preview")
            }
            className="
            px-4
            py-2
            rounded-2xl
            bg-white/80
            backdrop-blur-lg
            border
            border-white/40
            shadow-sm
            hover:shadow-lg
            hover:scale-[1.02]
            transition-all
            duration-300
            flex
            items-center
            gap-2
            text-[#0F172A]
            font-medium
            "
          >
            <Play size={16} />
            Present
          </button>

          <button
            className="
            px-4
            py-2
            rounded-2xl
            bg-white/80
            backdrop-blur-lg
            border
            border-white/40
            shadow-sm
            hover:shadow-lg
            hover:scale-[1.02]
            transition-all
            duration-300
            flex
            items-center
            gap-2
            text-[#0F172A]
            font-medium
            "
          >
            <Crown size={16} />
            Upgrade
          </button>

        </div>

        </div>

       {/* =========================================================
          EDITOR AREA
        ========================================================= */}

        <div
          className="
            flex-1
            relative
            overflow-hidden
            bg-[radial-gradient(circle_at_top_left,_#dbeafe,_#eff6ff,_#e0f2fe)]
          "
        >
          {/* THEME PANEL */}
          {showThemePanel && (
            <div
              className="
                  absolute
                  top-0
                  right-0
                  h-full
                  w-[420px]
                  bg-white
                  z-50
                  border-l
                  border-[#CBD5E1]
                  shadow-2xl
                  overflow-y-auto
                "
            >
              {/* HEADER */}

              <div
                className="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-5
                    border-b
                    border-[#CBD5E1]
                  "
              >
                <div>
                  <h2
                    className="
                        text-[34px]
                        font-bold
                        text-[#0F172A]
                      "
                  >
                    Theme
                  </h2>

                  <p
                    className="
                        text-sm
                        text-[#64748B]
                        mt-1
                      "
                  >
                    Customize your presentation design
                  </p>
                </div>

                <button
                  onClick={() => setShowThemePanel(false)}
                  className="
                      text-2xl
                      text-[#64748B]
                      hover:text-black
                    "
                >
                  <X/>
                </button>
              </div>

              {/* THEMES */}

              <div
                className="
                    p-6
                    grid
                    grid-cols-2
                    gap-5
                  "
              >
                {Object.entries(themes).map(([themeKey, theme]) => (
                  <div
                    key={themeKey}
                    onClick={() => setSelectedTheme(themeKey)}
                    className="
                        cursor-pointer
                        group
                      "
                  >
                    {/* CARD */}

                    <div
                      className={`
                          h-[180px]
                          rounded-3xl
                          bg-gradient-to-br
                          ${theme.gradient}
                          p-5
                          flex
                          items-center
                          justify-center
                          relative
                          overflow-hidden
                          shadow-md
                          hover:scale-[1.03]
                          transition-all
                          border-4
                          ${selectedTheme === themeKey ? "border-blue-500" : "border-transparent"}
                        `}
                    >
                      <div
                        className="
                            w-full
                            h-full
                            rounded-2xl
                            bg-white/80
                            backdrop-blur-xl
                            flex
                            flex-col
                            items-center
                            justify-center
                          "
                      >
                        <h2
                          className="
                              text-4xl
                              font-bold
                              text-[#0F172A]
                            "
                        >
                          Title
                        </h2>

                        <p
                          className="
                              mt-3
                              text-lg
                              text-[#475569]
                            "
                        >
                          Content preview
                        </p>
                      </div>

                      {selectedTheme === themeKey && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>

                    {/* FOOTER */}

                    <div
                      className="
                          mt-3
                          flex
                          items-center
                          justify-between
                        "
                    >
                      <div>
                        <p
                          className="
                              text-[17px]
                              font-semibold
                              text-[#0F172A]
                            "
                        >
                          {theme.name}
                        </p>
                        <p
                          className="
                              text-sm
                              text-[#64748B]
                            "
                        >
                          {theme.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================
            AGENT PANEL
          ========================================================= */}

          {showAgent && (
            <div
              className="
                absolute
                 top-6
                right-6
                z-50
                w-[500px]
                bg-white/90
                backdrop-blur-2xl
                rounded-[40px]
                shadow-[0_18px_60px_rgba(15,23,42,0.18)]
                border
                border-[#CBD5E1]
                overflow-hidden
              "
            >

              {/* HEADER */}

              <div
                className="
                  px-5
                  pt-6
                  pb-2
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <h2
                    className="
                      text-[14px]
                      font-semibold
                      text-[#0F172A]
                    "
                  >
                    Edit all cards
                  </h2>

                </div>

                <button
                  onClick={() => setShowAgent(false)}
                  className="
                  px-4
                  py-2
                  rounded-2xl
                  bg-white/80
                  backdrop-blur-lg
                  border border-blue-100
                  bg-[#F8FBFF]
                  focus-within:ring-2
                  focus-within:ring-blue-200
                  transition-all
                  border-white/40
                  shadow-sm
                  hover:shadow-lg
                  hover:scale-[1.02]
                  duration-300
                  flex
                  items-center
                  gap-2
                  text-[#0F172A]
                  font-medium
                  "
                >
                  ✕
                </button>

              </div>

              {/* INPUT AREA */}

                <div className="px-4 pt-1">

                  <div
                    className="
                      border
                      border-[#BFD3FF]
                      rounded-[22px]
                      bg-white/85
                      backdrop-blur-xl
                      px-4
                      pt-3
                      pb-3
                      shadow-sm
                    "
                  >

                    {/* FILE PREVIEW */}

                    {uploadedFile && (

                      <div
                        className="
                          mb-3
                          flex
                          items-center
                          justify-between
                          bg-[#F8FAFC]
                          border
                          border-[#CBD5E1]
                          rounded-xl
                          px-3
                          py-2
                        "
                      >

                        <div className="flex items-center gap-2">

                          <div
                            className="
                              w-8
                              h-8
                              rounded-lg
                              bg-[#DBEAFE]
                              flex
                              items-center
                              justify-center
                              text-[#2563EB]
                              text-xs
                              font-bold
                            "
                          >
                            FILE
                          </div>

                          <div>

                            <p
                              className="
                                text-[12px]
                                font-medium
                                text-[#0F172A]
                                max-w-[180px]
                                truncate
                              "
                            >
                              {uploadedFile.name}
                            </p>

                            <p
                              className="
                                text-[10px]
                                text-[#64748B]
                              "
                            >
                              Uploaded
                            </p>

                          </div>

                        </div>

                        {/* REMOVE FILE */}

                        <button
                          onClick={() =>
                            setUploadedFile(null)
                          }
                          className="
                            w-6
                            h-6
                            rounded-full
                            hover:bg-red-100
                            flex
                            items-center
                            justify-center
                            text-red-500
                            text-xs
                          "
                        >
                          ✕
                        </button>

                      </div>

                    )}

                    {/* TEXTAREA */}

                    <textarea
                      value={message}
                      onChange={(e) =>
                        setMessage(e.target.value)
                      }
                      placeholder="Ask me to edit, create, or style anything"
                      rows={1}
                      className="
                        w-full
                        resize-none
                        bg-transparent
                        outline-none
                        text-[13px]
                        leading-relaxed
                        text-[#0F172A]
                        placeholder:text-[#94A3B8]
                        min-h-[24px]
                        max-h-[120px]
                      "
                    />

                    {/* ACTION ROW */}

                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        justify-between
                      "
                    >

                      {/* FILE UPLOAD */}

                      <label
                        className="
                          px-4
                          py-2
                          rounded-2xl
                          bg-white/80
                          backdrop-blur-lg
                          border
                          border-white/40
                          shadow-sm
                          hover:shadow-lg
                          hover:scale-[1.02]
                          transition-all
                          duration-300
                          flex
                          items-center
                          gap-2
                          text-[#0F172A]
                          font-medium
                          cursor-pointer
                        "
                      >

                        <Plus size={15} />

                        <input
                          type="file"
                          hidden
                          onChange={(e) => {

                            if (
                              e.target.files &&
                              e.target.files[0]
                            ) {
                              setUploadedFile(
                                e.target.files[0]
                              );
                            }

                          }}
                        />

                      </label>

                      {/* SEND BUTTON */}

                      <button
                        className="
                          px-4
                          py-2
                          rounded-2xl
                          bg-white/80
                          backdrop-blur-lg
                          border
                          border-white/40
                          shadow-sm
                          hover:shadow-lg
                          hover:scale-[1.02]
                          transition-all
                          duration-300
                          flex
                          items-center
                          gap-2
                          text-[#0F172A]
                          font-medium
                        "
                      >
                        <Send size={15} />
                      </button>

                    </div>

                  </div>

                </div>

              {/* QUICK ACTIONS */}

              <div className="px-4 pt-4 pb-5">

                <p
                  className="
                    text-[11px]
                    font-semibold
                    text-[#64748B]
                    mb-3
                  "
                >
                  Writing
                </p>

                <div className="flex flex-wrap gap-2">

                  {[
                    "Improve writing",
                    "Fix spelling & grammar",
                    "Translate",
                    "Make longer",
                    "Make shorter",
                    "Simplify language",
                  ].map((item) => (

                    <button
                      key={item}
                      className="
                      px-4
                      py-2
                      rounded-2xl
                      bg-white/80
                      backdrop-blur-lg
                      border
                      border-white/40
                      shadow-sm
                      hover:shadow-lg
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                      flex
                      items-center
                      gap-2
                      text-[#0F172A]
                      font-medium
                      text-[11px]
                      "
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>

            </div>
          )}

          {/* LAYOUT PANEL */}
          {showLayoutPanel &&(
          <LayoutSidebar
          onClose={()=>setShowLayoutPanel(false)}
          // onSelect={(layoutId)=>{
          // applyLayout(layoutId);
          // setShowLayoutPanel(false);
          // }}
          />
          )}

          {/* =========================================================
            SLIDE CANVAS
          ========================================================= */}

          <div                     // This enables vertical scrolling.
            className="     
              w-full
              h-full
              overflow-y-auto
              p-10
            "
          >
            <div className="flex flex-col gap-10 items-center">

              {generatedSlides.map((slide, index) => (   // add map function for scrolling
              
                <div
                  key={slide.id}          // Attach ref to each slide
                   data-index={index}   //active slide update
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                 onClick={() => {              // Scroll when left panel slide clicked
                    setActiveSlide(index);

                    slideRefs.current[index]
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });

                  }}
                  style={{
                    width: "100%",
                    maxWidth: "1120px",
                    aspectRatio: "16 / 9",
                  }}
                  className={`
                    bg-white
                    rounded-[18px]
                    overflow-hidden
                    shadow-[0_24px_60px_rgba(15,23,42,0.14)]
                    border
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      activeSlide === index
                        ? "border-blue-500"
                        : "border-[#E2E8F0]"
                    }
                  `}
                >

                  <div className="flex h-full">

                    {/* LEFT CONTENT */}

                    <div
                      className="
                        w-[60%]
                        p-14
                        flex
                        flex-col
                        justify-center
                      "
                    >

                      {slide.showSectionTitle && (
                        <div
                          className={`
                            inline-flex
                            px-4
                            py-2
                            rounded-full
                            text-white
                            text-xs
                            font-bold
                            mb-6
                            bg-gradient-to-r
                            ${slide.sectionColor}
                          `}
                        >
                          {slide.sectionName}
                        </div>
                      )}

                      <h1
                        contentEditable
                        suppressContentEditableWarning
                        className="
                          text-4xl
                          font-bold
                          text-[#1E293B]
                          leading-[1.1]
                          outline-none
                        "
                      >
                        {slide.title}
                      </h1>

                      <p
                        contentEditable
                        suppressContentEditableWarning
                        className="
                          mt-5
                          text-[17px]
                          text-[#64748B]
                          leading-relaxed
                          whitespace-pre-line
                          outline-none
                        "
                      >
                        {slide.content}
                      </p>

                    </div>

                    {/* RIGHT DESIGN PANEL */}

                    <div
                      className={`
                        w-[40%]
                        relative
                        overflow-hidden
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-br
                        ${slide.sectionColor}
                      `}
                    >

                      {/* BIG CURVE */}

                      <div
                        className="
                          absolute
                          -left-28
                          top-0
                          w-[320px]
                          h-full
                          bg-white/85
                          backdrop-blur-xl
                          rounded-r-[180px]
                          opacity-95
                        "
                      />

                      {/* GLASS CIRCLE */}

                      <div
                        className="
                          absolute
                          w-[380px]
                          h-[380px]
                          rounded-full
                          border
                          border-white/30
                          bg-white/10
                          backdrop-blur-xl
                        "
                      />

                      {/* TOP LIGHT */}

                      <div
                        className="
                          absolute
                          top-10
                          right-10
                          w-28
                          h-28
                          rounded-full
                          bg-white/20
                          blur-2xl
                        "
                      />

                      {/* BOTTOM LIGHT */}

                      <div
                        className="
                          absolute
                          bottom-10
                          left-10
                          w-36
                          h-36
                          rounded-full
                          bg-cyan-300/30
                          blur-3xl
                        "
                      />

                      {/* FLOATING DOTS */}

                      <div
                        className="
                          absolute
                          top-20
                          left-20
                          w-4
                          h-4
                          rounded-full
                          bg-white/70
                        "
                      />

                      <div
                        className="
                          absolute
                          bottom-24
                          right-20
                          w-6
                          h-6
                          rounded-full
                          bg-cyan-200/60
                        "
                      />

                      <div
                        className="
                          absolute
                          top-1/2
                          right-10
                          w-3
                          h-3
                          rounded-full
                          bg-white/70
                        "
                      />

                      {/* IMAGE */}

                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                        alt="ppt"
                        className="
                          w-[300px]
                          h-[300px]
                          object-contain
                          z-10
                          drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                          hover:scale-105
                          transition-all
                          duration-500
                        "
                      />

                    </div>

                  </div>

                </div>

              ))}

            </div>
          </div>
          <BottomInsertToolbar
          onToolClick={(tool:string)=>{
          if(tool==="Layout")
          {setShowLayoutPanel(true);}
          }}
          /> 
        </div>  
      </div>           
    </div>
  );
}