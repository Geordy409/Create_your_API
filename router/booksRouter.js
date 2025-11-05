import Fastify from "fastify";
import fastifyFormbody from "@fastify/formbody";

async function booksRoute(fastify, _ods) {
  fastify.get("/:id", async (request, reply) => {
    const id = request.params;
    try {
      const book = { id };
      reply.send(book);
    } catch (err) {
      console.error("Error occurente:", e.message);
      reply.send(e);
    }
  });
}
