import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { CartProvider } from '../../context/CartContext';


export default function ProductList() {

    const products = [{
        "id": 1,
        "title": "Leather Jacket",
        "img": "https://salt.tikicdn.com/cache/280x280/ts/product/5c/87/54/1c1a4a8bacdc490921ff6b5d6a5cb515.jpg.webp",
        "description": "Classic leather jacket for a timeless look",
        "price": 199.99,
        "category": "Outerwear",
        "details": {
          "material": "Genuine leather",
          "sizes": [
            "S",
            "M",
            "L",
            "XL"
          ],
          "colors": [
            "Black",
            "Brown"
          ]
        }
      },
      {
        "id": 2,
        "title": "Denim Jeans",
        "img": "https://salt.tikicdn.com/cache/750x750/ts/product/32/1c/2d/bbbc9bb8069c52b9e92eda4fcb409a73.jpg.webp",
        "description": "Comfortable and stylish denim jeans",
        "price": 59.99,
        "category": "Pants",
        "details": {
          "material": "100% cotton denim",
          "sizes": [
            "28",
            "30",
            "32",
            "34",
            "36"
          ],
          "colors": [
            "Blue",
            "Black"
          ]
        }
      },
      {
        "id": 3,
        "title": "Cotton T-Shirt",
        "img": "https://salt.tikicdn.com/cache/750x750/ts/product/71/65/27/a87fc56b0f0602e1dd5bd934e53ee03e.jpg.webp",
        "description": "Soft and breathable cotton t-shirt",
        "price": 24.99,
        "category": "Tops",
        "details": {
          "material": "100% organic cotton",
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
          ],
          "colors": [
            "White",
            "Gray",
            "Navy"
          ]
        },
    },
    {
        "id": 4,
        "title": "Portable Health Scanner",
        "img": "https://salt.tikicdn.com/cache/750x750/ts/product/2a/5f/b1/92b2641e011d8f3cfaf8ab4e27cf785f.jpg.webp",
        "description": "Compact device for monitoring vital signs and early disease detection",
        "price": 299.99,
        "category": "Medical Devices",
        "details": {
          "material": "Medical-grade plastic with antimicrobial coating",
          "sizes": [
            "4.5 x 2.5 x 1 inches"
          ],
          "colors": [
            "White",
            "Pale Blue"
          ],
          "features": [
            "Heart rate monitoring",
            "Blood oxygen level measurement",
            "Body temperature scanning",
            "Early disease detection algorithms",
            "Smartphone app integration"
          ]
        }
      },
    {
        "id": 5,
        "title": "Smart Fitness Watch",
        "img": "https://salt.tikicdn.com/cache/750x750/ts/product/2a/5f/b1/92b2641e011d8f3cfaf8ab4e27cf785f.jpg.webp",
        "description": "Advanced fitness tracker with health monitoring features",
        "price": 199.99,
        "category": "Wearables",
        "details": {
          "material": "Aluminum and silicone",
          "sizes": [
            "One size fits all"
          ],
          "colors": [
            "Black",
            "Silver",
            "Rose Gold"
          ],
          "features": [
            "Heart rate monitoring",
            "Sleep tracking",
            "GPS",
            "Water resistant"
          ]
        }
    },
    {
        "id": 6,
        "title": "SmartHome Hub Pro",
        "img": "https://salt.tikicdn.com/cache/750x750/ts/product/11/f4/29/a8a0aea561182668b41c73fe7e56245e.jpg.webp",
        "description": "The ultimate control center for your connected home",
        "price": 249.99,
        "category": "Smart Home",
        "details": {
          "material": "High-grade plastic with aluminum accents",
          "sizes": [
            "4.5 x 4.5 x 1.5 inches"
          ],
          "colors": [
            "Matte Black",
            "Glossy White",
            "Brushed Silver"
          ],
          "features": [
            "Voice control integration",
            "7-inch touchscreen display",
            "Wi-Fi 6 compatibility",
            "Zigbee and Z-Wave support",
            "Energy usage monitoring"
          ]
        }
      },
      {
        "id": 7,
        "title": "AI-Powered Smart Glasses",
        "img": "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/6b/e0/e4/2294b8975cdf45ecfbd577d223b3374b.jpg.webp",
        "description": "Augmented reality glasses with built-in AI assistant",
        "price": 599.99,
        "category": "Wearable Tech",
        "details": {
          "material": "Lightweight titanium frame with polycarbonate lenses",
          "sizes": [
            "One size fits most"
          ],
          "colors": [
            "Matte Black",
            "Brushed Silver",
            "Rose Gold"
          ],
          "features": [
            "Voice-activated AI assistant",
            "Augmented reality display",
            "5G connectivity",
            "8MP camera",
            "Bone conduction audio"
          ]
        }
      },
      {
        "id": 8,
        "title": "Eco-Friendly Smart Jacket",
        "img": "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/6b/e0/e4/2294b8975cdf45ecfbd577d223b3374b.jpg.webp",
        "description": "Sustainable, temperature-regulating jacket with built-in tech",
        "price": 349.99,
        "category": "Fashion Tech",
        "details": {
          "material": "Recycled polyester with graphene lining",
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
          ],
          "colors": [
            "Forest Green",
            "Ocean Blue",
            "Charcoal Gray"
          ],
          "features": [
            "Temperature regulation",
            "Wireless phone charging pocket",
            "Bluetooth connectivity",
            "LED safety lights",
            "Water-resistant"
          ]
        }
      },
      {
        "id": 9,
        "title": "Portable Health Scanner",
        "img": "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/6b/e0/e4/2294b8975cdf45ecfbd577d223b3374b.jpg.webp",
        "description": "Compact device for monitoring vital signs and early disease detection",
        "price": 299.99,
        "category": "Medical Devices",
        "details": {
          "material": "Medical-grade plastic with antimicrobial coating",
          "sizes": [
            "4.5 x 2.5 x 1 inches"
          ],
          "colors": [
            "White",
            "Pale Blue"
          ],
          "features": [
            "Heart rate monitoring",
            "Blood oxygen level measurement",
            "Body temperature scanning",
            "Early disease detection algorithms",
            "Smartphone app integration"
          ]
        }
      },
    {
        "id": 10,
        "title": "Cotton T-Shirt",
        "img": "https://salt.tikicdn.com/cache/750x750/ts/product/71/65/27/a87fc56b0f0602e1dd5bd934e53ee03e.jpg.webp",
        "description": "Soft and breathable cotton t-shirt",
        "price": 24.99,
        "category": "Tops",
        "details": {
          "material": "100% organic cotton",
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
          ],
          "colors": [
            "White",
            "Gray",
            "Navy"
          ]
        },
    },
    {
        "id": 11,
        "title": "Cotton T-Shirt",
        "img": "https://salt.tikicdn.com/cache/750x750/ts/product/71/65/27/a87fc56b0f0602e1dd5bd934e53ee03e.jpg.webp",
        "description": "Soft and breathable cotton t-shirt",
        "price": 24.99,
        "category": "Tops",
        "details": {
          "material": "100% organic cotton",
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
          ],
          "colors": [
            "White",
            "Gray",
            "Navy"
          ]
        },
    }
    ]

    return (
        <CartProvider>
        <div className="product-list row">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </CartProvider>
    )
}
