export function onRequest(context) {
  return new Response(null, {
    status: 302,
    headers: { Location: "contact/success" },
  });
}
