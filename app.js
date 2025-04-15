import express from "express"
import { Server } from "socket.io"
import http from "http"
import dotenv from "dotenv"

dotenv.config()

const app=express()
const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})
io.on("connection",(socket)=>{

    // console.log("New client connected")

    socket.on("send_location",(data)=>{
        // console.log("Location data received:",data)
        io.emit("receive_location",{id: socket.id, ...data})
    })
    socket.on("disconnect",()=>{
        io.emit("user_disconnected",socket.id)
    })
})

app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});