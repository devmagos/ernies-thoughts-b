const express = require("express");
const http = require('http');
const app = express();
const mongo = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongo.connect('mongodb+srv://omakoji:rGtGRWLxHmk4YyIQ@cluster0-e2oqw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },  (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('You have successfully connected to MongoDB');
    }
});

const blog = require("./models/blog")
const blogpost = require("./models/blogpost")

app.post('/publishpost', async (req,res)=>{
    const {publicationTitle, body, authorName } = req.body
    const publishpost = await new blogpost({ publicationTitle, body, authorName })
    publishpost.save()
    return res.json({data:publishpost})
  })
 

  app.get('/savedata',(req,res)=>{
    const data = req.query
    const blogPost = new blog(
      {
        title: data.publicationTitle,
        body: data.body,
        author: data.authorName,
        date: new Date()
      }
    )
    blogPost.save((_err,doc)=>{
      return res.json(doc)
    })
  })
   

  app.get('/publishpost',(req,res)=>{
    blogpost.find({},(err,data)=>{
      if(err) {console.log(err)}
      else{
      return res.json({posts:data})}
    });
  });
  

  app.get('/getposts',(req,res)=>{
    blogpost.find({},(err,data)=>{
      if(err) {console.log(err)}
      else{
      return res.json({posts:data})}
    });
  });

  app.get("/", (req, res) => {
  res.send("We are live!!!");
  });
  
  http.createServer(app).listen((process.env.PORT || 8080), (err)=>{
    if(!err){
        console.log('Your request was successful');
    }else{
        console.log(err);
    }
})
