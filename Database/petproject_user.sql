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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birth_date` datetime NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `genderId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`),
  KEY `FK_6273b1aa12d5d17f8e1284200be` (`genderId`),
  CONSTRAINT `FK_6273b1aa12d5d17f8e1284200be` FOREIGN KEY (`genderId`) REFERENCES `gender` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'Juan','correo@correo.com','$2a$10$dSaQ.ERC6LyzmWeLcsYqF.3a8NUrBc8SM3DeKFzsnC/rwqsQG7/B.','2000-12-02 00:00:00','user',1),(3,'Leandro','leandro@correo.com','$2a$10$7SF80bDIF/mfPYmHeMgqL.BtRIgsY8fEi6JxDf8/e18xHTX.B2EEy','2004-05-30 00:00:00','user',3),(4,'Juan','juan@correo.com','$2a$10$5DxVS6fcDPb/ubvMJpb2SOGRRty1DjcNbMjs7ebCEXw4gHY5LXDBu','2024-05-08 00:00:00','user',1),(5,'Pepito','juans@correo.com','$2a$10$THXsu3ePRS4KTUDVxsJV.uOOCB9C3d2TUX0NDQkp9tT2ZA11BEn7a','2000-12-02 00:00:00','user',1),(7,'admin','admin@correo.com','$2a$10$ObOwgwiSGq3MGjMcvdzIAuQUnIXIvbWyKW1Ceocc5uBfaAVSwAZjm','2000-12-02 00:00:00','admin',3),(9,'Paulina','paulina@correo.com','$2a$10$V2G6G5iH4cZL6s1Sr60hwe4aRpfbg7hxlrDMn5SObApdWUwDZVnoq','2003-07-27 00:00:00','user',2),(10,'Beatriz','beatrizkkkk@gmail.com','$2a$10$5AAb/Be/MMdmjoLF99iT0uECjRpYLlN3zzxBslhshS1HYMfwqvmeO','2000-11-11 00:00:00','user',2),(11,'Jorge','jorgeortiz8@gmail.com','$2a$10$F0FpR404si/fAs0J8Utkw.8QaCPEmUoegUHvW1A1y7Cff0c/FTxjy','1991-07-02 00:00:00','user',1),(12,'Jairo','jairo@correo.com','$2a$10$Ebq.wHuq3WUBG1Qk/.w.E.VYZEIa5eXzXLrT7h/YK24CBy0gCvPA2','2001-01-11 00:00:00','user',1),(13,'Laura','laura@gmail.com','$2a$10$R1P47XxfUMsmq85b74/awevfwPiO/D2qQHZwNMwmBnP1STzd6DC8K','2003-01-23 00:00:00','user',2),(14,'Thomas','thomas@mail.com','$2a$10$C7FpzwUa73onrvNslKBmquEmTS9NJH24DQv49PMfXY8JXoA7rWzCC','2000-06-03 00:00:00','user',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
