import requireSession from '@/lib/require-session';
import { prisma } from '@/utils/prisma';
import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'types/types';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  user: User
) => {
  const resume = await prisma.resume.create({
    data: {
      name: req.body.name,
      description: req.body.description,
      profile_pic: user.image,
      createdBy: user.id,
      template: 'default',
      email: user.email,
      location: 'India',
      publicId: nanoid(5),
    },
  });

  res.json(resume);
};

export default requireSession(handler);
