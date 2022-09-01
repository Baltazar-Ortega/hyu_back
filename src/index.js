import { connectToDb } from "./database";
import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
import dotenv from "dotenv"

dotenv.config()

const main = async () => {
  try {
    await connectToDb();
    const server = new GraphQLServer({
      typeDefs,
      resolvers,
    });
    
    server.start({ port: process.env.PORT || 3100 }, ({ port }) => {
      console.log("Environment: ", process.env.NODE_ENV);
      console.log("Server on port", port);
    });
  } catch (err) {
    console.log("Ha ocurrido un error en la conexion a la base de datos");
    console.error(err);
  }
};

main();
