import { serveFile } from 'jsr:@std/http/file-server';

Deno.serve((clientRequest: Request) => {
  const requestUrl = new URL(clientRequest.url);
  requestUrl.pathname = requestUrl.pathname === '/'
    ? '/client.html'
    : requestUrl.pathname;
  if (
    ['/client.html', '/client.css', '/client.js'].includes(
      requestUrl.pathname,
    )
  ) {
    return serveFile(clientRequest, `./client${requestUrl.pathname}`);
  } else if (['/rectangle.js', '/foo.js'].includes(requestUrl.pathname)) {
    return serveFile(
      clientRequest,
      `${Deno.realPathSync('..')}${requestUrl.pathname}`,
    );
  } else {
    return new Response('404: Not Found', {
      status: 404,
    });
  }
});
