const params = new URLSearchParams(window.location.search);

const person = {
    name: params.get('name'),
    dataNascimento: params.get('date'),
    sexo: params.get('gender'),
    email: params.get('email'),
    telefone: params.get('tel'),
    endereco: {
        rua: params.get('rua'),
        numero: params.get('num'),
        bairro: params.get('bairro'),
        cidade: params.get('city'),
        estado: params.get('state')
    },
}

console.log(person)
