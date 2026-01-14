import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const skills = searchParams.get("skills")?.split(",").filter(Boolean);
    const experienceLevel = searchParams.get("experienceLevel");
    const availability = searchParams.get("availability");
    const isAvailable = searchParams.get("isAvailable") === "true";

    // Build where clause
    const where: any = {
      isActive: true,
    };

    if (isAvailable) {
      where.isAvailable = true;
    }

    if (skills && skills.length > 0) {
      where.skills = {
        hasSome: skills,
      };
    }

    if (experienceLevel) {
      where.experienceLevel = experienceLevel;
    }

    if (availability) {
      where.availability = availability;
    }

    const developers = await prisma.developer.findMany({
      where,
      select: {
        id: true,
        fullName: true,
        email: true,
        location: true,
        timezone: true,
        title: true,
        bio: true,
        yearsOfExperience: true,
        experienceLevel: true,
        skills: true,
        primarySkills: true,
        githubUrl: true,
        linkedinUrl: true,
        portfolioUrl: true,
        availability: true,
        hourlyRate: true,
        preferredWorkType: true,
        isAvailable: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      developers,
      count: developers.length,
    });
  } catch (error) {
    console.error("Error fetching developers:", error);
    return NextResponse.json(
      { error: "Failed to fetch developers" },
      { status: 500 }
    );
  }
}
