SET SQL_SAFE_UPDATES = 0;
USE `mydb` ;
SHOW Tables;
INSERT INTO `mydb`.`Instruments` (`instrumentName`, `hashedValue`, `isNegative`, `basePrice`, `drift`, `variance`) VALUES 
("Astronomica",
-1372613350,
True,
3440.0,
0.0,
-3.5),

("Borealis",
-2144945675,
True,
5765.0,
0.0,
-6.75),

("Celestial",
-842721352,
True,
1442.0,
-2.884,
-3.52),

("Deuteronic",
-2020458394,
True,
8484.0,
-33.936,
-3.94),

("Eclipse",
-249489881,
True,
9971.0,
-9.971,
-8.81),

("Floral",
2107200308,
False,
398.0,
1.194,
3.08),

("Galactia",
-1736379976,
True,
10066.0,
-10.066,
-9.76),

("Heliosphere",
603077730,
False,
7820.0,
0.0,
7.3),

("Interstella",
-252413447,
True,
3537.0,
-7.074,
-4.47),

("Jupiter",
412083453,
False,
3543.0,
10.629,
4.53),

("Koronis",
1129832375,
False,
2465.0,
0.0,
3.75),

("Lunatic",
-2109961742,
True,
1832.0,
-3.664,
-7.42)
;
SELECT * FROM Instruments;
