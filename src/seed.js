require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: 'Gizmo Phone X',
    slug: 'gizmo-phone-x',
    price: 799,
    images: ['/images/phone1.jpg'],
    variants: [{ color: 'Black' }, { color: 'White' }],
    description: 'High‑end smartphone with sleek design and powerful performance.',
  },
  {
    name: 'Gizmo Earbuds Pro',
    slug: 'gizmo-earbuds-pro',
    price: 199,
    images: ['/images/earbuds.jpg'],
    variants: [{ color: 'Black' }, { color: 'White' }],
    description: 'Wireless earbuds with noise cancellation and long battery life.',
  },
  // … thêm tổng cộng 8 đối tượng giống trên
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Product.deleteMany({});
  const inserted = await Product.insertMany(products);
  console.log(`Seeded ${inserted.length} products`);
  mongoose.disconnect();
}

seed();
