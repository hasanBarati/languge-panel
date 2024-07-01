/*
  Warnings:

  - Made the column `tag` on table `Seasons` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Seasons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "image" TEXT,
    "qunatity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Seasons" ("createdAt", "id", "image", "name", "qunatity", "tag", "updatedAt") SELECT "createdAt", "id", "image", "name", "qunatity", "tag", "updatedAt" FROM "Seasons";
DROP TABLE "Seasons";
ALTER TABLE "new_Seasons" RENAME TO "Seasons";
PRAGMA foreign_key_check("Seasons");
PRAGMA foreign_keys=ON;
