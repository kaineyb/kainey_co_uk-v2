import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

console.log("fired");

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    { to: [{ name: "To ACME Support", email: "kaineyb@gmail.com" }] },
  ],
  from: { name: "From ACME Support", email: "testemail@test.com" },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});
