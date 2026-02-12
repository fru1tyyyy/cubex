-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2025 at 11:10 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cubex`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(20) NOT NULL,
  `product_id` int(20) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `order_date` datetime DEFAULT current_timestamp(),
  `status` varchar(50) DEFAULT 'Paid'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `total_amount`, `order_date`, `status`) VALUES
(6, 12, 12707.00, '2025-12-11 18:13:30', 'Paid'),
(7, 12, 12707.00, '2025-12-11 18:15:37', 'Paid'),
(8, 12, 12707.00, '2025-12-11 18:21:19', 'Paid'),
(9, 13, 25.00, '2025-12-11 18:26:28', 'Paid'),
(10, 12, 12280.00, '2025-12-11 18:27:36', 'Paid'),
(11, 12, 5500.00, '2025-12-11 18:29:59', 'Paid'),
(12, 12, 6250.00, '2025-12-14 21:27:51', 'Paid'),
(13, 12, 6530.00, '2025-12-14 21:43:17', 'Paid'),
(14, 12, 583.50, '2025-12-14 21:58:14', 'Paid'),
(15, 12, 280.00, '2025-12-16 08:33:55', 'Paid');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`, `price`) VALUES
(15, 6, 5, 1, 280.00),
(16, 6, 2, 1, 6500.00),
(17, 6, 4, 1, 5500.00),
(18, 6, 10, 1, 427.00),
(19, 7, 5, 1, 280.00),
(20, 7, 2, 1, 6500.00),
(21, 7, 4, 1, 5500.00),
(22, 7, 10, 1, 427.00),
(23, 8, 5, 1, 280.00),
(24, 8, 2, 1, 6500.00),
(25, 8, 4, 1, 5500.00),
(26, 8, 10, 1, 427.00),
(27, 9, 16, 1, 25.00),
(28, 10, 5, 1, 280.00),
(29, 10, 2, 1, 6500.00),
(30, 10, 4, 1, 5500.00),
(31, 11, 4, 1, 5500.00),
(32, 12, 4, 1, 6250.00),
(33, 13, 4, 1, 6250.00),
(34, 13, 5, 1, 280.00),
(35, 14, 5, 1, 280.00),
(36, 14, 13, 1, 303.50),
(37, 15, 5, 1, 280.00);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `image`, `description`, `category`) VALUES
(2, 'MoYu 21x21', 6250.00, 'https://www.cubenationshop.com/_next/image?url=https%3A%2F%2Fcdn.cubenationshop.com%2Fimages%2FProducts%2F1629784162ZNH.jpg&w=1920&q=75', 'The MoYu 21x21 is the center of attention in just about any environment. This incredible accomplishment in cubing technology is something that you have to see for yourself to truly appreciate', 'size'),
(4, 'ShengShou Yottaminx', 6250.00, 'https://cubein.cn/cdn/shop/files/O1CN01Ew0UF81Tqp3DolhB5__2630802434-0-cib.jpg?v=1736418262&width=416', 'ShengShou Yottaminx is the largest megaminx puzzle released to date! Originally created by our team member, Matt Bahner, in 2014, this puzzle consists of 3,411 pieces and is not for the faint of heart!', 'size'),
(5, 'MoYu Super WeiLong 3x3 V2', 280.00, 'https://kewbz.co.uk/cdn/shop/files/MoYuSuperWeiLongV2UKSpeedcubeShopKewbzUK3.jpg?v=1746351803', 'The MoYu Super WeiLong 3x3 V2 (Magnetic, MagLev, 20-Magnet Ball-Core, UV Coated) is MoYu’s 2025 flagship 3x3 speed cube, engineered for competitive speedcubing. Packed with exciting features like MagLev technology, a robust 20-magnet ball-core for enhanced stability, and a grippy UV Coated surface, this premium magnetic cube delivers unmatched speed, control, and consistency, perfect for speedcubers chasing peak performance.', 'speed'),
(7, 'ShengShou Zettaminx', 3000.00, 'https://mastercubestore.dk/img/cms/OKT%202021/WeChatImage_20210914163859_790x1415-jpg%20kopi.png', 'ShengShou Zettaminx is an incredible puzzle with over 2,500 individual pieces! This 13x13 megaminx is the true test for any megaminx solver!', 'size'),
(10, 'MoYu WeiLong AI 3x3 V11- 18th Anniversary Edition', 427.00, 'https://m.media-amazon.com/images/I/61ShdaBXW1L._AC_UF350,350_QL50_.jpg', 'MoYu WeiLong AI 3x3 V11 (Magnetic, MagLev, Ball-Core, UV Coated) - 18th Anniversary Edition is a commemorative special edition of the spectacular cube that was used to break the 3x3 speed solve average World Record!', 'speed'),
(11, 'MoYu WeiPo 2x2 V5', 142.50, 'https://www.atoutcubes.com/74908-large_default/moyu-weipo-v5-20-m-ball-core-uv-2x2.jpg', 'MoYu WeiPo 2x2 V5 (Magnetic, 20-Magnet Ball-Core, UV Coated)', 'speed'),
(13, 'GAN 16 3x3 Max', 303.50, 'https://www.jpearly.com/cdn/shop/files/g1_a9393e62-cb34-4d85-bdd6-50572d94bb05_900x.webp?v=1759221882', 'The next generation of premium speed cube is here! The GAN 16 3x3 Max (Magnetic, MagLev, Core Magnets, UV Coated) sets the bar for 3x3 speed cubes and delivers performance appreciated by speedcubers of all skill levels.', 'speed'),
(14, 'QiYi Clock ', 117.50, 'https://www.cubelelo.com/cdn/shop/products/1OaAP0CKbdcr1MUOMm4D3spZPhPG-BBAZ_800x.jpg?v=1610961824', 'QiYi Clock (Magnetic) is by far the highest-quality clock available, which is quickly noticed when using the puzzle.', 'speed'),
(15, 'YJ MGC 7x7', 128.50, 'https://www.cubingoutloud.com/cdn/shop/products/YJMGC7x7SL_500x.jpg?v=1666809749', 'The YJ MGC 7x7 Magnetic quickly became one of the most popular 7x7 speed cubes on the market. It captures YJ’s signature smooth turning feel and delivers consistent magnet strength across all layers, making it a top choice for both competitive and casual speedcubing.', 'speed'),
(16, 'YJ Axis Cube V3', 25.00, 'https://www.atoutcubes.com/23667-large_default/yj-axis-bianhuan.jpg', 'YJ Axis Cube V3 is a classic shape-shifting puzzle featuring a completely redesigned speed cube mechanism!', 'weird'),
(17, 'Fanxin 4x4 Axis Cube', 41.50, 'https://www.speedcubes.co.za/cdn/shop/files/4x4x4FANXINAXISCUBE2.jpg?v=1714592551&width=480', 'The Fanxin 4x4 Axis Cube is a popular 4x4 shape mod designed to be more of a challenge by changing shape!', 'weird'),
(18, 'Ninja Ghost Cube 3x3', 71.50, 'https://lifestyle.brando.com/prod_img/EEIQCU004800_2_640.jpg', 'A frightening surprise awaits with the Ninja Ghost Cube 3x3. This take on the ghost cube includes smooth rotations and a durable design making this item very desirable for enthusiasts.', 'weird'),
(19, '3x3 Double Cube V2', 46.50, 'https://kewbz.co.uk/cdn/shop/files/Calvinsdoublecube1.jpg?v=1746538459', '3x3 Double Cube V2 offers smooth turning and a satisfying, approachable challenge that feels fresh compared with a standard 3x3. It is a solid pick for casual solving and an eye-catching addition to any collection.', 'weird'),
(20, '1x1 Speed Cube', 11.00, 'https://www.speedcube.nl/wp-content/uploads/2023/08/Productvisuals_Speedcubes-Z-1x1-Cube-4.jpg', 'Are you up for the challenge? Impress your friends and family and flex your speedcubing skills with the 1x1.', 'speed'),
(21, 'YuXin Treasure Box', 49.50, 'https://m.media-amazon.com/images/I/41a2PRiziwL.jpg', 'Keep your treasure safe! The YuXin Treasure Box is a fully-fuctional 3x3 puzzle but has a hollow center that can store small objects!', 'weird'),
(22, 'X-Man Tornado 3x3 V4 Flagship', 127.50, 'https://m.media-amazon.com/images/I/61HDI1QuyOL._AC_SL1500_.jpg', 'X-Man Tornado 3x3 V4 Flagship (Magnetic, Ball-Core) is the successor of the cube used to set the former 3x3 world-record single of 3.13 seconds by Team SpeedCubeShop member Max Park, the Tornado V3.', 'speed'),
(23, 'X-Man Tornado 3x3 V4 Pioneer', 175.00, 'https://cuboss.com/wp-content/uploads/2024/09/x-man-tornado-v4-m-uv-coating.jpg', 'X-Man Tornado 3x3 V4 Pioneer (Magnetic, MagLev, Ball-Core, UV Coated) is the next-generation 3x3 speed cube from QiYi. Building on the success of the record-breaking Tornado V3 used by Team SpeedCubeShop member Max Park to set a former world record of 3.13 seconds, this cube is designed for elite speedcubing. This premium magnetic cube features MagLev technology, a UV Coated finish for better grip, and core magnets for enhanced stability. Whether you\'re breaking records or practicing at home, the X-Man Tornado V4 delivers the precision and control that top speedcubers demand.', 'speed'),
(24, 'QiYi Gear 3x3', 29.00, 'https://wizzon.com/wp-content/uploads/2021/12/TYPZ05190.jpg', 'QiYi Gear 3x3 (Tiled) is an eye-catching puzzle to say the least! Equipped with plastic tiles and a sturdy mechanism, this puzzle is fun and challenging to solve!', 'weird'),
(25, 'HelloCube Gear Shift 2x2', 32.50, 'https://www.losmundosderubik.es/2498-home_default/hello-cube-gear-shift-2x2.jpg', 'HelloCube Gear Shift 2x2 is a very smooth turning gear puzzle!', 'weird'),
(26, 'GAN Mirror', 99.50, 'https://m.media-amazon.com/images/I/81EP+5HzNGL.jpg', 'GAN Mirror (Magnetic, UV Coated) puts a modern spin on a classic puzzle!', 'weird'),
(27, 'Lee Mirror 5x5 Cube', 100.00, 'https://cccstore.ru/upload/iblock/265/9p6bmphxde64xsu7k613pxvi5i7t72oc.webp', 'Lee Mirror 5x5 Cube offers smooth turning and a satisfying, approachable challenge that feels fresh compared with a standard 3x3. It is a solid pick for casual solving and an eye-catching addition to any collection.', 'weird'),
(28, 'ShengShou Gigaminx V2', 89.00, 'https://m.media-amazon.com/images/I/61IsJ-7kmXL._AC_UF350,350_QL80_.jpg', 'ShengShou Gigaminx V2 offers updates to the original design to improve turning and overall stability!', 'size'),
(29, 'ShengShou Teraminx', 178.50, 'https://www.cubingoutloud.com/cdn/shop/products/Shengshou-Teraminx-Cube-Puzzle_530x@2x.jpg?v=1606152002', 'The ShengShou Teraminx is a very eye-catching puzzle and is great for puzzle enthusiasts and those looking for a challenge! This item moves very smoothly, has vibrant sticker shades, and is stable.', 'size'),
(30, 'GAN Skewb ', 78.50, 'https://www.gancube.com/cdn/shop/files/gancube-skewb-m1.jpg?v=1747118937&width=1946', 'GAN Skewb (Magnetic, Core Magnets) is a massive advancement in Skewb mechanism! This Skewb features a lot of GAN\'s innovative features that put them on the map such as their GES tensioning system and the new Core/Corner Magnet system that was recently introduced!', 'speed'),
(31, 'ShengShou Examinx', 1314.00, 'https://mastercubestore.dk/img/cms/ShengShou%20Cubes%202018/S711T0C-1.jpg', 'The ShengShou Examinx is an amazing 12-sided puzzle! If you are a megaminx enthusiast or just looking for an insane challenge, look no further! The Examinx is an 11x11 megaminx that is fully-functional and turns smoothly considering the immense size of this puzzle.', 'size'),
(32, 'YuXin Petaminx', 392.00, 'https://m.media-amazon.com/images/I/515YCRAvunL.jpg', 'YuXin Petaminx is a challenging 9x9 dodecahedron with a modern, easier to uses design!', 'size'),
(33, 'MoYu MeiLong 13x13', 570.00, 'https://kewbz.co.uk/cdn/shop/files/MoYuMeiLong13x13SLcopy.jpg?v=1697053311', 'The MoYu MeiLong 13x13 is a great option for any cuber looking for a more compact 13x13 that also offers smooth turning and stability!', 'size'),
(34, 'Mini 1cm 3x3 - World\'s Smallest Cube!', 35.50, 'https://m.media-amazon.com/images/I/51PjDDa9X3L.jpg', 'CubeLab has done something amazing and created the world\'s smallest 3x3 available for retail sale! This cube comes in at only 1cm and is fully functional!', 'size'),
(35, 'YuXin Star Path Megaminx', 85.50, 'https://www.cubenationshop.com/_next/image?url=https%3A%2F%2Fwww.puzzlewholesale.com%2Fimages%2Fv%2F202406%2F1718902682FY6.jpg&w=1920&q=75', 'YuXin Star Path Megaminx is a part of the \"Interstellar\" series comprised of out-of-this-world megaminx variations! This version features 12 colors arranged like a standard dodecahedron with each color on the pentagonal tips. It comes in a stellated dodecahedron form. ', 'weird'),
(36, 'YJ MGC 5x5', 96.00, 'https://www.cubelelo.com/cdn/shop/products/1050068_800x.jpg?v=1700808563', 'The YJ MGC 5x5 magnetic cube is the continuation of the popular MGC series! In true MGC fashion, the MGC 5x5 magnetic cube performs so well, it\'s hard to believe the price!', 'speed'),
(38, 'MoYu Lube v1', 20.00, 'https://cdn1.sgliteasset.com/mspeedcu/images/product/product-4590778/LyAaZIPi66363b2bba765_1714830123.jpg', 'BEST LUBE IN THE WORLD!!!!!, BUY NOW', 'lube'),
(39, 'Sudoku Cube 3x3', 67.00, 'https://www.puzzlemaster.ca/imagecache/products/ffffff/640x640/018/018390.1710363728.jpg', 'Sudoku Cube 3x3 (Master) offers smooth turning and a satisfying, approachable challenge that feels fresh compared with a standard 3x3. It is a solid pick for casual solving and an eye-catching addition to any collection.', 'weird'),
(40, 'YJ MGC 6x6', 108.00, 'https://m.media-amazon.com/images/I/51ombaHU8BL.jpg', 'The YJ MGC 6x6 magnetic cube is easily the best value 6x6 available today! This magnetic cube offers exceptional performance, making it a top choice for speedcubers looking for a reliable and smooth-turning puzzle.', 'speed'),
(41, 'QiYi 3x3 Clock', 104.00, 'https://www.atoutcubes.com/78998-large_default/qiyi-magnetic-clock-3x3.jpg', 'The QiYi 3x3 Clock (Magnetic) is a speedcubing-ready magnetic clock puzzle designed for smooth, accurate solves. A twelve-tooth magnetic edge wheel snaps each increment precisely into place, while a dial-bottom magnetic ring system keeps transitions between lifted and pressed states stable and predictable. Clear inlaid pointers and scales improve legibility and alignment, and a glossy finish gives a classic look with a clean feel.', 'weird'),
(42, 'DaYan Pyraminx V3', 116.00, 'https://speedcubing.org/cdn/shop/files/dayan_pyraminx_v3m_uv.png?v=1752528116', 'DaYan Pyraminx V3 (Magnetic, MagLev, Ball-Core, UV Coated) is a smooth, fast-turning pyraminx with fantastic corner-cutting!', 'speed'),
(44, 'Yummy Cheeseburger 3x3 Cube', 74.50, 'https://www.puzzlemaster.ca/imagecache/products/ffffff/640x640/015/015793-25769.jpg', 'Yummy Cheeseburger 3x3 Cube offers smooth turning and a satisfying, approachable challenge that feels fresh compared with a standard 3x3. It is a solid pick for casual solving and an eye-catching addition to any collection.', 'picture'),
(45, 'YuXin Earth 2x2', 41.00, 'https://m.media-amazon.com/images/I/51wK0d72zqL._AC_UF350,350_QL80_.jpg', 'The YuXin Earth 2x2 is a beautiful design that is tricky to solve by matching up the pieces of the planet!', 'picture'),
(47, 'Yummy French Fries 3x3 Cube', 75.00, 'https://www.puzzlemaster.ca/imagecache/products/ffffff/640x640/016/016398.1647969530.jpg', 'Yummy French Fries 3x3 Cube offers smooth turning and a satisfying, approachable challenge that feels fresh compared with a standard 3x3. It is a solid pick for casual solving and an eye-catching addition to any collection.', 'picture'),
(48, 'Yummy Popcorn 3x3', 67.00, 'https://www.hknowstore.com/483612/0/0/__ImageGrabber.axd?d=60', 'Yummy Popcorn 3x3 offers smooth turning and a satisfying, approachable challenge that feels fresh compared with a standard 3x3. It is a solid pick for casual solving and an eye-catching addition to any collection.', 'picture'),
(49, 'ShengShou MoSheng 10x10', 166.50, 'https://www.ziicube.com/image/cube/SengSo/MoSheng-10x10/SS-MoSheng-10x10-03.jpg', 'ShengShou MoSheng 10x10 provides an enjoyable solving experience, all for a very low price when compared to other options.', 'size'),
(51, 'ShengShou 17x17', 1358.00, 'https://sc04.alicdn.com/kf/Ha5df5884ab1e4fdbb606e344b7054773i.jpg', 'ShengShou has done it again with their version of a 17x17! The ShengShou 17x17 features a new light-weight design which improves the solving experience by making the puzzle easier to handle and turn. Additionally, the Stickerless color scheme features vibrant, easy to distinguish, shades -- all at a lower price point than competitors!', 'size'),
(52, 'YuXin HuangLong 16x16', 1671.00, 'https://kubekings.fr/38896-medium_default/yuxin-huanglong-16x16.jpg', 'YuXin HuangLong 16x16 is the first non-pillowed 16x16 to hit the market featuring rounded edges paired with a smaller size to create a more comfortable solving experience.', 'size'),
(53, 'QiYi Master Pyraminx', 70.00, 'https://cubestore.gr/wp-content/uploads/2023/03/qiyi-master-pyraminx-stickerelss-1.jpg', 'So you love the pyraminx but feel like you need some change? The QiYi Master Pyraminx is here for you! This 4-layered pyraminx is guaranteed to be tons of fun and a great next step if you have already \"mastered\" the pyraminx. You see what I did there, right? QiYi\'s interpretation of this puzzle is phenomenal and offers amazing turning and overall stability.', 'size'),
(54, 'YuXin Digital Puzzle Cube 3x3', 133.00, 'https://strefa-kostek.pl/28950-thickbox_default/yuxin-3x3-digital-puzzle-cube.jpg', 'YuXin Digital Puzzle Cube 3x3 is an interesting take on the traditional Rubik\'s Cube 3x3 that offers new functionality!', 'weird'),
(55, 'Rubik\'s Speed Cube 3x3 ', 87.00, 'https://cdn.prod.website-files.com/6595ca03bcd68f311fd41872/673cbd6d971f518045054b75_product__NEW-SPEED_main.jpg', 'Designed for speedcubers, the Rubik’s Speed Cube 3x3 is an upgraded version of the classic Rubik’s Cube. Its strong internal magnets enhance stability, aligning layers for smoother, faster, and more accurate turns.', 'speed'),
(56, 'Color Brick Speed Cube', 37.50, 'https://m.media-amazon.com/images/I/71rZoizPXXL.jpg', 'The Color Brick Speed Cube is a fun, unique speedcube for everyone! Don\'t be fooled by the appearance, this is actually a fully-operational, smooth turning speed cube with an adjustable screw/spring core and corner-cutting of up to 45 degrees!', 'speed'),
(57, 'MoYu Super RS3 M 3x3', 41.00, 'https://down-my.img.susercontent.com/file/cn-11134207-7qukw-licyzs0k8bqu57', 'MoYu Super RS3 M 3x3 (Magnetic) is the long-awaited 2022 update to our best-seller, the RS3 M 2020 speed cube and it is on track to be just as, if not more, popular!', 'speed'),
(58, 'GAN 15 3x3 New Black', 292.00, 'https://down-my.img.susercontent.com/file/cn-11134207-7ras8-m70cb9queaco10', 'The GAN 15 3x3 New Black (Magnetic, Core Magnets, UV Coated) is the lightest flagship 3x3 speed cube ever, weighing only 60g! As a premium GAN cube, it prioritizes performance and turning feel over full customization, making it an excellent choice for competitive speedcubing.', 'speed'),
(59, 'Calendar Cube 3x3', 42.00, 'https://preview.redd.it/where-to-find-a-good-calendar-cube-calendar-stickers-v0-avhjdzac9yjb1.png?width=510&format=png&auto=webp&s=6aaa5ba3dd19da04afea61bb62478e9b9f37cb78', 'Calendar Cube 3x3 is a great puzzle to keep on your desk at home, work, or school! The idea is to move the pieces so that the correct month and day are showing!', 'weird'),
(60, 'Fanxin Hollow 3x3', 28.00, 'https://kewbz.co.uk/cdn/shop/files/FanXin_Hollow_3x3_Concave_Stickerless.jpg?v=1746540070', 'Fanxin Hollow 3x3 - Concave is an attention grabber and will stand out in your collection! Despite the intricate design, the Hollow cube turns very well and is a blast to solve!', 'weird'),
(61, 'MoYu Big 3x3 - 18cm', 187.00, 'https://www.ziicube.com/image/cube/MoYu/333-18cm/MY-333-18cm-02.jpg', 'MoYu Big 3x3 - 18cm is a fun, oversized 3x3 speed cube that turns smoothly, making for a goofy challenge and a great home decoration! ', 'size'),
(62, 'MoYu Functional Cube Chair 3x3 - 40cm', 1044.00, 'https://www.atoutcubes.com/72410-large_default/moyu-3x3-cube-chair-40cm.jpg', 'MoYu Functional Cube Chair 3x3 - 40cm is currently the largest mass-produced 3x3 available. While advertised as a chair, this cube is fully functional and turns well, considering its size. This item is great for display and belongs in every cuber\'s collection!', 'size');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `product_id`, `comment`, `created_at`) VALUES
(5, 12, 4, 'so expensive', '2025-12-13 19:33:40'),
(6, 14, 4, 'so expensive sia, no money', '2025-12-13 19:38:29'),
(7, 12, 5, 'BEST CUBE BUY IT !!!!!!!!', '2025-12-13 19:49:04'),
(8, 12, 38, 'BEST LUBE BUY BUY BUY', '2025-12-13 19:49:17'),
(9, 12, 2, 'so cool!!!!!!!', '2025-12-14 21:42:38'),
(10, 12, 7, 'so cool!!!!', '2025-12-14 21:57:36');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `picture`) VALUES
(12, 'Been', 'yubeen721@gmail.com', '$2b$10$wVj8Se0GwmVUXEF3wNT0..23bfbbFFXL2gJcmaeCfhJyZzBgmRhd.', '1765720585291.jpg'),
(13, 'StupidBoi', 'stupidboi2107@gmail.com', '$2b$10$h6V/Vtj1VTtwdFmJP0mwO.fqcKLuqPLOLmQDL.nHBc4OKZDvMT6Zy', '1765448738063.jpg'),
(14, 'Killua', 'gammy358@gmail.com', '$2b$10$zCbusGVhIrFxvPUxGVvmCu9jJm7Wsxtc/Spl7L2yar/AzLsGHa9Tq', '1765624434101.jpg'),
(17, 'Killua', 'killua@gmail.com', '$2b$10$8Bb28fAPINqfAG9erjdbgefQOTJ2Nx.4m0874tVSAGxtBdF/Igynu', NULL),
(18, 'teacher', 'teacher@gmail.com', '$2b$10$orOV8a.716EaomyVrVq/ju3WKItU0bZwTdZC2IHIciQTmguvRNPLK', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_idx` (`user_id`),
  ADD KEY `product_id_idx` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
