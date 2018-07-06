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

 Date: 06/07/2018 17:21:37
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
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_authors
-- ----------------------------
INSERT INTO `m_authors` VALUES (1, 'Zoe Mc Key', '2018-06-15 11:19:48', '0000-00-00 00:00:00');
INSERT INTO `m_authors` VALUES (2, 'Mai Lan Hương, Hà Thanh Uyên', '2018-06-15 11:27:01', '2018-06-15 11:27:04');
INSERT INTO `m_authors` VALUES (3, 'Ts. Trần Văn Lượng', '2018-06-15 11:30:25', '2018-06-15 11:30:28');
INSERT INTO `m_authors` VALUES (4, 'Stephenie Meyer', '2018-06-18 10:28:29', '2018-06-18 10:28:32');

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
  `category_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_parrent_id` int(11) NOT NULL,
  `category_sort` int(11) NOT NULL,
  `IsPublic` int(11) NOT NULL,
  `IsHaveChild` int(11) NOT NULL,
  `IsDelete` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 59 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_categories
-- ----------------------------
INSERT INTO `m_categories` VALUES (1, '', 'Sách thiếu nhi', 0, 1, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (2, '', 'Sách kỹ năng sống', 0, 2, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (3, '', 'Sách tiểu thuyết,văn học', 0, 2, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (4, '', 'Sách kinh tế', 0, 3, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (5, '', 'Sách học ngoại ngữ', 0, 3, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (6, '', 'Sách tham khảo', 0, 2, 1, 1, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (7, '', 'Sách thiếu nhi ( 0-6 tuổi)', 1, 1, 1, 0, 0, '2018-06-15 11:36:32', '2018-06-15 11:36:32');
INSERT INTO `m_categories` VALUES (45, '', 'Sách thiếu nhi (6-11 tuổi)', 1, 2, 1, 0, 0, '2018-06-15 11:37:14', '2018-06-15 11:37:17');
INSERT INTO `m_categories` VALUES (46, '', 'Sách thiếu niên (11-15 tuổi)', 1, 2, 1, 0, 0, '2018-06-15 11:38:01', '2018-06-15 11:38:05');
INSERT INTO `m_categories` VALUES (47, '', 'Sách tư duy, kỹ năng sống', 2, 1, 1, 0, 0, '2018-06-15 11:39:17', '2018-06-15 11:39:20');
INSERT INTO `m_categories` VALUES (48, '', 'Sách hướng nghiệp', 2, 1, 1, 0, 0, '2018-06-15 11:39:39', '2018-06-15 11:39:43');
INSERT INTO `m_categories` VALUES (49, '', 'Sách nghệ thuật sống đẹp', 2, 1, 1, 0, 0, '2018-06-15 11:40:10', '2018-06-15 11:40:14');
INSERT INTO `m_categories` VALUES (50, '', 'Tiểu thuyết tình cảm', 3, 1, 1, 0, 0, '2018-06-15 11:41:01', '2018-06-15 11:41:04');
INSERT INTO `m_categories` VALUES (51, '', 'Văn học việt nam', 3, 1, 1, 0, 0, '2018-06-15 11:41:23', '2018-06-15 11:41:26');
INSERT INTO `m_categories` VALUES (52, '', 'Văn học nước ngoài', 3, 1, 1, 0, 0, '2018-06-15 11:41:57', '2018-06-15 11:42:00');
INSERT INTO `m_categories` VALUES (53, '', 'Truyện ngắn, tản văn', 3, 1, 1, 0, 0, '2018-06-15 11:42:18', '2018-06-15 11:42:21');
INSERT INTO `m_categories` VALUES (54, '', 'Sách kỹ năng làm việc', 4, 1, 1, 0, 0, '2018-06-15 11:46:05', '2018-06-15 11:46:13');
INSERT INTO `m_categories` VALUES (55, '', 'Sách lập trình', 0, 1, 1, 1, 0, '2018-07-06 10:51:44', '2018-07-06 10:51:47');
INSERT INTO `m_categories` VALUES (56, '', 'Lập trình Javascript căn bản', 55, 1, 1, 0, 0, '2018-07-06 10:52:38', '2018-07-06 10:52:41');
INSERT INTO `m_categories` VALUES (57, '', 'Lập trình React JS', 55, 1, 1, 0, 0, '2018-07-06 13:29:33', '2018-07-06 13:29:37');
INSERT INTO `m_categories` VALUES (58, '', 'Làm quen với PHP', 55, 1, 1, 0, 0, '2018-07-06 15:48:40', '2018-07-06 15:48:44');

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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_customers
-- ----------------------------
INSERT INTO `m_customers` VALUES (1, 'nphoa', 'nphoa7777@gmail.com', '01223492274', 1, '155/7 XVNT p17 qBT', 1, 1, '2018-07-03 09:03:35', '2018-07-03 09:03:39');

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
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_product_details
-- ----------------------------
INSERT INTO `m_product_details` VALUES (1, 4, 1, 1, 1, '13.5 x 20.5 cm', 152, '2018-06-15', 'Bìa mềm', '2018-06-15 11:21:16', '2018-06-15 11:21:18');
INSERT INTO `m_product_details` VALUES (2, 5, 2, 2, 2, '17 x 24 cm', 384, '2017-07-15', 'Bìa mềm', '2018-06-15 11:27:49', '2018-06-15 11:27:52');
INSERT INTO `m_product_details` VALUES (3, 6, 3, 3, 3, '17 x 24 cm', 292, '2018-06-14', 'Bìa mềm', '2018-06-15 11:31:05', '2018-06-15 11:31:08');
INSERT INTO `m_product_details` VALUES (4, 3, 4, 4, 4, '14 x 20 cm', 796, '2018-06-18', 'Bìa mềm', '2018-06-18 10:29:08', '2018-06-18 10:29:11');
INSERT INTO `m_product_details` VALUES (10, 12, 3, 3, 3, '150x190', 150, '2018-07-20', 'bìa cứng', '2018-07-06 10:54:32', '2018-07-06 10:54:32');
INSERT INTO `m_product_details` VALUES (11, 13, 3, 3, 4, '170x23', 250, '2018-07-20', 'Bìa mềm', '2018-07-06 13:51:38', '2018-07-06 13:51:38');
INSERT INTO `m_product_details` VALUES (12, 14, 3, 2, 1, '150x456', 250, '2018-07-06', 'bìa cứng', '2018-07-06 15:49:58', '2018-07-06 15:49:58');

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
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_product_images
-- ----------------------------
INSERT INTO `m_product_images` VALUES (1, 3, 'Zoom', 'TTVH_01_zoom_01.jpg', '2018-06-18 10:25:10', '2018-06-18 10:25:13');
INSERT INTO `m_product_images` VALUES (2, 3, 'Detail', 'TTVH_01_detail_01.jpg', '2018-06-18 10:34:46', '2018-06-18 10:34:50');
INSERT INTO `m_product_images` VALUES (3, 3, 'Zoom', 'TTVH_01_zoom_02.jpg', '2018-06-19 15:56:00', '2018-06-19 15:56:03');
INSERT INTO `m_product_images` VALUES (4, 3, 'Detail', 'TTVH_01_detail_02.jpg', '2018-06-19 15:56:33', '2018-06-19 15:56:35');

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
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_products
-- ----------------------------
INSERT INTO `m_products` VALUES (1, 'TN_01', 'Tuổi Thơ Dữ Dội (Bản Mới 2013)', 7, 72500.00, NULL, NULL, NULL, 'Nhắc đến Phùng Quán, người ta sẽ nhớ ngay tới một cây bút lạ kỳ trong nền văn học Việt Nam với một tác phẩm thiếu nhi vô cùng chân thực và xúc động về một thế hệ trẻ anh hùng:', 'Tuổi thơ dữ dội - cuốn truyện xoay quanh cuộc sống chiến đấu và hy sinh của những thiếu niên 13, 14 tuổi trong hàng ngũ Đội thiếu niên trinh sát của trung đoàn Trần Cao Vân. Những Lượm, Mừng, Quỳnh sơn ca, Hòa đen, Bồng da rắn, Vịnh sưa, Tư dát... mỗi người một hoàn cảnh song đều chung quyết tâm, nhiệt huyết và lòng yêu nước, đã tham gia chiến đấu hết mình và hy sinh khi tuổi đời còn rất trẻ.\r\n\r\nĐúng như tên truyện, độc giả sẽ bắt gặp ở đó những chi tiết thực sự dữ dội về cuộc đời thiếu niên bất hạnh, về cuộc chiến tranh chống giặc tàn khốc nhưng ẩn sâu bên trong ta vẫn thấy những tâm hồn trong sáng và vô tư, thấy sự can trường, dũng cảm phi thường của nhân vật. Tất cả những ai đã từng đọc tác phẩm này hầu như đều không ngăn được xúc động và những giọt nước mắt cảm thương, cảm phục. Đây thực sự là một tác phẩm quý trong kho tàng văn học Việt Nam. Một câu chuyện khơi dậy trong mỗi người tình yêu đất nước và niềm trân trọng ký ức tuổi thơ...', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `m_products` VALUES (2, 'KNS_01', 'Hiểu Người Để Dùng Người', 47, 40000.00, NULL, NULL, NULL, 'Hiểu Người Để Dùng Người', 'Hiểu người để dùng người là một trước tác lí luận, nhận xét đánh giá tài năng, tính cách của nhân vật một cách có hệ thống, cũng là cuốn sách quan trọng dùng để nghiên cứu tư tưởng học thuật, tâm lý học, nhân tài học trong thời kì Ngụy Tấn. Cuốn sách mang tư tưởng của các nho giáo, đạo gia, danh gia, pháp gia, và âm dương gia, Lưu Thiệu đã đem các loại tư tưởng đó hòa trộn lại dùng để phê bình quan sát nhân vật, đối với việc giám định tài năng tính tình của nhân vật đã có sự luận thuật tương đối toàn diện và hệ thống.\r\n\r\nSách bao gồm ba quyển, mười hai thiên. Nội dung chủ yếu bao gồm: Những nguyên tắc cơ bản của việc xem xét và phân biệt nhân tài cùng với phương pháp nhận thức giám định, phân loại các loại hình nhân tài khác nhau cùng với việc thích hợp gánh vác chức vụ, tám loại được mất trong cách ứng xử khôn ngoan, phân tích sự hiếu thắng với khiêm nhường, v.v… Nghệ thuật hiểu biết giám định nhân tài, phương pháp dùng người theo năng lực cùng với việc phân tích tính người được giảng giải trong sách này, đối với con người trong hiện tại, vẫn rất có giá trị lấy đó làm gương.', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `m_products` VALUES (3, 'TTVH_01', 'Trăng Non (Tái Bản Năm 2018)', 52, 154000.00, NULL, NULL, NULL, 'Trăng non nói về tiểu thuyết ma cà rồng', 'Tiếp theo Chạng vạng, tập sách Trăng non viết về chuyện tình lãng mạn giữa cô gái và người yêu ma cà rồng, với những diễn biến mới đầy kịch tính. Tuy chọn đề tài kinh dị nhưng bút pháp của tác giả rất tinh tế, sâu sắc, đầy tính nhân văn và bay bổng với những chi tiết lãng mạn. Sách là một cuốn tiểu thuyết giả tưởng lãng mạn của nhà văn nữ Stephenie Meyer dành cho bạn đọc yêu thích thể loại văn học kinh dị, nhất là bạn đọc trẻ.', 'TTVH_01_main.jpg', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `m_products` VALUES (4, 'TT_01', 'Khám Phá Tiềm Năng Trong Bạn - Tối Đa Hóa Sự Tự Tin', 54, 41250.00, NULL, NULL, NULL, 'Bạn có cảm thấy rằng dù mình có chăm chỉ đến đâu cũng vẫn chỉ dậm chân tại chỗ? Không hướng đi, không mục đích và mắc kẹt trong một lối mòn cũ rích.', 'Bạn sẽ làm gì nếu bạn biết chính xác cách tận dụng điểm mạnh và giảm tối thiểu điểm yếu của mình? Đã đến lúc bạn phải bứt phá khỏi lối mòn cũ rích kia và nhận ra những thứ giúp Khám phá tiềm năng trong bạn.\r\n\r\nCon đường duy nhất dẫn đến thành công là hiểu chính mình, cả trong lẫn ngoài.\r\n\r\nDựa vào thuyết đa thông minh của giáo sư Howard Gardner, bạn sẽ tìm ra điểm mạnh của mình, những phương thức độc đáo để nâng cao điểm mạnh ấy và cuối cùng là sử dụng chúng để đưa bạn đến thành công rồi bạn sẽ có cuộc sống mình luôn mong muốn.\r\n\r\nTìm hiểu 8+1 loại trí thông minh và những bài nghiên cứu về các phương pháp đã được chứng minh để cải thiện từng loại trí thông minh ấy. Hiểu cách khám phá và phát huy tối đa thế mạnh bẩm sinh trong bạn, cách biến công việc của bạn trở nên chuyên nghiệp, cách chia mục tiêu cuộc đời thành những nhiệm vụ nhỏ và dễ dàng hàng ngày rồi nhiều hơn thế.', 'TT_01_main.jpg', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `m_products` VALUES (5, 'NN_01', 'Giải Thích Ngữ Pháp Tiếng Anh Với Bài Tập Và Đáp Án (Ấn Bản 2017)', 5, 60000.00, NULL, NULL, NULL, 'Sách Giải Thích Ngữ Pháp Tiếng Anh Với Bài Tập Và Đáp Án được biên soạn thành 9 chương, đề cập đến những vấn đề ngữ pháp từ cơ bản đến nâng cao.', 'Nội dung các chương được biên soạn dựa trên ngữ pháp tiiếng Anh hiện đại, giải thích cặn kẽ, rõ ràng các cách dùng và quy luật mà người học cần nắm vững: đồng thời chỉ ra những quy luật khác nhau giữa tiếng anh của người Anh (British English) và tiếng Anh của người Mỹ (American English).\r\n\r\nCuối mỗi phần ngữ pháp đều có bài tập đa dạng để giúp người học nắm vững phần lý thuyết. Hơn nữa, hiện nay hình thức thi trắc nghiệm đang được áp dụng trong các kỳ thi, nên trong sách này chúng tôi biên soạn một số phần bài tập trắc nghiệm để đáp ứng nhu cầu của người học trong tình hình mới.\r\n\r\nHy vọng Giải Thích Ngữ Pháp Tiếng Anh sẽ là một quyển sách thiết thực, đáp ứng yêu cầu học, ôn tập và nâng cao trình độ ngữ pháp cho người học và là quyển sách tham khảo bổ ích dành cho giáo viên.', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `m_products` VALUES (6, 'TK_01', 'Bí Quyết Giải Toán Siêu Tốc Môn Vật Lí Quyển Thượng', 6, 72000.00, NULL, NULL, NULL, 'Bí Quyết Giải Toán Siêu Tốc Môn Vật Lí Quyển Thượng', 'Bộ sách Bí Quyết Giải Toán Siêu Tốc Môn Vật Lí có thể được xem như một cuốn \"Bách khoa toàn thư về Vật Lí\", nơi mà các em có thể tìm thấy cấu trả lời cho mọi câu hỏi có liên quan đến chương trình Vật Lí phổ thông, giúp các em có thể tự ôn tập và nắm vững kiến thức nhanh nhất, hiệu quả nhất, phục vụ cho Kì thi THPT Quốc Gia.\r\n\r\nBộ sách Bí Quyết Giải Toán Siêu Tốc Môn Vật Lí cũng là một tài liệu quý giá cho học sinh cấp ba, sinh viên học vật lý đại cương và các thầy cô giáo.\r\n\r\nNội dung cuốn sách Bí Quyết Giải Toán Siêu Tốc Môn Vật Lí được biên soạn theo từng dạng bài, từng chương như trong chương trình học trên lớp và định hướng ra đề thi mới nhất của Bộ Giáo dục và Đào tạo. Trong mỗi dạng bài đều đưa ra phương pháp giải tổng quát và công thức độc lạ giúp các em có thể giải rất nhanh. Cuối mỗi dạng bài là các ví dụ mẫu được giải chi tiết với nhiều phương pháp giải độc đáo, mới lạ cho một bài toán.', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `m_products` VALUES (12, 'PR001', 'Programing JS', 56, 170000.00, NULL, NULL, NULL, 'Demo', 'Demo', 'ProgramingJS.jpg', 0, 1, NULL, '2018-07-06 10:54:32', '2018-07-06 10:54:32');
INSERT INTO `m_products` VALUES (13, 'PR002', 'Learning React', 57, 175000.00, NULL, NULL, NULL, 'Good', 'Good', 'ReactJS.png', 0, 1, NULL, '2018-07-06 13:51:38', '2018-07-06 13:51:38');
INSERT INTO `m_products` VALUES (14, 'PR003', 'Learning PHP', 58, 150000.00, NULL, NULL, NULL, 'Demo', 'Demo', 'LearningPHP.jpg', 0, 1, NULL, '2018-07-06 15:49:58', '2018-07-06 15:49:58');

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
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_publishers
-- ----------------------------
INSERT INTO `m_publishers` VALUES (1, 'Nhà Xuất Bản Lao Động', '2018-06-15 11:19:22', '2018-06-15 11:19:25');
INSERT INTO `m_publishers` VALUES (2, 'Nhà Xuất Bản Đà Nẵng', '2018-06-15 11:26:47', '2018-06-15 11:26:49');
INSERT INTO `m_publishers` VALUES (3, 'Nhà Xuất Bản Đại Học Quốc Gia Hà Nội', '2018-06-15 11:30:10', '2018-06-15 11:30:13');
INSERT INTO `m_publishers` VALUES (4, 'Nhà xuất bản trẻ', '2018-06-18 10:28:06', '2018-06-18 10:28:09');

-- ----------------------------
-- Table structure for m_release_companys
-- ----------------------------
DROP TABLE IF EXISTS `m_release_companys`;
CREATE TABLE `m_release_companys`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_release_companys
-- ----------------------------
INSERT INTO `m_release_companys` VALUES (1, 'Pandabooks', '2018-06-15 11:19:06', '2018-06-15 11:19:09');
INSERT INTO `m_release_companys` VALUES (2, 'Zenbooks', '2018-06-15 11:26:30', '2018-06-15 11:26:33');
INSERT INTO `m_release_companys` VALUES (3, '	Nhà Sách Hồng Ân', '2018-06-15 11:29:54', '2018-06-15 11:29:58');
INSERT INTO `m_release_companys` VALUES (4, 'Nhà xuất bản trẻ', '2018-06-18 10:27:34', '2018-06-18 10:27:37');

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
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'nphoa', 'nphoa7777@gmail.com', '$2y$10$AWgAAhjc3k65Z2qFMs3ubuApPnyJmbyBBgNkAbrLCjVhHsaVVvqYO', NULL, '2018-06-29 07:06:51', '2018-06-29 07:06:51');

SET FOREIGN_KEY_CHECKS = 1;
