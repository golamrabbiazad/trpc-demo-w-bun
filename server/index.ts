import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./server";

const server = createHTTPServer({
  router: appRouter,
});

console.log(`server running on PORT 8080 🚀️`);

server.listen(8080);
