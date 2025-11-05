import booksRouter from "./booksRouter.js"; // ✅ on importe le routeur de livres

async function routes(fastify, _opts) {
  fastify.register(booksRouter, { prefix: "/books" }); // ✅ on l’enregistre avec le préfixe /books
}

export default routes; // ✅ on exporte la fonction routes
