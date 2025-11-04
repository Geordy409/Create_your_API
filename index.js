import Fastify from "fastify";

const app = Fastify(); // crée une instance de l'application web
const PORT = 3002; // définit le port où le serveur va écouter

try {
  await app.listen({ port: PORT });
  console.log(`Listening at http://localhost:${PORT}`);
} catch (err) {
  console.log("There are error");
  console.error(err);
  process.exit(1);
}
