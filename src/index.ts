import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import Resolver from "./resolvers/Resolver";
import {LinkResolver} from "./resolvers/LinkResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [Resolver, LinkResolver],
        emitSchemaFile: true,
    });

    const server = new GraphQLServer({
        schema,
    });

    await server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();