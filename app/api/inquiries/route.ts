import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ["fullName", "email", "inquiryType", "message"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create inquiry
    const inquiry = await prisma.clientInquiry.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        company: body.company || null,
        phone: body.phone || null,
        inquiryType: body.inquiryType,
        message: body.message,
        budget: body.budget || null,
        timeline: body.timeline || null,
        requiredSkills: body.requiredSkills || [],
        experienceLevel: body.experienceLevel || null,
        projectType: body.projectType || null,
        status: "NEW",
        priority: "MEDIUM",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
        inquiryId: inquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const inquiryType = searchParams.get("inquiryType");

    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (inquiryType) {
      where.inquiryType = inquiryType;
    }

    const inquiries = await prisma.clientInquiry.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      inquiries,
      count: inquiries.length,
    });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
