/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 100128
 Source Host           : localhost:3306
 Source Schema         : api

 Target Server Type    : MySQL
 Target Server Version : 100128
 File Encoding         : 65001

 Date: 30/07/2018 17:21:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_authors
-- ----------------------------
DROP TABLE IF EXISTS `m_authors`;
CREATE TABLE `m_authors`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `sort` int(11) NULL DEFAULT NULL,
  `IsDelete` int(2) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_authors
-- ----------------------------
INSERT INTO `m_authors` VALUES (1, 'Zoe Mc Key', 'This is a author', 1, 0, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (2, 'Mai Lan Hương, Hà Thanh Uyên', 'This is a author', 1, 0, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (3, 'Ts. Trần Văn Lượng', 'This is a author', 1, 0, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (4, 'Stephenie Meyer12313', 'This is a author', 1, 0, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (5, 'demo', 'This is a author', 1, 0, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (6, 'Author 01', 'This is a author', 1, 0, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (7, 'Author 02', 'This is a author', 1, 0, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (8, 'Author 03', 'This is a author', 1, 1, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (9, 'Author 04', 'This is a author', 1, 1, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (10, 'Author 05', 'This is a author', 1, 1, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (11, 'Author 06', 'This is a author', 1, 1, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (12, 'Author 07', 'This is a author', 1, 1, '2018-07-16 15:37:17', '2018-07-16 15:37:17');
INSERT INTO `m_authors` VALUES (13, 'demo', '123123123', 12, 1, '2018-07-18 09:39:25', '2018-07-18 09:39:25');
INSERT INTO `m_authors` VALUES (14, 'Meta Wagner', 'Meta Wagner\n', 12, 0, '2018-07-30 15:54:14', '2018-07-30 15:54:14');
INSERT INTO `m_authors` VALUES (15, 'Sasaki Fumio', 'Demo', 1, 0, '2018-07-30 16:01:54', '2018-07-30 16:01:54');

-- ----------------------------
-- Table structure for m_brands
-- ----------------------------
DROP TABLE IF EXISTS `m_brands`;
CREATE TABLE `m_brands`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_categories
-- ----------------------------
DROP TABLE IF EXISTS `m_categories`;
CREATE TABLE `m_categories`  (
  `category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_parrent_id` int(11) NOT NULL,
  `category_sort` int(11) NOT NULL,
  `IsPublic` int(11) NOT NULL,
  `IsHaveChild` int(11) NOT NULL,
  `IsDelete` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 62 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_categories
-- ----------------------------
INSERT INTO `m_categories` VALUES (1, NULL, 'Sách thiếu nhi', 0, 1, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (2, NULL, 'Sách kỹ năng sống', 0, 2, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (3, NULL, 'Sách tiểu thuyết,văn học', 0, 2, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (4, NULL, 'Sách kinh tế', 0, 3, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (5, NULL, 'Sách học ngoại ngữ', 0, 3, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (6, NULL, 'Sách tham khảo', 0, 2, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (7, NULL, 'Sách thiếu nhi ( 0-6 tuổi)', 1, 1, 1, 0, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (45, NULL, 'Sách thiếu nhi (6-11 tuổi)', 1, 2, 1, 0, 0, '2018-06-15 11:37:14', '2018-06-15 11:37:17');
INSERT INTO `m_categories` VALUES (46, NULL, 'Sách thiếu niên (11-15 tuổi)', 1, 22, 1, 0, 0, '2018-06-15 11:38:01', '2018-06-15 11:38:05');
INSERT INTO `m_categories` VALUES (47, NULL, 'Sách tư duy, kỹ năng sống', 2, 1, 1, 0, 0, '2018-06-15 11:39:17', '2018-06-15 11:39:20');
INSERT INTO `m_categories` VALUES (48, NULL, 'Sách hướng nghiệp', 2, 1, 1, 0, 0, '2018-06-15 11:39:39', '2018-06-15 11:39:43');
INSERT INTO `m_categories` VALUES (49, NULL, 'Sách nghệ thuật sống đẹp', 2, 1, 1, 0, 0, '2018-06-15 11:40:10', '2018-06-15 11:40:14');
INSERT INTO `m_categories` VALUES (50, NULL, 'Tiểu thuyết tình cảm', 3, 1, 1, 0, 0, '2018-06-15 11:41:01', '2018-06-15 11:41:04');
INSERT INTO `m_categories` VALUES (51, NULL, 'Văn học việt nam', 3, 1, 1, 0, 0, '2018-06-15 11:41:23', '2018-06-15 11:41:26');
INSERT INTO `m_categories` VALUES (52, NULL, 'Văn học nước ngoài', 3, 1, 1, 0, 0, '2018-06-15 11:41:57', '2018-06-15 11:42:00');
INSERT INTO `m_categories` VALUES (53, NULL, 'Truyện ngắn, tản văn777777', 3, 1, 1, 0, 0, '2018-06-15 11:42:18', '2018-06-15 11:42:21');
INSERT INTO `m_categories` VALUES (54, NULL, 'Sách kỹ năng làm việc', 4, 1, 1, 0, 0, '2018-06-15 11:46:05', '2018-06-15 11:46:13');
INSERT INTO `m_categories` VALUES (55, NULL, 'Sách lập trình', 0, 1, 1, 1, 0, '2018-07-06 10:51:44', '2018-07-06 10:51:47');
INSERT INTO `m_categories` VALUES (56, NULL, 'Lập trình Javascript căn bản', 55, 1, 1, 0, 0, '2018-07-06 10:52:38', '2018-07-06 10:52:41');
INSERT INTO `m_categories` VALUES (57, NULL, 'Lập trình React JS', 55, 1, 1, 0, 0, '2018-07-06 13:29:33', '2018-07-06 13:29:37');
INSERT INTO `m_categories` VALUES (58, NULL, 'Làm quen với PHP', 55, 1, 1, 0, 0, '2018-07-06 15:48:40', '2018-07-06 15:48:44');
INSERT INTO `m_categories` VALUES (60, NULL, 'Sách lập trình căn bản', 0, 2, 1, 1, 0, '2018-07-12 15:27:47', '2018-07-12 15:27:47');
INSERT INTO `m_categories` VALUES (61, NULL, 'Lập trình C#', 60, 1, 1, 0, 1, '2018-07-12 16:23:23', '2018-07-12 16:23:23');

-- ----------------------------
-- Table structure for m_categories_detail
-- ----------------------------
DROP TABLE IF EXISTS `m_categories_detail`;
CREATE TABLE `m_categories_detail`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `idCategory` int(11) NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idBrand` int(11) NOT NULL,
  `description_detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_customers
-- ----------------------------
DROP TABLE IF EXISTS `m_customers`;
CREATE TABLE `m_customers`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_login_id` int(11) NOT NULL,
  `customer_address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_user` int(11) NOT NULL,
  `update_user` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_customers
-- ----------------------------
INSERT INTO `m_customers` VALUES (1, 'Admin', 'nphoa7777@gmail.com', '01223492274', 1, '155/7 XVNT phường 17, quận Bình Thạnh', 1, 1, '2018-07-03 09:03:35', '2018-07-03 09:03:39');
INSERT INTO `m_customers` VALUES (2, 'Demo7777', 'demo@gmail.com', '12321321313', 3, '123ABCafasdadad', 1, 1, '2018-07-23 16:15:54', '2018-07-23 16:15:54');
INSERT INTO `m_customers` VALUES (3, 'Demo1', 'demo1@gmail.com', '123', 4, 'ABC', 1, 1, '2018-07-24 10:02:17', '2018-07-24 10:02:17');
INSERT INTO `m_customers` VALUES (4, 'Demo2', 'demo2@gmail.com', '456', 5, 'XYZ', 1, 1, '2018-07-24 10:02:56', '2018-07-24 10:02:56');
INSERT INTO `m_customers` VALUES (5, 'Demo3', 'demo3@gmail.com', '456789', 6, 'QWE', 1, 1, '2018-07-24 10:03:19', '2018-07-24 10:03:19');
INSERT INTO `m_customers` VALUES (6, 'Demo7777123', 'demo4@gmail.com', '123', 7, 'edsadasf123123', 1, 1, '2018-07-24 10:03:38', '2018-07-24 10:03:38');
INSERT INTO `m_customers` VALUES (7, 'Demo 7', 'demo7@gmail.com', '77777777', 8, 'DemoABC', 1, 1, '2018-07-25 11:36:41', '2018-07-25 11:36:41');

-- ----------------------------
-- Table structure for m_news
-- ----------------------------
DROP TABLE IF EXISTS `m_news`;
CREATE TABLE `m_news`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_payment_types
-- ----------------------------
DROP TABLE IF EXISTS `m_payment_types`;
CREATE TABLE `m_payment_types`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `payment_type_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `IsDelete` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_payment_types
-- ----------------------------
INSERT INTO `m_payment_types` VALUES (1, 'Paypal', 0, '2018-06-20 16:40:58', '2018-06-20 16:41:01', 'Thanh toán qua cổng điện tử');
INSERT INTO `m_payment_types` VALUES (2, 'Thanh toán khi nhận hàng', 0, '2018-06-20 16:42:49', '2018-06-20 16:42:53', 'Thanh toán bằng tiền mặt khi nhận hàng và kiểm tra hàng tại nơi giao hàng');

-- ----------------------------
-- Table structure for m_product_details
-- ----------------------------
DROP TABLE IF EXISTS `m_product_details`;
CREATE TABLE `m_product_details`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `id_release_Company` int(11) NOT NULL,
  `id_publisher` int(11) NOT NULL,
  `id_author` int(11) NOT NULL,
  `size` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_number` int(11) NOT NULL,
  `release_date` date NOT NULL,
  `covor_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_product_details
-- ----------------------------
INSERT INTO `m_product_details` VALUES (14, 16, 2, 4, 4, '13.5 x 20.5 cm', 300, '2018-07-11', 'Bìa mềm', '2018-07-13 14:43:54', '2018-07-13 14:43:54');
INSERT INTO `m_product_details` VALUES (15, 17, 4, 2, 2, '500 x 400', 504, '2018-07-30', 'Bìa cứng', '2018-07-30 15:42:02', '2018-07-30 15:42:02');
INSERT INTO `m_product_details` VALUES (16, 18, 7, 11, 2, '13.5 x 20.5 cm', 252, '2018-07-31', 'Bìa mềm', '2018-07-30 15:49:00', '2018-07-30 15:49:00');
INSERT INTO `m_product_details` VALUES (17, 19, 8, 53, 14, '14.5 x 20.5 cm', 312, '2018-07-30', 'Bìa mềm', '2018-07-30 15:56:28', '2018-07-30 15:56:28');
INSERT INTO `m_product_details` VALUES (18, 20, 9, 53, 7, '12 x 20.5 cm', 248, '2018-07-30', 'Bìa mềm', '2018-07-30 16:00:10', '2018-07-30 16:00:10');
INSERT INTO `m_product_details` VALUES (19, 21, 10, 1, 15, '13 x 20.5 cm', 294, '2018-07-30', 'Bìa mềm', '2018-07-30 16:04:54', '2018-07-30 16:04:54');

-- ----------------------------
-- Table structure for m_product_images
-- ----------------------------
DROP TABLE IF EXISTS `m_product_images`;
CREATE TABLE `m_product_images`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `image_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `image_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_product_images
-- ----------------------------
INSERT INTO `m_product_images` VALUES (4, 3, 'Detail', 'TTVH_01_zoom_02.jpg', '2018-06-19 15:56:33', '2018-06-19 15:56:35');
INSERT INTO `m_product_images` VALUES (11, 14, 'Detail', 'ProgramingJS.jpg', '2018-07-09 14:47:19', '2018-07-09 14:47:19');
INSERT INTO `m_product_images` VALUES (12, 15, 'Detail', 'sach-doi-ngan-dung-ngu-dai.png', '2018-07-09 15:08:55', '2018-07-09 15:08:55');
INSERT INTO `m_product_images` VALUES (13, 15, 'Detail', '9b5e2bac8229beb690ee703cd47c391c.jpg', '2018-07-09 15:08:55', '2018-07-09 15:08:55');
INSERT INTO `m_product_images` VALUES (14, 3, 'Detail', 'TTVH_01_zoom_01.jpg', '2018-07-09 15:29:02', '2018-07-09 15:29:05');
INSERT INTO `m_product_images` VALUES (15, 16, 'Detail', 'react-native-cookbook-stan-bershadskiy(www.ebook-dl.com)_Large.jpg', '2018-07-11 13:17:07', '2018-07-11 13:17:07');
INSERT INTO `m_product_images` VALUES (16, 16, 'Detail', 'ProgramingJS.jpg', '2018-07-30 12:02:21', '2018-07-30 12:02:24');
INSERT INTO `m_product_images` VALUES (17, 17, 'Detail', '31d38761a9205394cb818c3f1eccdc37.jpg', '2018-07-30 15:42:34', '2018-07-30 15:42:34');
INSERT INTO `m_product_images` VALUES (18, 18, 'Detail', 'dungcamtienlen.jpg', '2018-07-30 15:49:15', '2018-07-30 15:49:15');
INSERT INTO `m_product_images` VALUES (19, 19, 'Detail', 'aicunglanhasangtao01.jpg', '2018-07-30 15:56:46', '2018-07-30 15:56:46');
INSERT INTO `m_product_images` VALUES (20, 19, 'Detail', 'aicunglanhasangtao.jpg', '2018-07-30 15:56:46', '2018-07-30 15:56:46');
INSERT INTO `m_product_images` VALUES (21, 20, 'Detail', 'metquaaquanaghetdi.jpg', '2018-07-30 16:00:27', '2018-07-30 16:00:27');
INSERT INTO `m_product_images` VALUES (22, 21, 'Detail', 'loisongtoigiannguoinhat01.jpg', '2018-07-30 16:05:32', '2018-07-30 16:05:32');
INSERT INTO `m_product_images` VALUES (23, 21, 'Detail', 'loisongtoigiannguoinhat02.jpg', '2018-07-30 16:05:32', '2018-07-30 16:05:32');
INSERT INTO `m_product_images` VALUES (24, 21, 'Detail', 'loisongtoigiannguoinhat03.jpg', '2018-07-30 16:05:32', '2018-07-30 16:05:32');
INSERT INTO `m_product_images` VALUES (25, 21, 'Detail', 'loisongtoigiannguoinhat04.jpg', '2018-07-30 16:05:32', '2018-07-30 16:05:32');

-- ----------------------------
-- Table structure for m_products
-- ----------------------------
DROP TABLE IF EXISTS `m_products`;
CREATE TABLE `m_products`  (
  `product_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_price_base` double(8, 2) NOT NULL,
  `product_price_sale` double(8, 2) NULL DEFAULT NULL,
  `product_price_of` double(8, 2) NULL DEFAULT NULL,
  `product_sale_percen` int(11) NULL DEFAULT NULL,
  `product_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `product_detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `product_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `IsDelete` int(11) NULL DEFAULT NULL,
  `IsPublic` int(11) NULL DEFAULT NULL,
  `product_qty` int(11) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_products
-- ----------------------------
INSERT INTO `m_products` VALUES (16, 'PR001', 'Programing JS', 57, 175000.00, NULL, NULL, NULL, 'Demo123', 'Demo123456', 'ProgramingJS.jpg', 0, 1, NULL, '2018-07-13 14:43:53', '2018-07-13 14:43:53');
INSERT INTO `m_products` VALUES (17, 'KNS001', 'Nghệ Thuật Ngày Thường', 47, 108000.00, NULL, NULL, NULL, 'Với nghiên cứu lý luận, lịch sử văn hóa nghệ thuật thì các công trình “hàn lâm” dài hơi là phần lõi xác định tầm thâm cao của nghiên cứu. ', 'Với nghiên cứu lý luận, lịch sử văn hóa nghệ thuật thì các công trình “hàn lâm” dài hơi là phần lõi xác định tầm thâm cao của nghiên cứu. Với Phan Cẩm Thượng là các công trình uy tín như: Điêu khắc cổ Việt Nam, Đồ họa cổ Việt Nam, Điêu khắc Tây Nguyên, Chùa Dâu – Tứ Pháp, Chùa Bút Tháp v.v…Những công trình này có tính nền tảng để dạy, để học và nghiên cứu tiếp. Vùng đệm là những bài viết có tính nghiên cứu và các bài phê bình, là các sản phẩm báo chí chuyên đề, chuyên ngành. Vùng này hấp dẫn người đọc vì dễ đọc hơn, tác giả được tự do hơn trong việc đưa ra các nhận xét, bình giá, phản ứng tức thời có tính diễn đàn… Mảnh đất trù phú của đời thường nghệ thuật cho phép tác giả gieo những hạt mầm đơn lẻ, đưa ra những phác thảo  để rồi chính mình hay thế hệ sau sẽ gieo cấy cả một cánh đồng, xây cất cả một cấu trúc mới. Vùng ngoại biên còn mênh mông hơn với một nhà nghiên cứu thực thụ bởi đôi khi chiều cao sâu của các công trình khoa học chỉ là sự xoay dọc ra một cách cô đúc dải kiến thức nền rộng rãi ở chiều ngang. Chủ đề, đề tài cứ miên man như phong cảnh vô bến bờ, người đi như du sơn, du thủy. Đi đâu, ngồi đâu, ngâm ngợi, phán xét gì tùy thích. Miễn là gặp tri ân. Phong cách viết lại càng tự  do, tùy hứng người đọc cũng thích thú vị được gần gũi người viết hơn.', '31d38761a9205394cb818c3f1eccdc37.jpg', 0, 1, NULL, '2018-07-30 15:42:02', '2018-07-30 15:42:02');
INSERT INTO `m_products` VALUES (18, 'KNS002', 'Dũng Cảm Tiến Lên - 7 Bước Thay Đổi Bản Thân', 47, 52800.00, NULL, NULL, NULL, 'Cuốn sách này sẽ giới thiệu và giải thích bản chất của lí thuyết tâm lí học Adler thông qua một câu chuyện...', 'Cuốn sách này sẽ giới thiệu và giải thích bản chất của lí thuyết tâm lí học Adler thông qua một câu chuyện. Chuyện kể về Matsuda Yuji, hiện đang làm việc tại một công ty quảng cáo lớn. Anh đã gặp gỡ một chuyên gia tư vấn có tên là Kara rồi sau đó học được cách tự trưởng thành, trở thành con người mới bằng cách thực hiện “Bảy bước thay đổi bản thân”, với cơ sở là lí thuyết tâm lí học Adler.\n\nQuý độc giả khi đọc cuốn sách này chắc hẳn cũng sẽ gặp được con người mới của bản thân một cách tình cờ thông qua việc thực hiện “Bảy bước thay đổi bản thân” như trên.', 'dungcamtienlen.jpg', 0, 1, NULL, '2018-07-30 15:49:00', '2018-07-30 15:49:00');
INSERT INTO `m_products` VALUES (19, 'KNS003', 'Ai Cũng Là Nhà Sáng Tạo Đại Tài', 47, 85000.00, NULL, NULL, NULL, 'Có bao giờ bạn nhìn thấy một tác phẩm, ví dụ như một chiếc chăn bông họa tiết ghép vải được treo ở bảo tàng, kí tên “Vô danh” hoặc “Khuyết danh”, có từ khoảng năm 1864?', 'Có bao giờ bạn nhìn thấy một tác phẩm, ví dụ như một chiếc chăn bông họa tiết ghép vải được treo ở bảo tàng, kí tên “Vô danh” hoặc “Khuyết danh”, có từ khoảng năm 1864? Những tác phẩm kiểu như vậy thường của phụ nữ, những người gốc Mỹ-Phi hoặc những người bị gạt ra rìa xã hội. Họ thường không kí tên vào các tác phẩm của mình. Một số phụ nữ sử dụng bút danh nam để tác phẩm của họ được xuất bản hoặc được trưng\nbày trong viện bảo tàng.\n\nThật đáng buồn nếu xét đến việc có bao nhiêu nghệ sĩ nổi tiếng mà ngày nay chúng ta tôn kính đã từng làm việc mệt nhọc trong bóng tối, dù đó là sự lựa chọn của họ hay do hoàn cảnh bắt buộc. Hãy tôn vinh những nữ nghệ sĩ từng sống và sáng tạo hàng thế kỉ qua, đặc biệt những người đã thể hiện sự kiên nhẫn đáng kinh ngạc dù ở thời đó họ không nhận được những lời ca ngợi.', 'aicunglanhasangtao01.jpg', 0, 1, NULL, '2018-07-30 15:56:28', '2018-07-30 15:56:28');
INSERT INTO `m_products` VALUES (20, 'KNS004', 'Mệt Quá À? Quẳng Hết Đi!', 47, 64500.00, NULL, NULL, NULL, 'BẠN LÀ AI MÀ DÁM GÁNH CẢ THẾ GIỚI NÀY TRÊN VAI???\n\nBạn luôn cố ép mình hoàn thành công việc, theo đuổi hết mục tiêu này đến dự định khác?\n\nBạn luôn thấy mình kém cỏi khi so sánh với đám đông?\n\nBạn thấy mệt và không hạnh phúc?', 'Mệt Quá À? Quẳng Hết Đi!\nBẠN LÀ AI MÀ DÁM GÁNH CẢ THẾ GIỚI NÀY TRÊN VAI???\n\nBạn luôn cố ép mình hoàn thành công việc, theo đuổi hết mục tiêu này đến dự định khác?\n\nBạn luôn thấy mình kém cỏi khi so sánh với đám đông?\n\nBạn thấy mệt và không hạnh phúc?\n\nMệt mỏi chính là liều thuốc độc không giết chết chúng ta ngay lập tức, nhưng dần ăn mòn và hủy hoại toàn bộ cuộc đời chúng ta. Sai lầm lớn nhất của tất cả chúng ta là hùa theo đám đông và sống chết chạy đua với vật chất.\n\n“MỆT QUÁ À? QUẲNG HẾT ĐI!” sẽ giải đáp những tò mò của tất cả mọi người từ trước đến nay:\n\nCăng thẳng, mệt mỏi của ngày nay và hàng nghìn năm trước bản chất giống nhau. Nhưng tại sao ngày nay, cuộc sống lại trở nên nặng nề hơn?\n\nĐa số chúng ta cảm thấy buồn bã một cách mơ hồ, nhưng thực ra chúng đều bắt nguồn từ những nguyên nhân rất rõ ràng.\n\nMệt mỏi thực chất không phải lỗi của bạn, càng không phải lỗi của xã hội. Nó sinh ra do sự chênh lệch giữa giá trị quan mà trí não chúng ta chi phối với giá trị quan của xã hội.\n\nNếu bạn cần một lời giải thích khoa học, rõ ràng và thuyết phục cho những mệt mỏi, căng thẳng và muốn bắt đầu một cuộc sống vui vẻ hơn thì cuốn sách này dành cho bạn.', 'metquaaquanaghetdi.jpg', 0, 1, NULL, '2018-07-30 16:00:10', '2018-07-30 16:00:10');
INSERT INTO `m_products` VALUES (21, 'KNS005', 'Lối Sống Tối Giản Của Người Nhật (Tái Bản)', 47, 71000.00, NULL, NULL, NULL, 'Lối sống tối giản là cách sống cắt giảm vật dụng xuống còn mức tối thiểu. Và cùng với cuộc sống ít đồ đạc, ta có thể để tâm nhiều hơn tới hạnh phúc, đó chính là chủ đề của cuốn sách này.', 'Lối sống tối giản là cách sống cắt giảm vật dụng xuống còn mức tối thiểu. Và cùng với cuộc sống ít đồ đạc, ta có thể để tâm nhiều hơn tới hạnh phúc, đó chính là chủ đề của cuốn sách này.\n\nChẳng có ai từ khi sinh ra đã có tài sản, đồ đạc gì trong tay. Vậy nên bất cứ ai khi mới chào đời đều là những người sống tối giản. Cứ mỗi lần bạn sở hữu trong tay những đồ dùng hơn mức cần thiết là một lần bạn lấy mất tự do của chính mình. Giá trị bản thân chúng ta không đo bằng những đồ dùng mà chúng ta sở hữu. Những đồ dùng này chỉ cho chúng ta một chút cảm giác hạnh phúc nhất thời mà thôi. Mang theo những đồ dùng hơn mức cần thiết sẽ lấy hết thời gian, năng lượng của bạn. Khi nhận ra được điều đó, tức là bạn đã bắt đầu trở thành một người sống tối giản.\n\nNhững người sống tối giản luôn cảm thấy vui vẻ, mới lạ mỗi ngày. Cái cảm giác này, tôi nghĩ bất cứ ai cũng có thể cảm nhận được, dù bạn có phải là một người sống tối giản hay không, bởi bất cứ ai.\n\nLối sống tối giản của người Nhật gồm có năm chương, trong đó, chương một, tác giả sẽ giới thiệu cho bạn lối sống tối giản là gì, đưa ra định nghĩa của anh về nó. Sau đó anh sẽ đưa ra lý do vì sao mình lại theo lối sống này sau nhiều năm sống trong căn phòng của bản thân.', 'loisongtoigiannguoinhat01.jpg', 0, 1, NULL, '2018-07-30 16:04:54', '2018-07-30 16:04:54');

-- ----------------------------
-- Table structure for m_promotion
-- ----------------------------
DROP TABLE IF EXISTS `m_promotion`;
CREATE TABLE `m_promotion`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_publishers
-- ----------------------------
DROP TABLE IF EXISTS `m_publishers`;
CREATE TABLE `m_publishers`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `sort` int(11) NULL DEFAULT NULL,
  `IsDelete` int(2) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_publishers
-- ----------------------------
INSERT INTO `m_publishers` VALUES (1, 'Nhà Xuất Bản Lao Động', 'This is a publisher', 12, 0, '2018-07-16 14:01:51', '2018-07-16 14:01:51');
INSERT INTO `m_publishers` VALUES (2, 'Nhà Xuất Bản Đà Nẵng', 'This is a publisher', 12, 0, '2018-07-16 14:01:51', '2018-07-16 14:01:51');
INSERT INTO `m_publishers` VALUES (3, 'Nhà Xuất Bản Đại Học Quốc Gia Hà Nội', 'This is a publisher', 12, 0, '2018-07-16 14:01:51', '2018-07-16 14:01:51');
INSERT INTO `m_publishers` VALUES (4, 'Nhà xuất bản trẻ', 'This is a publisher', 12, 0, '2018-07-16 14:01:51', '2018-07-16 14:01:51');
INSERT INTO `m_publishers` VALUES (53, 'Nhà Xuất Bản Thế Giới', 'Nhà Xuất Bản Thế Giới', 1, 0, '2018-07-30 15:53:30', '2018-07-30 15:53:30');

-- ----------------------------
-- Table structure for m_release_companys
-- ----------------------------
DROP TABLE IF EXISTS `m_release_companys`;
CREATE TABLE `m_release_companys`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `IsDelete` int(2) NULL DEFAULT NULL,
  `sort` int(11) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_release_companys
-- ----------------------------
INSERT INTO `m_release_companys` VALUES (1, 'Pandabooks', NULL, 0, 1, '2018-06-15 11:19:06', '2018-06-15 11:19:09');
INSERT INTO `m_release_companys` VALUES (2, 'Zenbooks', NULL, 0, 2, '2018-06-15 11:26:30', '2018-06-15 11:26:33');
INSERT INTO `m_release_companys` VALUES (3, '	Nhà Sách Hồng Ân', NULL, 0, 3, '2018-06-15 11:29:54', '2018-06-15 11:29:58');
INSERT INTO `m_release_companys` VALUES (4, 'Nhà xuất bản trẻ', NULL, 0, 4, '2018-06-18 10:27:34', '2018-06-18 10:27:37');
INSERT INTO `m_release_companys` VALUES (5, 'demo', 'demo', 0, 23, '2018-07-17 09:13:29', '2018-07-17 09:13:29');
INSERT INTO `m_release_companys` VALUES (6, 'demo123', 'demo123', 1, 3, '2018-07-17 09:15:16', '2018-07-17 09:15:16');
INSERT INTO `m_release_companys` VALUES (7, 'Minh Long', 'Demo', 0, 1, '2018-07-30 15:45:57', '2018-07-30 15:45:57');
INSERT INTO `m_release_companys` VALUES (8, 'R.E.A.D Books', 'R.E.A.D Books', 0, 12, '2018-07-30 15:53:55', '2018-07-30 15:53:55');
INSERT INTO `m_release_companys` VALUES (9, 'Skybooks', 'Skybooks', 0, 21, '2018-07-30 15:58:08', '2018-07-30 15:58:08');
INSERT INTO `m_release_companys` VALUES (10, 'Thái Hà', 'Thái Hà', 0, 21, '2018-07-30 16:01:37', '2018-07-30 16:01:37');

-- ----------------------------
-- Table structure for m_roles
-- ----------------------------
DROP TABLE IF EXISTS `m_roles`;
CREATE TABLE `m_roles`  (
  `id` int(10) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `IsDelete` int(2) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_roles
-- ----------------------------
INSERT INTO `m_roles` VALUES (1, 'Admin', 'Admin', 0, '2018-07-25 09:47:28', '2018-07-25 09:47:32');
INSERT INTO `m_roles` VALUES (2, 'User', 'User', 0, '2018-07-25 09:48:06', '2018-07-25 09:48:09');

-- ----------------------------
-- Table structure for m_shipment_types
-- ----------------------------
DROP TABLE IF EXISTS `m_shipment_types`;
CREATE TABLE `m_shipment_types`  (
  `id` int(10) NOT NULL,
  `shipment_type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `IsDelete` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_shipment_types
-- ----------------------------
INSERT INTO `m_shipment_types` VALUES (1, 'Giao hàng tiêu chuẩn', 'Giao hàng tiêu chuẩn (Dự kiến giao hàng vào thứ 3 hàng tuần  với giá 12.000Đ', '2018-07-02 10:00:16', '2018-07-02 10:00:20', 0);
INSERT INTO `m_shipment_types` VALUES (2, 'Giao hàng 2h', 'Dự kiến giao hàng trong 2h tính từ thời gian đặt hàng với giá 30.000Đ', '2018-07-02 10:01:24', '2018-07-02 10:01:27', 0);
INSERT INTO `m_shipment_types` VALUES (3, 'Giao hàng nhanh', 'Dự kiến giao hàng trong 30p tính từ thời gian đặt hàng với giá 40.000Đ', '2018-07-02 10:02:30', '2018-07-02 10:02:34', 0);

-- ----------------------------
-- Table structure for m_status
-- ----------------------------
DROP TABLE IF EXISTS `m_status`;
CREATE TABLE `m_status`  (
  `id` int(11) NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(2) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_status
-- ----------------------------
INSERT INTO `m_status` VALUES (1, 'Shipment', 1, 'Chưa giao hàng');
INSERT INTO `m_status` VALUES (2, 'Shipment', 2, 'Đã giao hàng');
INSERT INTO `m_status` VALUES (4, 'Payment', 2, 'Đã thanh toán');
INSERT INTO `m_status` VALUES (5, 'Shipment', 3, 'Đang vận chuyển');
INSERT INTO `m_status` VALUES (6, 'Order', 1, 'Đang xử lý');
INSERT INTO `m_status` VALUES (7, 'Order', 2, 'Đã hoàn thành');
INSERT INTO `m_status` VALUES (8, 'Payment', 1, 'Chưa thanh toán');

-- ----------------------------
-- Table structure for m_user_types
-- ----------------------------
DROP TABLE IF EXISTS `m_user_types`;
CREATE TABLE `m_user_types`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2018_06_05_023121_create_category_table', 1);
INSERT INTO `migrations` VALUES (4, '2018_06_05_023220_create_customer_table', 1);
INSERT INTO `migrations` VALUES (5, '2018_06_05_023247_create_product_table', 1);
INSERT INTO `migrations` VALUES (6, '2018_06_05_023325_create_shipment_table', 1);
INSERT INTO `migrations` VALUES (7, '2018_06_05_023404_create_payment_type_table', 1);
INSERT INTO `migrations` VALUES (8, '2018_06_05_023513_create_news_table', 1);
INSERT INTO `migrations` VALUES (9, '2018_06_05_023616_create_product_image_table', 1);
INSERT INTO `migrations` VALUES (10, '2018_06_05_023651_create_order_table', 1);
INSERT INTO `migrations` VALUES (11, '2018_06_05_023812_create_order_detail_table', 1);
INSERT INTO `migrations` VALUES (12, '2018_06_05_023840_create_payment_table', 1);
INSERT INTO `migrations` VALUES (13, '2018_06_05_023907_create_promotion_table', 1);
INSERT INTO `migrations` VALUES (14, '2018_06_05_024051_create_user_type_table', 1);
INSERT INTO `migrations` VALUES (15, '2018_06_06_080757_create_category_detail_table', 1);
INSERT INTO `migrations` VALUES (16, '2018_06_06_081425_create_category_brand_table', 1);
INSERT INTO `migrations` VALUES (17, '2018_06_07_022835_create_categories_table', 1);
INSERT INTO `migrations` VALUES (18, '2018_06_15_023426_create_product_detail_table', 1);
INSERT INTO `migrations` VALUES (19, '2018_06_15_024818_create_release__company_table', 1);
INSERT INTO `migrations` VALUES (20, '2018_06_15_024941_create_publisher_table', 1);
INSERT INTO `migrations` VALUES (21, '2018_06_15_025008_create_author_table', 1);

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_order_details
-- ----------------------------
DROP TABLE IF EXISTS `t_order_details`;
CREATE TABLE `t_order_details`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_price` double(8, 2) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `product_total` double(8, 2) NOT NULL,
  `create_user` int(11) NOT NULL,
  `update_user` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_order_details
-- ----------------------------
INSERT INTO `t_order_details` VALUES (7, 6, 4, 41250.00, 3, 123750.00, 1, 1, '2018-07-03 14:46:44', '2018-07-03 14:46:44');

-- ----------------------------
-- Table structure for t_orders
-- ----------------------------
DROP TABLE IF EXISTS `t_orders`;
CREATE TABLE `t_orders`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_date` datetime(0) NOT NULL,
  `order_status` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `total_price` double(8, 2) NOT NULL,
  `shipment_id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `create_user` int(11) NOT NULL,
  `update_user` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_orders
-- ----------------------------
INSERT INTO `t_orders` VALUES (6, 'ORDER_01', '2018-07-03 14:46:44', 6, 1, 123750.00, 8, 18, 1, 1, '2018-07-03 14:46:44', '2018-07-03 14:46:44');

-- ----------------------------
-- Table structure for t_payments
-- ----------------------------
DROP TABLE IF EXISTS `t_payments`;
CREATE TABLE `t_payments`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `payment_type_id` int(11) NOT NULL,
  `payment_amout` double(8, 2) NOT NULL,
  `payment_date` datetime(0) NOT NULL,
  `payment_status` int(11) NOT NULL,
  `payment_amount_paid` double(8, 2) NOT NULL,
  `create_user` int(11) NOT NULL,
  `update_user` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_payments
-- ----------------------------
INSERT INTO `t_payments` VALUES (18, 2, 123750.00, '2018-07-03 14:46:44', 8, 0.00, 1, 1, '2018-07-03 14:46:44', '2018-07-03 14:46:44');

-- ----------------------------
-- Table structure for t_shipments
-- ----------------------------
DROP TABLE IF EXISTS `t_shipments`;
CREATE TABLE `t_shipments`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `address_delivery` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `date_check_out` datetime(0) NOT NULL,
  `date_delivery` datetime(0) NOT NULL,
  `delivery_status` int(11) NOT NULL,
  `phone_number_delivery` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `create_user` int(11) NOT NULL,
  `update_user` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `name_delivery` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `email_delivery` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_shipments
-- ----------------------------
INSERT INTO `t_shipments` VALUES (8, 1, NULL, '2018-07-03 14:46:44', '2018-07-03 14:46:44', 1, NULL, 1, 1, '2018-07-03 14:46:44', '2018-07-03 14:46:44', NULL, NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort` int(11) NOT NULL,
  `IsDelete` int(11) NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `roleId` int(2) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Admin', 'nphoa7777@gmail.com', '$2y$10$AWgAAhjc3k65Z2qFMs3ubuApPnyJmbyBBgNkAbrLCjVhHsaVVvqYO', 1, 0, NULL, 1, '2018-06-29 07:06:51', '2018-06-29 07:06:51');
INSERT INTO `users` VALUES (3, 'Demo7777', 'demo@gmail.com', '$2y$10$DZbJeJQCqyasVfQucLaJX.L6ip.Q/JZs87.zrwbXQaFY3/VSiwVAu', 42, 0, NULL, 2, '2018-07-23 16:15:54', '2018-07-23 16:15:54');
INSERT INTO `users` VALUES (4, 'Demo1', 'demo1@gmail.com', '$2y$10$UNi1d.9gO9KAjYJy73g.6u0xF3sek5tSRWunsCyIo6YKxluL3gLg6', 123, 1, NULL, 2, '2018-07-24 10:02:17', '2018-07-24 10:02:17');
INSERT INTO `users` VALUES (5, 'Demo2', 'demo2@gmail.com', '$2y$10$YVFvhwGN3Hr/Jd8L/KboeeZy0IgwDl4eHRjakD0Z95U1EKoP5E5WC', 213, 1, NULL, 2, '2018-07-24 10:02:56', '2018-07-24 10:02:56');
INSERT INTO `users` VALUES (6, 'Demo3', 'demo3@gmail.com', '$2y$10$8ktRTY7lOfJumwLAQFZcT.ua8uhNKzveBvC25Ccb8VQBtH0FSDuzi', 1234, 1, NULL, 2, '2018-07-24 10:03:18', '2018-07-24 10:03:18');
INSERT INTO `users` VALUES (7, 'Demo7777123', 'demo4@gmail.com', '$2y$10$ckMpFrdaIvyAFv3g23LuDeDeCGz4BLX4mekttKdn.7O56luy0JUfq', 123, 1, NULL, 2, '2018-07-24 10:03:38', '2018-07-24 10:03:38');
INSERT INTO `users` VALUES (8, 'Demo 7', 'demo7@gmail.com', '$2y$10$2IO5xDqKRlO5dG9aHcBtiOrOwqw2GktYWA.qp0g4TkljsAuEUk9r.', 2, 0, NULL, 1, '2018-07-25 11:36:41', '2018-07-25 11:36:41');

SET FOREIGN_KEY_CHECKS = 1;
