/*
  Warnings:

  - You are about to alter the column `movieId` on the `fav_movie_tbl` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `fav_movie_tbl` MODIFY `movieId` INTEGER NOT NULL;
