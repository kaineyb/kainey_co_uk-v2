export function onRequest(context) {
  return new Response(`${context.env.CF_PAGES_URL}`);
}
