


"use client";

import { useState, useEffect, useRef } from "react";

type SubItem = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  href: string;
  subItems: SubItem[];
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems: Record<string, MenuItem> = {
    home: { label: "Home", href: "/", subItems: [] },
    solutions: {
      label: "Solutions",
      href: "/solutions",
      subItems: [
        { label: "Command Control & Safety", href: "/solutions/command-control-safety" },
        { label: "Predictive Failure Intelligence", href: "/solutions/predictive-failure" },
        { label: "Digital Twin & Simulation", href: "/solutions/digital-twin" },
        { label: "Compliance & Audit Automation", href: "/solutions/compliance-audit" },
      ],
    },
    technology: {
      label: "Technology",
      href: "/technology",
      subItems: [
        { label: "System Architecture", href: "/technology/system-architecture" },
        { label: "Edge AI Agent", href: "/technology/edge-ai-agent" },
        { label: "Command Gateway", href: "/technology/command-gateway" },
        { label: "Physics-Informed AI", href: "/technology/physics-informed-ai" },
        { label: "Digital Twin Engine", href: "/technology/digital-twin-engine" },
        { label: "Central AI Brain", href: "/technology/central-ai-brain" },
      ],
    },
    useCases: {
      label: "Use Cases",
      href: "/use-cases",
      subItems: [
        { label: "EV Charging Networks", href: "/use-cases/ev-charging" },
        { label: "Solar & Battery Plants", href: "/use-cases/solar-battery" },
        { label: "Industrial Manufacturing", href: "/use-cases/industrial-manufacturing" },
        { label: "Grid Operations", href: "/use-cases/grid-operations" },
      ],
    },
    resources: {
      label: "Resources",
      href: "/resources",
      subItems: [
        { label: "Whitepapers", href: "/resources/whitepapers" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "Blog", href: "/resources/blog" },
      ],
    },
    company: {
      label: "Company",
      href: "/company",
      subItems: [
        { label: "About", href: "/company/about" },
        { label: "Leadership", href: "/company/leadership" },
        { label: "Careers", href: "/company/careers" },
        { label: "Press", href: "/company/press" },
      ],
    },
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const activeItem =
    openDropdown && menuItems[openDropdown as keyof typeof menuItems];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      {/* NAV BAR */}
      <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        {/* LOGO */}
        <div className="w-8 h-8 bg-white rounded" />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          {Object.entries(menuItems).map(([key, item]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className={`transition font-medium text-[15px] ${isScrolled ? "text-[#273441] hover:text-[#007DCD]" : "text-white hover:text-white/80"
                  }`}
              >
                {item.label}
              </a>
            </div>
          ))}

          <a
            className={`transition font-medium text-[15px] ${isScrolled ? "text-[#273441] hover:text-[#007DCD]" : "text-white hover:text-white/80"
              }`}
            href="/contact"
          >
            Contact
          </a>

        </div>

        <button
          className={`${isScrolled ? "bg-[#007DCD] text-white hover:bg-[#006bb0]" : "bg-black text-white "
            } rounded-full px-6 py-2 text-[14px] font-bold transition-colors cursor-pointer duration-300 shadow-sm`}
        >
          Get started
        </button>




        {/* MOBILE TOGGLE */}
        <button
          className={`md:hidden ${isScrolled ? "text-[#273441]" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MEGA DROPDOWN (DESKTOP) */}
      {
        activeItem && activeItem.subItems.length > 0 && (
          <div
            className="absolute left-0 w-screen bg-white border-t shadow-xl animate-mega"
            style={{ top: "60px" }}
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto max-w-7xl px-20 py-16 grid grid-cols-2 gap-20">
              {/* LEFT */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-8">
                    {activeItem.label}
                  </p>

                  <ul className="space-y-5 text-lg text-gray-700 font-medium">
                    {activeItem.subItems.map((sub) => (
                      <li key={sub.label}>
                        <a href={sub.href} className="hover:text-black">
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-16 w-fit rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-700">
                  Contact us
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[420px]  overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  className="absolute inset-0 h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white text-sm font-medium">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Learn about careers at KONUX
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* MOBILE MENU */}
      {
        isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            {Object.entries(menuItems).map(([key, item]) => (
              <div key={key}>
                <button
                  className="w-full flex justify-between px-4 py-3 text-sm"
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === key ? null : key
                    )
                  }
                >
                  {item.label}
                  {item.subItems.length > 0 && "▾"}
                </button>

                {openMobileDropdown === key &&
                  item.subItems.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-6 py-2 text-xs text-gray-600"
                    >
                      {sub.label}
                    </a>
                  ))}
              </div>
            ))}
          </div>
        )
      }



    </nav >
  );
}
