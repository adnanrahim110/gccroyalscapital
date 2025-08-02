import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6"
import { GrLocation } from "react-icons/gr"
import { HiPhone } from "react-icons/hi"
import { IoMail } from "react-icons/io5"
import { reviews_m1, reviews_m2, reviews_m3, reviews_s1_i, reviews_s2_i, reviews_s3_i, reviews_s4_i, reviews_s5_i, reviews_w1, reviews_w2, s1, s2, s3, s4, s5 } from "../assets"

export const navigation = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
]

export const contactDetails = [
  {
    title: "talk to us",
    url: "https://wa.me/+971527477786?text=Hello%20GRC%20Capital",
    text: "WhatsApp",
    icon: FaWhatsapp
  },
  {
    title: "Email",
    url: "mailto: info@grccapitals.com",
    text: " info@grccapitals.com",
    icon: IoMail
  },
  {
    title: "Our Location",
    url: false,
    text: "DUbai, United Arab Emirates",
    icon: GrLocation
  }
]

export const socialDetails = [
  {
    title: "Facebook",
    url: "/",
    icon: FaFacebookF
  },
  {
    title: "Instagram",
    url: "/",
    icon: FaInstagram
  },
  {
    title: "X-Twitter",
    url: "/",
    icon: FaXTwitter
  },
  {
    title: "LinkedIn",
    url: "/",
    icon: FaLinkedinIn
  },
]

export const services = [
  {
    title: "Growth <br/> Strategy",
    text: "Drive expansion through intelligent planning, sector insights, and risk-aligned funding models.",
    img: s1,
    icon: reviews_s1_i
  },
  {
    title: "Technology <br/>  Upgrade",
    text: "Enable operational transformation through digital investments and scalable financial tools.",
    img: s2,
    icon: reviews_s2_i
  },
  {
    title: "Finance <br/>  Advisory",
    text: "From capital structuring to regulatory alignment, our team offers actionable, expert financial advice.",
    img: s3,
    icon: reviews_s3_i
  },
  {
    title: "Risk <br/>  Planning",
    text: "Safeguard your investments with proactive risk identification, analysis, and mitigation frameworks.",
    img: s4,
    icon: reviews_s4_i
  },
  {
    title: "Process Management",
    text: "Enhance business performance through financial process optimization and strategic resource planning.",
    img: s5,
    icon: reviews_s5_i
  },
];


export const reviews = [
  {
    name: "Mikell Harper",
    title: "Managing Director, Real Estate",
    comment:
      "GRC translated a complex multi party deal into clear structure, managed counterparty risk, and kept cash flow central. Their expertise in Real Estate and Oil & Gas saved time and delivered exactly what our team needed.",
    img: reviews_m1,
  },
  {
    name: "Ayesha Khan",
    title: "Head of Trade Finance",
    comment:
      "We approached GRC for structured trade finance and got thoughtful instruments aligned to our risks. From LC wording to collateral, they navigated banking partners smoothly. The result was secure execution, cycles, and confidence to scale initiative.",
    img: reviews_w1,
  },
  {
    name: "Daniel Reed",
    title: "CFO, Growth-Stage Company",
    comment:
      "As a growth stage firm, we needed help, not generic promises. GRC scoped the work, set milestones, and delivered funding within the 30 to 90 day window. Communication was crisp, and risk issues were addressed early.",
    img: reviews_m2,
  },
  {
    name: "Sara Malik",
    title: "Program Lead, Digital Infrastructure",
    comment:
      "GRC brought partnership to a Digital Infrastructure and Real Estate program. They listened, mapped the cash drivers, and structured around them. The financing fit our operations, reduced noise with lenders, and positioned us to execute smoothly.",
    img: reviews_w2,
  },
  {
    name: "Robert James",
    title: "Executive Chairman",
    comment:
      "What stood out was GRC’s client first mindset paired with risk control. They tailored the structure to our constraints, stress tested assumptions, and stayed pragmatic. The outcome was bankable, defensible, and aligned with how we operate.",
    img: reviews_m3,
  },
];


export const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We work across Real Estate, Development, Renewable Energy, Digital Infrastructure, and Oil & Gas.",
  },
  {
    question: "How does GRC structure trade finance deals?",
    answer:
      "We tailor each instrument (LC, SBLC, BG, etc.) to the specific risks and needs of the transaction, ensuring compliance and security.",
  },
  {
    question: "Do you only work with large-scale clients?",
    answer:
      "No. We support mid-size and growth-stage firms with viable projects and strong fundamentals.",
  },
  {
    question: "What’s your typical project turnaround time?",
    answer:
      "Depending on complexity, our financial structuring and funding processes typically range between 30 to 90 days.",
  },
];

