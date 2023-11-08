import { WebSocketServer } from "ws";
import express from "express";
import path from 'path';

express().use((req, res) => {
    res.sendFile(path.resolve('./index.html'));
}).listen(3000, () => console.log('listening on: http://localhost:3000'));

const socketServer = new WebSocketServer({ port: 443 });

socketServer.on("connection", (socket) => {
  console.log("Le client est connecté");

  socket.send("connexion établie");

  socket.on("message", (data) => {
    socketServer.clients.forEach((client) => {
      console.log(`Message envoyé: ${data}`);
      client.send(`${data}`);
    });
  });

  socket.on('close', () => console.log('déconnexion du client'));
  socket.on('error', (err) => console.log(err));
});
