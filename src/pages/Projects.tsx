import MainLayout from "../components/layout/MainLayout.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button.js";
import { Plus } from "lucide-react";

type FilterType =
  | "all"
  | "active"
  | "draft"
  | "completed";

type ProjectStatus =
  | "Active"
  | "Draft"
  | "Completed";


interface Project {
  id: number;
  name: string;
  status: ProjectStatus;
  updated: string;
}

export default function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] =
    useState<FilterType>("all");
  const [searchTerm, setSearchTerm] =
    useState<string>("");

  const projects: Project[] = [
    {
      id: 1,
      name: "Smart Building Management System",
      status: "Active",
      updated: "3 hours ago",
    },

    {
      id: 2,
      name: "AI Analytics Platform",
      status: "Active",
      updated: "1 day ago",
    },

    {
      id: 3,
      name: "Cloud Infrastructure Solution",
      status: "Draft",
      updated: "2 days ago",
    },

    {
      id: 4,
      name: "Cybersecurity Suite",
      status: "Active",
      updated: "3 days ago",
    },

    {
      id: 5,
      name: "IoT Device Monitoring System",
      status: "Draft",
      updated: "5 days ago",
    },

    {
      id: 6,
      name: "Data Analytics Dashboard",
      status: "Completed",
      updated: "1 week ago",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => {
      const matchesFilter =
        filter === "all" ||
        project.status.toLowerCase() === filter;

      const matchesSearch =
        project.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    }
  );
  const handleProjectNavigation = (
    project: Project
  ) => {
    if (project.status === "Draft") {
      navigate("/new-project");
    }

    else if (
      project.status === "Active"
    ) {
      navigate("/proposal-builder");
    }

    else if (
      project.status === "Completed"
    ) {
      navigate("/preview");
    }
  };

  const filters: FilterType[] = [
    "all",
    "active",
    "draft",
    "completed",
  ];

  return (
    <MainLayout>
      <div
        className="
          min-h-screen
          w-full
          bg-gradient-to-br
          from-[#E6E6E6]
          via-[#FDFCFD]
          to-[#D8D8D8]
          bg-fixed
          p-8
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">

        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-[#242525]">
            Projects
          </h1>

          <p className="text-[#797979] mt-1">
            Manage all your projects
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div
            className="
              flex
              items-center
              gap-3
              bg-white
              px-4
              py-3
              rounded-2xl
              border
              border-[#C6C6C6]
              shadow-sm
              w-[350px]
            "
          >
            <Search size={18} className="text-[#797979]" />

            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
                w-full
                bg-transparent
                outline-none
                text-sm
              "
            />
          </div>

          {/* Button */}
          <Button
              onClick={() => navigate("/new-project")}
              // className="
              //   flex
              //   items-center
              //   gap-2
              //   px-5
              //   py-3
              //   rounded-2xl
              //   bg-gradient-to-r
              //   from-[#242525] 
              //   to-[#4D4D4D]
              //   text-white
              //   font-medium
              //   shadow-lg
              //   hover:scale-105
              //   transition
              // "
            >
              <Plus size={18} />
              New Project
            </Button>

        </div>
      </div>

        {/* FILTERS */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {filters.map((f) => (
            <Button
              key={f}
              onClick={() => setFilter(f)}
              variant={
                filter === f
                  ? "default"
                  : "outline"
              }
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="
                group
                bg-[#FDFCFD]/90
                backdrop-blur-xl
                border
                border-[#D8D8D8]
                rounded-[28px]
                p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {/* TOP */}
              <div className="flex items-start justify-between mb-5">

                {/* ICON */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#242525]
                    to-[#4D4D4D]
                    flex
                    items-center
                    justify-center
                    shadow-md
                  "
                >
                  <FileText
                    size={26}
                    className="
                      text-white
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  />
                </div>

                {/* STATUS */}
                <span
                  className={`
                    px-3.5
                    py-1.5
                    rounded-full
                    text-[11px]
                    font-semibold
                    tracking-wide
                    shadow-sm
                    ${
                      project.status === "Active"
                        ? `
                          bg-[#E6E6E6]
                          text-[#242525]
                          border
                          border-[#C6C6C6]
                        `
                        : project.status === "Draft"
                        ? `
                          bg-[#F5F5F5]
                          text-[#555555]
                          border
                          border-[#E0E0E0]
                        `
                        : `
                          bg-[#D8D8D8]
                          text-[#242525]
                          border
                          border-[#BDBDBD]
                        `
                    }
                  `}
                >
                  {project.status}
                </span>
              </div>

              {/* CONTENT */}
              <div>
                <h3
                  className="
                    font-bold
                    text-[#242525]
                    text-lg
                    leading-snug
                    mb-2
                  "
                >
                  {project.name}
                </h3>

                <p className="text-sm text-[#797979] mb-5">
                  Updated {project.updated}
                </p>
              </div>

              {/* FOOTER */}
              <div className="flex  justify-end">

                {/* <span
                  className="
                    px-3
                    py-1.5
                    bg-[#242525]
                    text-[#FDFCFD]
                    text-[11px]
                    rounded-xl
                    font-semibold
                    tracking-wide
                  "
                >
                  {project.type}
                </span> */}

                <Button size="sm"
                  onClick={() =>
                    handleProjectNavigation(project)
                  }
                  // className="
                  //   px-4
                  //   py-2
                  //   bg-[#242525]
                  //   text-[#FDFCFD]
                  //   text-[12px]
                  //   rounded-xl
                  //   font-semibold
                  //   tracking-wide
                  //   hover:bg-[#3A3A3A]
                  //   hover:scale-105
                  //   transition-all
                  //   duration-300
                  // "
                >
                  View 
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}