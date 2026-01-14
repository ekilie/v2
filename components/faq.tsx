"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "How does Ekilie vet developers?",
      content: (
        <div className="text-muted-foreground">
          Every developer goes through a rigorous screening process including technical assessments, portfolio review, reference checks, and culture fit interviews. We only accept the top 3% of applicants to ensure quality.
        </div>
      ),
    },
    {
      title: "What types of engagement are available?",
      content: (
        <div className="text-muted-foreground">
          We offer flexible engagement models including full-time, part-time, contract, and freelance arrangements. You can hire developers for short-term projects or long-term partnerships based on your needs.
        </div>
      ),
    },
    {
      title: "How quickly can I get matched with a developer?",
      content: (
        <div className="text-muted-foreground">
          We typically match clients with qualified developers within 48 hours of receiving your requirements. Once matched, developers can start onboarding immediately or based on their availability.
        </div>
      ),
    },
    {
      title: "What technologies do your developers specialize in?",
      content: (
        <div className="text-muted-foreground">
          Our network includes experts in React, React Native, Node.js, TypeScript, Next.js, GraphQL, PostgreSQL, MongoDB, AWS, and many other modern technologies. We carefully match developers based on your specific tech stack requirements.
        </div>
      ),
    },
    {
      title: "How does remote collaboration work?",
      content: (
        <div className="text-muted-foreground">
          Our developers are experienced in remote work with strong communication skills. They use modern collaboration tools like Slack, GitHub, and video conferencing. We ensure there&apos;s sufficient timezone overlap for real-time collaboration when needed.
        </div>
      ),
    },
    {
      title: "What if I'm not satisfied with a developer?",
      content: (
        <div className="text-muted-foreground">
          We offer a satisfaction guarantee. If you&apos;re not happy with a developer within the first two weeks, we&apos;ll find you a replacement at no additional cost. Your success is our priority.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion
          fullWidth
          selectionMode="multiple"
          variant="splitted"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              className="text-muted-foreground"
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
