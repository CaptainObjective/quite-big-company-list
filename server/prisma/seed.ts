import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

async function main() {
  const companiesCount = 500; //1_000_000;

  for (let i = 0; i < companiesCount; i++) {
    await prisma.company.create({
      data: {
        name: faker.company.companyName(),
        country: faker.address.country(),
        foundationDate: faker.date.past(50),
        identifier: faker.finance.bic(),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
