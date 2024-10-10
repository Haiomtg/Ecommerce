-- Create the database
CREATE DATABASE ecommerceDB;

-- Use the database
USE ecommerceDB;

-- Create the product_list table
CREATE TABLE product_list (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    img VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    category VARCHAR(50),
    details JSON
);

-- Insert the data
INSERT INTO product_list (id, title, img, description, price, category, details)
VALUES
(1, 'Leather Jacket', 'https://salt.tikicdn.com/cache/280x280/ts/product/5c/87/54/1c1a4a8bacdc490921ff6b5d6a5cb515.jpg.webp', 'Classic leather jacket for a timeless look', 199.99, 'Outerwear', JSON_OBJECT('material', 'Genuine leather', 'sizes', JSON_ARRAY('S', 'M', 'L', 'XL'), 'colors', JSON_ARRAY('Black', 'Brown'))),
(2, 'Denim Jeans', 'https://salt.tikicdn.com/cache/750x750/ts/product/32/1c/2d/bbbc9bb8069c52b9e92eda4fcb409a73.jpg.webp', 'Comfortable and stylish denim jeans', 59.99, 'Pants', JSON_OBJECT('material', '100% cotton denim', 'sizes', JSON_ARRAY('28', '30', '32', '34', '36'), 'colors', JSON_ARRAY('Blue', 'Black'))),
(3, 'Cotton T-Shirt', 'https://salt.tikicdn.com/cache/750x750/ts/product/71/65/27/a87fc56b0f0602e1dd5bd934e53ee03e.jpg.webp', 'Soft and breathable cotton t-shirt', 24.99, 'Tops', JSON_OBJECT('material', '100% organic cotton', 'sizes', JSON_ARRAY('XS', 'S', 'M', 'L', 'XL'), 'colors', JSON_ARRAY('White', 'Gray', 'Navy'))),
(4, 'Portable Health Scanner', 'https://salt.tikicdn.com/cache/750x750/ts/product/2a/5f/b1/92b2641e011d8f3cfaf8ab4e27cf785f.jpg.webp', 'Compact device for monitoring vital signs and early disease detection', 299.99, 'Medical Devices', JSON_OBJECT('material', 'Medical-grade plastic with antimicrobial coating', 'sizes', JSON_ARRAY('4.5 x 2.5 x 1 inches'), 'colors', JSON_ARRAY('White', 'Pale Blue'), 'features', JSON_ARRAY('Heart rate monitoring', 'Blood oxygen level measurement', 'Body temperature scanning', 'Early disease detection algorithms', 'Smartphone app integration'))),
(5, 'Smart Fitness Watch', 'https://salt.tikicdn.com/cache/750x750/ts/product/2a/5f/b1/92b2641e011d8f3cfaf8ab4e27cf785f.jpg.webp', 'Advanced fitness tracker with health monitoring features', 199.99, 'Wearables', JSON_OBJECT('material', 'Aluminum and silicone', 'sizes', JSON_ARRAY('One size fits all'), 'colors', JSON_ARRAY('Black', 'Silver', 'Rose Gold'), 'features', JSON_ARRAY('Heart rate monitoring', 'Sleep tracking', 'GPS', 'Water resistant'))),
(6, 'SmartHome Hub Pro', 'https://salt.tikicdn.com/cache/750x750/ts/product/11/f4/29/a8a0aea561182668b41c73fe7e56245e.jpg.webp', 'The ultimate control center for your connected home', 249.99, 'Smart Home', JSON_OBJECT('material', 'High-grade plastic with aluminum accents', 'sizes', JSON_ARRAY('4.5 x 4.5 x 1.5 inches'), 'colors', JSON_ARRAY('Matte Black', 'Glossy White', 'Brushed Silver'), 'features', JSON_ARRAY('Voice control integration', '7-inch touchscreen display', 'Wi-Fi 6 compatibility', 'Zigbee and Z-Wave support', 'Energy usage monitoring'))),
(7, 'AI-Powered Smart Glasses', 'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/6b/e0/e4/2294b8975cdf45ecfbd577d223b3374b.jpg.webp', 'Augmented reality glasses with built-in AI assistant', 599.99, 'Wearable Tech', JSON_OBJECT('material', 'Lightweight titanium frame with polycarbonate lenses', 'sizes', JSON_ARRAY('One size fits most'), 'colors', JSON_ARRAY('Matte Black', 'Brushed Silver', 'Rose Gold'), 'features', JSON_ARRAY('Voice-activated AI assistant', 'Augmented reality display', '5G connectivity', '8MP camera', 'Bone conduction audio'))),
(8, 'Eco-Friendly Smart Jacket', 'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/6b/e0/e4/2294b8975cdf45ecfbd577d223b3374b.jpg.webp', 'Sustainable, temperature-regulating jacket with built-in tech', 349.99, 'Fashion Tech', JSON_OBJECT('material', 'Recycled polyester with graphene lining', 'sizes', JSON_ARRAY('XS', 'S', 'M', 'L', 'XL'), 'colors', JSON_ARRAY('Forest Green', 'Ocean Blue', 'Charcoal Gray'), 'features', JSON_ARRAY('Temperature regulation', 'Wireless phone charging pocket', 'Bluetooth connectivity', 'LED safety lights', 'Water-resistant'))),
(9, 'Portable Health Scanner', 'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/6b/e0/e4/2294b8975cdf45ecfbd577d223b3374b.jpg.webp', 'Compact device for monitoring vital signs and early disease detection', 299.99, 'Medical Devices', JSON_OBJECT('material', 'Medical-grade plastic with antimicrobial coating', 'sizes', JSON_ARRAY('4.5 x 2.5 x 1 inches'), 'colors', JSON_ARRAY('White', 'Pale Blue'), 'features', JSON_ARRAY('Heart rate monitoring', 'Blood oxygen level measurement', 'Body temperature scanning', 'Early disease detection algorithms', 'Smartphone app integration'))),
(10, 'Cotton T-Shirt', 'https://salt.tikicdn.com/cache/750x750/ts/product/71/65/27/a87fc56b0f0602e1dd5bd934e53ee03e.jpg.webp', 'Soft and breathable cotton t-shirt', 24.99, 'Tops', JSON_OBJECT('material', '100% organic cotton', 'sizes', JSON_ARRAY('XS', 'S', 'M', 'L', 'XL'), 'colors', JSON_ARRAY('White', 'Gray', 'Navy'))),
(11, 'Cotton T-Shirt', 'https://salt.tikicdn.com/cache/750x750/ts/product/71/65/27/a87fc56b0f0602e1dd5bd934e53ee03e.jpg.webp', 'Soft and breathable cotton t-shirt', 24.99, 'Tops', JSON_OBJECT('material', '100% organic cotton', 'sizes', JSON_ARRAY('XS', 'S', 'M', 'L', 'XL'), 'colors', JSON_ARRAY('White', 'Gray', 'Navy')));

-- Step 1: Drop the foreign key constraint
ALTER TABLE cart DROP FOREIGN KEY cart_ibfk_1;

-- Step 2: Modify the id column in product_list
ALTER TABLE product_list MODIFY id INT AUTO_INCREMENT;

-- Step 3: Re-add the foreign key constraint
ALTER TABLE cart ADD CONSTRAINT cart_ibfk_1 FOREIGN KEY (product_id) REFERENCES product_list(id);

-- ... existing code ...

-- Step 1: Drop the foreign key constraint if it exists
ALTER TABLE cart DROP FOREIGN KEY cart_ibfk_1; 
-- Use IF EXISTS to avoid error if it doesn't exist

-- Step 2: Modify the id column in product_list
ALTER TABLE product_list MODIFY id INT AUTO_INCREMENT;

-- Step 3: Re-add the foreign key constraint with a new name
ALTER TABLE cart ADD CONSTRAINT cart_ibfk_2 FOREIGN KEY (product_id) REFERENCES product_list(id); -- Changed name to cart_ibfk_2

-- Insert a new product into the product_list table
INSERT INTO product_list (title, img, description, price, category, details)
VALUES 
('Wireless Earbuds', 'https://example.com/image.jpg', 'High-quality wireless earbuds with noise cancellation', 149.99, 'Audio', JSON_OBJECT('battery_life', '20 hours', 'colors', JSON_ARRAY('Black', 'White')));

SELECT * FROM product_list WHERE id = 1;

-- Create the cart table
CREATE TABLE cart (
    id INT PRIMARY KEY,
    product_id INT,
    quantity INT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    FOREIGN KEY (product_id) REFERENCES product_list(id)
);

ALTER TABLE cart MODIFY id INT AUTO_INCREMENT;


-- Add a specific product from product_list to cart
INSERT INTO cart (product_id, quantity, name, price) 
SELECT id, 1, title, price 
FROM product_list 
WHERE id = 5; -- Change '1' to the desired product ID

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50),
    Email VARCHAR(100),
    CreatedAt TIMESTAMP DEFAULT NOW()
);


DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50),
    Email VARCHAR(100),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$

CREATE PROCEDURE InsertDummyData()
BEGIN
    DECLARE Counter INT DEFAULT 1;

    WHILE Counter <= 100 DO
        INSERT INTO Users (Username, Email)
        VALUES (
            CONCAT('User', Counter), 
            CONCAT('user', Counter, '@example.com')
        );
        SET Counter = Counter + 1;
    END WHILE;
END $$

DELIMITER ;
CALL InsertDummyData();
DELETE FROM Users
WHERE Id BETWEEN 11 AND 100;

ALTER TABLE Users
ADD Address VARCHAR(255);

UPDATE Users
SET Address = CASE Id
    WHEN 1 THEN '123 Main St, Springfield'
    WHEN 2 THEN '456 Elm St, Springfield'
    WHEN 3 THEN '789 Oak St, Springfield'
    WHEN 4 THEN '101 Pine St, Springfield'
    WHEN 5 THEN '202 Maple St, Springfield'
    WHEN 6 THEN '303 Birch St, Springfield'
    WHEN 7 THEN '404 Cedar St, Springfield'
    WHEN 8 THEN '505 Walnut St, Springfield'
    WHEN 9 THEN '606 Cherry St, Springfield'
    WHEN 10 THEN '707 Ash St, Springfield'
    END
WHERE Id BETWEEN 1 AND 10;

ALTER TABLE Users
ADD Password VARCHAR(255);

UPDATE Users
SET Password = CASE Id
    WHEN 1 THEN 'Password1!'
    WHEN 2 THEN 'Password2!'
    WHEN 3 THEN 'Password3!'
    WHEN 4 THEN 'Password4!'
    WHEN 5 THEN 'Password5!'
    WHEN 6 THEN 'Password6!'
    WHEN 7 THEN 'Password7!'
    WHEN 8 THEN 'Password8!'
    WHEN 9 THEN 'Password9!'
    WHEN 10 THEN 'Password10!'
    END
WHERE Id BETWEEN 1 AND 10;