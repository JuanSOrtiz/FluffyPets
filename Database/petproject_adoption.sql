-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: petproject
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adoption`
--

DROP TABLE IF EXISTS `adoption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adoption` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adoption_date` datetime NOT NULL,
  `petId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `adoptionStatusId` int DEFAULT NULL,
  `cellphone_number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `neighborhood` varchar(255) NOT NULL,
  `live_with_quant` int NOT NULL,
  `own_house` tinyint NOT NULL,
  `responsibility` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ba8b98ac886c53665765317b01b` (`petId`),
  KEY `FK_359f53510ab054ae25048bcbd4a` (`userId`),
  KEY `FK_836601cd7be915e694d00648de0` (`adoptionStatusId`),
  CONSTRAINT `FK_359f53510ab054ae25048bcbd4a` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_836601cd7be915e694d00648de0` FOREIGN KEY (`adoptionStatusId`) REFERENCES `adoption_status` (`id`),
  CONSTRAINT `FK_ba8b98ac886c53665765317b01b` FOREIGN KEY (`petId`) REFERENCES `pet` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adoption`
--

LOCK TABLES `adoption` WRITE;
/*!40000 ALTER TABLE `adoption` DISABLE KEYS */;
INSERT INTO `adoption` VALUES (45,'2024-06-11 14:17:11',70,5,3,'3103922839','calle 90','Castilla',3,1,1);
/*!40000 ALTER TABLE `adoption` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-12 17:29:43
