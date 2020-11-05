import {GraphQLServer} from 'graphql-yoga'
import path from "path";
const server = new GraphQLServer({
  typeDefs : path.join(path.dirname(require.main.filename), "schema.graphql"),
  resolvers : {
    Query : {
      hello : () => "Hello World!!"
    }
  }
})

server.start(({port : process.env.PORT || 5000 }), () => console.log("server is running on http://localhost:5000"))