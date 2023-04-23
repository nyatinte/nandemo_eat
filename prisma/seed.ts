import { PrismaClient, type Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const categoryData: Prisma.CategoryCreateInput[] = [
  {
    name: "和食",
  },
  {
    name: "洋食",
  },
  {
    name: "中華",
  },
  {
    name: "アジアン",
  },
  {
    name: "イタリアン",
  },
  {
    name: "フレンチ",
  },
  {
    name: "韓国料理",
  },
  {
    name: "その他",
  },
  {
    name: "スイーツ",
  },
];

const dishData: Prisma.DishCreateInput[] = [
  {
    name: "海鮮丼",
    category: {
      connect: {
        name: "和食",
      },
    },
    subCategories: {
      connectOrCreate: [
        {
          where: {
            name: "丼物",
          },
          create: {
            name: "丼物",
          },
        },
        {
          where: {
            name: "海鮮",
          },
          create: {
            name: "海鮮",
          },
        },
      ],
    },
    ingredients: {
      connectOrCreate: [
        {
          where: {
            name: "鮭",
          },
          create: {
            name: "鮭",
          },
        },
        {
          where: {
            name: "マグロ",
          },
          create: {
            name: "マグロ",
          },
        },
        {
          where: {
            name: "イクラ",
          },
          create: {
            name: "イクラ",
          },
        },
      ],
    },
  },
];

const main = async () => {
  console.log(`Start seeding ...`);
  for (const c of categoryData) {
    const category = await prisma.category.create({
      data: c,
    });
    console.log(`Created category with id: ${category.id}`);
  }

  for (const d of dishData) {
    const dish = await prisma.dish.create({
      data: d,
      include: {
        ingredients: true,
        category: true,
        subCategories: true,
      },
    });
    console.log(`Created dish with id: ${dish.id}`);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
