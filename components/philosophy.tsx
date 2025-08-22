"use client";
import { philosophy } from "@/lib/utils";
import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <motion.section
      id="philosophy"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Our Philosophy
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            At Ekilie, we believe technology is more than code — it’s a force 
            for progress, connection, and a better future.
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophy.map((item, idx) => (
            <Card
              key={idx}
              className="relative rounded-[20px] p-[3px] will-change-transform"
            >
              <span className="absolute inset-[-1000%] bg-border" />
              <div className="z-[2] flex flex-col justify-between w-full h-full bg-card rounded-[18px] p-6">
                <CardBody className="flex flex-col gap-3">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardBody>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
