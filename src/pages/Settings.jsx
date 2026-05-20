import MainLayout from "../components/layout/MainLayout";
import { useState } from "react";

import { motion } from "framer-motion";

import {
  User,
  Bell,
  Shield,
  Globe,
  Moon,
  Save,
  ChevronRight,
} from "lucide-react";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [channelNotifications, setChannelNotifications] =
    useState(false);

  return (
    <MainLayout>
      <div
        className="
          min-h-screen
          bg-gradient-to-br
          from-[#E6E6E6]
          via-[#FDFCFD]
          to-[#D8D8D8]
          p-6
          lg:p-8
        "
      >
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#242525]">
            Settings
          </h1>

          <p className="text-[#797979] mt-2">
            Manage your account preferences and
            application settings
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
          
          {/* LEFT MENU */}
          <div
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-[#D8D8D8]
              rounded-3xl
              p-5
              shadow-md
              h-fit
            "
          >
            <div className="space-y-3">
              
              {[
                {
                  icon: User,
                  title: "Profile",
                },

                {
                  icon: Bell,
                  title: "Notifications",
                },

                {
                  icon: Shield,
                  title: "Security",
                },

                {
                  icon: Globe,
                  title: "Integrations",
                },

                {
                  icon: Moon,
                  title: "Appearance",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    key={index}
                    whileHover={{
                      x: 4,
                    }}
                    className="
                      w-full
                      h-14
                      px-4
                      rounded-2xl
                      flex
                      items-center
                      justify-between
                      bg-[#FDFCFD]
                      hover:bg-[#242525]
                      hover:text-white
                      text-[#242525]
                      transition-all
                      duration-300
                      group
                    "
                  >
                    <div className="flex items-center gap-3">
                      
                      <Icon size={18} />

                      <span className="font-medium">
                        {item.title}
                      </span>
                    </div>

                    <ChevronRight
                      size={16}
                      className="
                        group-hover:translate-x-1
                        transition-all
                      "
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="xl:col-span-2 space-y-7">
            
            {/* PROFILE */}
            <motion.div
              whileHover={{ y: -3 }}
              className="
                bg-white/80
                backdrop-blur-xl
                border
                border-[#D8D8D8]
                rounded-3xl
                p-7
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-4 mb-7">
                
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
                    text-white
                    shadow-md
                  "
                >
                  <User size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#242525]">
                    Profile Settings
                  </h2>

                  <p className="text-[#797979] mt-1">
                    Update your personal details
                  </p>
                </div>
              </div>

              {/* FORM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <div>
                  <label className="text-sm text-[#797979]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="
                      mt-2
                      w-full
                      h-12
                      px-4
                      rounded-2xl
                      border
                      border-[#C6C6C6]
                      bg-[#FDFCFD]
                      outline-none
                      focus:border-[#242525]
                    "
                  />
                </div>

                <div>
                  <label className="text-sm text-[#797979]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="
                      mt-2
                      w-full
                      h-12
                      px-4
                      rounded-2xl
                      border
                      border-[#C6C6C6]
                      bg-[#FDFCFD]
                      outline-none
                      focus:border-[#242525]
                    "
                  />
                </div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  mt-7
                  h-12
                  px-6
                  rounded-2xl
                  bg-[#242525]
                  hover:bg-[#3A3A3A]
                  text-white
                  font-medium
                  shadow-lg
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                "
              >
                <Save size={18} />
                Save Changes
              </motion.button>
            </motion.div>

            {/* NOTIFICATIONS */}
            <motion.div
              whileHover={{ y: -3 }}
              className="
                bg-white/80
                backdrop-blur-xl
                border
                border-[#D8D8D8]
                rounded-3xl
                p-7
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-4 mb-7">
                
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
                    text-white
                    shadow-md
                  "
                >
                  <Bell size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#242525]">
                    Notifications
                  </h2>

                  <p className="text-[#797979] mt-1">
                    Manage your notification
                    preferences
                  </p>
                </div>
              </div>

              {/* TOGGLES */}
              <div className="space-y-5">
                
                {/* EMAIL */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    p-5
                    rounded-2xl
                    bg-[#FDFCFD]
                    border
                    border-[#D8D8D8]
                  "
                >
                  <div>
                    <h3 className="font-semibold text-[#242525]">
                      Email Notifications
                    </h3>

                    <p className="text-sm text-[#797979] mt-1">
                      Receive proposal updates by
                      email
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setEmailNotifications(
                        !emailNotifications
                      )
                    }
                    className={`
                      w-14
                      h-8
                      rounded-full
                      transition-all
                      duration-300
                      relative
                      ${
                        emailNotifications
                          ? "bg-[#242525]"
                          : "bg-[#C6C6C6]"
                      }
                    `}
                  >
                    <div
                      className={`
                        absolute
                        top-1
                        w-6
                        h-6
                        rounded-full
                        bg-white
                        transition-all
                        duration-300
                        ${
                          emailNotifications
                            ? "left-7"
                            : "left-1"
                        }
                      `}
                    />
                  </button>
                </div>

                {/* CHANNEL */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    p-5
                    rounded-2xl
                    bg-[#FDFCFD]
                    border
                    border-[#D8D8D8]
                  "
                >
                  <div>
                    <h3 className="font-semibold text-[#242525]">
                      Channel Notifications
                    </h3>

                    <p className="text-sm text-[#797979] mt-1">
                      Receive updates from
                      connected channels
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setChannelNotifications(
                        !channelNotifications
                      )
                    }
                    className={`
                      w-14
                      h-8
                      rounded-full
                      transition-all
                      duration-300
                      relative
                      ${
                        channelNotifications
                          ? "bg-[#242525]"
                          : "bg-[#C6C6C6]"
                      }
                    `}
                  >
                    <div
                      className={`
                        absolute
                        top-1
                        w-6
                        h-6
                        rounded-full
                        bg-white
                        transition-all
                        duration-300
                        ${
                          channelNotifications
                            ? "left-7"
                            : "left-1"
                        }
                      `}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}