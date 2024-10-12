import { serveFile } from 'jsr:@std/http/file-server';

const widgetDirectoryPath = Deno.realPathSync('../widgets');
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
  } else if ('/widgets' === requestUrl.pathname) {
    const widgetEntryKeysResult = [];
    const widgetEntries = Deno.readDirSync(widgetDirectoryPath);    
    for (const someWidgetEntry of widgetEntries) {
      widgetEntryKeysResult.push(someWidgetEntry.name);
    }
    return new Response(JSON.stringify(widgetEntryKeysResult), {
      status: 200,
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
  } else if (requestUrl.pathname.startsWith('/widgets/')) {
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
