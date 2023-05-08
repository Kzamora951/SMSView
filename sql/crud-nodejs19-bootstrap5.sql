-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-02-2023 a las 01:08:38
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud-nodejs19-bootstrap5`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--
DROP DATABASE IF EXISTS `crud`;
CREATE DATABASE `crud`;
USE `crud`;


CREATE TABLE sms(
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `telefono` varchar(255),
   `created_at` timestamp NOT NULL DEFAULT current_timestamp()
);

CREATE TABLE `productos` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` varchar(255) NOT NULL,
  `stock` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
);

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `stock`, `img`, `created_at`, `updated_at`) VALUES
(1, 'Zapatos Rojos Taco Mujer', '56', '30', 'zrm.jpg', '2023-02-23 23:35:20', '2023-02-23 23:35:20'),
(2, 'Polo Azul', '25', '20', 'pa.jpg', '2023-02-23 23:59:01', '2023-02-24 23:58:06'),
(3, 'Bicicleta Roja', '450', '25', 'br.jpg', '2023-02-24 00:20:37', '2023-02-24 22:37:10');

