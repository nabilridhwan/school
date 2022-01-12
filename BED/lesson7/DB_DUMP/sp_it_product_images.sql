-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: sp_it
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `imageid` int NOT NULL AUTO_INCREMENT,
  `productid` int NOT NULL,
  `url` text NOT NULL,
  `public_id` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`imageid`),
  KEY `fk_productid_image_idx` (`productid`),
  CONSTRAINT `fk_productid_img` FOREIGN KEY (`productid`) REFERENCES `products` (`productid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,1,'https://res.cloudinary.com/dqxawxewb/image/upload/v1640794722/product_images/kyxgow552lokojhnqk6u.png','product_images/kyxgow552lokojhnqk6u','2021-12-29 16:18:41'),(2,1,'https://res.cloudinary.com/dqxawxewb/image/upload/v1640794722/product_images/s8qzxcsua5dqlwflzvq3.jpg','product_images/s8qzxcsua5dqlwflzvq3','2021-12-29 16:18:41'),(3,1,'https://res.cloudinary.com/dqxawxewb/image/upload/v1640794722/product_images/absfdc2klt4p5uz81bdp.png','product_images/absfdc2klt4p5uz81bdp','2021-12-29 16:18:41'),(4,1,'https://res.cloudinary.com/dqxawxewb/image/upload/v1640794722/product_images/jk3h0motka7ct8re710c.jpg','product_images/jk3h0motka7ct8re710c','2021-12-29 16:18:41'),(5,1,'https://res.cloudinary.com/dqxawxewb/image/upload/v1640794722/product_images/hlde6ahjln2uuqsvq8ev.png','product_images/hlde6ahjln2uuqsvq8ev','2021-12-29 16:18:41');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-30  0:24:19
