import Fastify from "fastify";

const app = Fastify();
const PORT = 3002;

try {
  await app.listen({ port: PORT });
  console.log(`Listening at http://localhost:${PORT}`);
} catch (err) {
  console.log("There are error");
  console.error(err);
  process.exit(1);
}
