/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `Lessons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tag]` on the table `Seasons` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lessons_tag_key" ON "Lessons"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "Seasons_tag_key" ON "Seasons"("tag");
