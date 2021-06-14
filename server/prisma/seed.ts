import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

async function main() {
  const companies = [];
  const companiesCount = 100_000; //1_000_000;

  for (let i = 0; i < companiesCount; i++) {
    companies.push({
      name: faker.company.companyName(),
      country: faker.address.countryCode(),
      foundationDate: faker.date.past(50),
      identifier: faker.finance.bic(),
    });
  }

  const deleteAllCompanies = prisma.company.deleteMany({});
  const createCompanies = companies.map(company => prisma.company.create({ data: company }));

  await prisma.$transaction([deleteAllCompanies, ...createCompanies]);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
