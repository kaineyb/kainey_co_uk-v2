import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

const errorHandler: PagesFunction = async ({ next }) => {
  try {
    return await next();
  } catch (error: unknown) {
    return new Response(`${error.message}\n${error.stack}`, { status: 500 });
  }
};

const mailMiddleware: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "To Kaine", email: "kaineyb@gmail.com" }],
    },
  ],
  from: ({ formData, name, request }) => {
    console.log(request);
    return {
      email: formData.get("email"),
      name: formData.get("name"),
    };
  },
  subject: ({ formData }) => {
    return formData.get("subject");
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});

export const onRequest = [errorHandler, mailMiddleware];
