"use client";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Tabs, Tab } from "@heroui/tabs";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const clientTestimonials = [
  {
    name: "Michael Chen",
    role: "CTO",
    company: "TechStart Inc",
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "Ekilie connected us with an exceptional React Native developer who delivered beyond our expectations. The remote collaboration was seamless, and the quality of work was outstanding.",
    rating: 5,
    type: "client",
  },
  {
    name: "Lisa Rodriguez",
    role: "Product Manager",
    company: "InnovateCo",
    avatar: "https://i.pravatar.cc/150?img=45",
    content:
      "Working with Ekilie's developers has been a game-changer for our startup. They found us a senior Node.js engineer who integrated perfectly with our team and shipped features rapidly.",
    rating: 5,
    type: "client",
  },
  {
    name: "James Anderson",
    role: "Founder",
    company: "StartupXYZ",
    avatar: "https://i.pravatar.cc/150?img=33",
    content:
      "The vetting process Ekilie uses is thorough. We got exactly the expertise we needed in React and TypeScript. Communication was excellent despite the time zone difference.",
    rating: 5,
    type: "client",
  },
];

const developerTestimonials = [
  {
    name: "Sarah Kim",
    role: "Senior Full-Stack Developer",
    location: "Seoul, South Korea",
    avatar: "https://i.pravatar.cc/150?img=5",
    content:
      "Joining Ekilie was the best career decision I've made. I get to work on exciting projects with great companies while maintaining the flexibility to work from anywhere. The support and community are fantastic.",
    rating: 5,
    type: "developer",
  },
  {
    name: "Carlos Martinez",
    role: "React Native Specialist",
    location: "Barcelona, Spain",
    avatar: "https://i.pravatar.cc/150?img=15",
    content:
      "The remote-first culture at Ekilie is genuine. They trust us to do our best work and provide all the tools and support we need. I've grown so much professionally while working with amazing clients.",
    rating: 5,
    type: "developer",
  },
  {
    name: "Priya Sharma",
    role: "Lead Backend Engineer",
    location: "Bangalore, India",
    avatar: "https://i.pravatar.cc/150?img=20",
    content:
      "Ekilie respects work-life balance and celebrates achievements. The clients are top-tier, and the projects are challenging in the best way. Plus, the competitive compensation makes it even better.",
    rating: 5,
    type: "developer",
  },
];

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text mb-4">
            What People Say About Us
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Hear from clients who found their perfect developers and developers who love working with us
          </p>
        </motion.div>

        <Tabs 
          aria-label="Testimonial types" 
          className="w-full"
          classNames={{
            tabList: "w-full flex justify-center mb-8",
            cursor: "w-full",
            tab: "max-w-fit",
          }}
        >
          <Tab key="clients" title="Client Reviews">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clientTestimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} testimonial={testimonial} />
              ))}
            </div>
          </Tab>
          <Tab key="developers" title="Developer Reviews">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {developerTestimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} testimonial={testimonial} />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </motion.section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="h-full">
      <CardBody className="gap-4 p-6">
        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
          ))}
        </div>

        {/* Content */}
        <p className="text-sm text-muted-foreground italic">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t">
          <Avatar
            src={testimonial.avatar}
            name={testimonial.name}
            size="sm"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground truncate">
              {testimonial.role}
              {testimonial.company && ` • ${testimonial.company}`}
              {testimonial.location && ` • ${testimonial.location}`}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
