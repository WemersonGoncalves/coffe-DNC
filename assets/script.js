let modalElement = document.querySelector("#showModalDialog");
let index = 0;
let CardElement = document.querySelector("#showOrderBtn");
let cardBody = document.querySelector(".cardBody");

function modalLearMore(index){
    modalElement.innerHTML = "";
    modalElement.innerHTML = ` 
    <div class="modalContent">
    <div>
        <button class="modalCloseBtn" onclick="closeModal()"><img src="./assets/images/Close.png" width= "25px"></button>
    </div>
        <h2>Quem somos nós? </h2>
        <p>Tudo o que fazemos procura respeitar essa conexão, desde nosso compromisso com o café de melhor qualidade do mundo até a forma como nós interagimos com nossos clientes e nossas comunidades para conduzir nosso negócio de modo responsável.
        </p>       
        <img src="./assets/images/sobre.png" width="100">
    </div>`;
    modalElement.style.display = "block";    
}
function closeModal() {
    modalElement.style.display = "none";
}
function showOrderBtn(){

        CardElement.innerHTML = `
        <div>
        <button class="orderBtn">Comprar</button>
        </div>`;
        CardElement.style.display = "block";

}
function notShowOrderBtn(cardBody){ 
    CardElement.style.display = "none";
}