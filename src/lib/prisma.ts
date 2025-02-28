import { PrismaClient } from "@prisma/client";

const getPrismaInstance = () => {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }

  if (!(global as any).__prisma) {
    (global as any).__prisma = new PrismaClient();
  }

  return (global as any).__prisma;
};

export const prisma = getPrismaInstance();
