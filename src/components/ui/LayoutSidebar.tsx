import { X } from "lucide-react";
import { slideLayouts } from "@/data/slideLayouts.js";

function LayoutSidebar({ onClose, onSelect }: any) {
  return (
    <div
      className="
        absolute
        right-0
        top-0
        h-full
        w-[420px]
        bg-white
        z-50
        shadow-2xl
        border-l
      "
    >
      {/* Header */}
      <div className="flex justify-between p-5 border-b">
        <div>
          <h1 className="text-2xl font-bold">
            Layouts
          </h1>

          <p
            className="
              text-sm
              text-[#64748B]
              mt-1
            "
          >
            Customize your presentation layout
          </p>
        </div>

        <button onClick={onClose}>
          <X />
        </button>
      </div>


      {/* Layout list */}
      <div
        className="
          grid
          grid-cols-2
          gap-4
          p-5
        "
      >
        {slideLayouts.map((layout) => (
          <div
            key={layout.id}
            onClick={() => onSelect(layout.id)}
            className="
              cursor-pointer
              border
              rounded-xl
              p-3
              hover:border-purple-500
            "
          >
            {/* Preview box */}
            <div
              className="
                relative
                h-24
                bg-gray-50
                border
                mb-2
              "
            >
              {layout.preview.map((box, i) => (
                <div
                  key={i}
                  className="
                    absolute
                    border-2
                    border-dashed
                    border-gray-400
                  "
                  style={{
                    left: `${box.x}%`,
                    top: `${box.y}%`,
                    width: `${box.w}%`,
                    height: `${box.h}%`,
                  }}
                />
              ))}
            </div>


            <p className="text-center text-sm">
              {layout.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutSidebar;