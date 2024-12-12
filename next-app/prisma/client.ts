import { PrismaClient } from "@prisma/client";

//  in this object, we have access to the models we have defined in our schema.
// For example, we have the user model, and here we have methods for creating, reading, updating and deleting users.
// For example, we have findMany for finding a bunch of users, we have createFor creating a user and so on.
// So anytime we define or change a model and then create a migration, Prisma CLI automatically generates or regenerates this Prisma Client. So it's always in sync with our models.

// const prisma = new PrismaClient();

// export default prisma;

// technically we can create this Prisma Client anywhere in our application, but as best practice we should make sure that there is only a single instance of this running our application.

// So the reason we are doing this in this file is because the first time this client file is imported somewhere in our application, we get a new instance of this Prisma Client, but the second time this file is imported, this code is not re -executed, it's cached, so the result will be reused.

// In Next.js, because we have fast refresh, anytime we change our source code, Next.js refreshes some of our modules. In that case, we'll end up in a situation where we have too many Prisma Clients. So you will see an error in the terminal saying "too many Prisma Clients.This only happens in development because fast refresh only happens in development.
// to fix that see this: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
