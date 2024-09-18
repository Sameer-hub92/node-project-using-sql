const connect_obj=require('../Database/myconnector')

class india
{
    Add_Record(req,res)
    {
        if(req.method==='GET')
        {
            res.render('contact')
            res.end()
        }
        else
        {

            connect_obj.getConnection((err,connectn)=>
            {
                if(err)
                {
                    res.send(err)
                    res.end()
                }
                else
                {
                    const q=`insert into dell(name,mobile,stream,message)value('${req.body.nm}','${req.body.mob}','${req.body.st}','${req.body.mess}')`
                    connectn.query(q,(err)=>
                    {
                        if(err)
                        {
                            res.send(err)
                            res.end()
                        }
                        else
                        {
                                res.render('contact',{message:req.body.nm+"record added successfully"})
                                res.end()
                           
                        }
                    })
                }
            })
        }
    }

    Login_Check(req,res)
    {
               if(req.method==='GET')
                {
                    res.render('login')
                    res.end()
                } 
                else 
                {
                       connect_obj.getConnection((err,myconnection)=>
                      {
                                if(err)
                                {
                                      res.send(err)
                                      res.end()
                                }
                                else 
                                {
                                    const q=`select * from user where email='${req.body.email}' and password='${req.body.password}'`
                                        myconnection.query(q,(err,data)=>
                                        {
                                              if(err)
                                              {
                                                     res.send(err)
                                                     res.end()
                                              }
                                              else 
                                              {
                                                       if(data.length>0)
                                                       {
                                                               req.session.myemailid=req.body.email
                                                              res.redirect('/Welcome_Dashboard')
                                                       }
                                                       else 
                                                       {
                                                          res.render('login',{message:'Invalid Credentials'})
                                                          res.end()
                                                       }
                                              }
                                        })
                                }
                      })
                }
    }

    
}

const obj=new india()
module.exports=obj