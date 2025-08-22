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

export default function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="relative justify-center items-center">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.6, type: "spring", bounce: 0 }}
            className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
          >
            <span className="w-fit h-full text-sm bg-card px-2 py-1 border border-border rounded-full">
              Pioneering Digital Innovation
            </span>
            <h1 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
              Shaping the Digital Landscape with Cutting-Edge Innovation
            </h1>
            <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
              Discover Ekilie&apos;s suite of advanced digital solutions
              designed to transform tomorrow&apos;s technology. From intelligent
              sensing to seamless communication, we pioneer innovations that
              drive the future.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
            >
              <Button onPress={onOpen} color="primary" variant="shadow">
                Explore Our Solutions
              </Button>
              <Modal
                isOpen={isOpen}
                placement="center"
                onOpenChange={onOpenChange}
              >
                <ModalContent>
                  <ModalHeader>Ekilie Solutions</ModalHeader>
                  <ModalBody>
                    We are pioneers in digital innovation, developing
                    cutting-edge solutions including ekiliSense, ekiliRelay,
                    ekiliConvo, and comprehensive Insights platforms. Our
                    mission is to shape the future of technology through
                    intelligent design and forward-thinking solutions.
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      as={Link}
                      href="#products"
                      color="primary"
                      variant="solid"
                      size="sm"
                    >
                      Discover Products
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </motion.div>
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
          className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
        >
          <div className="w-3/4 flex justify-center items-center">
            <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
          </div>
        </motion.div>
      </BackgroundLines>
    </div>
  );
}
