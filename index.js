import Fastify from "fastify";
import fastifyFormbody from "@fastify/formbody";

const app = Fastify();
const PORT = 3002;
await app.register(fastifyFormbody); // ← Correction ici

app.get("/", async (request, reply) => {
  reply.send({ message: "ok" });
});

app.setNotFoundHandler((request, reply) => {
  const { message, statusCode } = request.error || {};
  reply.status(statusCode || 500).send({ message });
});

try {
  await app.listen({ port: PORT });
  console.log(`Listening at http://localhost:${PORT}`);
} catch (err) {
  console.log("There are error");
  console.error(err);
  process.exit(1);
}
