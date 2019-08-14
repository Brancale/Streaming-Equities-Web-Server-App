SET SQL_SAFE_UPDATES = 0;
USE `mydb` ;
SHOW Tables;
-- INSERT INTO `mydb`.`Deals`(`dealId`, `instrumentName`, `cpty`, `price`, `type`, `quantity`, `time`) VALUES 
-- (20011, "Heliosphere", "Lewis", 0.0, "S",1, "2019-08-11 14:20:16");
DELETE FROM Deals;
INSERT INTO `mydb`.`Deals`(`dealId`, `instrumentName`, `cpty`, `price`, `type`, `quantity`, `time`) VALUES 
(20011, "Heliosphere", "Lewis", 0.0, "S",1, "2019-08-11 14:20:16");
SELECT * FROM Deals;

INSERT INTO `mydb`.`Roles`(`roleId`, `roleName`) VALUES
(1, "Admin"), (2, "Trader"), (3, "Senior Trader");

INSERT INTO `mydb`.`Users`(`userId`, `password`, `roleId`) VALUES
("Jools", "pwd", 1), ("Inan", "pwd", 2), ("Reuben", "pwd", 3), ("Alex", "pwd", 1), ("James", "pwd", 2), ("Amy", "pwd", 3);
SELECT * FROM Users INNER JOIN Roles ON Users.roleId = Roles.roleId;
