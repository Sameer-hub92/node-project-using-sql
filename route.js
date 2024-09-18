const express=require('express')
const router=express.Router()
const india_obj=require('./controller/india')


router.get('/',(req,res)=>
{
    res.render('home')
    res.end()
})

router.get('/ram',(req,res)=>
{
    res.render('about')
    res.end()
})



router.use('/record_registartion',(req,res)=>
{
    india_obj.Add_Record(req,res)

})


router.use('/login',(req,res)=>
    {
        india_obj.Login_Check(req,res)
    })
    
    router.use('/signup',(req,res)=>
    {
            india_obj.Signup_user(req,res)
    })




module.exports=router