import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at TechStart",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "This platform has transformed how we manage our business. The analytics features alone have saved us countless hours and improved our decision-making process significantly.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager at Scale Co",
    avatar: "https://i.pravatar.cc/150?img=3",
    content:
      "The integration capabilities are outstanding. We were able to connect all our existing tools seamlessly. The customer support team is also incredibly responsive and helpful.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "CTO at DataFlow",
    avatar: "https://i.pravatar.cc/150?img=5",
    content:
      "Security was our main concern when choosing a platform, and this solution exceeded our expectations. The encryption and compliance features give us complete peace of mind.",
    rating: 5,
  },
];

export const products = [
  {
    name: "ekiliSense",
    desc: "AI automated school managament system",
    features: [
      "Real-time data collection",
      "Intelligent analytics",
      "Actionable insights",
      "Seamless integration",
    ],
    link: "https://sense.ekilie.com",
    isFeatured: false,
  },
  {
    name: "ekiliRelay",
    desc: "Open email and sms sending API",
    features: [
      "High-performance relay",
      "Modern digital infrastructure",
      "Scalable architecture",
      "Reliable connectivity",
    ],
    link: "https://relay.ekilie.com",
    isFeatured: false,
  },
  {
    name: "ekiliConvo",
    desc: "Intelligent conversation platforms",
    features: [
      "Enhanced user engagement",
      "Smart interaction design",
      "Multi-platform support",
      "Advanced conversation flow",
    ],
    link: "https://convo.ekilie.com",
    isFeatured: false,
  },
  {
    name: "Insights",
    desc: "Comprehensive analytics and insights",
    features: [
      "Data-driven decision making",
      "Advanced visualization",
      "Custom reporting",
      "Predictive analytics",
    ],
    link: "https://insights.ekilie.com",
    isFeatured: false,
  },
];

export const philosophy = [
  {
    name: "Innovation First",
    desc: "We embrace bold ideas and pioneering technologies to create meaningful change.",
  },
  {
    name: "Human-Centered Design",
    desc: "Technology should serve people. Our solutions are built with empathy and usability in mind.",
  },
  {
    name: "Integrity & Trust",
    desc: "We believe in transparency, accountability, and building systems people can rely on.",
  },
  {
    name: "Sustainable Impact",
    desc: "Every solution we craft considers its long-term effect on communities and the environment.",
  },
];
