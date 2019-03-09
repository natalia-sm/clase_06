/**
 * Stream - El modulo solamente nos da la abstracción de streams en las interfaces de sus clases:
 * 
 * -Writable: Son de solo escritura
 * -Readable: Son de solo lectura
 * -Duplex: Son de lectura y escritura
 * Transform: Son un tipo especial de duples en donde el output se calcula en base a una
 * transformación del input
 */

 // Inicia un stream en modo pausado
//  //los streams pueden estar en dos modos: paused o flowing
// let fs = require('fs');

//  let archivo = fs.createReadStream(__dirname+'index.html')

//  let nuevo = fs.createWriteStream(__dirname+'output.txt')

// //el evento data de un readable se dispara cuando nos llega un chunk a traves del stream en forma de buffer
// //TODOS los streams readable tienen el evento 'data'

// archivo.on('data',chunk=>{
//     console.log('Nuevo chunk:',chunk)
//     //TODOS los streams del tipo writable implementan el metodo write para escribir por stream
//     nuevo.write(chunk)
// })

// //TODOS los streams del tipo readable implementan el evento de tipo 'end' y se dispara cuando ya no hay mas info para leer
//  archivo.on('end',()=>{
//     nuevo.end()
//  })


 /*
 TCP/IP

 HTTP

 Request(Cliente)

 METODO - URL - VERSION
 Headers
 Body

 GET/index.html http/1.1
 Host: www.google.com
 Content-Type: text/plain
 Body
     nombre: horacio



 Response(Servidor)
 VERSION CODIGO MENSAJE

 Headers
 Body

 Http/1.1 200 OK
 Content-Type: text/html
 Content-Length:124
 Access-Content-Allow-Origin


 CORS: Cross origin resource sharing es una politica de seguridad para compartir recursos a traves de dominios
 */

 //PIPEScls
 

 //archivo.pipe(nuevo)


 //Modulo NET - para hacer servidores de conexion por TCP

 const net = require('net')
//en un servidor de tcp recibimos una instancia de net.Socket ek cual implementa la interfaz de Stream Duplex, o sea que podemos consumirlo y esceribirlo


 let sockets = []

 const servidor = net.createServer(socket=>{
    //en un servidor TCP o HTTP SIEMPRE hay que cerrar la respuesta del cliente, de lo contrario el mismo queda en TimeOut
    sockets.push(socket)

    socket.write('Estableciendo conexion ...\n\r')
    socket.write('Bienvenido!\n\r')

    //socket.end('Hola mundo');

    socket.on('data', data=>{
        //console.log('Consola servidor:', data)
        //socket.write('Conexion telnet:', data)
        //socket.write(data)
        for(let i = 0; i < sockets.length; i++){
            const s = sockets[i]
            s.write(data)
        }
    })
 })

 servidor.listen(8000)
