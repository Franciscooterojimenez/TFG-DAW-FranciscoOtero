const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

const products = [
  {
    name: 'iPhone 14',
    price: 999,
    oldPrice: 1099,
    category: 'Móviles',
    rating: 4.6,
    image: 'uploads/iphone14.jpg'
  },
  {
    name: 'iPad Air',
    price: 699,
    oldPrice: 799,
    category: 'Tablets',
    rating: 4.4,
    image: 'uploads/ipad-air.jpg'
  },
  {
    name: 'Auriculares Sony WH-1000XM5',
    price: 199,
    oldPrice: 299,
    category: 'Auriculares',
    rating: 4.8,
    image: 'uploads/sony-wh1000xm5.jpg'
  },
  {
    name: 'Samsung Smart TV 4K 50"',
    price: 499,
    oldPrice: 599,
    category: 'Televisores',
    rating: 4.3,
    image: 'uploads/samsung-tv.jpg'
  },
  {
    name: 'Portátil ASUS TUF Gaming A15',
    price: 899,
    oldPrice: 1099,
    category: 'Portátiles',
    rating: 4.7,
    image: 'uploads/asus-tuf.jpg'
  },
  {
    name: 'iPhone 14 Pro',
    price: 1199,
    oldPrice: 1299,
    category: 'Móviles',
    rating: 4.8,
    image: 'uploads/iphone14pro.jpg'
  },
  {
    name: 'Samsung Galaxy S23',
    price: 999,
    oldPrice: 1099,
    category: 'Móviles',
    rating: 4.6,
    image: 'uploads/galaxy-s23.jpg'
  },
  {
    name: 'iPad Pro 11"',
    price: 899,
    oldPrice: 999,
    category: 'Tablets',
    rating: 4.7,
    image: 'uploads/ipad-pro.jpg'
  },
  {
    name: 'Lenovo Tab M10',
    price: 199,
    oldPrice: 249,
    category: 'Tablets',
    rating: 4.1,
    image: 'uploads/lenovo-tab.jpg'
  },
  {
    name: 'Sony WH-1000XM5',
    price: 299,
    oldPrice: 349,
    category: 'Auriculares',
    rating: 4.9,
    image: 'uploads/sony-xm5.jpg'
  },
  {
    name: 'Apple AirPods Pro',
    price: 249,
    oldPrice: 279,
    category: 'Auriculares',
    rating: 4.7,
    image: 'uploads/airpods-pro.jpg'
  },
  {
    name: 'Samsung Smart TV 55"',
    price: 649,
    oldPrice: 749,
    category: 'Televisores',
    rating: 4.5,
    image: 'uploads/samsung-tv55.jpg'
  },
  {
    name: 'LG OLED C2 48"',
    price: 1099,
    oldPrice: 1299,
    category: 'Televisores',
    rating: 4.8,
    image: 'uploads/lg-oled.jpg'
  },
  {
    name: 'ASUS ROG Zephyrus G14',
    price: 1599,
    oldPrice: 1699,
    category: 'Portátiles',
    rating: 4.9,
    image: 'uploads/rog-zephyrus.jpg'
  },
  {
    name: 'HP Pavilion 15',
    price: 749,
    oldPrice: 849,
    category: 'Portátiles',
    rating: 4.4,
    image: 'uploads/hp-pavilion.jpg'
  },
  {
    name: 'PlayStation 5',
    price: 549,
    oldPrice: 599,
    category: 'Consolas',
    rating: 4.9,
    image: 'uploads/ps5.jpg'
  },
  {
    name: 'Xbox Series X',
    price: 529,
    oldPrice: 579,
    category: 'Consolas',
    rating: 4.8,
    image: 'uploads/xbox-seriesx.jpg'
  },
  {
    name: 'Apple Watch Series 9',
    price: 429,
    oldPrice: 479,
    category: 'Wearables',
    rating: 4.5,
    image: 'uploads/apple-watch.jpg'
  },
  {
    name: 'Fitbit Charge 5',
    price: 159,
    oldPrice: 199,
    category: 'Wearables',
    rating: 4.3,
    image: 'uploads/fitbit-charge.jpg'
  },
  {
    name: 'Xiaomi Electric Scooter 3',
    price: 449,
    oldPrice: 499,
    category: 'Movilidad',
    rating: 4.6,
    image: 'uploads/scooter.jpg'
  }

];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Productos insertados');
    mongoose.disconnect();
  });