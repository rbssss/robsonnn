var formulario = document.querySelector('form#form_contato');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')

    console.log(nome, email, turma, motivo, mensagem);

    //enviar esses dados por email
    var templateParams = {
        nome: nome,
        email: email,
        turma: turma,
        motivo: motivo,
        mensagem: mensagem,
        notes: 'Check this out!'
    };
    
    var resultado = document.createElement('p')
    resultado.innerHTML = `
     ${nome}, sua mensagem foi enviada com sucesso!
    `
   
    formulario.append(resultado)

    emailjs.send('service_570513d', 'template_gdkudsl', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
});



