import express from "express"

const route = express.Router();

// (req ,res)=>{
//     res.send({"post request":req.body})
// }
route.post("register" ,(req ,res)=>{
    res.send({"post request":req.body})
})

export default route