let result = document.getElementById("resultss");

try{
    result.innerHTML = "Bonjour !";
}
catch (error){
    alert("L'élément n'existe pas !");
}