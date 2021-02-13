------------------ USER Data ------------------

-- Dummy data for User Table
-- Default password: 123456
INSERT INTO user (user_id, password, username, role) VALUES (100001,'$2a$10$B4FvjVc2oXqDTFdGGZjT5urzHS6TSdzrQ7p/vFi1rUuZgjXR4.m5K', 'gagan', 'User');
INSERT INTO user (user_id, password, username, role) VALUES (100002,'$2a$10$B4FvjVc2oXqDTFdGGZjT5urzHS6TSdzrQ7p/vFi1rUuZgjXR4.m5K', 'admin', 'Admin');
INSERT INTO user (user_id, password, username, role) VALUES (100003,'$2a$10$B4FvjVc2oXqDTFdGGZjT5urzHS6TSdzrQ7p/vFi1rUuZgjXR4.m5K', 'rhoda', 'User');
INSERT INTO user (user_id, password, username, role) VALUES (100004,'$2a$10$B4FvjVc2oXqDTFdGGZjT5urzHS6TSdzrQ7p/vFi1rUuZgjXR4.m5K', 'olive', 'User');
INSERT INTO user (user_id, password, username, role) VALUES (100005,'$2a$10$B4FvjVc2oXqDTFdGGZjT5urzHS6TSdzrQ7p/vFi1rUuZgjXR4.m5K', 'aida', 'User');
INSERT INTO user (user_id, password, username, role) VALUES (100006,'$2a$10$B4FvjVc2oXqDTFdGGZjT5urzHS6TSdzrQ7p/vFi1rUuZgjXR4.m5K', 'john', 'User');
-- MYSQL sequence
-- UPDATE user_id_sequence SET next_val = 100021;
-- H2 sequence
ALTER sequence user_id_sequence restart with 100007;

-- Dummy data for Address
INSERT INTO address (address_id, area, city, pincode, state) VALUES (100001,'Union Street','Mumbai','400001','Maharashtra');
INSERT INTO address (address_id, area, city, pincode, state) VALUES (100002,'Stonepot Road','Pune','410038','Maharashtra');
INSERT INTO address (address_id, area, city, pincode, state) VALUES (100003,'Adams Drive','Banglore','530068','Karnataka');
INSERT INTO address (address_id, area, city, pincode, state) VALUES (100004,'Illinois Avenue','Mumbai','400072','Maharashtra');
INSERT INTO address (address_id, area, city, pincode, state) VALUES (100005,'Hog Camp Road','Mumbai','400002','Maharashtra');
INSERT INTO address (address_id, area, city, pincode, state) VALUES (100006,'West Fork Drive','Pune','411001','Maharashtra');

-- Dummy data for User detail
INSERT INTO user_details (user_details_id, first_name, last_name, email_id, phone_no, security_question, security_answer, address_id) VALUES (100001, 'Gagandeep', 'Singh', 'singh.gagandeep3911@gmail.com', '8419969059', 'What is the default answer?', 'answer', 100001);
INSERT INTO user_details (user_details_id, first_name, last_name, email_id, phone_no, security_question, security_answer, address_id) VALUES (100002, 'Stefani', 'Germanotta', 'stefani@mail.com', '9876543210', 'What is the default answer?', 'answer', 100002);
INSERT INTO user_details (user_details_id, first_name, last_name, email_id, phone_no, security_question, security_answer, address_id) VALUES (100003, 'Rhoda', 'Report', 'rhoda@mail.com', '8877669059', 'What is the default answer?', 'answer', 100003);
INSERT INTO user_details (user_details_id, first_name, last_name, email_id, phone_no, security_question, security_answer, address_id) VALUES (100004, 'Olive', 'Yew', 'olive@mail.com', '3443312345', 'What is the default answer?', 'answer', 100004);
INSERT INTO user_details (user_details_id, first_name, last_name, email_id, phone_no, security_question, security_answer, address_id) VALUES (100005, 'Aida', 'Bugg', 'aida@mail.com', '7576788679', 'What is the default answer?', 'answer', 100005);
INSERT INTO user_details (user_details_id, first_name, last_name, email_id, phone_no, security_question, security_answer, address_id) VALUES (100006, 'John', 'Doe', 'john@mail.com', '9966553322', 'What is the default answer?', 'answer', 100006);

ALTER sequence address_id_sequence restart with 100007;

INSERT INTO product_category(category_id, category_name, category_description, category_image_url) VALUES (100001, 'Stationery', 'Commercially manufactured writing materials', 'https://previews.123rf.com/images/stuartphoto/stuartphoto1705/stuartphoto170500652/77522615-stationery-store-meaning-office-supplies-shops-3d-illustration.jpg');

INSERT INTO product_category(category_id, category_name, category_description, category_image_url) VALUES (100002, 'Toys', 'an object for a child to play with', 'https://taiken.co/uploads/2019/05/Kawaii_Culture_001-1200x1047.jpg');

INSERT INTO product_category(category_id, category_name, category_description, category_image_url) VALUES (100003, 'Apparel', 'Clothes for Men, Women and Child', 'https://static.fibre2fashion.com/Newsresource/images/251/apparel-11_262804.jpg');

INSERT INTO product_category(category_id, category_name, category_description, category_image_url) VALUES (100004, 'Chocolates & Cookies', 'Shop online our delicious selection of chocolate and cookie gifts', 'https://previews.123rf.com/images/scorpionka/scorpionka1604/scorpionka160400062/57151971-many-diffrent-chocolates-and-cookies.jpg');

INSERT INTO product_category(category_id, category_name, category_description, category_image_url) VALUES (100005, 'Flowers', 'Buy/Send Flowers to your loved ones from the best Florist', 'https://miro.medium.com/max/3840/1*m5j79jCBbX0GSbTp8VbXeg.jpeg');

INSERT INTO product_category(category_id, category_name, category_description, category_image_url) VALUES (100006, 'Corporate Gifts', 'Order The Best Corporate Gifts from Gift Shop', 'https://pegasusevents.in/wp-content/uploads/2019/06/best-corporate-gifting-solutions-in-delhi-4.jpg');

INSERT INTO product_category(category_id, category_name, category_description, category_image_url) VALUES (100007, 'Watches', 'Choose from new collection of Watches Online in Gift Store', 'https://media.gq.com/photos/5d93b28c3304070008faa5a0/16:9/pass/watches.jpg');

INSERT INTO product_category(category_id, category_name, category_description, category_image_url) VALUES (100008, 'Cakes', 'Send Cake online from best cake shop in India', 'https://www.biggerbolderbaking.com/wp-content/uploads/2016/02/BBB113-Vanilla-Celebration-Cake-FINAL.jpg');

ALTER sequence category_id_sequence restart with 100009;

INSERT INTO cart VALUES (100001);
INSERT INTO cart VALUES (100002);
INSERT INTO cart VALUES (100003);
INSERT INTO cart VALUES (100004);
INSERT INTO cart VALUES (100005);
INSERT INTO cart VALUES (100006);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100001, 'Teddy Bear', 1200, 99, 'A stuffed toy is a toy doll with an outer fabric sewn from a textile and stuffed with flexible material', 'https://www.wellandgood.com/wp-content/uploads/2019/01/Stocksy-Teddy-Bear-Marta-Locklear.jpg', 'ENABLED', 100002, 20);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100002, 'Color Pencils', 200, 99, 'Colored drawing pencil for kids', 'https://previews.123rf.com/images/kenishirotie/kenishirotie1801/kenishirotie180100009/92727823-spectrum-color-pencils-set-arranged-in-s-curve-isolated-on-white-background.jpg', 'ENABLED', 100001, 20);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100003, 'Color Pencils', 300, 99, 'Coloring book for kids', 'https://images-na.ssl-images-amazon.com/images/I/61+7VR7+dsL._SX360_BO1,204,203,200_.jpg', 'ENABLED', 100001, 20);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100004, 'Coloring Book', 200, 99, 'Colored drawing', 'https://cdn.shopify.com/s/files/1/2486/2582/products/118-202-Color-In-Book-Enchanting-Unicorns-B1_88e62295-d705-41d7-ad68-8a9b8c4c7ba7_800x.png', 'ENABLED', 100001, 30);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100005, 'Action Figure', 200, 299, 'Toys for kids', 'https://www.staractionfigures.co.uk/user/products/large/yfghngfjhtrju.jpg', 'ENABLED', 100002, 30);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100006, 'Action Figure - Power Ranger', 200, 399, 'Toys can be given as ifts to children on birthday', 'https://www.meijer.com/content/dam/meijer/product/0063/05/0980/90/0063050980908_0_A1C1_1200.png', 'DISABLED', 100002, 30);


INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100007, 'Kids - Gift Clothing', 200, 499, 'Gift Clothing for Kids', 'https://www.landsend.com/article/top-clothing-gifts/images/feat-m.jpg', 'ENABLED', 100003, 30);


INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100008, 'Girls Clothes', 200, 699, 'Apparels for Kids', 'https://www.dhresource.com/0x0/f2/albu/g7/M00/A9/FD/rBVaSls0oYiAGexEAADcL8c8LrA823.jpg', 'ENABLED', 100003, 30);


INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100009, 'Apparel', 200, 899, 'Clothing wear', 'https://blog.bonfire.com/wp-content/uploads/2018/08/colorcombinations1-1.jpeg', 'ENABLED', 100003, 30);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100010, 'Teens - Gify Clothing', 200, 399, 'Apparels that can be given as gifts to your loved onces', 'https://assets.teenvogue.com/photos/55837480c3f29bdf1f2bfe81/master/w_700,h_467,c_limit/fashion-gift-guides-2014-12-clothes-gifts-00.jpg', 'ENABLED', 100003, 30);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100011, 'Gift Clothing', 200, 399, 'Apparels that can be given as gifts to your loved onces', 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_784,q_75,w_1050/https://assets.simpleviewinc.com/simpleview/image/upload/crm/knoxville/virginia-jane0-b099cffc5056a34_b099d18d-5056-a348-3aabf0e49069ae2f.jpg', 'DISABLED', 100003, 30);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100012, 'Vanilla Cake', 900, 5, 'Tasty Vanilla Cake', 'https://www.thespruceeats.com/thmb/lPBHmMNr71B6No0KzwCiczhMHSg=/2048x1152/smart/filters:no_upscale()/fluffy-homemade-vanilla-cake-995187_18_preview-5afddc4c8023b900369a9cbd.jpeg', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100013, 'Strawberry Cake', 900, 4, 'Cake created from pure farm harvested strawberries', 'https://i.ytimg.com/vi/6Zx7dm0Y1sk/maxresdefault.jpg', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100014, 'Butter Cream Cake', 1200, 10, 'Vanialla and Butter Cream', 'https://www.bakefromscratch.com/wp-content/uploads/2020/02/Heilala-Cake-Web-696x557.jpg', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100015, 'Vanilla and Chocolate', 1800, 5, 'Chocolate cake with Vanilla Essence', 'https://i1.wp.com/sugarspiceslife.com/wp-content/uploads/2018/06/Vanilla-Cake-with-Chocolate-Buttercream.jpg?resize=1024%2C683&ssl=1', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100016, 'White Strawberry Cake', 2200, 5, 'Large White strawberry Cake', 'https://naturallysweetkitchen.com/wp-content/uploads/2018/06/white-chocolate-raspberry-ripple-cake-1-min.jpg', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100017, 'Chocolate Cake', 1200, 5, 'Famaliarity of Kitkats and Gems', 'https://1.bp.blogspot.com/-zZb0fDgZ_wI/XQh1UczYp0I/AAAAAAABE7c/qpGYi0dOUps4TmMSOdVKD89ggicIyZ2iACKgBGAs/s1600/DSC_0058%2B%25282%2529.JPG', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100018, 'Black Forest', 900, 5, 'Taste the Simplicity', 'https://i2.wp.com/www.dessertsrequired.com/wp-content/uploads/2013/02/IMG_0572.jpg', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100019, 'Vanilla', 700, 5, 'Vanilla with Chocolate Syrub', 'https://farm8.staticflickr.com/7147/6664976631_42336e70f2_o.jpg', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100020, 'Sponge Cake', 800, 5, 'Chocolate Sponge Cake', 'https://www.twosisterscrafting.com/wp-content/uploads/2016/03/the-best-chocolate-buttercream-frosting-pinnable5-720x405.jpg', 'ENABLED', 100008, 50);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100021, 'Mens Watch', 1200, 5, 'Classic Mens Watch', 'https://www.swissarma.ch/wp-content/uploads/2016/11/A-Lange-Sohne-Richard-Lange-Perpetual-Calendar-Terraluna-180.026-A1-3.jpg', 'ENABLED', 100007, 10);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100022, 'Pink Watch', 1200, 5, 'Pink Watch', 'https://staticimg.titan.co.in/Sonata/Catalog/8976SL14_1.jpg', 'ENABLED', 100007, 10);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100023, 'Kids Watch', 800, 5, 'Stylish Kids watches', 'https://www.scarymommy.com/wp-content/uploads/2020/06/Kids_5_watch.jpg', 'ENABLED', 100007, 10);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100024, 'Gold Watch', 3000, 5, 'Stylish Gold watch', 'https://timeandtidewatches.com/wp-content/uploads/2018/09/Tudor-BB-SG-champagne-5.jpg', 'DISABLED', 100007, 10);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100025, 'Wall Clock', 5000, 5, 'Colorful Peacock wall clock', 'https://images-na.ssl-images-amazon.com/images/I/81c6OsyJeIL._SL1500_.jpg', 'ENABLED', 100007, 10);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100026, 'Wedding Flower', 9000, 5, 'Traditional Wedding Bouquet', 'https://i.ytimg.com/vi/I6atZta4U_o/maxresdefault.jpg', 'ENABLED', 100005, 40);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100027, 'Wedding Bouquet', 5000, 5, 'Colorful Wedding Bouquet', 'https://previews.123rf.com/images/kapu/kapu1405/kapu140500111/28171147-wedding-flower-bouquet.jpg', 'ENABLED', 100005, 40);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100028, 'Small Bouquet', 5000, 0, 'Light shade wedding Bouquet', 'https://cdn.shopify.com/s/files/1/0616/8037/files/the-best-wedding-flowers-by-wellington-florists-in-New-Zealand_480x480.jpg?v=1552188217', 'ENABLED', 100005, 40);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100029, 'Rose Bouquet', 5000, 5, 'Rose basket Shaped Boquet', 'https://previews.123rf.com/images/gorlovkv/gorlovkv1802/gorlovkv180200067/95969210-beautiful-bouquet-of-red-roses-iin-form-of-heart-flowers-in-wicker-basket-flower-market-or-shop-flor.jpg', 'ENABLED', 100005, 40);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100030, 'Chocolates & Flowers', 5000, 5, 'Best Valentines Gift for your loved one', 'https://www.wallpaperup.com/uploads/wallpapers/2014/03/08/291225/d49965f94a16271a8ce02b8ad1d88325-700.jpg', 'ENABLED', 100005, 40);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100031, 'Cookies', 5000, 5, 'Tasty Home baked Cookies', 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg', 'ENABLED', 100004, 40);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100032, 'Festive Chocolates', 5000, 5, 'Best Valentines Gift for your loved one', 'https://rewardbloggers.com/assets/upload/1568360443.jpg', 'ENABLED', 100004, 40);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100033, 'Wallet', 1000, 20, 'Pen and Wallet with a box', 'https://static.connect2india.com/c2icd/product_resources/images/corporate-gifts-set.jpg', 'ENABLED', 100006, 60);

INSERT INTO product_info (product_id, product_name, product_price, product_stock, product_description, product_icon, product_status, product_category, discount_percent) VALUES (100034, 'Diary', 2000, 20, 'Note taking Diary with a gift box', 'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/nn2u4pFpiF.jpg', 'ENABLED', 100006, 60);

-- TODO Add 25 more items

ALTER sequence product_id_sequence restart with 100035;

-- ORDER Table
INSERT INTO ORDER_MAIN (order_id, buyer_address, buyer_city, buyer_email, buyer_pincode, buyer_state, buyer_name, buyer_phone, order_amount, order_status, payment_type, payment_id, user_id, discounted_amount, delivery_charge, final_price) VALUES (100001, 'Powai, near D-Mart', 'Mumbai', 'gagandeep@mail.com', '400072', 'Maharashtra', 'Gagandeep Singh', '8419969059', 4000, 'DISPATCHED', 'ONLINE', '100001', 100001, 840, 120, 960);
-- TODO Add 4 more items

ALTER sequence order_id_sequence restart with 100002;

-- To be purchased product

INSERT INTO product_in_order (product_in_order_id, cart_id, order_id, product_id, product_name, product_description, product_icon, product_category, product_price, product_stock, discount_percent) VALUES (100001, 100001, null, 100001, 'Teddy Bear', 'A stuffed toy is a toy doll with an outer fabric sewn from a textile and stuffed with flexible material', 'https://www.wellandgood.com/wp-content/uploads/2019/01/Stocksy-Teddy-Bear-Marta-Locklear.jpg', 'Toys', 1200, 1, 20);

INSERT INTO product_in_order (product_in_order_id, cart_id, order_id, product_id, product_name, product_description, product_icon, product_category, product_price, product_stock, discount_percent) VALUES (100002, null, 100001, 100001, 'Large Teddy Bear', 'A stuffed toy is a toy doll with an outer fabric sewn from a textile and stuffed with flexible material', 'https://www.wellandgood.com/wp-content/uploads/2019/01/Stocksy-Teddy-Bear-Marta-Locklear.jpg', 'Toys', 1200, 1, 20);

-- TODO Add 9 more items

ALTER sequence product_order_id_sequence restart with 100010;

-- Delivery
INSERT INTO delivery_history (delivery_id, order_id, updated_on, order_status) VALUES (100001, 100001, 1611640325164, 'NEW');

INSERT INTO delivery_history (delivery_id, order_id, updated_on, order_status) VALUES (100002, 100001, 1611640325164, 'DISPATCHED');

ALTER sequence delivery_id_sequence restart with 100003;
