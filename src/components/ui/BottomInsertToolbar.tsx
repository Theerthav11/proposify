import {
  Table,
  Shapes,
  LayoutTemplate,
  GitBranch,
  ChartNoAxesCombined,
  BadgePlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tool = {
  name: string;
  icon: LucideIcon;
};

function BottomInsertToolbar() {
  const tools: Tool[] = [
     {
        name: "Layout",
        icon: LayoutTemplate,
    },
    {
      name: "Table",
      icon: Table,
    },
    {
      name: "Diagrams",
      icon: GitBranch,
    },
    {
      name: "Shape",
      icon: Shapes,
    },
    {
      name: "Graph & Chart",
      icon:  ChartNoAxesCombined,
    },
    {
    name: "Icons",
    icon: BadgePlus,
  },
  ];

  return (
    <div
      className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2
        bg-white/80
        backdrop-blur-xl
        border
        border-gray-200
        shadow-xl
        rounded-xl
        px-2
        py-1
        gap-2
        flex
        items-center
        //gap-3
        z-50
      "
    >
      {tools.map((tool) => {
        const Icon = tool.icon;

        return (
          <div
            key={tool.name}
            className="relative group"
          >
            {/* ICON BUTTON */}

            <button
              className="
                p-3
                rounded-xl
                text-gray-600
                hover:bg-purple-50
                hover:text-purple-600
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <Icon size={17} />
            </button>

            {/* TOOLTIP */}

            <div
              className="
                absolute
                bottom-14
                left-1/2
                -translate-x-1/2
                bg-black
                text-white
                text-xs
                px-2
                py-1
                rounded-md
                opacity-0
                group-hover:opacity-100
                transition
                whitespace-nowrap
                pointer-events-none
              "
            >
              {tool.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BottomInsertToolbar;