import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma";
import { resolvers, typeDefs } from "./app/schemas";

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => {
    return {
      ...req,
      db: prisma
    };
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
