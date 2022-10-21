/enviar whats app/

document.querySelector('#bo').addEventListener('click', function () {
    let cliente = document.querySelector('#a').value;
    let sobrenome = document.querySelector('#b').value;
    let email = document.querySelector('#c').value;
    let telefone = document.querySelector('#d').value;
    // let exampleFormControlSelect1 = document.querySelector('#exampleFormControlSelect1').value;

    let url = "https://api.whatsapp.com/send?phone=5511998522382&text=  " + cliente + " Qual o seu sobrenome " +
        sobrenome + " Qual o seu e-mail " + email + " Qual é o seu telefone " + telefone ;

    window.open(url);

});



