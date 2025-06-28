export function handleHola(): Response {
  return new Response(JSON.stringify({ mensaje: "¡Hola desde ruta externa!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
