// Bun.serve({
//   port: 3000,
//   fetch(request) {
//     return new Response("Servidor Bun corriendo joya en http://localhost:3000");
//   },
// });

import { handleHola } from "./api/hola.ts";

Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("Servidor Bun funcionando 🚀");
    }

    if (url.pathname === "/api/hola") {
      return handleHola();
    }

    return new Response("Ruta no encontrada", { status: 404 });
  },
});


console.log("Servidor Bun corriendo desde http://localhost:3000");