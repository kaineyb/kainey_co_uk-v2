import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

const baseURl = process.env.CF_PAGES_URL;

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    { to: [{ name: "Kaine Bruce", email: "kaineyb@gmail.com" }] },
  ],
  from: { name: "Contact Form @ Kainey.co.uk", email: "contact@kainey.co.uk" },
  respondWith: () => {
    return Response.redirect(baseURl + "/contact/success");
  },
});
