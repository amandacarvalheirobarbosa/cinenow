-- CreateTable
CREATE TABLE `fav_movie_tbl` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `movieId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `fav_movie_tbl_movieId_key`(`movieId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fav_movie_tbl` ADD CONSTRAINT `fav_movie_tbl_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user_tbl`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
