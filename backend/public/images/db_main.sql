-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Mar 05, 2024 at 12:43 PM
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
-- Database: `db_main`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(60) NOT NULL,
  `admin_email` varchar(60) NOT NULL,
  `admin_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_apply`
--

CREATE TABLE `tbl_apply` (
  `apply_id` int(11) NOT NULL,
  `info_id` int(11) NOT NULL,
  `apply_curdate` varchar(50) NOT NULL,
  `apply_age` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_apply`
--

INSERT INTO `tbl_apply` (`apply_id`, `info_id`, `apply_curdate`, `apply_age`, `user_id`) VALUES
(1, 6, '1', '12', 0),
(2, 6, '', '', 0),
(3, 6, '5555', '444', 0),
(4, 6, '2024-02-12', '', 0),
(5, 11, '2024-02-12', '', 1),
(6, 6, '2024-02-15', '', 0),
(7, 6, '2024-02-17', '', 10),
(8, 6, '2024-02-17', '', 10),
(9, 6, '2024-02-17', '', 0),
(10, 6, '2024-03-05', '', 14);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(50) NOT NULL,
  `cat_description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`cat_id`, `cat_name`, `cat_description`) VALUES
(9, 'aas', 'eee'),
(10, 'jsdjfsf', 'sdf'),
(12, 'gfsd', 'sdfsdf'),
(14, 'scholarship', 'scholarhips for children'),
(15, 'scholarship', 'scholarship for childrens');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complaint`
--

CREATE TABLE `tbl_complaint` (
  `complaint_id` int(11) NOT NULL,
  `complaint_title` varchar(50) NOT NULL,
  `complaint_details` varchar(50) NOT NULL,
  `complaint_date` date NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_complaint`
--

INSERT INTO `tbl_complaint` (`complaint_id`, `complaint_title`, `complaint_details`, `complaint_date`, `user_id`) VALUES
(2, 'zzz', 'ttttt', '0000-00-00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(16, 'idukki'),
(20, 'kjghjggkjgk'),
(22, 'thodupuzha');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_informatiion`
--

CREATE TABLE `tbl_informatiion` (
  `info_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `info_name` varchar(100) NOT NULL,
  `info_photo` varchar(100) NOT NULL,
  `info_details` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_informatiion`
--

INSERT INTO `tbl_informatiion` (`info_id`, `cat_id`, `info_name`, `info_photo`, `info_details`) VALUES
(1, 0, 'gdshfxdgs', '', 'wghjkfjhdgs'),
(2, 0, 'null', '', 'null'),
(3, 0, 'asfgdhfjg', '', 'adfsghg,hfjgdhs'),
(4, 0, 'dagsgd', 'http://127.0.0.1:5000/images/Free Photo _ Multi-ethnic and disabled people community with pencils.jp', 'zdfdsgsd'),
(5, 0, 'xxxx', '12', 'yyyy'),
(6, 12, 'xxxx', '', 'yyyy'),
(7, 0, 'sddsf', 'http://127.0.0.1:5000/images/People support_ Hands hold human.jpg', 'dsvsv'),
(8, 0, 'scholarship', 'http://127.0.0.1:5000/images/People support_ Hands hold human.jpg', 'sdvdsvsfv'),
(9, 0, 'xbxb', 'http://127.0.0.1:5000/images/Premium Vector _ Volunteers helping older people.jpg', 'dsdsv'),
(10, 0, 'sgsdfg', 'http://127.0.0.1:5000/images/People support_ Hands hold human.jpg', 'sgsg'),
(11, 14, 'addaf', 'http://127.0.0.1:5000/images/People support_ Hands hold human.jpg', 'adfad');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_location`
--

CREATE TABLE `tbl_location` (
  `loc_id` int(11) NOT NULL,
  `district_id` int(11) NOT NULL,
  `loc_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_location`
--

INSERT INTO `tbl_location` (`loc_id`, `district_id`, `loc_name`) VALUES
(1, 0, 'fff'),
(7, 17, 'afadf'),
(8, 18, 'hjfgjfhmgjk'),
(10, 0, 'null'),
(11, 19, 'asjgajkf'),
(12, 0, 'jbbjb'),
(14, 0, 'eryr'),
(15, 0, 'null'),
(16, 22, 'thodupuzha'),
(17, 16, 'muthalakodam'),
(18, 20, 'muvatupuzha'),
(19, 20, 'vellurkunnam'),
(20, 21, 'ettumanoor');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_request`
--

CREATE TABLE `tbl_request` (
  `req_id` int(11) NOT NULL,
  `volunteer_id` int(11) NOT NULL,
  `req_date` varchar(50) NOT NULL,
  `req_Details` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `req_status` int(50) NOT NULL,
  `notificationstatus_vol` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_request`
--

INSERT INTO `tbl_request` (`req_id`, `volunteer_id`, `req_date`, `req_Details`, `user_id`, `req_status`, `notificationstatus_vol`) VALUES
(1, 18, '2024-02-18', 'zdzdc', 1, 0, 0),
(2, 18, '2024-02-18', 'zdzdc', 1, 0, 0),
(3, 0, '2024-02-18', 'vxcvxc', 1, 0, 0),
(4, 0, '2024-02-18', 'zxcvzcxv', 1, 0, 0),
(5, 0, '2024-02-18', 'zcvzcv', 1, 0, 0),
(6, 0, '2024-02-23', 'ytfttf', 13, 0, 0),
(7, 0, '2024-02-23', 'dwqfewt', 13, 0, 0),
(8, 0, '2024-02-23', 'xcvxcv', 13, 0, 0),
(9, 0, '2024-02-23', 'dvzvd', 13, 0, 0),
(10, 1, '2024-02-23', 'sdgsdg', 13, 0, 0),
(11, 3, '2024-02-23', 'i need vechicle support', 13, 2, 0),
(12, 1, '2024-03-05', 'kk', 14, 0, 0),
(13, 3, '2024-03-05', 'hi', 14, 1, 1),
(14, 3, '2024-03-05', 'hii', 14, 1, 1),
(15, 1, '2024-03-05', 'hii', 14, 0, 0),
(16, 3, '2024-03-05', 'xx', 14, 1, 1),
(17, 3, '2024-03-05', 'zz', 14, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_contact` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_photo` varchar(100) NOT NULL,
  `user_gender` varchar(50) NOT NULL,
  `loc_id` int(11) NOT NULL,
  `user_password` varchar(11) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `user_proof` varchar(100) NOT NULL,
  `userreq_status` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_contact`, `user_email`, `user_photo`, `user_gender`, `loc_id`, `user_password`, `user_address`, `user_proof`, `userreq_status`) VALUES
(1, 'dfgfd', 'fdg', 'robertbiju000@gmail.com', '', 'male', 2, 'dffg', 'pendanathuasjdfnsjf', '', 2),
(2, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 'undefined', '', 2),
(3, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 'undefined', '', 0),
(4, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 'undefined', '', 2),
(5, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 'undefined', '', 0),
(6, 'sfsd', '1233134', 'robertbiju000@gmail.com', 'http://127.', 'male', 2, 'asfasdf', 'pendanathuasjdfnsjf', '', 0),
(7, 'cngh', '45754757', 'robertbiju000@gmail.com', 'http://127.', 'male', 2, '457547', 'pendanathuasjdfnsjf', '', 0),
(8, 'fvdfvfd', 'dgdfg', 'robertbiju123000@gmail.com', 'http://127.', 'male', 16, 'dfgdg', 'pendanathuasjdfnsjf', '', 0),
(9, 'xcvxv234', 'zvzv', 'robert@gmail.com', 'http://127.', 'male', 20, 'sddsvzdv', 'tdpa', '', 0),
(10, 'robert', '999435945', 'robert@gmail.com', 'http://127.', 'male', 17, 'ssrgs', 'tdpa', '', 1),
(11, 'Robert Biju', '9544844050', 'kingrob@outlook.in', 'http://127.', 'male', 17, '1234', 'Pendanathu (h) Kanjiramattom Thodupuzha East P.O', '', 1),
(12, '', '', '', 'http://127.0.0.1:5000/images/ROBPIC.jpg', '', 0, '', '', '', 0),
(13, 'Robert Bijuu5', '9544844050', 'kingrob@outlook.in', 'http://127.0.0.1:5000/images/kingrob.png', 'male', 17, '11', 'Pendanathu (h) Kanjiramattom Thodupuzha East P.O', '', 1),
(14, 'barath', '4545454545', 'akshaymanoj@gmail.com', 'http://127.0.0.1:5000/images/ROBPIC.jpg', 'male', 17, '123', 'vazhakulam', 'http://127.0.0.1:5000/images/999.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_userfeedback`
--

CREATE TABLE `tbl_userfeedback` (
  `feedback_id` int(11) NOT NULL,
  `feedback_details` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_volunteer`
--

CREATE TABLE `tbl_volunteer` (
  `volunteer_id` int(11) NOT NULL,
  `volunteer_name` varchar(50) NOT NULL,
  `volunteer_contact` varchar(50) NOT NULL,
  `volunteer_email` varchar(50) NOT NULL,
  `volunteer_photo` varchar(50) NOT NULL,
  `volunteer_gender` varchar(50) NOT NULL,
  `loc_id` int(11) NOT NULL,
  `volunteer_password` varchar(50) NOT NULL,
  `volunteer_address` varchar(50) NOT NULL,
  `volunteer_proof` varchar(50) NOT NULL,
  `volreq_status` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_volunteer`
--

INSERT INTO `tbl_volunteer` (`volunteer_id`, `volunteer_name`, `volunteer_contact`, `volunteer_email`, `volunteer_photo`, `volunteer_gender`, `loc_id`, `volunteer_password`, `volunteer_address`, `volunteer_proof`, `volreq_status`) VALUES
(1, 'xvxdv', '213123', '', 'http://127.0.0.1:5000/images/Premium Vector _ Volu', 'male', 16, 'ddff', 'sdfsdf', 'http://127.0.0.1:5000/images/People support_ Hands', 2),
(2, 'null', 'null', 'xcvxcv', 'http://127.0.0.1:5000/images/Premium Vector _ Volu', 'male', 18, 'xcvxcv', 'xcvxcv', 'http://127.0.0.1:5000/images/People support_ Hands', 1),
(3, 'sebastain', '99999999', 'abi@gmail.com', 'http://127.0.0.1:5000/images/ROBPIC.jpg', 'male', 17, '123', 'vazhakulam', 'http://127.0.0.1:5000/images/SIG.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_volunteerfeedback`
--

CREATE TABLE `tbl_volunteerfeedback` (
  `vfeedback_id` int(11) NOT NULL,
  `vfeedback_details` varchar(50) NOT NULL,
  `volunteer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_apply`
--
ALTER TABLE `tbl_apply`
  ADD PRIMARY KEY (`apply_id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  ADD PRIMARY KEY (`complaint_id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_informatiion`
--
ALTER TABLE `tbl_informatiion`
  ADD PRIMARY KEY (`info_id`);

--
-- Indexes for table `tbl_location`
--
ALTER TABLE `tbl_location`
  ADD PRIMARY KEY (`loc_id`);

--
-- Indexes for table `tbl_request`
--
ALTER TABLE `tbl_request`
  ADD PRIMARY KEY (`req_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tbl_userfeedback`
--
ALTER TABLE `tbl_userfeedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `tbl_volunteer`
--
ALTER TABLE `tbl_volunteer`
  ADD PRIMARY KEY (`volunteer_id`);

--
-- Indexes for table `tbl_volunteerfeedback`
--
ALTER TABLE `tbl_volunteerfeedback`
  ADD PRIMARY KEY (`vfeedback_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_apply`
--
ALTER TABLE `tbl_apply`
  MODIFY `apply_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `tbl_informatiion`
--
ALTER TABLE `tbl_informatiion`
  MODIFY `info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_location`
--
ALTER TABLE `tbl_location`
  MODIFY `loc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tbl_request`
--
ALTER TABLE `tbl_request`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_userfeedback`
--
ALTER TABLE `tbl_userfeedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_volunteer`
--
ALTER TABLE `tbl_volunteer`
  MODIFY `volunteer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_volunteerfeedback`
--
ALTER TABLE `tbl_volunteerfeedback`
  MODIFY `vfeedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
