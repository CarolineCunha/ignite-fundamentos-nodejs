const express = require('express');

const app = express();

app.use(express.json());

app.get("/courses",(request, response)=> {
    const query = request.query;
    return response.json({message: ["Curso 1", "Curso 2", "Curso 3"]})
});

app.post("/courses", (request, response)=> {
    const body = request.body;
    console.log(body);
    return response.json({message: ["Curso 1", "Curso 2", "Curso 3", "Curso 4"]})

});

app.put("/courses/:id", (request, response)=> {
    const {id} = request.params;
    console.log(params);
    return response.json({message: ["Curso 6", "Curso 2", "Curso 3"]})
});

app.patch("/courses/:id", (resquest, response)=> {
    return response.json({message: ["Curso 1", "Curso 7", "Curso 3"]})
});

app.delete("/courses/:id", (resquest, response)=>{
    return response.json({message: ["Curso 1", "Curso 2"]})
})
app.listen(3333);
