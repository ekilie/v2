"use client";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { 
  Search, 
  UserCheck, 
  MessageSquare, 
  Rocket, 
  Users, 
  FileText, 
  CheckCircle, 
  Star 
} from "lucide-react";

export default function HowItWorks() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Ekilie Works
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Connecting world-class remote developers with innovative companies.
            Simple, transparent, and efficient.
          </p>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Finding the right developer for your project has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardBody className="gap-4 items-center text-center p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Browse Developers</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore our curated network of pre-vetted developers with detailed profiles and skill sets
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-4 items-center text-center p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Tell us about your project requirements, timeline, and budget through our inquiry form
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-4 items-center text-center p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Get Matched</h3>
                  <p className="text-sm text-muted-foreground">
                    We match you with developers who have the exact skills and availability you need
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-4 items-center text-center p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Start Building</h3>
                  <p className="text-sm text-muted-foreground">
                    Onboard your developer and start your project. We handle the administrative details
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button as={Link} href="/find-developers" color="primary" size="lg">
              Find Developers Now
            </Button>
          </div>
        </div>
      </section>

      {/* For Developers Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Developers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our network and work on exciting projects with top companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardBody className="gap-4 items-center text-center p-6">
                <div className="p-4 bg-success/10 rounded-full">
                  <FileText className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Apply</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your application with your skills, experience, and portfolio
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-4 items-center text-center p-6">
                <div className="p-4 bg-success/10 rounded-full">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Get Vetted</h3>
                  <p className="text-sm text-muted-foreground">
                    Pass our technical review process to join our exclusive network
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-4 items-center text-center p-6">
                <div className="p-4 bg-success/10 rounded-full">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Get Matched</h3>
                  <p className="text-sm text-muted-foreground">
                    We connect you with clients looking for your specific skill set
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-4 items-center text-center p-6">
                <div className="p-4 bg-success/10 rounded-full">
                  <Star className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Work & Grow</h3>
                  <p className="text-sm text-muted-foreground">
                    Work remotely on meaningful projects while building your reputation
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button as={Link} href="/join-team" color="success" size="lg">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Ekilie?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-3">100% Remote</h3>
                <p className="text-muted-foreground">
                  Our fully distributed model means access to global talent and flexible working arrangements for everyone.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-3">Pre-Vetted Talent</h3>
                <p className="text-muted-foreground">
                  Every developer goes through a rigorous screening process to ensure they meet our high standards.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-3">Fast Matching</h3>
                <p className="text-muted-foreground">
                  We connect clients with developers quickly, often within 48 hours of your initial inquiry.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-3">Flexible Engagement</h3>
                <p className="text-muted-foreground">
                  Choose from full-time, part-time, contract, or freelance arrangements based on your needs.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We provide continuous support to both clients and developers throughout the engagement.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees. Clear, upfront pricing that works for companies of all sizes.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
