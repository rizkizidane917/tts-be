import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash('testing123', 10);
  const existing = await prisma.user.findUnique({
    where: { email: 'zidane917@gmail.com' },
  });
  if (!existing) {
    await prisma.user.create({
      data: {
        email: 'zidane917@gmail.com',
        password: hashed,
      },
    });
    console.log('Seed: created user zidane917@gmail.com / testing123');
  } else {
    console.log('Seed: user already exists');
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
