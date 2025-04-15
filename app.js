import express from "express"
import { Server } from "socket.io"
import http from "http"
import dotenv from "dotenv"
import { fileURLToPath } from "url";
import path from "path"; 

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

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

app.set("views", path.join(__dirname, "views")); 
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public"))); 

app.get("/",(req,res)=>{
    res.render("index")
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});