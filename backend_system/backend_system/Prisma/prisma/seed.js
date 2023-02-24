const { PrismaClient, UserType } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const { createHash, randomBytes } = require('crypto');

const prisma = new PrismaClient();

const main = async () => {
  // await createUser(1, UserType.ADMIN);
  // const users = await createUser(5);
  // const categories = await createCategory(10);
  // const products = await createProduct(100, categories);
  // const reviews = await createReview(users, products);
}

const createUser = async (count, type = UserType.USER) => {
  const currentCount = await prisma.user.count({
    where: {
      type
    }
  });

  const users = [];

  for (let i = currentCount; i < count; i++) {
    const password = "password";
    const salt = randomBytes(32).toString("hex");
    const hashedPassword = createHash("sha512").update(password + salt, "utf-8").digest("hex");

    const user = await prisma.user.create({
      data: {
        email: `${type.toLowerCase()}${i}@gmail.com`,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        password: password,
        salt,
        image: {
          create: {
            path: faker.image.avatar(),
            external: true,
          }
        },
        cart: {
          create: {

          },
        },
        type
      }
    });

    users.push(user);
  }

  return users;
}

const createCategory = async (count) => {
  const currentCount = await prisma.category.count();

  const categories = [];

  for (let i = currentCount; i < count; i++) {
    const category = await prisma.category.create({
      data: {
        name: faker.commerce.department(),
        description: faker.lorem.sentences(1),
      }
    });

    categories.push(category);
  }

  return categories;
}

const createProduct = async (count, categories = []) => {
  const currentCount = await prisma.product.count();

  const products = [];

  for (let i = currentCount; i < count; i++) {
    const product = await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price(50, 1203, 2)),
        stock: faker.datatype.number({ min: 0, max: 13 }),
        shortDescription: faker.lorem.sentences(2),
        longDescription: faker.lorem.sentences(6),
        categories: {
          create: categories.filter(() => Math.random() > 0.7).map((category) => {
            return {
              category: {
                connect: {
                  id: category.id
                }
              }
            }
          })
        },
        image: {
          create: {
            path: faker.image.food(512, 512, true),
            external: true,
          }
        }
      }
    });

    products.push(product);
  }

  return products;
}

const createReview = async (users, products) => {
  const reviews = [];

  for (const product of products) {
    const count = Math.random() * 5;
    for (let i = 0; i < count; i++) {
      const user = users[Math.floor(Math.random() * users.length)];

      const review = await prisma.review.create({
        data: {
          rating: faker.datatype.number({ min: 0, max: 5 }),
          message: faker.lorem.sentences(),
          product: {
            connect: {
              id: product.id
            },
          },
          user: {
            connect: {
              id: user.id,
            }
          }
        }
      });

      reviews.push(review);
    }
  }

  return reviews;
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