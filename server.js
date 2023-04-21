import  express  from "express";

const app = express();

app.get("/" , (req ,res)=>{
    res.send("vercel node upload")
})

app.listen("5000" , ()=>{
    console.log("running on 5000 port");
})