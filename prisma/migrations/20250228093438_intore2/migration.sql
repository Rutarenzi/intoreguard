/*
  Warnings:

  - The values [MODERATOR] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `reportType` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `incidentCategory` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Report` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "IncidentLevel" AS ENUM ('EMERGENCY', 'NON_EMERGENCY');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN', 'SUPERVISOR', 'USER');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "reportType",
ADD COLUMN     "incidentCategory" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "IncidentLevel" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";

-- DropEnum
DROP TYPE "ReportType";
