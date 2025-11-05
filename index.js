import Fastify from "fastify";
import fastifyFormbody from "@fastify/formbody";

const app = Fastify({ logger: true });
const PORT = 3002;
await app.register(fastifyFormbody); // ← Correction ici

try {
  await app.listen({ port: PORT });
  console.log(`Listening at http://localhost:${PORT}`);
} catch (err) {
  console.log("There are error");
  console.error(err);
  process.exit(1);
}

app.get("/", async (resquest, reply) => {
  reply.secd({ message: "ok" });
});
