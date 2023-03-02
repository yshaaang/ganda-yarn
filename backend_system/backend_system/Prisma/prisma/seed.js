const { PrismaClient, UserType } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  const product = await createProducts(products);
  const admin = await createUsers(users);
  const status = await createStatuses(statuses);
  const product_attribute = await createProductAttributes(product_attributes);
  const order = await createOrders(orders);
  const orderProduct = await createOrderProducts(order_products);
  const review = await createReviews(reviews);
}

const products = [
  {
    name: 'Tulip Flower',
    description: 'The Ganda Yarn\'s Crochet Tulip Keychain is a functional and stylish accessory with a personalized touch. Made from high-quality cotton yarns, it comes in a range of colors and can be customized with a name on stem. The compact size, lightweight design, and sturdy clasp make it easy to carry, while the charming tulip design adds personality to your everyday accessories. This keychain is a great gift or a stylish accessory for anyone who values both style and practicality.',
    preview_image_link: 'https://i.imgur.com/9Acdh8r.jpeg',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Phone Holder',
    description: 'The Ganda Yarn\'s Crochet Phone Holder is a functional and stylish accessory designed to securely hold your phone. The adjustable strap can be customized to your preferred length (long or short)  and can be worn around your neck or across your body. Available in a range of colors, it\'s a great accessory for everyday use and can keep your phone safe and within reach. This durable and attractive phone holder is a must-have for anyone looking for a practical and stylish solution for keeping their phone safe and accessible.',
    preview_image_link: 'https://i.imgur.com/yheRk29.jpeg',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Wallet',
    description: 'The Ganda Yarn\'s Crochet Wallet has a personalized touch, made with high-quality cotton yarns for durability and longevity. The wallet can be personalized with a range of color options to match the recipient\'s personal style which is perfect gift to someone special.',
    preview_image_link: 'https://i.imgur.com/jmQS63n.jpeg',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Bucket Hat',
    description: 'The Ganda Yarn\'s Crochet Bucket Hat is a functional and stylish accessory that provides protection from the sun. Made from high-quality cotton yarns, it features a wide brim for ample shade and an adjustable drawstring for a secure fit. Available in a range of color and animal patterns, it\'s a great accessory for everyday use and a must-have for anyone who wants to protect themselves from the sun in style.',
    preview_image_link: 'https://i.imgur.com/OI2cBn8.jpeg',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Baguette Bag',
    description: 'The Ganda Yarn\'s Baguette Bag is a unique, stylish accessory made with high-quality materials and expert craftsmanship, featuring a classic baguette shape and a beautiful crochet pattern. This crochet baguette bag is eco-friendly and sustainable, made by hand with no mass production. It is a perfect choice for those looking for a unique and stylish accessory or a practical solution for carrying essentials.',
    preview_image_link: 'https://i.imgur.com/DFUbnSC.jpeg',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Rose Bouquet',
    description: 'Ganda Yarn\'s Rose Bouquet is a perfect gift for your loved one. The details of this rose design are so true to life, a perfect alternative to natural roses, plus it will last for a very long time. This bouquet is also perfect for adding a touch of beauty to your home decor and can be used as a centerpiece or displayed in a vase. Whether for a special occasion or simply to brighten up your day, the Ganda Yarn\'s Crochet Rose Bouquet is sure to bring a smile to your face.',
    preview_image_link: 'https://i.imgur.com/k5ZEMan.jpeg',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Flora Tote Bag',
    description: 'Ganda Yarn\'s Flora Tote Bag will provide a dash of whimsy to your everyday look. The classic tote bag form is given a whimsical twist by the lovely flower pattern, making it ideal for days in the spring and summer.',
    preview_image_link: 'https://i.imgur.com/bTgc5VJ.png',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    name: 'Vintage Tote Bag',
    description: 'Ganda yarn\'s Vintage Tote Bag is a one-of-a-kind item that you\'ll treasure for years to come for its exquisite vintage design that lends a touch of timeless appeal to the traditional tote bag style, making it ideal for special events as well as everyday usage.',
    preview_image_link: 'https://i.imgur.com/vf61iZq.png',
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

const users = [
  {
    username: 'administrator',
    password: 'thisisauniquepassword',
    first_name: 'Christian Roed',
    last_name: 'Boyles',
    gender: 'Male',
    mobile_number: 09183579673,
    home_address: '1313 Santa Clara St. Sampaloc, Manila',
    email_address: 'chrstnrdbyls@gmail.com',
    created_at: new Date().toISOString(),
    modified_at: null,
    type: UserType.ADMIN
  },
  {
    username: 'defysha',
    password: 'trishamaeerandio',
    first_name: 'Trisha Mae',
    last_name: 'Erandio',
    gender: 'Female',
    mobile_number: 09477893437,
    home_address: '15 Paseo De Las Palmas St. Muntinlupa',
    email_address: 'erandiotrisha@gmail.com',
    created_at: new Date().toISOString(),
    modified_at: null,
    type: UserType.USER
  },
  {
    username: 'thegreatone',
    password: 'ittakesonepunch',
    first_name: 'Baldy',
    last_name: 'Cape',
    gender: 'Male',
    mobile_number: 09141297390,
    home_address: '30 Masigasig St. Camarin, Caloocan',
    email_address: 'onepunchman@gmail.com',
    created_at: new Date().toISOString(),
    modified_at: null,
    type: UserType.USER
  },
  {
    username: 'demonhunter',
    password: 'fistofflowingwater',
    first_name: 'Garou',
    last_name: 'Half',
    gender: 'Male',
    mobile_number: 09843064074,
    home_address: '28 Colossians St. Quezon City',
    email_address: 'garoudemonhunter@gmail.com',
    created_at: new Date().toISOString(),
    modified_at: null,
    type: UserType.USER
  },
  {
    username: 'banheeseo',
    password: 'allthistime2022',
    first_name: 'Ban',
    last_name: 'Hee Seo',
    gender: 'Female',
    mobile_number: 09555980399,
    home_address: '103 Apitong St. Marikina Heights, Marikina',
    email_address: 'banheeseo@gmail.com',
    created_at: new Date().toISOString(),
    modified_at: null,
    type: UserType.USER
  }
]

const createUsers = async (users) => {
  const result = [];

  for (const user of users) {
    const p = await prisma.user.create({
      data: user,
    })

    result.push(p);
  }

  return result;
}

const statuses = [
  {
    code: 'PRC',
    description: 'Processing',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    code: 'SHP',
    description: 'Shipped',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    code: 'DLV',
    description: 'On Delivery',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    code: 'RCV',
    description: 'Received',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    code: 'RTD',
    description: 'Rated',
    created_at: new Date().toISOString(),
    modified_at: null
  }
]

const createStatuses = async (statuses) => {
  const result = [];

  for (const status of statuses) {
    const p = await prisma.status.create({
      data: status,
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

const orders = [
  {
    user_id: 5,
    status_code: 'RTD',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    user_id: 1,
    status_code: 'RTD',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    user_id: 2,
    status_code: 'RTD',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    user_id: 3,
    status_code: 'RTD',
    created_at: new Date().toISOString(),
    modified_at: null
  },
  {
    user_id: 4,
    status_code: 'RTD',
    created_at: new Date().toISOString(),
    modified_at: null
  }
]

const createOrders = async (orders) => {
  const result = [];

  for (const order of orders) {
    const user_id = order.user_id;
    const status_code = order.status_code;
    delete order.user_id;
    delete order.status_code;

    const p = await prisma.order.create({
      data: {
        user: {
          connect: {
            id: user_id,
          }
        },
        status: {
          connect: {
            code: status_code,
          }
        },
        ...order
      },
    })

    result.push(p);
  }

  return result;
}

const order_products = [
  {
    order_id: 1,
    user_id: 5,
    product_id: 1,
    attribute_id: 3,
    quantity: 2,
    price: 90,
    created_at: new Date(2022, 7, 10, 16, 30, 0).toISOString(),
    modified_at: null
  },
  {
    order_id: 1,
    user_id: 5,
    product_id: 3,
    attribute_id: 9,
    quantity: 2,
    price: 150,
    created_at: new Date(2022, 7, 10, 16, 30, 0).toISOString(),
    modified_at: null
  },
  {
    order_id: 2,
    user_id: 5,
    product_id: 2,
    attribute_id: 6,
    quantity: 2,
    price: 150,
    created_at: new Date(2022, 9, 31, 23, 59, 59).toISOString(),
    modified_at: null
  },
  {
    order_id: 3,
    user_id: 4,
    product_id: 1,
    attribute_id: 4,
    price: 90,
    created_at: new Date(2022, 10, 25, 8, 0, 0).toISOString(),
    modified_at: null
  },
  {
    order_id: 3,
    user_id: 4,
    product_id: 2,
    attribute_id: 7,
    quantity: 2,
    price: 175,
    created_at: new Date(2022, 10, 25, 8, 0, 0).toISOString(),
    modified_at: null
  },
  {
    order_id: 4,
    user_id: 3,
    product_id: 4,
    attribute_id: 11,
    quantity: 2,
    price: 350,
    created_at: new Date(2022, 11, 31, 23, 59, 59).toISOString(),
    modified_at: null
  },
  {
    order_id: 4,
    user_id: 3,
    product_id: 1,
    attribute_id: 4,
    quantity: 3,
    price: 90,
    created_at: new Date(2022, 11, 31, 23, 59, 59).toISOString(),
    modified_at: null
  },
  {
    order_id: 4,
    user_id: 3,
    product_id: 5,
    attribute_id: 14,
    price: 300,
    created_at: new Date(2022, 11, 31, 23, 59, 59).toISOString(),
    modified_at: null
  },
  {
    order_id: 5,
    user_id: 2,
    product_id: 1,
    attribute_id: 4,
    price: 300,
    created_at: new Date(2022, 11, 25, 9, 0, 0).toISOString(),
    modified_at: null
  },
  {
    order_id: 5,
    user_id: 2,
    product_id: 3,
    attribute_id: 8,
    price: 300,
    created_at: new Date(2022, 11, 25, 9, 0, 0).toISOString(),
    modified_at: null
  },
]

const createOrderProducts = async (orderProducts) => {
  const result = [];

  for (const orderProduct of orderProducts) {
    const order_id = orderProduct.order_id;
    const user_id = orderProduct.user_id;
    const product_id = orderProduct.product_id;
    const attribute_id = orderProduct.attribute_id;
    delete orderProduct.order_id;
    delete orderProduct.user_id;
    delete orderProduct.product_id;
    delete orderProduct.attribute_id;

    const p = await prisma.order_Product.create({
      data: {
        order: {
          connect: {
            id: order_id,
          }
        },
        user: {
          connect: {
            id: user_id,
          }
        },
        product: {
          connect: {
            id: product_id,
          }
        },
        product_attribute: {
          connect: {
            id: attribute_id,
          }
        },
        ...orderProduct
      },
    })

    await prisma.product_Attribute.update({
      where: {
        id: attribute_id,
      },
      data: {
        sold: {
          increment: orderProduct.quantity??1,
        },
      },
    });

    result.push(p);
  }

  return result;
}

const reviews = [
  {
    order_product_id: 1,
    user_id: 5,
    rate: 5,
    comment: 'The crochet tulip keychain is an adorable and unique accessory that would make a perfect addition to any set of keys or purse. Here\'s my 5-star rating because of its quality, design, versatility, uniqueness, and affordability.',
    created_at: new Date(2022, 9, 10, 15, 30, 0).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 2,
    user_id: 5,
    rate: 5,
    comment: 'I had a highly positive experience with the wallet. I likely found the design, quality, and functionality of the wallet to be exceptional, and I may have also appreciated the craftsmanship and attention to detail that went into making it.',
    created_at: new Date(2022, 9, 10, 15, 30, 0).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 3,
    user_id: 5,
    rate: 5,
    comment: 'Despite knowing that a crochet yarn is soft, it still made my phone safe with this phone holder that the seller made. It\'s high quality and durable. Thank you seller. <3',
    created_at: new Date(2022, 10, 15, 23, 15, 45).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 4,
    user_id: 4,
    rate: 4,
    comment: 'I kind of like it, but I feel like it\'s too long for a keychain because of its tail. Nevertheless, it\'s still cute looking in my wallet.',
    created_at: new Date(2022, 11, 1, 9, 45, 30).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 5,
    user_id: 4,
    rate: 5,
    comment: 'It\'s so cute! My phone really fits in this item that the seller made. Thank you so much seller!',
    created_at: new Date(2022, 11, 1, 9, 45, 30).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 6,
    user_id: 3,
    rate: 5,
    comment: 'The design on the cow design is so good. The quality of it is really great for its price. Thank you so much seller.',
    created_at: new Date(2022, 11, 20, 17, 0, 0).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 7,
    user_id: 3,
    rate: 5,
    comment: 'I like pink! I like tulip! This is so cute! Thank you so much seller!',
    created_at: new Date(2022, 11, 20, 17, 0, 0).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 8,
    user_id: 3,
    rate: 5,
    comment: 'This is so cute and durable! And I like pink as well! Thank you so much seller!',
    created_at: new Date(2022, 11, 20, 17, 0, 0).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 9,
    user_id: 2,
    rate: 5,
    comment: 'This is so cute. It fits well on my pink wallet. It looks durable as well. Thank you so much seller!',
    created_at: new Date(2022, 11, 31, 23, 59, 59).toISOString(),
    modified_at: null
  },
  {
    order_product_id: 10,
    user_id: 2,
    rate: 5,
    comment: 'Bought the blue variant. It really looks good and fits a decent amount of coins while being portable as it can fit on my pocket. Thank you so much seller!',
    created_at: new Date(2022, 11, 31, 23, 59, 59).toISOString(),
    modified_at: null
  }
]

const createReviews = async (reviews) => {
  const result = [];

  for (const review of reviews) {
    const order_product_id = review.order_product_id;
    const user_id = review.user_id;
    delete review.order_product_id;
    delete review.user_id;

    const p = await prisma.review.create({
      data: {
        order_product: {
          connect: {
            id: order_product_id,
          }
        },
        user: {
          connect: {
            id: user_id,
          }
        },
        ...review
      },
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