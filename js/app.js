const personas=[new Persona("", "")];

const mostrarPersonas=()=>{
    let texto= "";
    for (let persona of personas){
        texto +=`<li>${persona.nombre} ${persona.apellido}</li>`    
    }
    document.getElementById("personas").innerHTML= texto;
}

const aggPersonas=()=>{
    const form= document.forms["form"];
    const nombre= form["nombre"];
    const apellido= form["apellido"];
    if (nombre.value!= "" && apellido.value!= ""){
        const persona= new Persona(nombre.value, apellido.value);
        personas.push(persona)
        mostrarPersonas();
    }
    else{
        alert("No ha ingresado alguno de los datos requeridos");
    }
}