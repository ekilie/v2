"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What is ekiliSense?",
      content: (
        <div className="text-muted-foreground">
          ekiliSense is an advanced sensing and monitoring platform that
          captures real-time data from physical environments and transforms it
          into actionable insights. It helps organizations improve efficiency,
          safety, and decision-making.
        </div>
      ),
    },
    {
      title: "How does ekiliSense collect data?",
      content: (
        <div className="text-muted-foreground">
          ekiliSense integrates with IoT sensors, edge devices, and existing
          infrastructure. Data is securely transmitted and processed using
          scalable cloud and edge computing pipelines.
        </div>
      ),
    },
    {
      title: "Who can benefit from ekiliSense?",
      content: (
        <div className="text-muted-foreground">
          Industries such as smart cities, manufacturing, healthcare,
          agriculture, and logistics benefit from ekiliSense by gaining
          real-time visibility into their operations and assets.
        </div>
      ),
    },
    {
      title: "Can ekiliSense integrate with other platforms?",
      content: (
        <div className="text-muted-foreground">
          Yes. ekiliSense offers APIs and integration capabilities to connect
          with ERP systems, cloud dashboards, and third-party analytics tools,
          ensuring seamless adoption.
        </div>
      ),
    },
    {
      title: "Is my data secure with ekiliSense?",
      content: (
        <div className="text-muted-foreground">
          Absolutely. ekiliSense uses industry-standard encryption, role-based
          access control, and compliance-ready data governance to protect your
          information.
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
