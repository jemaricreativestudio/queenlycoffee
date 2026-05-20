import React, { useState, useEffect } from "react";
import "../fonts.css"; // Importing your custom font layout

import {
  FiArrowRight,
  FiCheck,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiUsers,
  FiUser,
  FiPhone,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState("am"); // "en" for English, "am" for Amharic
  const [expandedIndex, setExpandedIndex] = useState(null); // Accordion state

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
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Content dictionary for both English and Amharic languages
  const content = {
    en: {
      hero: {
        title1: "Busy Schedule?",
        title2: "Learn Graphics Fast.",
        desc: "No matter how busy you are, you can learn on your own flexible schedule. Master practical skills through hands-on projects, 1-on-1 or group mentorship—at your pace, anywhere.",
        ctaStart: "Contact Us",
      },
      programs: {
        badge: "PROGRAMS",
        title: "Choose Your Path",
        pMentorship: "Private",
        pMentorshipDesc: "1-on-1 learning customized around your schedule and goals.",
        cCohorts: "Small Group",
        cCohortsDesc: "Small focused groups with collaboration and accountability.",
        features: [
          "Flexible schedules",
          "Portfolio projects",
          "Direct feedback",
          "Practical assignments",
        ],
      },
      curriculum: {
        badge: "Curriculum",
        title: "Practical Skills.",
        desc: "Step-by-step graphic design training from fundamentals to real client-ready projects.",
        items: [
          {
            title: "Graphic Design Fundamentals",
            desc: "Master the visual and theoretical building blocks required to think like a professional designer before opening any software.",
            lessonsTitle: "Core Lessons:",
            lessons: [
              "Core Concepts & Design Thinking",
              "Visual Elements (Line, Shape, Texture)",
              "Design Principles (Balance, Contrast, Emphasis)",
              "Layout, Grid Systems & Composition"
            ]
          },
          {
            title: "Raster Graphics & Creative Composition",
            desc: "Learn core photo manipulation, layer workflows, and visual editing techniques to create high-impact marketing assets.",
            lessonsTitle: "Included Projects:",
            lessons: [
              "High-Impact Banner Design",
              "Creative Poster & Flyer Design",
              "High-Conversion Social Media Ads",
              "Attention-Grabbing YouTube Thumbnails"
            ]
          },
          {
            title: "Vector Graphics & Corporate Branding",
            desc: "Master scalable vector shapes, custom illustration paths, and professional typography to build visual systems.",
            lessonsTitle: "Included Projects:",
            lessons: [
              "Vector Design Basics & Pen Tool Mastery",
              "Brand Identity Design (Logos & Typography Systems)",
              "Business Cards & Stationery Assets",
              "Scalable Commercial Assets"
            ]
          },
          {
            title: "Multi-Page Layout & Editorial Design",
            desc: "Master professional publishing setups, grid structures, master pages, text wrapping, and production-ready print workflows.",
            lessonsTitle: "Included Projects:",
            lessons: [
              "Multi-Page Magazine Layout Design",
              "Corporate Brochures ",
              "Custom Calendar Design",
              "Professional Identity Cards"
            ]
          },
          {
            title: "Final Design Portfolio Project",
            desc: "Synthesize everything you have learned into a single, high-quality professional package that proves your market value, finalizes high-quality project mockups, and readies your custom portfolio for print or digital distribution.",
            lessonsTitle: "",
            lessons: []
          }
        ]
      },
      experience: {
        badge: "EXPERIENCE",
        title: "2.5+ Years Teaching Graphic Design",
        desc: "I am a graphic design instructor with over 2.5 years of experience, focused on practical, project-based training in Photoshop, Illustrator, InDesign, branding, typography, and real-world design skills.",
      },
      contact: {
        badge: "Contact",
        title: "Ready To Start?",
        desc: "Message us directly on WhatsApp to secure your spot or ask any questions before you begin.",
        ctaWhatsapp: "Message on WhatsApp",
        call: "Call",
        telegram: "Telegram",
        email: "Email",
      },

    },
    am: {
      hero: {
        title1: "ስራ በዝቶብዎታል?",
        title2: "ግራፊክስን በፍጥነት ይማሩ!",
        desc: "ምንም ያህል ስራ ቢበዛብዎት፣ በራስዎ ምቹ የጊዜ ሰሌዳ መማር ይችላሉ። በተግባራዊ ፕሮጀክቶች፣ በአንድ ለአንድ ወይም በቡድን በመረጡት እና ባሉበት ቦታ ሆነው ሥልጠናውን ይውሰዱ!",
        ctaStart: "ያግኙን",
      },
      programs: {
        badge: "ፕሮግራሞች",
        title: "የሥልጠና አማራጭዎን ይምረጡ",
        pMentorship: "የግል ስልጠና (1 ለ 1)",
        pMentorshipDesc: "ከእርስዎ መርሃግብር እና ግቦች ጋር ተስማሚ ተደርጎ የተዘጋጀ የላቀ የግል ትምህርት።",
        cCohorts: "የቡድን ስልጠና",
        cCohortsDesc: "እርስ በእርስ በመረዳዳት እና በኃላፊነት የሚሰሩ ትናንሽ እና ትኩረት ያደረጉ ቡድኖች።",
        features: [
          "ተለዋዋጭ የጊዜ ሰሌዳ",
          "የፖርትፎሊዮ ፕሮጀክቶች",
          "ቀጥተኛ ግብረመልስ",
          "ተግባራዊ ልምምዶች",
        ],
      },
      curriculum: {
        badge: "የስልጠና መርሃ-ግብር",
        title: "ተግባራዊ ክህሎቶች",
        desc: "ከመሰረታዊ እውቀት እስከ ትክክለኛ የደንበኛ ፕሮጀክቶች የሚያደርስ ደረጃ በደረጃ የሚሰጥ የግራፊክ ዲዛይን ስልጠና።",
        items: [
          {
            title: "የግራፊክ ዲዛይን መሰረታዊያን (Graphic Design Fundamentals)",
            desc: "ማንኛውንም የኮምፒውተር ሶፍትዌር ከመክፈትዎ በፊት እንደ ባለሙያ ዲዛይነር ለማሰብ የሚረዱ የእይታ እና የንድፈ ሃሳብ መሰረቶችን ማወቅ።",
            lessonsTitle: "ዋና ዋና ትምህርቶች፡",
            lessons: [
              "መሰረታዊ የዲዛይን ጽንሰ-ሀሳቦች (Concepts) እና አስተሳሰብ",
              "የዲዛይን ክፍሎች (Elements - መስመር፣ ቅርፅ፣ ቴክስቸር)",
              "የዲዛይን መርሆዎች (Principles - ሚዛን፣ ንፅፅር፣ ትኩረት)",
              "የዲዛይን አቀማመጥ (Layout)፣ ግሪድ ሲስተም እና ውህደት"
            ]
          },
          {
            title: "ራስተር ግራፊክስ እና ፈጠራ ውህደት (Photoshop)",
            desc: "ከፍተኛ የእይታ ተፅዕኖ ያላቸውን የማስታወቂያ ምስሎች ለመስራት የሚያስችሉ የፎቶ ማኒፑሌሽን፣ የኮምፖዚሽን እና የኤዲቲንግ ቴክኒኮችን መማር።",
            lessonsTitle: "ተግባራዊ ስራዎች፡",
            lessons: [
              "ማራኪ የባነር (Banner) ዲዛይን",
              "የፈጠራ ፖስተር (Poster) እና ፍላየር (Flyer) ዲዛይን",
              "የማህበራዊ ሚዲያ ማስታወቂያዎች (Social Media Ads)",
              "የዩቲዩብ ተምኔል (Thumbnail) ዲዛይን"
            ]
          },
          {
            title: "ቬክተር ግራፊክስ እና የድርጅት ብራንዲንግ (Illustrator)",
            desc: "ወጥ የሆነ የብራንድ መለያ ለመፍጠር ሊያድጉ የሚችሉ (Scalable) የቬክተር ቅርጾችን፣ ልዩ የሥዕል መስመሮችን እና የሎጎ ታይፖግራፊን ማሰስ።",
            lessonsTitle: "ተግባራዊ ስራዎች፡",
            lessons: [
              "መሰረታዊ የቬክተር ዲዛይን እና የፔን ቱል (Pen Tool) አጠቃቀም",
              "የብራንድ መለያ ዲዛይን (ሎጎ እና ታይፖግራፊ ሲስተም)",
              "ቢዝነስ ካርድ እና የፅህፈት መሳሪያዎች (Stationery) ዲዛይን",
              "በማንኛውም መጠን ሊያድጉ የሚችሉ የንግድ ግራፊክሶች"
            ]
          },
          {
            title: "የብዙ-ገፅ ዲዛይን አቀማመጥ እና የህትመት ስራዎች (InDesign)",
            desc: "ለዲጂታል እና ለህትመት ዝግጁ የሆኑ ባለብዙ ገፅ ሰነዶች አወቃቀር፣ የማስተር ገፆች አደረጃጀት፣ የፅሁፍ መጠቅለያ (Text Wrap) እና የህትመት ዝግጅት የስራ ሂደት።",
            lessonsTitle: "ተግባራዊ ስራዎች፡",
            lessons: [
              "የብዙ-ገፅ መጽሔት (Magazine Layout) ዲዛይን ስራ",
              "የድርጅት ብሮሹሮች (Brochure - ባለ 2 እና 3 እጥፍ)",
              "የካላንደር (Calendar) ዲዛይን",
              "የመታወቂያ ካርድ (ID Card) ዲዛይን"
            ]
          },
          {
            title: "የመጨረሻ ዲዛይን ፖርትፎሊዮ ፕሮጀክት (Design Portfolio)",
            desc: "የተማሩትን አጠቃላይ ክህሎቶች በማቀናጀት፣ ከፍተኛ ጥራት ያላቸውን የዲዛይን ሞክአፖች (Mockups) በማዘጋጀት ለዲጂታል እና ለህትመት ዝግጁ የሆነ የተሟላ የሥራዎች ስብስብ በገበያ ላይ ያለዎትን ዋጋ በሚያሳይ መልኩ ማጠናቀቅ።",
            lessonsTitle: "",
            lessons: []
          }
        ]
      },
      experience: {
        badge: "ልምድ",
        title: "በግራፊክ ዲዛይን ማስተማር ላይ ከ2.5 ዓመታት በላይ ልምድ",
        desc: "በፎቶሾፕ፤ ኢሉስትሬተር፤ ኢንዲዛይን፤ ብራንዲንግ፤ ታይፖግራፊ እና እውነተኛ የዲዛይን ክህሎቶች ላይ በተግባር እና በፕሮጀክት ላይ ያተኮረ ስልጠና የምሰጥ የግራፊክ ዲዛይን አስተማሪ ነኝ።",
      },
      contact: {
        badge: "አድራሻ",
        title: "ለመጀመር ዝግጁ ነዎት?",
        desc: "የእርስዎን የሥልጠና ጊዜ ለማስተካከል ወይም ከመጀመርዎ በፊት ማንኛውንም ጥያቄ ለመጠየቅ በቀጥታ በዋትስአፕ መልዕክት ይላኩልን።",
        ctaWhatsapp: "በዋትስአፕ ያግኙን",
        call: "ይደውሉ",
        telegram: "ቴሌግራም",
        email: "ኢሜይል",
      },

    },
  };

  const t = content[lang] || content["en"];

  return (
    <div
      className={`min-h-screen overflow-x-hidden antialiased transition-colors duration-300 ${darkMode ? "bg-[#070b14] text-slate-300" : "bg-slate-50 text-slate-700"
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

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-up {
            animation: fadeUp .8s cubic-bezier(.16,1,.3,1) forwards;
          }
        `,
        }}
      />

      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] lg:w-[700px] h-[350px] sm:h-[550px] lg:h-[700px] rounded-full blur-[120px] opacity-20 ${darkMode ? "bg-amber-500" : "bg-amber-200"
            }`}
        />

        <div
          className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] ${darkMode ? "opacity-30" : "opacity-10"
            }`}
        />
      </div>

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl ${darkMode ? "bg-[#070b14]/80 border-slate-900" : "bg-white/80 border-slate-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
          {/* BRAND */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Fata Kihlot Logo"
              className="h-12 w-auto block object-contain"
            />
          </a>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            {/* LANGUAGE TOGGLE */}
            <button
              onClick={() => setLang(lang === "en" ? "am" : "en")}
              className={`px-3 py-2 text-xs font-bold rounded-md border transition ${darkMode
                  ? "border-slate-800 bg-slate-900 text-amber-400 hover:border-slate-700"
                  : "border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
                }`}
            >
              {lang === "en" ? "አማ" : "EN"}
            </button>

            {/* DARK MODE TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border ${darkMode ? "border-slate-800 bg-slate-900 text-slate-400" : "border-slate-200 bg-white text-slate-700"
                }`}
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
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
            className={`absolute inset-0 transition-colors duration-300 ${darkMode
                ? "bg-gradient-to-b from-[#070b14]/90 via-[#070b14]/85 to-[#070b14]"
                : "bg-gradient-to-b from-white/95 via-white/85 to-slate-50"
              }`}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 py-12 fade-up">
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

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md text-sm font-bold shadow-lg transition-all transform hover:-translate-y-0.5 ${darkMode ? "bg-amber-500 hover:bg-amber-400 text-black" : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
            >
              {t.hero.ctaStart}
              <FiArrowRight />
            </a>
          </div>
        </div>
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
              { icon: <FiUser />, title: t.programs.pMentorship, desc: t.programs.pMentorshipDesc },
              { icon: <FiUsers />, title: t.programs.cCohorts, desc: t.programs.cCohortsDesc },
            ].map((card, index) => (
              <div
                key={index}
                className={`rounded-3xl border p-6 sm:p-8 space-y-6 ${darkMode ? "bg-[#0d1321]/60 border-slate-900" : "bg-white border-slate-200"
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
                  {t.programs.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FiCheck className="text-amber-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section
        id="curriculum"
        className={`relative z-10 py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-y transition-colors duration-300 ${darkMode ? "border-slate-900 bg-[#070b14]" : "border-slate-200 bg-[#f8fafc]"
          }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Static Header Area */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
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

            {/* Right Column: Clean Collapsible Modules */}
            <div className="lg:col-span-8 space-y-4">
              {t.curriculum.items.map((item, index) => {
                const isExpanded = expandedIndex === index;
                const isFinalItem = index === t.curriculum.items.length - 1;
                const hasLessons = item.lessons && item.lessons.length > 0;

                return (
                  <div
                    key={index}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${isFinalItem && !isExpanded
                        ? "border-amber-500/30 bg-amber-500/[0.01]"
                        : darkMode ? "bg-[#0c1220] border-slate-900/80" : "bg-white border-slate-200"
                      } ${isExpanded ? "ring-1 ring-amber-500/30 shadow-md" : ""}`}
                  >
                    {/* Module Interactive Header Button */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      disabled={!hasLessons}
                      className={`w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none ${hasLessons ? "cursor-pointer group" : "cursor-default"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-mono font-bold tracking-wider ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
                          0{index + 1}
                        </span>
                        <h3 className={`text-sm sm:text-base font-regular tracking-tight transition-colors ${isExpanded
                            ? "text-amber-500"
                            : darkMode ? "text-white group-hover:text-amber-400" : "text-slate-950 group-hover:text-amber-600"
                          }`}>
                          {item.title.split("(")[0].trim()}
                        </h3>
                      </div>

                      {/* Right Action Icons / Badges */}
                      <div className="flex items-center gap-3">
                        <div className="hidden sm:flex gap-1.5">
                          {item.title.includes("Photoshop") && (
                            <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">PS</span>
                          )}
                          {item.title.includes("Illustrator") && (
                            <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">AI</span>
                          )}
                          {item.title.includes("InDesign") && (
                            <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">ID</span>
                          )}
                          {isFinalItem && (
                            <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-amber-500 text-black">Milestone</span>
                          )}
                        </div>

                        {hasLessons && (
                          <div className={`transition-colors duration-200 ${isExpanded ? "text-amber-500" : darkMode ? "text-slate-600 group-hover:text-slate-400" : "text-slate-400 group-hover:text-slate-600"
                            }`}>
                            {isExpanded ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Expandable Project Lessons Grid Drawer */}
                    {hasLessons && (
                      <div
                        className={`transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[500px] opacity-100 border-t" : "max-h-0 opacity-0 pointer-events-none"
                          } ${darkMode ? "border-slate-900" : "border-slate-100"}`}
                      >
                        <div className={`p-5 sm:p-6 space-y-3.5 ${darkMode ? "bg-slate-950/20" : "bg-slate-50/50"}`}>
                          <span className={`text-[10px] font-bold uppercase tracking-widest block ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                            {item.lessonsTitle}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {item.lessons.map((lesson, lIdx) => (
                              <div
                                key={lIdx}
                                className={`flex items-center gap-3 text-xs p-3 rounded-lg border transition-colors ${darkMode
                                    ? "bg-slate-950/60 border-slate-900/60"
                                    : "bg-white border-slate-200/60"
                                  }`}
                              >
                                <div className="w-4 h-4 rounded bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                  <FiCheck className="text-amber-500" size={10} />
                                </div>
                                <span className={`font-medium tracking-tight ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                                  {lesson}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-12 border-y ${darkMode ? "border-slate-900 bg-slate-950/20" : "border-slate-200 bg-white"
          }`}
      >
        <div className=" max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500">{t.experience.badge}</span>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
            {t.experience.title}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            {t.experience.desc}
          </p>
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

          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
          >
            <FaWhatsapp className="text-xl" />
            {t.contact.ctaWhatsapp}
          </a>

          <div className="grid grid-cols-3 gap-4">
            <a
              href={contactInfo.phone}
              className={`p-5 rounded-xl border flex flex-col items-center gap-2 transition ${darkMode ? "bg-[#0d1321]/60 border-slate-900 hover:border-amber-500" : "bg-white border-slate-200 hover:border-amber-500"
                }`}
            >
              <FiPhone className="text-2xl text-amber-500" />
              <span className="text-sm font-medium">{t.contact.call}</span>
            </a>

            <a
              href={contactInfo.telegram}
              className={`p-5 rounded-xl border flex flex-col items-center gap-2 transition ${darkMode ? "bg-[#0d1321]/60 border-slate-900 hover:border-amber-500" : "bg-white border-slate-200 hover:border-amber-500"
                }`}
            >
              <FaTelegramPlane className="text-2xl text-amber-500" />
              <span className="text-sm font-medium">{t.contact.telegram}</span>
            </a>

            <a
              href={contactInfo.email}
              className={`p-5 rounded-xl border flex flex-col items-center gap-2 transition ${darkMode ? "bg-[#0d1321]/60 border-slate-900 hover:border-amber-500" : "bg-white border-slate-200 hover:border-amber-500"
                }`}
            >
              <FaEnvelope className="text-2xl text-amber-500" />
              <span className="text-sm font-medium">{t.contact.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`relative z-10 py-8 px-4 border-t text-xs ${darkMode ? "border-slate-950 text-slate-500" : "border-slate-200 text-slate-400"}`}>
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Logo → Hero section */}
          <button
            onClick={() => {
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center hover:opacity-80 transition"
          >
            <img src={logo} alt="Fata Kihlot logo" className="h-8 w-auto" />
          </button>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            © {year} Fata Kihlot.
          </div>

        </div>
      </footer>
    </div>
  );
}