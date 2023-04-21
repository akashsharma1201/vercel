import  express  from "express";
import route from "./route";

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.get("/" , (req ,res)=>{
    res.send("vercel node upload")
})

app.use(express.json())
app.use("/user" , route)


app.listen("5000" , ()=>{
    console.log("running on 5000 port");
})