import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { GrLocation } from "react-icons/gr"
import { HiPhone } from "react-icons/hi"
import { IoMail } from "react-icons/io5"
import { s1, s2, s3, s4, s5 } from "../assets"

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
    url: "tel:+000-123456789",
    text: "+000-123456789",
    icon: HiPhone
  },
  {
    title: "Email",
    url: "mailto:info@example.com",
    text: "info@example.com",
    icon: IoMail
  },
  {
    title: "Our Location",
    url: false,
    text: "456 Main Street, New York, NY 10001",
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
    title: "Growth Strategy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus.",
    img: s1,
  },
  {
    title: "Technology Upgrade",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus.",
    img: s2,
  },
  {
    title: "Finance Advisory",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus.",
    img: s3,
  },
  {
    title: "Risk Planning",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus.",
    img: s4,
  },
  {
    title: "Process Management",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus.",
    img: s5,
  },
]

export const reviews = [
  {
    name: "John Doe",
    title: "CEO",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus. Lorem ipsum dolor sit amet.",
    img: "",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus. Lorem ipsum dolor sit amet.",
    img: "",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus. Lorem ipsum dolor sit amet.",
    img: "",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus. Lorem ipsum dolor sit amet.",
    img: "",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus. Lorem ipsum dolor sit amet.",
    img: "",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus. Lorem ipsum dolor sit amet.",
    img: "",
  },
]

export const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer: "Cursus mi pretium tellus duis convallis tempus leo. Pulvinar vivamus fringilla lacus nec posuere ut hendrerit metus semper vel class bibendum egestas.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer: "Cursus mi pretium tellus duis convallis tempus leo. Pulvinar vivamus fringilla lacus nec posuere ut hendrerit metus semper vel class bibendum egestas.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer: "Cursus mi pretium tellus duis convallis tempus leo. Pulvinar vivamus fringilla lacus nec posuere ut hendrerit metus semper vel class bibendum egestas.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer: "Cursus mi pretium tellus duis convallis tempus leo. Pulvinar vivamus fringilla lacus nec posuere ut hendrerit metus semper vel class bibendum egestas.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer: "Cursus mi pretium tellus duis convallis tempus leo. Pulvinar vivamus fringilla lacus nec posuere ut hendrerit metus semper vel class bibendum egestas.",
  },
]
