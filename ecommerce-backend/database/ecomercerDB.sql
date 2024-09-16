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

-- Create the cart table
CREATE TABLE cart (
    id INT PRIMARY KEY,
    product_id INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES product_list(id)
);
