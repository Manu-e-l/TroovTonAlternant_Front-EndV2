import Prisma from "@prisma/client";

const { PrismaClient} = Prisma;

const prisma = new PrismaClient();

console.log("Connexion réussie MongoDB");

export {prisma};