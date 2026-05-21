import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../fonts.css"; // Importing your custom font layout

import {
  FiArrowRight,
  FiCheck,
  FiSun,
  FiMoon,
  FiUsers,
  FiUser,
  FiPhone,
  FiVideo,
  FiAward,
} from "react-icons/fi";
import { HiArrowUp } from 'react-icons/hi';
import logo from "../assets/fata.svg";
import landingImg from "../assets/landing.jpg"; // Imported landing image

import {
  FaTelegramPlane,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function LandingPage() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("am"); // "en" for English, "am" for Amharic

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const contactInfo = {
    telegram: "https://t.me/wubese24",
    email: "mailto:jemaricreativestudio@gmail.com",
    whatsapp: "https://wa.me/251923394813",
    phone: "tel:+251923394813",
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Content dictionary for both English and Amharic languages
  const content = {
    en: {
      bonus: {
        videoBadge: "Free Bonus Video Editing",
      },
      hero: {
        title1: "Busy Schedule?",
        title2: "Build Real Design Skills In Your Free Time.",
        desc: "Fata kihlot helps busy students, employees, and freelancers access practical graphic design training that perfectly fits into their daily schedules.",
        ctaStart: "Start Your Journey",
      },
      programs: {
        badge: "PROGRAMS",
        title: "Training Type",
        pMentorship: "Private Training",
        pMentorshipDesc: "A personalized 1-on-1 learning experience designed around your goals, pace, and preferred schedule.",
        cCohorts: "Small Group Training",
        cCohortsDesc: "A collaborative learning experience where learners study together through shared sessions, agreed schedules, and group accountability.",
        privateFeatures: [
          "Fully flexible scheduling",
          "Learn at your own pace",
          "Direct 1-on-1 mentor feedback",
          "Structured practical assignments",
          "Personal portfolio development",
        ],
        groupFeatures: [
          "Shared agreed class schedules",
          "Shared learning space or sessions",
          "Collaborative group learning",
          "Structured practical assignments",
          "Personal portfolio development",
        ],
      },
      curriculum: {
        badge: "CURRICULUM",
        title: "What You’ll Learn",
        desc: "A practical step-by-step training program focused on helping you create professional work, build confidence, and prepare for freelance or client-based design projects.",
        photoshopBadge: "Adobe Photoshop",
        illustratorBadge: "Adobe Illustrator",
        indesignBadge: "Adobe InDesign",
        items: [
          {
            title: "Basic Concepts Of Graphic Design",
            icon: "fundamentals",
            desc: "Understand the core principles behind strong visual communication and learn how professional designers think before creating any design.",
            lessonsTitle: "What You’ll Learn:",
            lessons: ["Concepts of Graphic Design", "Elements of Graphic Design", "Principles of Graphic Design"],
          },
          {
            title: "Raster Graphics Design - Adobe Photoshop ",
            icon: "photoshop",
            desc: "Learn professional photo editing and visual composition techniques used for social media, advertising, and digital marketing.",
            lessonsTitle: "Projects Included:",
            lessons: ["Poster Design", "Banner & Flyer Design", "Social Media Ads Design", "Thumbnail Design"],
          },
          {
            title: "Vector Graphic Design - Adobe Illustrator",
            icon: "illustrator",
            desc: "Create scalable vector artwork and build professional brand identity systems for businesses and personal brands.",
            lessonsTitle: "Projects Included:",
            lessons: ["Logo Design Process", "Branding Identity System", "Business Card Design", "Visual Effects"],
          },
          {
            title: "Multi-Page Layout Design - Adobe InDesign",
            icon: "indesign",
            desc: "Learn how to structure professional multi-page documents for print and digital publishing using modern layout systems.",
            lessonsTitle: "Projects Included:",
            lessons: ["Corporate Brochure Design", "Magazine Layout Design", "Professional ID Card Design"],
          },
          {
            title: "Portfolio Development",
            icon: "portfolio",
            desc: "Bring everything together into a polished portfolio that showcases your creativity, technical skills, and readiness for freelance work or professional opportunities.",
            lessonsTitle: "",
            lessons: [],
          },
        ],
      },
      experience: {
        badge: "EXPERIENCE",
        title: "Reliable Skill Training",
        desc: "For over 2.5 years, we have been providing graphic design skills training, focusing on practical projects and clear, step-by-step guidance",
      },
      contact: {
        badge: "GET IN TOUCH",
        title: "Begin Your Training",
        desc: "Whether you prefer personal 1-on-1 mentorship or collaborative group sessions, message us on WhatsApp to ask questions or discuss your schedule.",
        ctaWhatsapp: "Chat on WhatsApp",
        call: "Call Us",
        telegram: "Telegram",
        email: "Email Us",
      },
    },
    am: {
      bonus: {
        videoBadge: "ነጻ ተጨማሪ ቪዲዮ ኤዲቲንግ",
      },
      hero: {
        title1: "ጊዜ አጥተዋል?",
        title2: "በትርፍ ጊዜዎ የዲዛይን ክህሎት ይገንቡ!",
        desc: "ፋታ ክህሎት በሥራ የተጠመዱ ተማሪዎችን፣ ሠራተኞችን እና ፍሪላንሰሮችን ከዕለት ተዕለት መርሃ ግብራቸው ጋር በሚስማማ መልኩ ተግባራዊ የግራፊክ ዲዛይን ሥልጠና እንዲያገኙ ያግዛል።",
        ctaStart: "ጉዞዎን ይጀምሩ",
      },
      programs: {
        badge: "አይነት",
        title: "የስልጠና አይነት",
        pMentorship: "የግል ሥልጠና (1-ለ-1)",
        pMentorshipDesc: "ከእርስዎ ግቦች፣ ፍጥነት እና ከሚመርጡት የጊዜ ሰሌዳ ጋር ተጣጥሞ የተዘጋጀ ልዩ የ 1-ለ-1 ሥልጠና",
        cCohorts: "የቡድን ሥልጠና",
        cCohortsDesc: "ሰልጣኞች በጋራ ክፍለ-ጊዜዎች፣ በተስማሙበት የጊዜ ሰሌዳ እና በጋራ አብረው የሚሰለጥኑበት መንገድ",
        privateFeatures: [
          "Private Features Details Hidden Dynamic Key",
          "ሙሉ በሙሉ ተለዋዋጭ የጊዜ ሰሌዳ",
          "በራስዎ የመማር ፍጥነት መማር",
          "ቀጥተኛ የ 1-ለ-1 ሥልጠና",
          "የተዋቀሩ ተግባራዊ የሥራ ልምምዶች",
          "የግል ፖርትፎሊዮ ማዳበር",
        ],
        groupFeatures: [
          "በስምምነት የተያዙ የጋራ መርሃ ግብሮች",
          "የጋራ የሥልጠና ቦታ ወይም ክፍለ-ጊዜዎች",
          "የቡድን ሥልጠና",
          "የተዋቀሩ ተግባራዊ የሥራ ልምምዶች",
          "የግል ፖርትፎሊዮ ማዳበር",
        ],
      },
      curriculum: {
        badge: "የሥልጠና ፕሮግራም",
        title: "የሚማሩት ዋና ዋና ነገሮች",
        desc: "ሙያዊ ሥራዎችን ለመስራት፣ በራስ መተማመንን ለመገንባት እና ለፍሪላንስ ወይም ለደንበኛ ፕሮጀክቶች ሙሉ በሙሉ ዝግጁ የሚያደርግ በተግባር ላይ ያተኮረ የደረጃ በደረጃ ሥልጠና።",
        photoshopBadge: "አዶቤ ፎቶሾፕ",
        illustratorBadge: "አዶቤ ኢሉስትሬተር",
        indesignBadge: "አዶቤ ኢንዲዛይን",
        items: [
          {
            title: "የግራፊክ ዲዛይን መሰረታዊ ፅንሰ-ሀሳቦች",
            icon: "fundamentals",
            desc: "የጠንካራ የእይታ ኮሙኒኬሽን ዋና መርሆዎችን ይረዱ፤ እንዲሁም ፕሮፌሽናል ዲዛይነሮች ዲዛይን ከመጀመራቸው በፊት እንዴት እንደሚያስቡ ይማሩ።",
            lessonsTitle: "የሚማሩት ዋና ዋና ነገሮች፦",
            lessons: ["የግራፊክ ዲዛይን ፅንሰ-ሀሳቦች ", "የግራፊክ ዲዛይን ክፍሎች ", "የግራፊክ ዲዛይን መርሆዎች "],
          },
          {
            title: "የራስተር ግራፊክስ ዲዛይን - አዶቤ ፎቶሾፕ ",
            icon: "photoshop",
            desc: "ለማህበራዊ ሚዲያ፣ ለማስታወቂያ እና ለዲጂታል ማርኬቲንግ የሚያገለግሉ ፕሮፌሽናል የፎቶ ኤዲቲንግ እና የእይታ ጥንቅር ቴክኒኮችን ይማሩ።",
            lessonsTitle: "የሚካተቱ ፕሮጀክቶች፦",
            lessons: ["የፖስተር ዲዛይን ", "የባነር እና የፍላየር ዲዛይን ", "የማህበራዊ ሚዲያ ማስታወቂያዎች ዲዛይን ", "የታምብኔል ዲዛይን "],
          },
          {
            title: "የቬክተር ግራፊክስ ዲዛይን - አዶቤ ኢሉስትሬተር",
            icon: "illustrator",
            desc: "ጥራታቸውን የማይቀንሱ የቬክተር ሥራዎችን ይፍጠሩ፤ እንዲሁም ለድርጅቶች እና ለግል ብራንዶች የሚሆኑ ፕሮፌሽናል የብራንድ መለያዎችን ይገንቡ።",
            lessonsTitle: "የሚካተቱ ፕሮጀክቶች፦",
            lessons: ["የሎጎ ዲዛይን ሂደት ", "የብራንድ መለያ ሥርዓት ", "የቢዝনেস ካርድ ዲዛይን ", "ቪዥዋል ኢፌክትስ "],
          },
          {
            title: "ባለብዙ-ገጽ አቀማመጥ ዲዛይን - አዶቤ ኢንዲዛይን",
            icon: "indesign",
            desc: "ዘመናዊ የሌአውት ሥርዓቶችን በመጠቀም ለህትመት እና ለዲጂታል እትሞች የሚሆኑ ፕሮፌሽናል ባለብዙ-ገጽ ሰነዶችን እንዴት ማዋቀር እንደሚችሉ ይማሩ።",
            lessonsTitle: "የሚካተቱ ፕሮጀክቶች፦",
            lessons: ["የድርጅት ብሮሹር ዲዛይን ", "የመጽሔት ሌአውት ዲዛይን ", "ፕሮፌሽናል የመታወቂያ ካርድ ዲዛይን "],
          },
          {
            title: "የፖርትፎሊዮ ግንባታ",
            icon: "portfolio",
            desc: "የተማሩትን ክህሎቶች በሙሉ በማጣመር የፈጠራ ችሎታዎን፣ ቴክኒካዊ ብቃትዎን እና ለፍሪላንስ ሥራ ወይም ለፕሮፌሽናል ዕድሎች ያለዎትን ዝግጁነት የሚያሳይ ውብ ፖርትፎሊዮ ይገንቡ።",
            lessonsTitle: "",
            lessons: [],
          },
        ],
      },
      experience: {
        badge: "የሥራ ልምድ",
        title: "አስተማማኝ የክህሎት ሥልጠና",
        desc: "ከ2.5 ዓመታት በላይ የዲዛይን ትምህርትን በተግባራዊ ፕሮጀክቶች እና ግልጽ በሆኑ እርምጃዎች ላይ በማድረግ በሥዕላዊ ዲዛይን ክህሎት ሥልጠና ሰጥተናል።",
      },
      contact: {
        badge: "ያግኙን",
        title: "ሥልጠናዎን ይጀምሩ",
        desc: "የግል (1 ለ 1) ሥልጠና ወይም የቡድን ትምህርት ቢመርጡ፤ ስለ ፕሮግራምዎ ለመወያየት ወይም ጥያቄዎችን ለመጠየቅ በዋትስአፕ ያናግሩን።",
        ctaWhatsapp: "በዋትስአፕ ያናግሩን",
        call: "ይደውሉልን",
        telegram: "ቴሌግራም",
        email: "ኢሜይል ያድርጉልን",
      },
    },
  };

  const t = content[lang] || content["en"];

  return (
    <div
      className={`min-h-screen overflow-x-hidden antialiased transition-colors duration-300 ${
        darkMode ? "bg-[#070b14] text-slate-300" : "bg-slate-50 text-slate-700"
      }`}
      style={{
        fontFamily: lang === "am" ? "'AmharicFont', sans-serif" : "'Poppins', sans-serif",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
          html {
            scroll-behavior: smooth;
          }
        `,
        }}
      />

      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] lg:w-[700px] h-[350px] sm:h-[550px] lg:h-[700px] rounded-full blur-[120px] opacity-20 ${
            darkMode ? "bg-amber-500" : "bg-amber-200"
          }`}
        />
        <div
          className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] ${
            darkMode ? "opacity-30" : "opacity-10"
          }`}
        />
      </div>

      {/* HEADER */}
     <header
  className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl ${
    darkMode
      ? "bg-[#070b14]/80 border-slate-900"
      : "bg-white/80 border-slate-200"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
    
    {/* LOGO */}
    <a
      href="#hero"
      onClick={(e) => scrollToSection(e, "hero")}
      className="flex items-center shrink-0"
    >
      <img
        src={logo}
        alt="Fata Kihlot Logo"
        className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
      />
    </a>

    {/* ACTION BUTTONS */}
    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
      
      {/* LANGUAGE TOGGLE */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLang(lang === "en" ? "am" : "en")}
        className={`px-2.5 sm:px-3 py-2 text-[11px] sm:text-xs font-bold rounded-md border transition-colors ${
          darkMode
            ? "border-slate-800 bg-slate-900 text-amber-400 hover:border-slate-700"
            : "border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
        }`}
      >
        {lang === "en" ? "አማ" : "EN"}
      </motion.button>

      {/* DARK MODE TOGGLE */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 sm:p-2.5 rounded-xl border transition-colors ${
          darkMode
            ? "border-slate-800 bg-slate-900 text-slate-400"
            : "border-slate-200 bg-white text-slate-700"
        }`}
      >
        {darkMode ? (
          <FiSun size={16} className="sm:w-[18px] sm:h-[18px]" />
        ) : (
          <FiMoon size={16} className="sm:w-[18px] sm:h-[18px]" />
        )}
      </motion.button>
    </div>
  </div>
</header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative z-10 min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={landingImg}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div
            className={`absolute inset-0 transition-colors duration-300 ${
              darkMode
                ? "bg-gradient-to-b from-[#070b14]/90 via-[#070b14]/85 to-[#070b14]"
                : "bg-gradient-to-b from-white/95 via-white/85 to-slate-50"
            }`}
          />
        </div>

        {/* Content Wrapper Animated with Framer Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-8 py-12"
        >
          <div className="space-y-6">
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] ${darkMode ? "text-white" : "text-slate-950"}`}>
              {t.hero.title1}
              <span className="block mt-2 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>

            <p className={`max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-normal leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              {t.hero.desc}
            </p>
          </div>

          {t.bonus?.videoBadge && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-md text-[11px] sm:text-xs font-medium border transition-colors duration-300 ${
                darkMode
                  ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                  : "bg-orange-50 text-orange-700 border-orange-200"
              }`}
            >
              <FiVideo className="animate-pulse flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{t.bonus.videoBadge}</span>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto pt-2">
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md text-sm font-bold shadow-lg transition-all ${
                darkMode
                  ? "bg-amber-500 text-black hover:bg-amber-400"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              {t.hero.ctaStart}
              <FiArrowRight />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500">{t.programs.badge}</span>
            <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
              {t.programs.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-14">
            {[
              {
                icon: <FiUser />,
                title: t.programs.pMentorship,
                desc: t.programs.pMentorshipDesc,
                features: t.programs.privateFeatures,
              },
              {
                icon: <FiUsers />,
                title: t.programs.cCohorts,
                desc: t.programs.cCohortsDesc,
                features: t.programs.groupFeatures,
              },
            ].map((card, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                key={index}
                className={`rounded-3xl border p-6 sm:p-8 space-y-6 transition-colors ${
                  darkMode ? "bg-[#0d1321]/60 border-slate-900" : "bg-white border-slate-200"
                }`}
              >
                <div className="text-amber-500 text-2xl">{card.icon}</div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-slate-950"}`}>
                    {card.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {card.desc}
                  </p>
                </div>
                <ul className="space-y-3 text-sm">
                  {card.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheck className="text-amber-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section
        id="curriculum"
        className={`relative z-10 py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-y transition-colors duration-300 ${
          darkMode ? "border-slate-900 bg-[#070b14]" : "border-slate-200 bg-[#f8fafc]"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-regular uppercase tracking-[0.3em] text-amber-500 block">
                  {t.curriculum.badge}
                </span>
                <h2 className={`text-3xl sm:text-4xl font-black tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
                  {t.curriculum.title}
                </h2>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {t.curriculum.desc}
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-3 max-w-xs">
                <div className="inline-flex items-center gap-3 px-3 py-2 rounded-lg border text-xs bg-blue-500/5 text-blue-400 border-blue-500/20 w-full">
                  <span className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-mono font-black bg-blue-500 text-[#070b14] shrink-0">Ps</span>
                  {t.curriculum.photoshopBadge}
                </div>
                <div className="inline-flex items-center gap-3 px-3 py-2 rounded-lg border text-xs bg-orange-500/5 text-orange-400 border-orange-500/20 w-full">
                  <span className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-mono font-black bg-orange-500 text-[#070b14] shrink-0">Ai</span>
                  {t.curriculum.illustratorBadge}
                </div>
                <div className="inline-flex items-center gap-3 px-3 py-2 rounded-lg border text-xs bg-pink-500/5 text-pink-400 border-pink-500/20 w-full">
                  <span className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-mono font-black bg-pink-500 text-[#070b14] shrink-0">Id</span>
                  {t.curriculum.indesignBadge}
                </div>
              </div>
            </div>

            {/* Right Column: Clean Read-Only Modules */}
            <div className="lg:col-span-8 space-y-4">
              {t.curriculum.items.map((item, index) => {
                const isFinalItem = index === t.curriculum.items.length - 1;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    key={index}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isFinalItem
                        ? "border-amber-500/30 bg-amber-500/[0.01]"
                        : darkMode ? "bg-[#0c1220] border-slate-900/80" : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="w-full p-5 sm:p-6 flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className={`text-xs font-mono font-bold tracking-wider ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
                            0{index + 1}
                          </span>
                          <h3 className={`text-sm sm:text-base font-regular tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
                            {item.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="hidden sm:flex gap-1.5">
                            {item.title.includes("Photoshop") && (
                              <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border-blue-500/20">PS</span>
                            )}
                            {item.title.includes("Illustrator") && (
                              <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border-orange-500/20">AI</span>
                            )}
                            {item.title.includes("InDesign") && (
                              <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border-pink-500/20">ID</span>
                            )}
                            {isFinalItem && (
                              <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-amber-500 text-black">Milestone</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-12 border-y transition-colors duration-300 ${
          darkMode ? "border-slate-900 bg-slate-950/20" : "border-slate-200 bg-white"
        }`}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className={`p-3 rounded-xl border w-fit ${
              darkMode ? "bg-slate-900/50 border-slate-800 text-amber-400" : "bg-amber-50 border-amber-100 text-amber-600"
            }`}>
              <FiAward size={28} />
            </div>

            <div className="space-y-2">
              <span className="block text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">
                {t.experience.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
                {t.experience.title}
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-2xl border flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center ${
              darkMode ? "bg-slate-900/30 border-slate-900" : "bg-slate-50/70 border-slate-100"
            }`}>
              <div className="flex-shrink-0">
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-amber-500">
                  2.5+
                </div>
                <div className={`text-xs uppercase tracking-wider font-medium mt-1 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                  Years Exp.
                </div>
              </div>

              <div className={`hidden sm:block h-12 w-px ${darkMode ? "bg-slate-800" : "bg-slate-200"}`} />

              <p className={`font-regular sm:text-lg ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                {t.experience.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500">{t.contact.badge}</span>
            <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
              {t.contact.title}
            </h2>
            <p className={`text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              {t.contact.desc}
            </p>
          </div>

          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 shadow-md transition-colors"
          >
            <FaWhatsapp className="text-xl" />
            {t.contact.ctaWhatsapp}
          </motion.a>

          <div className="grid grid-cols-3 gap-4">
            {[
              { href: contactInfo.phone, icon: <FiPhone className="text-2xl text-amber-500" />, label: t.contact.call },
              { href: contactInfo.telegram, icon: <FaTelegramPlane className="text-2xl text-amber-500" />, label: t.contact.telegram },
              { href: contactInfo.email, icon: <FaEnvelope className="text-2xl text-amber-500" />, label: t.contact.email }
            ].map((link, idx) => (
              <motion.a
                key={idx}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                href={link.href}
                className={`p-5 rounded-xl border flex flex-col items-center gap-2 transition-colors ${
                  darkMode ? "bg-[#0d1321]/60 border-slate-900 hover:border-amber-500" : "bg-white border-slate-200 hover:border-amber-500"
                }`}
              >
                {link.icon}
                <span className="text-sm font-medium">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`relative z-10 py-10 px-6 border-t text-xs transition-colors duration-300 ${
        darkMode ? "border-slate-800 bg-slate-950 text-slate-400" : "border-slate-200 bg-slate-50 text-slate-500"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

          {/* Left: Logo Section */}
          <div className="flex items-center md:w-1/3 w-full justify-center md:justify-start">
            <img
              src={logo}
              alt="Fata Kihlot logo"
              className="h-7 w-auto opacity-85 hover:opacity-100 transition-opacity duration-200 select-none"
            />
          </div>

          {/* Center: Back to Top Button */}
          <div className="flex items-center md:w-1/3 w-full justify-center order-first md:order-none">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`group flex items-center gap-2 py-4 px-4 rounded-full border text-[11px] font-semibold tracking-wide uppercase transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                darkMode
                  ? "border-slate-800 hover:border-slate-700 hover:text-slate-100 bg-slate-900 focus-visible:ring-slate-500 focus-visible:ring-offset-slate-950"
                  : "border-slate-200 hover:border-slate-300 hover:text-slate-900 bg-white shadow-sm hover:shadow-md focus-visible:ring-slate-400 focus-visible:ring-offset-white"
              }`}
              aria-label="Scroll back to top"
            >
             
              <HiArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>

          {/* Right: Copyright & Year */}
          <div className="text-center md:text-right md:w-1/3 w-full tracking-wider text-[11px] opacity-75 font-medium">
            © {year} Fata Kihlot. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
}