SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

DROP TABLE IF EXISTS Instruments;

-- -----------------------------------------------------
-- Table `mydb`.`Instruments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Instruments` (
  `instrumentName` VARCHAR(20) NOT NULL,
  `hashedValue` INT NULL,
  `isNegative` TINYINT(1) NULL,
  `basePrice` FLOAT NULL,
  `drift` FLOAT NULL,
  `variance` FLOAT NULL,
  PRIMARY KEY (`instrumentName`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS Deals;
-- -----------------------------------------------------
-- Table `mydb`.`Deals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Deals` (
  `dealId` INT NOT NULL,
  `instrumentName` VARCHAR(20) NULL,
  `cpty` VARCHAR(20) NULL,
  `price` FLOAT NULL,
  `type` CHAR(1) NULL,
  `quantity` INT NULL,
  `time` DATETIME(5) NULL,
  PRIMARY KEY (`dealId`),
  FOREIGN KEY(instrumentName) REFERENCES `mydb`.`Instruments`(`instrumentName`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS Roles;
-- -----------------------------------------------------
-- Table `mydb`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Roles` (
  `roleId` INT NOT NULL,
  `roleName` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`roleId`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS Users;
-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `userId` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `roleId` INT NOT NULL,
  PRIMARY KEY (`userId`),
  FOREIGN KEY(roleId) REFERENCES `mydb`.`Roles`(`roleId`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


USE `mydb` ;
INSERT INTO `mydb`.`Instruments` (`instrumentName`, `hashedValue`, `isNegative`, `basePrice`, `drift`, `variance`) VALUES 
("Astronomica",-1372613350,True,3440.0,0.0,-3.5),
("Borealis",-2144945675,True,5765.0,0.0,-6.75),
("Celestial",-842721352,True,1442.0,-2.884,-3.52),
("Deuteronic",-2020458394,True,8484.0,-33.936,-3.94),
("Eclipse",-249489881,True,9971.0,-9.971,-8.81),
("Floral",2107200308,False,398.0,1.194,3.08),
("Galactia",-1736379976,True,10066.0,-10.066,-9.76),
("Heliosphere",603077730,False,7820.0,0.0,7.3),
("Interstella",-252413447,True,3537.0,-7.074,-4.47),
("Jupiter",412083453,False,3543.0,10.629,4.53),
("Koronis",1129832375,False,2465.0,0.0,3.75),
("Lunatic",-2109961742,True,1832.0,-3.664,-7.42);

INSERT INTO `mydb`.`Roles`(`roleId`, `roleName`) VALUES
(1, "Trader"), 
(2, "Senior Trader");

INSERT INTO `mydb`.`Users`(`userId`, `password`, `roleId`) VALUES
("Jools", "pwd", 1), 
("Inan", "pwd", 1), 
("Reuben", "pwd", 2), 
("Alex", "pwd", 2), 
("James", "pwd", 1), 
("Amy", "pwd", 2);