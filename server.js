const express=require('express');
const hbs=require('hbs');

const port=process.env.PORT|| 3000;
var app=express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use((req,res,next)=>{
	var now=new Date().toString();
	console.log(`${now}`);
	next();
});

app.get('/',(response,request)=>{

  request.render('home.hbs',{
  	heading:'home page',
  	message:'welcome to my website',
  	year: new Date().getFullYear()
  });
});

app.use('/project',(response,request)=>{
  request.render('project.hbs');
});

app.listen(port);