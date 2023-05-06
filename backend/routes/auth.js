const express= require('express');
const router= express.Router();
router.get('/',(req,res)=>{
     
    console.log(req.body);
    const user=User(req.body);
    user.Save();
    res.send(req.body);
//  obj={
//      a:"thios",
//      number:34
//  }
//  res.json(obj)
})
module.exports=router