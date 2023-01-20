import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    { to: [{ name: "Kaine Bruce", email: "kaineyb@gmail.com" }] },
  ],
  from: { name: "Contact Form @ Kainey.co.uk", email: "contact@kainey.co.uk" },
  respondWith: () => {
    return Response.redirect("/contact/success");
  },
});
