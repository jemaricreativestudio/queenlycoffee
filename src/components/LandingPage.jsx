
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiCoffee,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

import "../fonts.css";
import logoDark from "../assets/Logo_dark.svg";
import logoWhite from "../assets/Logo_white.svg";
import landingImage from "../assets/landing.jpg";

const BRAND = "#602B04";

const navigation = [
  { key: "home", href: "#home" },
  { key: "storyNav", href: "#story" },
  { key: "cultureNav", href: "#culture" },
  { key: "promiseNav", href: "#promise" },
  { key: "contactNav", href: "#contact" },
];

const content = {
  en: {
    navigation: {
      home: "Home",
      storyNav: "Our Story",
      cultureNav: "Coffee Culture",
      promiseNav: "Our Promise",
      contactNav: "Contact",
    },
    headerContact: "Get in Touch",
    heroEyebrow: "From Ethiopia, with love",
    heroTitle: "More than coffee.",
    heroAccent: "A living heritage.",
    heroDescription:
      "Discover the soul of Ethiopian coffee through its rich origins, extraordinary traditions, and the beautiful ritual of sharing every cup.",
    explore: "Explore Our Story",
    ceremony: "The coffee ceremony",
    heroImageLabel: "The Ethiopian tradition",
    heroImageTitle:
      "A moment to slow down. A reason to come together.",
    originCard: "Rooted in Ethiopia",
    originCardText: "Shared with the world",
    intro: [
      {
        number: "01",
        title: "Our roots",
        text: "Inspired by Ethiopia's remarkable coffee heritage and its enduring connection to the land.",
      },
      {
        number: "02",
        title: "Our ritual",
        text: "Celebrating the time, care, and hospitality woven into the traditional coffee ceremony.",
      },
      {
        number: "03",
        title: "Our purpose",
        text: "Sharing a meaningful coffee experience that honors culture, craftsmanship, and community.",
      },
    ],
    storyEyebrow: "The heart of Queenly",
    storyTitle: "A story that begins with a cup.",
    storyText1:
      "Ethiopia holds a special place in coffee history. Here, coffee is more than a drink: it is an invitation to pause, welcome guests, exchange stories, and strengthen the bonds between people.",
    storyText2:
      "Queenly Coffee celebrates this living heritage with a deep appreciation for the people, traditions, and culture that make Ethiopian coffee so meaningful.",
    storyLink: "Experience our culture",
    buna: "Come, let us drink coffee",
    cultureEyebrow: "More than a ritual",
    cultureTitle: "The beauty of the coffee ceremony",
    cultureDescription:
      "A cherished expression of Ethiopian hospitality, where preparation becomes a ritual and a cup becomes a connection.",
    cultureCards: [
      {
        title: "Prepare with care",
        text: "Freshly prepared coffee and thoughtful details turn an everyday moment into a meaningful experience.",
      },
      {
        title: "Gather together",
        text: "Family, friends, and guests come together to share conversation, warmth, and hospitality.",
      },
      {
        title: "Savor the moment",
        text: "Each serving invites you to slow down, appreciate the flavor, and enjoy the company around you.",
      },
    ],
    moment: "THE MOMENT",
    coffeeLove: "Coffee, shared with love.",
    promiseEyebrow: "The Queenly promise",
    promiseTitle: "Rooted in heritage. Made for connection.",
    promiseDescription:
      "Our values reflect what makes Ethiopian coffee culture extraordinary.",
    promises: [
      {
        title: "Authenticity",
        text: "Honoring the heritage and traditions at the heart of Ethiopian coffee.",
      },
      {
        title: "Craftsmanship",
        text: "Appreciating the care, skill, and attention behind every coffee experience.",
      },
      {
        title: "Hospitality",
        text: "Celebrating the generous spirit of welcoming others around the coffee table.",
      },
      {
        title: "Community",
        text: "Recognizing coffee as a timeless way to build relationships and share stories.",
      },
    ],
    contactEyebrow: "Let us connect",
    contactTitle: "Let's share a little Ethiopian coffee magic.",
    contactDescription:
      "Connect with Queenly Coffee and join us in celebrating the culture, stories, and traditions behind every cup.",
    footerTagline: "Ethiopian heritage",
    copyright: "All rights reserved.",
    switchLanguage: "አማርኛ",
    themeLight: "Switch to daylight mode",
    themeDark: "Switch to dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  am: {
    navigation: {
      home: "መነሻ",
      storyNav: "ስለ እኛ",
      cultureNav: "የቡና ባህል",
      promiseNav: "እሴቶቻችን",
      contactNav: "ያግኙን",
    },
    headerContact: "ያግኙን",
    heroEyebrow: "ከኢትዮጵያ በፍቅር",
    heroTitle: "ቡና ብቻ አይደለም።",
    heroAccent: "ሕያው ቅርሳችን ነው።",
    heroDescription:
      "በኢትዮጵያ ቡና ልዩ ታሪክ፣ የበለጸገ ባህል እና በአንድ ስኒ ቡና የሚገናኙበትን ውብ ልማድ ይወቁ።",
    explore: "ታሪካችንን ይወቁ",
    ceremony: "የቡና ሥነ ሥርዓት",
    heroImageLabel: "የኢትዮጵያ ባህል",
    heroImageTitle: "ለመቆምና ለመዝናናት። አብረን ለመሆን ምክንያት።",
    originCard: "ሥር የሰደደው በኢትዮጵያ",
    originCardText: "ለዓለም የምናካፍለው",
    intro: [
      {
        number: "01",
        title: "ሥሮቻችን",
        text: "ከኢትዮጵያ የበለጸገ የቡና ታሪክና ከመሬታችን ጋር ካለን ጥልቅ ግንኙነት የተነሳን ነን።",
      },
      {
        number: "02",
        title: "ልማዳችን",
        text: "በባህላዊው የቡና ሥነ ሥርዓት ውስጥ ያለውን ጥንቃቄ፣ ጊዜና እንግዳ ተቀባይነት እናከብራለን።",
      },
      {
        number: "03",
        title: "ዓላማችን",
        text: "ባህልን፣ ጥበብንና ማኅበረሰብን የሚያከብር ልዩ የቡና ልምድ ማካፈል።",
      },
    ],
    storyEyebrow: "የኩዊንሊ ማንነት",
    storyTitle: "ከአንድ ስኒ የሚጀምር ታሪክ።",
    storyText1:
      "ኢትዮጵያ በቡና ታሪክ ውስጥ ልዩ ቦታ አላት። ቡና መጠጥ ብቻ ሳይሆን ዘና ለማለት፣ እንግዶችን ለመቀበል፣ ታሪክ ለመጋራትና የሰዎችን ትስስር ለማጠናከር የሚያገለግል ውብ ልማድ ነው።",
    storyText2:
      "ኩዊንሊ ኮፊ ይህንን ሕያው ቅርስ የሚያከብረውን የኢትዮጵያ ሕዝብ፣ ባህልና ወግ በጥልቅ አድናቆት ያስተዋውቃል።",
    storyLink: "ባህላችንን ይወቁ",
    buna: "ኑ ቡና እንጠጣ",
    cultureEyebrow: "ከሥነ ሥርዓት በላይ",
    cultureTitle: "የቡና ሥነ ሥርዓት ውበት",
    cultureDescription:
      "ዝግጅት ወደ ልማድ፣ አንድ ስኒ ቡናም ወደ ግንኙነት የሚቀየርበት የኢትዮጵያ እንግዳ ተቀባይነት መገለጫ።",
    cultureCards: [
      {
        title: "በጥንቃቄ ማዘጋጀት",
        text: "በፍቅርና በጥንቃቄ የሚዘጋጅ ቡና የዕለት ተዕለት ጊዜን ወደ ልዩ ትውስታ ይቀይራል።",
      },
      {
        title: "በአንድነት መሰባሰብ",
        text: "ቤተሰብ፣ ጓደኞችና እንግዶች ለውይይት፣ ለሙቀትና ለመስተንግዶ ይሰባሰባሉ።",
      },
      {
        title: "ወቅቱን መደሰት",
        text: "እያንዳንዱ ስኒ ቡና ቆም ብለን ጣዕሙንና አብረውን ያሉትን ሰዎች እንድናደንቅ ይጋብዘናል።",
      },
    ],
    moment: "ደረጃ",
    coffeeLove: "ቡና በፍቅር።",
    promiseEyebrow: "የኩዊንሊ ቃል",
    promiseTitle: "በባህል ሥር የሰደደ። ለግንኙነት የተፈጠረ።",
    promiseDescription: "የኢትዮጵያ የቡና ባህልን ልዩ የሚያደርጉ እሴቶቻችን።",
    promises: [
      {
        title: "ትክክለኛነት",
        text: "በኢትዮጵያ ቡና ማንነት ውስጥ ያሉትን ቅርስና ባህሎች ማክበር።",
      },
      {
        title: "ጥበብና ክህሎት",
        text: "በእያንዳንዱ የቡና ልምድ ውስጥ ያለውን ጥንቃቄና ክህሎት ማድነቅ።",
      },
      {
        title: "እንግዳ ተቀባይነት",
        text: "በቡና ጠረጴዛ ዙሪያ ሰዎችን በፍቅር የመቀበል ባህልን ማክበር።",
      },
      {
        title: "ማኅበረሰብ",
        text: "ቡና ግንኙነትን ለመገንባትና ታሪኮችን ለመጋራት የሚያገለግል ዘላቂ ድልድይ መሆኑን ማወቅ።",
      },
    ],
    contactEyebrow: "እንገናኝ",
    contactTitle: "የኢትዮጵያን የቡና ውበት አብረን እናካፍል።",
    contactDescription:
      "ከኩዊንሊ ኮፊ ጋር ይገናኙ፤ ከእያንዳንዱ ስኒ ቡና ጀርባ ያለውን ባህል፣ ታሪክና ወግ አብረን እናክብር።",
    footerTagline: "የኢትዮጵያ ቅርስ",
    copyright: "መብቱ የተጠበቀ ነው።",
    switchLanguage: "English",
    themeLight: "ወደ ቀን ገጽታ ይቀይሩ",
    themeDark: "ወደ ጨለማ ገጽታ ይቀይሩ",
    openMenu: "ምናሌውን ይክፈቱ",
    closeMenu: "ምናሌውን ይዝጉ",
  },
};

function BeanBlur({ dark = false }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`absolute -left-24 top-16 h-64 w-64 rounded-full blur-3xl ${
          dark ? "bg-white/[0.05]" : "bg-[#602B04]/[0.08]"
        }`}
      />
      <div
        className={`absolute -right-24 top-[38%] h-80 w-80 rounded-full blur-3xl ${
          dark ? "bg-[#602B04]/[0.12]" : "bg-[#602B04]/[0.10]"
        }`}
      />
      <div
        className={`absolute -bottom-24 left-[30%] h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-white/[0.04]" : "bg-[#602B04]/[0.06]"
        }`}
      />
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, dark }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-[#602B04]" : "text-[#602B04]"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-5 max-w-xl text-base leading-7 ${
            dark ? "text-white/65" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const t = content[language];
  const isAmharic = language === "am";
  const currentLogo = darkMode ? logoWhite : logoDark;

  const page = darkMode
    ? "bg-[#211710] text-[#FFF9F0]"
    : "bg-[#FBF7F0] text-[#2D1A10]";

  const mutedText = darkMode ? "text-white/65" : "text-stone-600";
  const sectionBg = darkMode ? "bg-[#2B1D14]" : "bg-[#F2E8DA]";

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <div
      lang={isAmharic ? "am" : "en"}
      className={`${page} min-h-screen overflow-hidden transition-colors duration-300 ${isAmharic ? "amharic-text" : ""}`}
      style={{
        "--queenly-brand": BRAND,
      }}
    >
      {/* Header: logo only, without brand name text */}
      <header className="relative z-50">
        <div className="relative z-[60] mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#home" aria-label="Home" className="flex shrink-0 items-center">
            <img src={currentLogo} alt="Queenly Coffee logo" className="h-12 w-auto" />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm transition-colors hover:text-[#562402] ${
                  darkMode ? "text-white/75" : "text-stone-700"
                }`}
              >
                {t.navigation[item.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language switch */}
            <button
              type="button"
              onClick={() => {
                setLanguage(isAmharic ? "en" : "am");
                closeMenu();
              }}
              aria-label={isAmharic ? "Switch to English" : "Switch to Amharic"}
              className={`rounded-full border px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                darkMode
                  ? "border-white/15 hover:bg-white/10"
                  : "border-[#602B04]/15 hover:bg-[#562402]/5"
              }`}
            >
              {isAmharic ? "EN" : "አማ"}
            </button>

            {/* Contact CTA beside the theme switch */}
            <a
              href="#contact"
              aria-label={t.headerContact}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#602B04] px-3 text-sm font-medium text-white transition hover:bg-[#562402] sm:px-5"
            >
              <span className="sm:hidden"><FiArrowRight size={17} /></span>
              <span className="hidden sm:inline">{t.headerContact}</span>
              <FiArrowRight className="ml-2 hidden sm:inline" />
            </a>

            {/* Theme switch */}
            <button
              type="button"
              onClick={() => {
                setDarkMode((value) => !value);
                closeMenu();
              }}
              aria-label={darkMode ? t.themeLight : t.themeDark}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                darkMode
                  ? "border-white/15 hover:bg-white/10"
                  : "border-[#602B04]/15 hover:bg-[#562402]/5"
              }`}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Hamburger appears on mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
                darkMode
                  ? "border-white/15 hover:bg-white/10"
                  : "border-[#602B04]/15 hover:bg-[#562402]/5"
              }`}
            >
              {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <>
            {/* Full-screen blur and dim layer; tap outside the menu to close it. */}
            <button
              type="button"
              aria-label={t.closeMenu}
              onClick={closeMenu}
              className="fixed inset-0 z-40 cursor-default bg-black/40 backdrop-blur-md transition-opacity duration-300 lg:hidden"
            />

            {/* Focused mobile menu */}
            <nav
              aria-label="Mobile navigation"
              className={`fixed left-4 right-4 top-24 z-[60] mx-auto max-h-[calc(100dvh-7rem)] max-w-md overflow-y-auto rounded-3xl border p-5 shadow-2xl backdrop-blur-2xl lg:hidden ${
                darkMode
                  ? "border-white/10 bg-[#211710]/95 text-[#FFF9F0]"
                  : "border-white/70 bg-[#FBF7F0]/95 text-[#2D1A10]"
              }`}
            >
              <div className="mb-4 flex items-center justify-between px-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#602B04]">
                  {t.heroEyebrow}
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label={t.closeMenu}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#602B04]/15 transition hover:bg-[#562402]/10"
                >
                  <FiX size={19} />
                </button>
              </div>

              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 text-base font-medium transition duration-200 hover:bg-[#562402]/10"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs tracking-widest text-[#602B04]/80">
                        0{index + 1}
                      </span>
                      {t.navigation[item.key]}
                    </span>
                    <FiArrowRight className="opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center rounded-full bg-[#602B04] px-5 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#562402]"
              >
                {t.headerContact}
                <FiArrowRight className="ml-2" />
              </a>
            </nav>
          </>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative isolate scroll-mt-24">
          <BeanBlur dark={darkMode} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 md:pb-28 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.13 } },
              }}
              className="relative z-10 max-w-2xl"
            >
              <motion.p
                variants={fadeUp}
                className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#602B04]"
              >
                <span className="h-px w-9 bg-[#602B04]" />
                {t.heroEyebrow}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl"
              >
                {t.heroTitle}
                <span className="mt-2 block font-medium italic text-[#602B04]">
                  {t.heroAccent}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className={`mt-7 max-w-xl text-base leading-8 sm:text-lg ${mutedText}`}
              >
                {t.heroDescription}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#story"
                  className="inline-flex items-center rounded-full bg-[#602B04] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#602B04]/10 transition hover:-translate-y-0.5 hover:bg-[#562402]"
                >
                  {t.explore}
                  <FiArrowRight className="ml-3 shrink-0" />
                </a>
                <a
                  href="#culture"
                  className={`inline-flex items-center gap-2 px-3 py-3 text-sm font-medium ${
                    darkMode ? "text-white/80" : "text-[#602B04]"
                  }`}
                >
                  {t.ceremony}
                  <FiArrowDownRight />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[#602B04]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={landingImage}
                  alt={t.heroImageLabel}
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20140D]/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/75">
                    {t.heroImageLabel}
                  </p>
                  <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
                    {t.heroImageTitle}
                  </p>
                </div>
              </div>

              <div
                className={`absolute -left-3 top-8 rounded-2xl border p-4 shadow-lg backdrop-blur-xl sm:-left-7 sm:p-5 ${
                  darkMode
                    ? "border-white/10 bg-[#211710]/85"
                    : "border-white/80 bg-[#FBF7F0]/90"
                }`}
              >
                <FiCoffee className="mb-2 text-2xl text-[#602B04]" />
                <p className="text-sm font-semibold">{t.originCard}</p>
                <p className={`mt-1 text-xs ${mutedText}`}>
                  {t.originCardText}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className={`${sectionBg} relative`}>
          <BeanBlur dark={darkMode} />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-3 md:gap-10 md:py-16 lg:px-10">
            {t.intro.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-l border-[#602B04]/20 pl-5"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-[#602B04]">
                  {item.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className={`mt-3 max-w-sm text-sm leading-7 ${mutedText}`}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section id="story" className="relative scroll-mt-20 overflow-hidden">
          <BeanBlur dark={darkMode} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-[#602B04]/10 blur-2xl" />
              <img
                src={landingImage}
                alt={t.storyTitle}
                className="relative aspect-[5/4] w-full rounded-[1.75rem] object-cover"
              />
              <div className="absolute -bottom-5 right-4 rounded-2xl bg-[#602B04] px-5 py-4 text-white shadow-xl sm:right-8 sm:px-7">
                <p className="text-lg font-semibold">ቡና ጠጡ</p>
                <p className="mt-1 text-xs text-white/75">{t.buna}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="pt-5 lg:pt-0"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#602B04]">
                {t.storyEyebrow}
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {t.storyTitle}
              </h2>
              <p className={`mt-6 leading-8 ${mutedText}`}>{t.storyText1}</p>
              <p className={`mt-4 leading-8 ${mutedText}`}>{t.storyText2}</p>

              <a
                href="#culture"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#602B04] transition hover:gap-5"
              >
                {t.storyLink} <FiArrowRight />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Coffee culture */}
        <section
          id="culture"
          className={`relative scroll-mt-20 overflow-hidden ${
            darkMode ? "bg-[#2B1D14]" : "bg-[#F0E5D6]"
          }`}
        >
          <BeanBlur dark={darkMode} />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
            <SectionHeading
              eyebrow={t.cultureEyebrow}
              title={t.cultureTitle}
              description={t.cultureDescription}
              dark={darkMode}
            />

            <div className="grid gap-6 md:grid-cols-3">
              {t.cultureCards.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-[1.5rem] border p-7 transition-colors sm:p-8 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-[#602B04]/10 bg-white/65"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#602B04]/10 text-[#602B04]">
                    <FiCoffee size={22} />
                  </div>
                  <p className="mt-7 text-xs font-semibold tracking-[0.15em] text-[#602B04]">
                    {t.moment} 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-3xl font-semibold text-[#602B04] sm:text-4xl">
                ቡና በፍቅር
              </p>
              <p className={`mt-3 text-sm ${mutedText}`}>{t.coffeeLove}</p>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section
          id="promise"
          className="relative scroll-mt-20 overflow-hidden"
        >
          <BeanBlur dark={darkMode} />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
            <SectionHeading
              eyebrow={t.promiseEyebrow}
              title={t.promiseTitle}
              description={t.promiseDescription}
              dark={darkMode}
            />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {t.promises.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`border-t-2 pt-6 ${
                    darkMode ? "border-[#602B04]/60" : "border-[#602B04]/30"
                  }`}
                >
                  <p className="text-3xl font-semibold text-[#602B04]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative scroll-mt-20 overflow-hidden bg-[#602B04] text-white"
        >
          <BeanBlur dark />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1fr_auto] lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#602B04]">
                {t.contactEyebrow}
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/70">
                {t.contactDescription}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 lg:justify-end"
            >
              <a
                href="https://t.me/queenly_coffee"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:bg-white/10"
              >
                <FaTelegramPlane size={19} />
              </a>
              <a
                href="https://wa.me/251923394813"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:bg-white/10"
              >
                <FaWhatsapp size={19} />
              </a>
              <a
                href="mailto:queenlycoffee@gmail.com"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:bg-white/10"
              >
                <span className="text-lg">@</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer: logo only, no Queenly Coffee name text */}
      <footer
        className={`relative overflow-hidden ${
          darkMode ? "bg-[#1A120D]" : "bg-[#F6EFE5]"
        }`}
      >
        <BeanBlur dark={darkMode} />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <a href="#home" aria-label="Home" className="inline-flex w-fit items-center">
            <img src={currentLogo} alt="Queenly Coffee logo" className="h-10 w-auto" />
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-xs transition hover:text-[#562402] ${mutedText}`}
              >
                {t.navigation[item.key]}
              </a>
            ))}
          </nav>

          <p className={`text-xs ${mutedText}`}>
            © {new Date().getFullYear()} · {t.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
