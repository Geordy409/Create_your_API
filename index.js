import Fastify from "fastify";
import formbody from "@fastify/formbody";
import routes from "./router/index.js"; // ✅ bon chemin

const app = Fastify({ logger: true });

const start = async () => {
  try {
    await app.register(formbody);
    await app.register(routes);

    await app.listen({ port: 3002 });
    console.log("🚀 Serveur démarré sur http://localhost:3002");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

app.get("/", async (_request, reply) => {
  reply.send({ message: "ok" });
});

app.setNotFoundHandler((request, reply) => {
  const { message, statusCode } = request.error || {};
  reply.status(statutsCode || 500);
  send({ mmessage });
});
start();
