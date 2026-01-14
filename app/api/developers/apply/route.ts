import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "fullName",
      "email",
      "title",
      "yearsOfExperience",
      "experienceLevel",
      "availability",
      "preferredWorkType",
      "skills",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create developer profile
    const developer = await prisma.developer.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone || null,
        location: body.location || null,
        timezone: body.timezone || null,
        title: body.title,
        bio: body.bio || null,
        yearsOfExperience: body.yearsOfExperience,
        experienceLevel: body.experienceLevel,
        skills: body.skills || [],
        primarySkills: body.primarySkills || [],
        githubUrl: body.githubUrl || null,
        linkedinUrl: body.linkedinUrl || null,
        portfolioUrl: body.portfolioUrl || null,
        resumeUrl: body.resumeUrl || null,
        availability: body.availability,
        hourlyRate: body.hourlyRate || null,
        preferredWorkType: body.preferredWorkType,
        isActive: true,
        isAvailable: body.availability === "AVAILABLE_NOW",
        profileComplete: true,
      },
    });

    // Create application record
    await prisma.application.create({
      data: {
        developerId: developer.id,
        status: "PENDING",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        developerId: developer.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating developer application:", error);
    
    // Handle unique constraint violation (duplicate email)
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return NextResponse.json(
        { error: "An application with this email already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
