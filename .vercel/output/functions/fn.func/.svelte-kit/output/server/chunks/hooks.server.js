const handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("siteTheme");
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('class=""', `class="${theme}"`)
  });
  return response;
};
export {
  handle
};
