"use client";
import { useState } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { CheckCircle2, X } from "lucide-react";
import { TECH_STACKS, EXPERIENCE_LEVELS, AVAILABILITY_OPTIONS, WORK_TYPE_OPTIONS } from "@/lib/types";

export default function JoinTeam() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    timezone: "",
    title: "",
    bio: "",
    yearsOfExperience: "",
    experienceLevel: "",
    githubUrl: "",
    linkedinUrl: "",
    portfolioUrl: "",
    resumeUrl: "",
    availability: "",
    hourlyRate: "",
    preferredWorkType: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (skillInput.trim() && !selectedSkills.includes(skillInput.trim())) {
      setSelectedSkills([...selectedSkills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      const response = await fetch("/api/developers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          skills: selectedSkills,
          primarySkills: selectedSkills.slice(0, 4),
          yearsOfExperience: parseInt(formData.yearsOfExperience) || 0,
          hourlyRate: formData.hourlyRate ? parseFloat(formData.hourlyRate) : undefined,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            location: "",
            timezone: "",
            title: "",
            bio: "",
            yearsOfExperience: "",
            experienceLevel: "",
            githubUrl: "",
            linkedinUrl: "",
            portfolioUrl: "",
            resumeUrl: "",
            availability: "",
            hourlyRate: "",
            preferredWorkType: "",
          });
          setSelectedSkills([]);
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.fullName.trim() &&
    formData.email.trim() &&
    formData.title.trim() &&
    formData.yearsOfExperience &&
    formData.experienceLevel &&
    formData.availability &&
    formData.preferredWorkType &&
    selectedSkills.length > 0;

  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Remote Team
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Become part of a fully remote development company working with exciting clients worldwide.
            We value autonomy, work-life balance, and continuous growth.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 px-4 flex-1">
        <div className="max-w-4xl mx-auto">
          {submitStatus === "success" ? (
            <Card>
              <CardBody className="py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
                <p className="text-muted-foreground">
                  Thank you for applying. We&apos;ll review your application and get back to you within 3-5 business days.
                </p>
              </CardBody>
            </Card>
          ) : (
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <div>
                    <h2 className="text-2xl font-bold">Developer Application</h2>
                    <p className="text-muted-foreground">Fill out the form below to apply</p>
                  </div>
                </CardHeader>
                <CardBody className="gap-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onValueChange={(value) => handleChange("fullName", value)}
                        isRequired
                        labelPlacement="outside"
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onValueChange={(value) => handleChange("email", value)}
                        isRequired
                        labelPlacement="outside"
                      />
                      <Input
                        label="Phone"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onValueChange={(value) => handleChange("phone", value)}
                        labelPlacement="outside"
                      />
                      <Input
                        label="Location (City, Country)"
                        placeholder="London, UK"
                        value={formData.location}
                        onValueChange={(value) => handleChange("location", value)}
                        labelPlacement="outside"
                      />
                      <Input
                        label="Timezone"
                        placeholder="GMT+0, EST, etc."
                        value={formData.timezone}
                        onValueChange={(value) => handleChange("timezone", value)}
                        labelPlacement="outside"
                      />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <Input
                        label="Professional Title"
                        placeholder="Senior Full-Stack Developer"
                        value={formData.title}
                        onValueChange={(value) => handleChange("title", value)}
                        isRequired
                        labelPlacement="outside"
                      />
                      <Textarea
                        label="Bio / About You"
                        placeholder="Tell us about your experience, what you're passionate about, and what you're looking for..."
                        value={formData.bio}
                        onValueChange={(value) => handleChange("bio", value)}
                        labelPlacement="outside"
                        minRows={4}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Years of Experience"
                          type="number"
                          placeholder="5"
                          value={formData.yearsOfExperience}
                          onValueChange={(value) => handleChange("yearsOfExperience", value)}
                          isRequired
                          labelPlacement="outside"
                        />
                        <Select
                          label="Experience Level"
                          placeholder="Select level"
                          selectedKeys={formData.experienceLevel ? [formData.experienceLevel] : []}
                          onSelectionChange={(keys) => {
                            const selected = Array.from(keys)[0];
                            handleChange("experienceLevel", selected as string);
                          }}
                          isRequired
                          labelPlacement="outside"
                        >
                          {EXPERIENCE_LEVELS.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Skills & Technologies</h3>
                    <div className="flex gap-2 mb-3">
                      <Input
                        placeholder="Add a skill (e.g., React, Node.js)"
                        value={skillInput}
                        onValueChange={setSkillInput}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addSkill();
                          }
                        }}
                      />
                      <Button type="button" onPress={addSkill} color="primary">
                        Add
                      </Button>
                    </div>
                    {selectedSkills.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {selectedSkills.map((skill) => (
                          <Chip
                            key={skill}
                            onClose={() => removeSkill(skill)}
                            variant="flat"
                            color="primary"
                          >
                            {skill}
                          </Chip>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      Add at least one skill (commonly used: {TECH_STACKS.slice(0, 5).join(", ")}, etc.)
                    </p>
                  </div>

                  {/* Portfolio & Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Portfolio & Links</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <Input
                        label="GitHub URL"
                        placeholder="https://github.com/yourusername"
                        value={formData.githubUrl}
                        onValueChange={(value) => handleChange("githubUrl", value)}
                        labelPlacement="outside"
                      />
                      <Input
                        label="LinkedIn URL"
                        placeholder="https://linkedin.com/in/yourusername"
                        value={formData.linkedinUrl}
                        onValueChange={(value) => handleChange("linkedinUrl", value)}
                        labelPlacement="outside"
                      />
                      <Input
                        label="Portfolio URL"
                        placeholder="https://yourportfolio.com"
                        value={formData.portfolioUrl}
                        onValueChange={(value) => handleChange("portfolioUrl", value)}
                        labelPlacement="outside"
                      />
                      <Input
                        label="Resume/CV URL"
                        placeholder="https://drive.google.com/..."
                        value={formData.resumeUrl}
                        onValueChange={(value) => handleChange("resumeUrl", value)}
                        labelPlacement="outside"
                      />
                    </div>
                  </div>

                  {/* Availability & Work Preferences */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Availability & Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        label="Availability"
                        placeholder="Select availability"
                        selectedKeys={formData.availability ? [formData.availability] : []}
                        onSelectionChange={(keys) => {
                          const selected = Array.from(keys)[0];
                          handleChange("availability", selected as string);
                        }}
                        isRequired
                        labelPlacement="outside"
                      >
                        {AVAILABILITY_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <Select
                        label="Preferred Work Type"
                        placeholder="Select work type"
                        selectedKeys={formData.preferredWorkType ? [formData.preferredWorkType] : []}
                        onSelectionChange={(keys) => {
                          const selected = Array.from(keys)[0];
                          handleChange("preferredWorkType", selected as string);
                        }}
                        isRequired
                        labelPlacement="outside"
                      >
                        {WORK_TYPE_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <Input
                        label="Hourly Rate (USD, optional)"
                        type="number"
                        placeholder="75"
                        value={formData.hourlyRate}
                        onValueChange={(value) => handleChange("hourlyRate", value)}
                        labelPlacement="outside"
                        startContent={<span className="text-muted-foreground">$</span>}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex gap-4 justify-end pt-4 border-t">
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      isDisabled={!isFormValid || isSubmitting}
                    >
                      Submit Application
                    </Button>
                  </div>

                  {submitStatus === "error" && (
                    <div className="p-4 bg-danger/10 border border-danger rounded-lg">
                      <p className="text-danger">
                        There was an error submitting your application. Please try again.
                      </p>
                    </div>
                  )}
                </CardBody>
              </Card>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
