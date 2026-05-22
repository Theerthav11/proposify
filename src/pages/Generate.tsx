import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
}

export default function Generate() {

  const navigate = useNavigate();

  const proposalData: SectionType[] =
    JSON.parse(
      localStorage.getItem("proposalSections") || "[]"
    );

  const [slides] =
    useState<SectionType[]>(proposalData);
  const [activeSlide, setActiveSlide] =useState(0);

  /* =========================
     GENERATE PPT SLIDES
  ========================= */

  const generatedSlides: GeneratedSlideType[] = [];

  slides.forEach((section) => {

    /* SECTION WITHOUT SUBSECTIONS */

    if (
      !section.subsections ||
      section.subsections.length === 0
    ) {

      generatedSlides.push({

        id: section.id,

        title: section.name,

        content: "",

      });

    }

    /* SECTION WITH SUBSECTIONS */

    else {

      section.subsections.forEach((sub) => {

        const content =
          sub.versions?.find(
            (v) =>
              v.version === sub.currentVersion
          )?.content || "";

        /* SPLIT LARGE CONTENT */

        const splitContent =
          content.match(/(.|[\r\n]){1,450}/g) || [];

        splitContent.forEach((part, index) => {

          generatedSlides.push({

            id: `${sub.id}-${index}`,

            title:
              splitContent.length > 1
                ? `${sub.name} (Part ${index + 1})`
                : sub.name,

            content: part,

          });

        });

      });

    }

  });

  return (

    <div className="h-screen bg-[#F1F5F9] flex overflow-hidden">

      {/* ================= LEFT PANEL ================= */}

      <div className="w-[20%] bg-[#F8FAFC] border-r border-[#E2E8F0] flex flex-col">

        {/* HEADER */}

        <div className="px-4 py-4 border-b border-[#E2E8F0] bg-white">

          <h2 className="text-lg font-semibold text-[#0F172A]">
            Presentation
          </h2>

        </div>

        {/* SLIDE LIST */}

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3">

          {generatedSlides.map((slide) => (

            <div
              key={slide.id}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-[#E2E8F0]
                overflow-hidden
                hover:border-[#93C5FD]
                hover:shadow-md
                transition-all
                cursor-pointer
              "
            >

              {/* THUMBNAIL */}

              <div className="h-[120px] bg-[#EAF3FF] relative overflow-hidden">

                <div className="absolute inset-0 flex">

                  {/* LEFT DESIGN */}

                  <div className="w-[60%] p-4 flex flex-col justify-center">

                    <div className="w-20 h-2 rounded bg-[#1E293B] mb-2" />

                    <div className="w-16 h-2 rounded bg-[#94A3B8] mb-1" />

                    <div className="w-24 h-2 rounded bg-[#CBD5E1]" />

                  </div>

                  {/* RIGHT DESIGN */}

                  <div className="w-[40%] bg-[#BFDBFE]" />

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-3">

                <h3 className="text-sm font-semibold text-[#0F172A] line-clamp-1">
                  {slide.title}
                </h3>

                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  {slide.content}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= RIGHT PANEL ================= */}

      <div className="flex-1 flex flex-col overflow-hidden">

        {/* TOP BAR */}

        <div className="h-[72px] bg-white border-b border-[#E2E8F0] flex items-center justify-between px-8">

          <div>

            <h1 className="text-2xl font-bold text-[#0F172A]">
              AI Presentation Builder
            </h1>

            <p className="text-sm text-[#64748B]">
              Edit and customize your presentation
            </p>

          </div>

          <button
            onClick={() => navigate("/preview")}
            className="
              bg-[#2563EB]
              hover:bg-[#1D4ED8]
              text-white
              px-6
              py-3
              rounded-2xl
              font-medium
              transition
            "
          >
            Preview
          </button>

        </div>

        {/* PREVIEW AREA */}

        <div className="flex-1 overflow-y-auto p-10 bg-[#F1F5F9]">

          <div className="space-y-10">

            {generatedSlides.map((slide, index) => (

              <div
                key={slide.id}
                className="
                  bg-white
                  rounded-[40px]
                  shadow-xl
                  overflow-hidden
                  min-h-[650px]
                  border
                  border-[#D6E4FF]
                "
              >

                {/* PPT SLIDE */}

                <div className="flex h-full">

                  {/* LEFT CONTENT */}

                  <div className="w-[60%] p-16 flex flex-col justify-center">

                    <p className="text-sm text-[#2563EB] mb-4 font-semibold uppercase">
                      Slide {index + 1}
                    </p>

                    <h1 className="text-5xl font-bold text-[#1E293B] leading-tight">
                      {slide.title}
                    </h1>

                    <div className="mt-8">

                      <p className="text-[#64748B] leading-relaxed whitespace-pre-line text-lg">
                        {slide.content}
                      </p>

                    </div>

                  </div>

                  {/* RIGHT DESIGN */}

                  <div className="w-[40%] bg-[#DCEEFF] relative flex items-center justify-center">

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[#DBEAFE]
                        to-[#BFDBFE]
                      "
                    />

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                      alt="ppt"
                      className="
                        w-[250px]
                        h-[250px]
                        object-contain
                        z-10
                      "
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}