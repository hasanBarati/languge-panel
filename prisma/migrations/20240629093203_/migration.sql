-- CreateTable
CREATE TABLE "Lessons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "invoiceStatus" TEXT NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "LessonDetail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tag" TEXT,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Lessons_tag_key" ON "Lessons"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "Lessons_tagName_key" ON "Lessons"("tagName");

-- CreateIndex
CREATE UNIQUE INDEX "LessonDetail_tag_key" ON "LessonDetail"("tag");
