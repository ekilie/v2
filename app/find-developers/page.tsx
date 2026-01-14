"use client";
import { useState } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import DeveloperCard from "@/components/developer-card";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { TECH_STACKS, EXPERIENCE_LEVELS, AVAILABILITY_OPTIONS, WORK_TYPE_OPTIONS } from "@/lib/types";
import type { DeveloperProfile, ExperienceLevel, Availability, WorkType } from "@/lib/types";

// Mock data - will be replaced with API calls
const mockDevelopers: DeveloperProfile[] = [
  {
    id: "1",
    fullName: "Sarah Chen",
    email: "sarah@example.com",
    location: "Singapore",
    timezone: "GMT+8",
    title: "Senior Full-Stack Developer",
    bio: "Passionate full-stack developer with 7 years of experience building scalable web applications. Specialized in React, Node.js, and cloud infrastructure.",
    yearsOfExperience: 7,
    experienceLevel: "SENIOR" as ExperienceLevel,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    primarySkills: ["React", "Node.js", "TypeScript", "AWS"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    portfolioUrl: "https://example.com",
    availability: "AVAILABLE_NOW" as Availability,
    hourlyRate: 85,
    preferredWorkType: "FULL_TIME" as WorkType,
    isActive: true,
    isAvailable: true,
  },
  {
    id: "2",
    fullName: "Marcus Johnson",
    email: "marcus@example.com",
    location: "London, UK",
    timezone: "GMT+0",
    title: "React Native Expert",
    bio: "Mobile-first developer with deep expertise in React Native and cross-platform development. Built 20+ apps with millions of downloads.",
    yearsOfExperience: 5,
    experienceLevel: "SENIOR" as ExperienceLevel,
    skills: ["React Native", "React", "TypeScript", "Firebase", "iOS", "Android"],
    primarySkills: ["React Native", "React", "TypeScript", "Firebase"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    availability: "AVAILABLE_2_WEEKS" as Availability,
    hourlyRate: 80,
    preferredWorkType: "CONTRACT" as WorkType,
    isActive: true,
    isAvailable: true,
  },
  {
    id: "3",
    fullName: "Elena Rodriguez",
    email: "elena@example.com",
    location: "Barcelona, Spain",
    timezone: "GMT+1",
    title: "Lead Backend Engineer",
    bio: "Backend specialist focused on building high-performance APIs and microservices. Expert in Node.js, GraphQL, and distributed systems.",
    yearsOfExperience: 10,
    experienceLevel: "LEAD" as ExperienceLevel,
    skills: ["Node.js", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes"],
    primarySkills: ["Node.js", "GraphQL", "PostgreSQL", "Microservices"],
    githubUrl: "https://github.com",
    availability: "AVAILABLE_NOW" as Availability,
    hourlyRate: 95,
    preferredWorkType: "FULL_TIME" as WorkType,
    isActive: true,
    isAvailable: true,
  },
  {
    id: "4",
    fullName: "Raj Patel",
    email: "raj@example.com",
    location: "Mumbai, India",
    timezone: "GMT+5:30",
    title: "Frontend Developer",
    bio: "Creative frontend developer specializing in modern React applications and design systems. Strong focus on user experience and accessibility.",
    yearsOfExperience: 4,
    experienceLevel: "MID" as ExperienceLevel,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    primarySkills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    portfolioUrl: "https://example.com",
    availability: "AVAILABLE_1_MONTH" as Availability,
    hourlyRate: 60,
    preferredWorkType: "PART_TIME" as WorkType,
    isActive: true,
    isAvailable: true,
  },
];

export default function FindDevelopers() {
  const [developers, setDevelopers] = useState<DeveloperProfile[]>(mockDevelopers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedAvailability, setSelectedAvailability] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredDevelopers = developers.filter((dev) => {
    const matchesSearch = 
      searchTerm === "" ||
      dev.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) => dev.skills.includes(skill));

    const matchesExperience =
      selectedExperience === "" || dev.experienceLevel === selectedExperience;

    const matchesAvailability =
      selectedAvailability === "" || dev.availability === selectedAvailability;

    return matchesSearch && matchesSkills && matchesExperience && matchesAvailability;
  });

  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Expert Remote Developers
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our curated network of talented developers specializing in React, React Native, Node.js, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="flex gap-2">
              <Input
                placeholder="Search by name, skills, or title..."
                value={searchTerm}
                onValueChange={setSearchTerm}
                startContent={<Search className="h-4 w-4 text-muted-foreground" />}
                className="flex-1"
                size="lg"
              />
              <Button
                variant="bordered"
                size="lg"
                isIconOnly
                onPress={() => setShowFilters(!showFilters)}
                aria-label="Toggle filters"
              >
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg bg-muted/20">
                <Select
                  label="Experience Level"
                  placeholder="All levels"
                  selectedKeys={selectedExperience ? [selectedExperience] : []}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0];
                    setSelectedExperience(selected as string);
                  }}
                >
                  {EXPERIENCE_LEVELS.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </Select>

                <Select
                  label="Availability"
                  placeholder="All availability"
                  selectedKeys={selectedAvailability ? [selectedAvailability] : []}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0];
                    setSelectedAvailability(selected as string);
                  }}
                >
                  {AVAILABILITY_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>

                <Button
                  variant="light"
                  onPress={() => {
                    setSearchTerm("");
                    setSelectedSkills([]);
                    setSelectedExperience("");
                    setSelectedAvailability("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredDevelopers.length} of {developers.length} developers
          </p>
        </div>
      </section>

      {/* Developer Grid */}
      <section className="py-12 px-4 flex-1">
        <div className="max-w-6xl mx-auto">
          {filteredDevelopers.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No developers found matching your criteria.
              </p>
              <Button
                variant="light"
                className="mt-4"
                onPress={() => {
                  setSearchTerm("");
                  setSelectedSkills([]);
                  setSelectedExperience("");
                  setSelectedAvailability("");
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDevelopers.map((developer) => (
                <DeveloperCard key={developer.id} developer={developer} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
