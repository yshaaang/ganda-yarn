const { PrismaClient, UserType } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  const product = await createProducts(products);
  const product_attribute = await createProductAttributes(product_attributes);
  const admin = await createAdmins(admins);
}

const products = [
  {
    name: 'Tulip Flower',
    description: 'The Ganda Yarn\'s Crochet Tulip Keychain is a functional and stylish accessory with a personalized touch. Made from high-quality cotton yarns, it comes in a range of colors and can be customized with a name on stem. The compact size, lightweight design, and sturdy clasp make it easy to carry, while the charming tulip design adds personality to your everyday accessories. This keychain is a great gift or a stylish accessory for anyone who values both style and practicality.',
    preview_image_link: 'https://i.imgur.com/9Acdh8r.jpeg',
    quantity_sold: 5,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Phone Holder',
    description: 'The Ganda Yarn\'s Crochet Phone Holder is a functional and stylish accessory designed to securely hold your phone. The adjustable strap can be customized to your preferred length (long or short)  and can be worn around your neck or across your body. Available in a range of colors, it\'s a great accessory for everyday use and can keep your phone safe and within reach. This durable and attractive phone holder is a must-have for anyone looking for a practical and stylish solution for keeping their phone safe and accessible.',
    preview_image_link: 'https://i.imgur.com/yheRk29.jpeg',
    quantity_sold: 8,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Wallet',
    description: 'The Ganda Yarn\'s Crochet Wallet has a personalized touch, made with high-quality cotton yarns for durability and longevity. The wallet can be personalized with a range of color options to match the recipient\'s personal style which is perfect gift to someone special.',
    preview_image_link: 'https://i.imgur.com/jmQS63n.jpeg',
    quantity_sold: 5,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Bucket Hat',
    description: 'The Ganda Yarn\'s Crochet Bucket Hat is a functional and stylish accessory that provides protection from the sun. Made from high-quality cotton yarns, it features a wide brim for ample shade and an adjustable drawstring for a secure fit. Available in a range of color and animal patterns, it\'s a great accessory for everyday use and a must-have for anyone who wants to protect themselves from the sun in style.',
    preview_image_link: 'https://i.imgur.com/OI2cBn8.jpeg',
    quantity_sold: 6,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Baguette Bag',
    description: 'The Ganda Yarn\'s Baguette Bag is a unique, stylish accessory made with high-quality materials and expert craftsmanship, featuring a classic baguette shape and a beautiful crochet pattern. This crochet baguette bag is eco-friendly and sustainable, made by hand with no mass production. It is a perfect choice for those looking for a unique and stylish accessory or a practical solution for carrying essentials.',
    preview_image_link: 'https://i.imgur.com/DFUbnSC.jpeg',
    quantity_sold: 4,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Rose Bouquet',
    description: 'Ganda Yarn\'s Rose Bouquet is a perfect gift for your loved one. The details of this rose design are so true to life, a perfect alternative to natural roses, plus it will last for a very long time. This bouquet is also perfect for adding a touch of beauty to your home decor and can be used as a centerpiece or displayed in a vase. Whether for a special occasion or simply to brighten up your day, the Ganda Yarn\'s Crochet Rose Bouquet is sure to bring a smile to your face.',
    preview_image_link: 'https://i.imgur.com/k5ZEMan.jpeg',
    quantity_sold: 8,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Flora Tote Bag',
    description: 'Ganda Yarn\'s Flora Tote Bag will provide a dash of whimsy to your everyday look. The classic tote bag form is given a whimsical twist by the lovely flower pattern, making it ideal for days in the spring and summer.',
    preview_image_link: 'https://i.imgur.com/bTgc5VJ.png',
    quantity_sold: 8,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Vintage Tote Bag',
    description: 'Ganda yarn\'s Vintage Tote Bag is a one-of-a-kind item that you\'ll treasure for years to come for its exquisite vintage design that lends a touch of timeless appeal to the traditional tote bag style, making it ideal for special events as well as everyday usage.',
    preview_image_link: 'https://i.imgur.com/vf61iZq.png',
    quantity_sold: 5,
    created_at: new Date().toISOString(),
    modified_at: null
  }
];

const createProducts = async (products) => {
  const result = [];

  for (const product of products) {
    const p = await prisma.product.create({
      data: product,
    })

    result.push(p);
  }

  return result;
}

const product_attributes = [
  {
    product_id: 1,
    variant: 'Green',
    image_link: 'https://i.imgur.com/9Acdh8r.jpeg',
    price: 90,
    stock: 10,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 1,
    variant: 'Violet',
    image_link: 'https://i.imgur.com/JLGIPs3.jpg',
    price: 90,
    stock: 5,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 1,
    variant: 'Yellow',
    image_link: 'https://i.imgur.com/PbQq4KQ.jpg',
    price: 90,
    stock: 10,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 1,
    variant: 'Pink',
    image_link: 'https://i.imgur.com/7sQkdZn.jpg',
    price: 90,
    stock: 13,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 2,
    variant: 'White',
    image_link: 'https://i.imgur.com/fv8HdQ1.jpg',
    price: 150,
    stock: 15,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 2,
    variant: 'Red',
    image_link: 'https://i.imgur.com/w8MtZUQ.jpg',
    price: 150,
    stock: 11,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 2,
    variant: 'Baby Pink',
    image_link: 'https://i.imgur.com/3TFpXLf.jpg',
    price: 175,
    stock: 20,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 3,
    variant: 'Blue',
    image_link: 'https://i.imgur.com/zo71lgz.jpg',
    price: 150,
    stock: 23,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 3,
    variant: 'Pink',
    image_link: 'https://i.imgur.com/beus1Og.jpg',
    price: 150,
    stock: 21,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 3,
    variant: 'Random Color',
    image_link: 'https://i.imgur.com/J6JPAka.jpg',
    price: 125,
    stock: 30,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 4,
    variant: 'Cow',
    image_link: 'https://i.imgur.com/A31UMsb.jpg',
    price: 350,
    stock: 10,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 4,
    variant: 'Duck',
    image_link: 'https://i.imgur.com/w9tF2mF.jpg',
    price: 275,
    stock: 12,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 4,
    variant: 'Frog',
    image_link: 'https://i.imgur.com/rp30zwh.jpg',
    price: 300,
    stock: 13,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 5,
    variant: 'Pink',
    image_link: 'https://i.imgur.com/NT4ngfT.jpg',
    price: 300,
    stock: 11,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 5,
    variant: 'Brown',
    image_link: 'https://i.imgur.com/25ZSq7K.jpg',
    price: 300,
    stock: 9,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 5,
    variant: 'Violet',
    image_link: 'https://i.imgur.com/kmMKMQ3.jpg',
    price: 300,
    stock: 8,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 6,
    variant: 'Single-flower',
    image_link: 'https://i.imgur.com/P7wIakN.jpg',
    price: 400,
    stock: 20,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 6,
    variant: 'Multi-flower',
    image_link: 'https://i.imgur.com/eaSissK.jpg',
    price: 600,
    stock: 15,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 7,
    variant: 'Mint Green',
    image_link: 'https://i.imgur.com/qL73OLO.png',
    price: 300,
    stock: 10,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 7,
    variant: 'Pastel Brown',
    image_link: 'https://i.imgur.com/vukC5yz.png',
    price: 200,
    stock: 13,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 8,
    variant: 'White',
    image_link: 'https://i.imgur.com/K1F4hF1.png',
    price: 200,
    stock: 14,
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    product_id: 8,
    variant: 'Gray',
    image_link: 'https://i.imgur.com/0vf5Qmz.png',
    price: 200,
    stock: 15,
    created_at: new Date().toISOString(),
    modified_at: null
  }
];

const createProductAttributes = async (productAttributes) => {
  const result = [];

  for (const productAttribute of productAttributes) {
    const id = productAttribute.product_id;

    delete productAttribute.product_id;
    const p = await prisma.product_Attribute.create({
      data: {
        product: {
          connect: {
            id: id,
          }
        },
        ...productAttribute
      },
    })

    result.push(p);
  }

  return result;
}

const admins = [
  {
    username: 'administrator',
    password: '_6b_r=dOz.3,Ht7Z^F@N',
    first_name: 'Christian Roed',
    last_name: 'Boyles',
    created_at: new Date().toISOString(),
    modified_at: null
  }
]

const createAdmins = async (admins) => {
  const result = [];

  for (const admin of admins) {
    const p = await prisma.admin.create({
      data: admin,
    })

    result.push(p);
  }

  return result;
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});