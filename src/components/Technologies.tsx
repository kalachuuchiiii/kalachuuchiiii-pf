import { motion } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiSupabase,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";

export const Technologies = () => {
    
  const tech = [
    { name: "TypeScript", icon: <SiTypescript className="size-40" style={{ color: "#3178C6" }} /> },
    { name: "React", icon: <SiReact className="size-40" style={{ color: "#61DAFB" }} /> },
    { name: "JavaScript", icon: <SiJavascript className="size-40" style={{ color: "#F7DF1E" }} /> },
    { name: "Supabase", icon: <SiSupabase className="size-40" style={{ color: "#3ECF8E" }} /> },
    { name: "Redux", icon: <SiRedux className="size-40" style={{ color: "#764ABC" }} /> },
    { name: "MongoDB", icon: <SiMongodb className="size-40" style={{ color: "#13AA52" }} /> },
    { name: "Express.js", icon: <SiExpress className="size-40" style={{ color: "#000000" }} /> },
    { name: "Node.js", icon: <SiNodedotjs className="size-40" style={{ color: "#339933" }} /> },
    { name: "HTML5", icon: <SiHtml5 className="size-40" style={{ color: "#E34C26" }} /> },
    { name: "CSS3", icon: <SiCss3 className="size-40" style={{ color: "#1572B6" }} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="size-40" style={{ color: "#06B6D4" }} /> },
    { name: "Vite", icon: <SiVite className="size-40" style={{ color: "#646CFF" }} /> },
    { name: "Vercel", icon: <SiVercel className="size-40" style={{ color: "#000000" }} /> },
    { name: "Next.js", icon: <SiNextdotjs className="size-40" style={{ color: "#000000" }} /> },
  ];
  return (
    <div className="w-full h-screen overflow-hidden py-20 bg-white">
  
      <motion.div
        className="flex"
        style={{ width: "200%" }}
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
        }}
      >
     
        <div className="flex space-x-12">
          {tech.map(({ icon, name }, idx) => (
            <div
              key={`a-${idx}`}
              className="flex flex-col items-center text-zinc-100 min-w-[80px]"
            >
              {icon}
              <span className="text-lg mt-2 text-zinc-400">{name}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-12" aria-hidden="true">
          {tech.map(({ icon, name }, idx) => (
            <div
              key={`b-${idx}`}
              className="flex flex-col items-center text-zinc-100 min-w-[80px]"
            >
              {icon}
              <span className="text-sm mt-2 text-zinc-400">{name}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <p className="text-black w-full text-center text-6xl indie-flower my-75">And more tools !!</p>
    </div>
  );
};
