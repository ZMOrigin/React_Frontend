import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'
import feathers from '@feathersjs/feathers'

let client = feathers()
const socket = io('http://localhost:3131', {
    transports: ['websocket'],
    forceNew: true
})

client.configure(socketio(socket), {
    timeout: 10000
})

export { socket, client }