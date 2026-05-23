import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Palette, Crown,Plus,Play,Share2,ZoomIn,ZoomOut,Wand2,Check,Languages,AlignLeft,Minus,MessageSquare,Send,ChevronDown,} from "lucide-react";

interface VersionType {
  version: string;
  content: string;
}

interface SubsectionType {
  id: number | string;
  name: string;
  currentVersion: string;
  versions?: VersionType[];
}

interface SectionType {
  id: number | string;
  name: string;
  subsections?: SubsectionType[];
}

interface GeneratedSlideType {
  id: number | string;
  title: string;
  content: string;
  sectionName: string;
  subsectionName: string;
  sectionColor: string;
}

export default function Generate() {

  const navigate = useNavigate();

  const proposalData: SectionType[] =
    JSON.parse(
      localStorage.getItem("proposalSections") || "[]"
    );

  const [slides] =
    useState<SectionType[]>(proposalData);

  const [activeSlide, setActiveSlide] =
    useState(0);

  const [zoom, setZoom] = useState(1);
  const [showAgent, setShowAgent] =
  useState(true);

  /* =========================
     SECTION COLORS
  ========================= */

  const sectionColors = [
    "from-blue-500 to-cyan-400",
    "from-violet-500 to-purple-400",
    "from-emerald-500 to-green-400",
    "from-orange-500 to-amber-400",
    "from-pink-500 to-rose-400",
  ];

  /* =========================
     GENERATE SLIDES
  ========================= */

  const generatedSlides = useMemo(() => {

    const slidesData: GeneratedSlideType[] = [];

    slides.forEach(
      (
        section: SectionType,
        sectionIndex: number
      ) => {

        const sectionColor =
          sectionColors[
            sectionIndex %
              sectionColors.length
          ];

        section.subsections?.forEach(
          (
            subsection: SubsectionType
          ) => {

            const content =
              subsection.versions?.find(
                (v: VersionType) =>
                  v.version ===
                  subsection.currentVersion
              )?.content || "";

            /* SPLIT CONTENT */

            const splitContent =
              content.match(
                /(.|[\r\n]){1,450}/g
              ) || [];

            /* CREATE MULTIPLE SLIDES */

            splitContent.forEach(
              (
                part: string,
                splitIndex: number
              ) => {

                slidesData.push({

                  id: `${subsection.id}-${splitIndex}`,

                  title:
                    splitContent.length > 1
                      ? `${subsection.name} (Part ${
                          splitIndex + 1
                        })`
                      : subsection.name,

                  content: part,

                  sectionName: section.name,

                  subsectionName:
                    subsection.name,

                  sectionColor,

                });

              }
            );

          }
        );

      }
    );

    return slidesData;

  }, [slides]);

const currentSlide: GeneratedSlideType =
  generatedSlides[activeSlide] || {
    id: "default-slide",
    title: "",
    content: "",
    sectionName: "",
    subsectionName: "",
    sectionColor:
      "from-blue-500 to-cyan-400",
  };

  return (

    <div className="h-screen flex overflow-hidden bg-[#EDF5FF]">

      {/* =========================================================
         SIDEBAR
      ========================================================= */}

      <div
        className="
          w-[320px]
          bg-white
          border-r
          border-[#E2E8F0]
          flex
          flex-col
          overflow-hidden
        "
      >

        {/* HEADER */}

        <div className="p-5 border-b border-[#E2E8F0]">

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
            className="
              mt-5
              w-full
              bg-[#2563EB]
              hover:bg-[#1D4ED8]
              text-white
              py-3
              rounded-2xl
              flex
              items-center
              justify-center
              gap-2
              font-medium
              transition
            "
          >
            <Plus size={18} />
            New Slide
          </button>

        </div>

        {/* =========================================================
            SLIDE NAVIGATION
          ========================================================= */}

          <div className="flex-1 overflow-y-auto px-3 py-4">

            {slides.map(
              (
                section: SectionType,
                sectionIndex: number
              ) => {

                const sectionColor =
                  sectionColors[
                    sectionIndex %
                      sectionColors.length
                  ];

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
                            content.match(
                              /(.|[\r\n]){1,300}/g
                            ) || [];

                          return (

                            <div
                              key={subsection.id}
                              className="
                                bg-white
                                border
                                border-[#E2E8F0]
                                rounded-2xl
                                p-2
                              "
                            >

                              {/* SUBSECTION TITLE */}

                              <div className="flex items-center justify-between mb-2">

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

                                <div
                                  className="
                                    text-[9px]
                                    bg-[#EFF6FF]
                                    text-[#2563EB]
                                    px-2
                                    py-1
                                    rounded-full
                                    font-bold
                                  "
                                >
                                  {splitContent.length}
                                </div>

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

                                        onClick={() =>
                                          setActiveSlide(
                                            slideIndex
                                          )
                                        }

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
                                              ? "border-[#2563EB] shadow-lg scale-[1.01]"
                                              : "border-[#E2E8F0]"
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
                                            bg-white
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
                                                  bg-white
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
                                              bg-white
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

                                        <div className="p-2 bg-white">

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
            bg-white
            border-b
            border-[#E2E8F0]
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

            <p
              className="
                text-sm
                text-[#64748B]
              "
            >
              Stateful Multi-Agent AI Applications
            </p>

          </div>

          <div className="flex items-center gap-4">

          {/* THEME */}

          <button
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
              text-sm
              text-[#0F172A]
              flex
              items-center
              gap-2
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
              px-5
              py-2.5
              rounded-2xl
              border
              border-[#D6E4FF]
              bg-white
              flex
              items-center
              gap-2
              shadow-sm
              hover:shadow-md
              transition-all
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
              bg-[#2563EB]
              hover:bg-[#1D4ED8]
              text-white
              px-6
              py-2.5
              rounded-2xl
              font-medium
              flex
              items-center
              gap-2
            "
          >
            <Play size={16} />
            Present
          </button>

          <button
            className="
              px-4
              py-2
              rounded-xl
              border
              border-[#D6E4FF]
              bg-white
              text-black
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              shadow-md
              hover:scale-[1.02]
              transition-all
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
            bg-gradient-to-br
            from-[#E0F2FE]
            to-[#BFDBFE]
          "
        >

          {/* =========================================================
            AGENT PANEL
          ========================================================= */}

          {showAgent && (
            <div
              className="
                absolute
                top-[78px]
                right-[135px]
                z-50
                w-[400px]
                bg-white
                rounded-[30px]
                shadow-[0_18px_60px_rgba(15,23,42,0.18)]
                border
                border-[#E2E8F0]
                overflow-hidden
              "
            >

              {/* HEADER */}

              <div
                className="
                  px-5
                  pt-4
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
                    w-7
                    h-7
                    rounded-full
                    hover:bg-[#F1F5F9]
                    flex
                    items-center
                    justify-center
                    text-[#94A3B8]
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
                    bg-white
                    px-4
                    pt-3
                    pb-2
                    shadow-sm
                  "
                >

                  {/* TEXTAREA */}

                  <textarea
                    placeholder="Ask me to edit, create, or style anything"
                    rows={2}
                    className="
                      w-full
                      resize-none
                      bg-transparent
                      outline-none
                      text-[13px]
                      leading-relaxed
                      text-[#0F172A]
                      placeholder:text-[#94A3B8]
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

                    {/* PLUS BUTTON */}

                    <button
                      className="
                        w-8
                        h-8
                        rounded-full
                        border
                        border-[#CBD5E1]
                        flex
                        items-center
                        justify-center
                        text-[#475569]
                        hover:bg-[#F8FAFC]
                      "
                    >
                      <Plus size={15} />
                    </button>

                    {/* SEND BUTTON */}

                    <button
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-[#2563EB]
                        hover:bg-[#1D4ED8]
                        flex
                        items-center
                        justify-center
                        text-white
                        shadow-md
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
                        px-3
                        py-1.5
                        rounded-full
                        bg-[#F8FAFC]
                        hover:bg-[#EFF6FF]
                        border
                        border-[#E2E8F0]
                        text-[11px]
                        font-medium
                        text-[#334155]
                        transition-all
                      "
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>

            </div>
          )}


          {/* =========================================================
            SLIDE CANVAS
          ========================================================= */}

          <div
            className="
              w-full
              h-full
              flex
              items-center
              justify-center
              p-10
            "
          >

            <div
              style={{
                transform: `scale(${zoom})`,
              }}
              className="
                w-[1180px]
                h-[660px]
                bg-white
                rounded-[42px]
                overflow-hidden
                shadow-2xl
                transition-all
                duration-300
              "
            >

              <div className="flex h-full">

                {/* LEFT */}

                <div
                  className="
                    w-[60%]
                    p-20
                    flex
                    flex-col
                    justify-center
                  "
                >

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
                      ${
                        currentSlide?.sectionColor ||
                        "from-blue-500 to-cyan-400"
                      }
                    `}
                  >
                    {currentSlide?.sectionName}
                  </div>

                  <h1
                    contentEditable
                    suppressContentEditableWarning
                    className="
                      text-6xl
                      font-bold
                      text-[#1E293B]
                      leading-[1.1]
                      outline-none
                    "
                  >
                    {currentSlide?.title}
                  </h1>

                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="
                      mt-8
                      text-xl
                      text-[#64748B]
                      leading-relaxed
                      whitespace-pre-line
                      outline-none
                    "
                  >
                    {currentSlide?.content}
                  </p>

                </div>

                {/* RIGHT */}

                <div
                  className={`
                    w-[40%]
                    relative
                    overflow-hidden
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    ${
                      currentSlide?.sectionColor ||
                      "from-[#4F46E5] via-[#6366F1] to-[#06B6D4]"
                    }
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
                      bg-white
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

                  {/* FLOATING SMALL CIRCLES */}

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

                  {/* MAIN IMAGE */}

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

          </div>

        </div>
          
      </div>
                  
    </div>

  );

}