import { serveFile } from 'jsr:@std/http/file-server';

Deno.serve(async (clientRequest: Request): Promise<Response> => {
    const requestUrl = new URL(clientRequest.url);
    requestUrl.pathname = requestUrl.pathname === '/'
        ? '/index.html'
        : requestUrl.pathname;
    if (['/index.html', '/client.js'].includes(requestUrl.pathname)) {
        return serveFile(clientRequest, `.${requestUrl.pathname}`);
    } else if ('/websocket' === requestUrl.pathname) {
        const clientWebsocket = await Deno.upgradeWebSocket(clientRequest)
        clientWebsocket.socket.onopen = () => {
            console.log('cccc')
            clientWebsocket.socket.send('fooooo!!!')
        }
        return clientWebsocket.response
    } else {
        return new Response('404: Not Found', {
            status: 404,
        });
    }
});
