-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2025 at 12:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `college_lms`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobileNo` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `fatherName` varchar(255) NOT NULL,
  `motherName` varchar(255) NOT NULL,
  `highestEducation` varchar(255) NOT NULL,
  `percentage` varchar(10) NOT NULL,
  `courseInterest` varchar(255) NOT NULL,
  `status` enum('pending','accepted','rejected') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `fullName`, `email`, `mobileNo`, `address`, `fatherName`, `motherName`, `highestEducation`, `percentage`, `courseInterest`, `status`) VALUES
(1, 'krishna', 'krishn.manthanit@gmail.com', '9264941513', 'jangpura', 'hii', 'hlw', '12th Standard', '66', 'diploma-elec', 'rejected'),
(2, 'krishna', 'krishnachaturvedi352@gmail.com', '9264941513', 'Bhogal', 'mr', 'mrs', '12th Standard', '67', 'btech-ece', 'rejected');

-- --------------------------------------------------------

--
-- Table structure for table `circulars`
--

CREATE TABLE `circulars` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `circulars`
--

INSERT INTO `circulars` (`id`, `title`, `content`, `created_at`) VALUES
(3, 'testing', 'this is testing', '2025-03-24 08:38:52'),
(9, 'HTTH', 'SASFDGNH', '2025-03-24 08:48:40');

-- --------------------------------------------------------

--
-- Table structure for table `placements`
--

CREATE TABLE `placements` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `package` decimal(10,2) NOT NULL,
  `applied_students` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `placements`
--

INSERT INTO `placements` (`id`, `company_name`, `role`, `location`, `package`, `applied_students`, `created_at`) VALUES
(1, 'chetu', 'BDA', 'Gurgaon', 4.80, 12, '2025-03-24 05:41:20'),
(2, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 08:56:44'),
(3, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 08:56:51'),
(4, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 08:56:52'),
(5, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 08:56:52'),
(6, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 08:56:52'),
(7, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 08:57:39'),
(8, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 08:58:27'),
(9, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 08:58:30'),
(10, 'DFGDRH', 'WTDRY', 'WERT', 5.00, 12, '2025-03-24 09:00:39'),
(11, 'FPI', 'SDFDGF', 'FGD', 4.00, 12, '2025-03-24 09:01:12'),
(12, 'HCL', 'AWS', 'MANGLORE', 56.00, 2, '2025-03-24 09:18:13'),
(13, 'HCL', 'AWS', 'MANGLORE', 23.00, 2, '2025-03-24 09:18:45'),
(14, 'Microsoft', 'SDE', 'NOIDA', 50.00, 10, '2025-03-24 11:00:28');

-- --------------------------------------------------------

--
-- Table structure for table `placement_records`
--

CREATE TABLE `placement_records` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `placed_students` int(11) NOT NULL,
  `package` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `placement_records`
--

INSERT INTO `placement_records` (`id`, `company_name`, `placed_students`, `package`) VALUES
(1, 'chetu', 12, 5.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `circulars`
--
ALTER TABLE `circulars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `placements`
--
ALTER TABLE `placements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `placement_records`
--
ALTER TABLE `placement_records`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `circulars`
--
ALTER TABLE `circulars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `placements`
--
ALTER TABLE `placements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `placement_records`
--
ALTER TABLE `placement_records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
