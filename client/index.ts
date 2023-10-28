import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server/server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8080",
    }),
  ],
});

const allUsers = await trpc.userList.query();

console.log("list of all users");

console.log(allUsers);

const createUser = await trpc.userCreate.mutate({ name: "trash_dev" });

console.log(`user created`);

console.log(createUser);

const user = await trpc.userById.query("1");

console.log("find user by id");

console.log(user);
