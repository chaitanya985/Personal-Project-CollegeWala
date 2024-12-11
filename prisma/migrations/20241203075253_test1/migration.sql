-- CreateTable
CREATE TABLE "CollegeList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "entrance" TEXT NOT NULL,
    "cutoff" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "stream" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "img" TEXT,
    "collegeType" TEXT,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "collegeUrl" TEXT,

    CONSTRAINT "CollegeList_pkey" PRIMARY KEY ("id")
);
