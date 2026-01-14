"use client";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardBody } from "@heroui/card";
import { 
  Globe, 
  Heart, 
  Zap, 
  Users, 
  Clock, 
  MessageCircle, 
  Target, 
  TrendingUp,
  Shield,
  Smile
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutRemote() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Remote, From Day One
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              At Ekilie, we don&apos;t just allow remote work—we&apos;re designed for it.
              Our culture, processes, and values are built around the remote-first philosophy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Remote-First Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardBody className="gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global by Default</h3>
                    <p className="text-muted-foreground">
                      We believe the best talent exists everywhere. Our team spans continents and time zones, bringing diverse perspectives to every challenge.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardBody className="gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Async-First Communication</h3>
                    <p className="text-muted-foreground">
                      We respect deep work and different time zones. Clear documentation and thoughtful async communication are our foundation.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardBody className="gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results Over Hours</h3>
                    <p className="text-muted-foreground">
                      We measure success by outcomes, not time spent online. Autonomy and trust are core to how we work.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardBody className="gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Work-Life Harmony</h3>
                    <p className="text-muted-foreground">
                      Remote work should enhance life, not consume it. We actively promote boundaries and encourage time off.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full">
                <CardBody className="gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparency & Trust</h3>
                    <p className="text-muted-foreground">
                      Open communication, shared knowledge, and mutual trust form the backbone of our remote culture.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Card className="h-full">
                <CardBody className="gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
                    <p className="text-muted-foreground">
                      We invest in our people with learning stipends, mentorship programs, and opportunities to lead.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">How We Make Remote Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Clock className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Flexible Schedules</h3>
                    <p className="text-muted-foreground text-sm">
                      Work when you&apos;re most productive. We have minimal overlap requirements and trust our team to manage their time.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Zap className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Modern Tools</h3>
                    <p className="text-muted-foreground text-sm">
                      We provide the best collaboration tools: Slack, GitHub, Notion, Figma, and more—everything you need to succeed.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Users className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Virtual Team Building</h3>
                    <p className="text-muted-foreground text-sm">
                      Regular virtual coffee chats, team game sessions, and annual in-person retreats keep us connected.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Smile className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Benefits</h3>
                    <p className="text-muted-foreground text-sm">
                      Home office stipend, learning budget, health insurance, generous PTO, and equipment provided.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Remote Team</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Time Zones</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-muted-foreground">Team Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
