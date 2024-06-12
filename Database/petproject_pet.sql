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
-- Table structure for table `pet`
--

DROP TABLE IF EXISTS `pet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `birth_date` datetime NOT NULL,
  `breedId` int DEFAULT NULL,
  `specieId` int DEFAULT NULL,
  `shelterId` int DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `state` tinyint NOT NULL,
  `animalSexId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_9bcbad056bb61c2d5e3fbf5cef6` (`breedId`),
  KEY `FK_04feea1be0abbf12bfdcbc4158f` (`specieId`),
  KEY `FK_d6e33f5c2bdb86651ef968a4a1b` (`shelterId`),
  KEY `FK_14834c83dc1b54a614bfd1d7c18` (`animalSexId`),
  CONSTRAINT `FK_04feea1be0abbf12bfdcbc4158f` FOREIGN KEY (`specieId`) REFERENCES `specie` (`id`),
  CONSTRAINT `FK_14834c83dc1b54a614bfd1d7c18` FOREIGN KEY (`animalSexId`) REFERENCES `animal_sex` (`id`),
  CONSTRAINT `FK_9bcbad056bb61c2d5e3fbf5cef6` FOREIGN KEY (`breedId`) REFERENCES `breed` (`id`),
  CONSTRAINT `FK_d6e33f5c2bdb86651ef968a4a1b` FOREIGN KEY (`shelterId`) REFERENCES `shelter` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet`
--

LOCK TABLES `pet` WRITE;
/*!40000 ALTER TABLE `pet` DISABLE KEYS */;
INSERT INTO `pet` VALUES (66,'Luna','2020-01-23 00:00:00',4,1,2,'src/assets/images/imgpets/luna.png',0,2),(67,'Lilo','2016-07-01 00:00:00',13,1,3,'src/assets/images/imgpets/lilo.png',0,1),(68,'Tommy','2015-04-02 00:00:00',13,2,1,'src/assets/images/imgpets/tommy.png',0,1),(69,'Quimera','2017-06-23 00:00:00',13,2,1,'src/assets/images/imgpets/quimera.png',0,2),(70,'Aura Maria','2021-11-16 00:00:00',13,2,2,'src/assets/images/imgpets/auramaria.png',1,2),(71,'Africa','2015-06-04 00:00:00',13,1,3,'src/assets/images/imgpets/africa.png',0,2);
/*!40000 ALTER TABLE `pet` ENABLE KEYS */;
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
