import { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaHome, FaNewspaper, FaUser } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "sobre", label: "Sobre", icon: FaUser },
  { id: "servicos", label: "Serviço", icon: FaBriefcase },
  { id: "blog", label: "Blog", icon: FaNewspaper },
];

export const Navbar=()=>{
  const [active, setActive] = useState("home");
  const sectionRefs = useRef({});

  // const [form, setForm] = useState({ name: "", email: "", message: "" });
  // const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };
  return(
    <nav className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
        <div className="flex items-center gap-1 rounded-full border-2 border-[#0D0D0D] bg-white/95 p-1.5 shadow-[0_8px_24px_rgba(13,13,13,0.2)] backdrop-blur">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00] ${
                  isActive ? "bg-[#FF3D00] text-white" : "text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white"
                }`}
              >
                <item.icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
  )
}