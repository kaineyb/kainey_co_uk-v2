const baseURl = "https://dev.kainey.pages.dev";

export function onRequest(context) {
  return Response.redirect(baseURl + "/contact/success");
}
