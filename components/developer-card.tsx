"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Avatar } from "@heroui/avatar";
import { MapPin, Clock, Briefcase, Github, Linkedin, Globe } from "lucide-react";
import type { DeveloperProfile } from "@/lib/types";
import { Link } from "@heroui/link";

interface DeveloperCardProps {
  developer: DeveloperProfile;
}

export default function DeveloperCard({ developer }: DeveloperCardProps) {
  const getExperienceLabel = (level: string) => {
    const labels: Record<string, string> = {
      JUNIOR: "Junior",
      MID: "Mid-Level",
      SENIOR: "Senior",
      LEAD: "Lead",
      PRINCIPAL: "Principal",
    };
    return labels[level] || level;
  };

  const getAvailabilityLabel = (availability: string) => {
    const labels: Record<string, string> = {
      AVAILABLE_NOW: "Available Now",
      AVAILABLE_2_WEEKS: "Available in 2 Weeks",
      AVAILABLE_1_MONTH: "Available in 1 Month",
      NOT_AVAILABLE: "Not Available",
    };
    return labels[availability] || availability;
  };

  const getAvailabilityColor = (availability: string) => {
    const colors: Record<string, "success" | "warning" | "default" | "danger"> = {
      AVAILABLE_NOW: "success",
      AVAILABLE_2_WEEKS: "warning",
      AVAILABLE_1_MONTH: "warning",
      NOT_AVAILABLE: "default",
    };
    return colors[availability] || "default";
  };

  return (
    <Card className="w-full">
      <CardBody className="gap-4">
        {/* Header */}
        <div className="flex gap-4 items-start">
          <Avatar
            name={developer.fullName}
            size="lg"
            className="flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold truncate">{developer.fullName}</h3>
            <p className="text-muted-foreground">{developer.title}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              <Chip size="sm" variant="flat">
                {getExperienceLabel(developer.experienceLevel)}
              </Chip>
              <Chip size="sm" variant="flat" color={getAvailabilityColor(developer.availability)}>
                {getAvailabilityLabel(developer.availability)}
              </Chip>
            </div>
          </div>
        </div>

        {/* Bio */}
        {developer.bio && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {developer.bio}
          </p>
        )}

        {/* Details */}
        <div className="flex flex-col gap-2 text-sm">
          {developer.location && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{developer.location}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="h-4 w-4" />
            <span>{developer.yearsOfExperience} years experience</span>
          </div>
          {developer.timezone && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{developer.timezone}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        <div>
          <p className="text-sm font-medium mb-2">Primary Skills</p>
          <div className="flex gap-2 flex-wrap">
            {developer.primarySkills.slice(0, 5).map((skill, idx) => (
              <Chip key={idx} size="sm" variant="bordered" color="primary">
                {skill}
              </Chip>
            ))}
            {developer.primarySkills.length > 5 && (
              <Chip size="sm" variant="bordered">
                +{developer.primarySkills.length - 5} more
              </Chip>
            )}
          </div>
        </div>

        {/* Links */}
        {(developer.githubUrl || developer.linkedinUrl || developer.portfolioUrl) && (
          <div className="flex gap-3">
            {developer.githubUrl && (
              <Button
                as={Link}
                href={developer.githubUrl}
                isExternal
                isIconOnly
                size="sm"
                variant="light"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Button>
            )}
            {developer.linkedinUrl && (
              <Button
                as={Link}
                href={developer.linkedinUrl}
                isExternal
                isIconOnly
                size="sm"
                variant="light"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            )}
            {developer.portfolioUrl && (
              <Button
                as={Link}
                href={developer.portfolioUrl}
                isExternal
                isIconOnly
                size="sm"
                variant="light"
                aria-label="Portfolio"
              >
                <Globe className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </CardBody>
      <CardFooter>
        <Button color="primary" className="w-full" as={Link} href={`/find-developers/${developer.id}`}>
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
