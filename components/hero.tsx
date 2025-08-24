"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";
import { Link } from "@heroui/link";
import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, type: "spring" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, delay: 0.5, type: "spring" },
  },
};

export default function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main className="relative flex justify-center items-center overflow-hidden">
      <BackgroundLines className="flex flex-col items-center justify-center w-full px-4">
        <section className="max-w-screen-xl mx-auto px-4 py-28 flex flex-col items-center text-center gap-8">
          {/* Hero Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-6 max-w-4xl"
          >
            {/* <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
            </HoverBorderGradient> */}
              <span className="px-3 py-1 text-sm border border-border rounded-full bg-card">
                Digital Innovation
              </span>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-sky-800/10 dark:from-sky-100/10 to-foreground bg-clip-text text-transparent">
              Building the Future
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground">
              Ekilie creates smart digital solutions that empower tomorrow.
            </p>

            {/* Buttons + Modal */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onPress={onOpen}
                color="primary"
                variant="shadow"
                aria-label="Explore our solutions"
              >
                Explore Our Solutions
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Floating Glow Effect */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex justify-end items-start pointer-events-none"
        >
          <div className="w-3/4 flex justify-center items-center">
            <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl rotate-[30deg] sm:rotate-[35deg]" />
          </div>
        </motion.div>
      </BackgroundLines>

      {/* Modal */}
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="text-xl font-semibold">
            Our Solutions
          </ModalHeader>
          <ModalBody>
            <p className="text-muted-foreground">
              Ekilie delivers smart platforms for sensing, communication, and
              insights.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              as={Link}
              href="#products"
              color="primary"
              variant="solid"
              size="sm"
              aria-label="Discover our products"
            >
              Discover Products
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  );
}
