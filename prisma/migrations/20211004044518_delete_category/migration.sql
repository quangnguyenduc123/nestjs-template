/*
  Warnings:

  - You are about to drop the `_categorytopost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytopost` DROP FOREIGN KEY `_categorytopost_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_categorytopost` DROP FOREIGN KEY `_categorytopost_ibfk_2`;

-- DropTable
DROP TABLE `_categorytopost`;

-- DropTable
DROP TABLE `category`;
