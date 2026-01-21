-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('JUNIOR', 'MID', 'SENIOR', 'LEAD', 'PRINCIPAL');

-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('AVAILABLE_NOW', 'AVAILABLE_2_WEEKS', 'AVAILABLE_1_MONTH', 'NOT_AVAILABLE');

-- CreateEnum
CREATE TYPE "WorkType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'FREELANCE');

-- CreateEnum
CREATE TYPE "InquiryType" AS ENUM ('HIRE_DEVELOPER', 'PROJECT_CONSULTATION', 'PARTNERSHIP', 'GENERAL');

-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'CLOSED');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'UNDER_REVIEW', 'INTERVIEW_SCHEDULED', 'INTERVIEWED', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "TestimonialType" AS ENUM ('CLIENT', 'DEVELOPER');

-- CreateTable
CREATE TABLE "Developer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "location" TEXT,
    "timezone" TEXT,
    "title" TEXT NOT NULL,
    "bio" TEXT,
    "yearsOfExperience" INTEGER NOT NULL,
    "experienceLevel" "ExperienceLevel" NOT NULL,
    "skills" TEXT[],
    "primarySkills" TEXT[],
    "githubUrl" TEXT,
    "linkedinUrl" TEXT,
    "portfolioUrl" TEXT,
    "resumeUrl" TEXT,
    "availability" "Availability" NOT NULL,
    "hourlyRate" DOUBLE PRECISION,
    "preferredWorkType" "WorkType" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "profileComplete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientInquiry" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT,
    "inquiryType" "InquiryType" NOT NULL,
    "message" TEXT NOT NULL,
    "budget" TEXT,
    "timeline" TEXT,
    "requiredSkills" TEXT[],
    "experienceLevel" "ExperienceLevel",
    "projectType" TEXT,
    "status" "InquiryStatus" NOT NULL DEFAULT 'NEW',
    "priority" "Priority" NOT NULL DEFAULT 'MEDIUM',
    "assignedTo" TEXT,
    "notes" TEXT,

    CONSTRAINT "ClientInquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "developerId" TEXT NOT NULL,
    "coverLetter" TEXT,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "interviewDate" TIMESTAMP(3),
    "interviewNotes" TEXT,
    "decidedAt" TIMESTAMP(3),
    "rejectionReason" TEXT,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "company" TEXT,
    "avatar" TEXT,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "type" "TestimonialType" NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Developer_email_key" ON "Developer"("email");

-- CreateIndex
CREATE INDEX "Developer_email_idx" ON "Developer"("email");

-- CreateIndex
CREATE INDEX "Developer_isActive_isAvailable_idx" ON "Developer"("isActive", "isAvailable");

-- CreateIndex
CREATE INDEX "Developer_experienceLevel_idx" ON "Developer"("experienceLevel");

-- CreateIndex
CREATE INDEX "ClientInquiry_email_idx" ON "ClientInquiry"("email");

-- CreateIndex
CREATE INDEX "ClientInquiry_status_idx" ON "ClientInquiry"("status");

-- CreateIndex
CREATE INDEX "ClientInquiry_createdAt_idx" ON "ClientInquiry"("createdAt");

-- CreateIndex
CREATE INDEX "Application_developerId_idx" ON "Application"("developerId");

-- CreateIndex
CREATE INDEX "Application_status_idx" ON "Application"("status");

-- CreateIndex
CREATE INDEX "Application_createdAt_idx" ON "Application"("createdAt");

-- CreateIndex
CREATE INDEX "Testimonial_isPublished_type_idx" ON "Testimonial"("isPublished", "type");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "Developer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
