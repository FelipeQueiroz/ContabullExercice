-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `favPet` VARCHAR(191) NULL,
    `favTech` VARCHAR(191) NULL,
    `married` BOOLEAN NULL,
    `birthDay` DATETIME(3) NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
