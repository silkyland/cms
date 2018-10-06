import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from "path";
import { typeDefs as prismaTypeDefs } from "../../generated/prisma/prisma-schema";

const typesArray = fileLoader(path.join(__dirname, "./typedefs"));
const resolversArray = fileLoader(path.join(__dirname, "./resolvers"));

const typeDefs = mergeTypes(typesArray, {
  all: true
});
const resolvers = mergeResolvers(resolversArray, {
  all: true
});

export { typeDefs, resolvers };
