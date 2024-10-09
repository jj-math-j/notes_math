console.log('client')

const serverWebsocket = new WebSocket(`wss://${window.location.hostname}/websocket`)
serverWebsocket.onopen = () => {
    console.log('aaa')
}
serverWebsocket.onmessage = (someMessageEvent) => {
    console.log(someMessageEvent)
}
