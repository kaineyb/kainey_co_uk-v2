export function onRequest(context) {
  console.log("test fired");

  return new Response(null, {
    status: 302,
    headers: { Location: "contact/success" },
  });
}
