import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(_: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.user.findMany();

  res.json(users);
}
