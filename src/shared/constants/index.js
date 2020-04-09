import faker from "faker";

export const foodCards = [
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
];
