async function booksRouter(fastify, _opts) {
  // Route GET /books/:id
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    try {
      const book = { id };
      reply.send(book);
    } catch (e) {
      console.error("Error occurred:", e.message);
      reply.status(500).send({ error: "Internal Server Error" });
    }
  });

  // Route POST /books
  fastify.post("/", async (request, reply) => {
    const { title, author } = request.body;
    try {
      const book = { title, author };
      reply.send(book);
    } catch (e) {
      console.error("Error on POST request:", e.message);
      reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}

export default booksRouter; // ✅ ajout de cette ligne
