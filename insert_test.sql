SET SQL_SAFE_UPDATES = 0;
USE `mydb` ;
SHOW Tables;
-- INSERT INTO `mydb`.`Deals`(`dealId`, `instrumentName`, `cpty`, `price`, `type`, `quantity`, `time`) VALUES 
-- (20011, "Heliosphere", "Lewis", 0.0, "S",1, "2019-08-11 14:20:16");
DELETE FROM Deals;
INSERT INTO `mydb`.`Deals`(`dealId`, `instrumentName`, `cpty`, `price`, `type`, `quantity`, `time`) VALUES 
(20011, "Heliosphere", "Lewis", 0.0, "S",1, "2019-08-11 14:20:16");
SELECT * FROM Deals;