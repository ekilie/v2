"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";
import { products } from "@/lib/utils";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Products() {
  return (
    <motion.section
      id="products"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Our Digital Solutions
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            Discover our suite of innovative products designed to transform
            tomorrow&apos;s technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, idx) => (
            <Card
              key={idx}
              className={`relative rounded-[20px] p-[3px] will-change-transform ${
                item.isFeatured ? "sm:scale-110" : ""
              }`}
            >
              {item.isFeatured ? (
                <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#016FEE_70%,#C7DBFB_100%)]" />
              ) : (
                <span className="absolute inset-[-1000%] bg-border" />
              )}
              <div className="z-[2] flex flex-col justify-between w-full h-full bg-card rounded-[18px] p-5">
                <CardBody className="w-full flex items-start gap-3">
                  <div className="flex flex-col w-full">
                    <h4 className="text-xl font-light">{item.name}</h4>
                    
                    <span className="text-muted-foreground text-sm font-light">
                      {item.desc}
                    </span>
                  </div>

                  <Divider className="my-4" />

                  <div className="flex flex-col gap-5 pb-5">
                    <span className="text-muted-foreground text-sm font-light">
                      Key Features
                    </span>
                    <ul className="flex flex-col gap-2">
                      {item.features.map((feature, index) => (
                        <li key={index} className="text-sm font-light">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
                <CardFooter className="p-0">
                  <Button
                    className="w-full"
                    variant="solid"
                    color={item.isFeatured ? "primary" : "default"}
                  >
                    <LinkPreview
                      url="https://ekilie.com"
                      className="font-bold bg-clip-text text-transparen"
                    >
                      Learn More
                    </LinkPreview>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
