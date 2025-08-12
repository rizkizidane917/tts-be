/*
  Warnings:

  - Added the required column `language` to the `Conversion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Conversion" ADD COLUMN     "language" TEXT NOT NULL;
