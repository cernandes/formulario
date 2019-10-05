// Aula inicial de Lógica de programação com Javascript


function saudacao(){
    event.preventDefault();
let nome = document.getElementById("nome").value;
let idade = document.getElementById("idade").value;
if(idade<=11){
    alert(`${nome}, você se enquadra na categoria infatil`)
} else if (idade > 11 && idade <=17){
    alert(`${nome}, você se enquadra na categoria juvenil`)

} else if (idade > 11 && idade <=17){
    alert(`${nome}, você se enquadra na categoria sênior`)

} else  {
    alert(`${nome}, você se enquadra na categoria master`)
}
}
