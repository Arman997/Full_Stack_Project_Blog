import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello programmers!!!");
})

app.post('/auth/login', (req, res) =>{
    console.log(req.body);

    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Arman Aristakesyan',
        password: req.body.password,
    }, 
    'secret123'    
    );

    res.json({
        success: true,
        token, 
    });

});

app.listen(4444, (err) => {
    if(err){
        console.log(err);
    }

    console.log('Server 200 OK!!!');
})

