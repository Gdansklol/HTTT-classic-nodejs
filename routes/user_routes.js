const router=require('express').Router();

router.post("./",(req,res)=>{
    res.status(201).json({id:1,...req.body});
});

