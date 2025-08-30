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

const {name, dataNascimento, sexo, email, telefone, endereco} = person

const data = dataNascimento.split('-').reverse().join('/')

const list = document.querySelector('#lista')

const listElement = document.createElement('li')

listElement.innerHTML = `<div>\
                            <h2>${name}</h2>\
                            <p>Data de Nascimento: ${data}</p>\
                            <p>Sexo: ${sexo}</p>\
                            <p>Email: ${email}</p>\
                            <p>Telefone: ${telefone}</p>\
                            <p>Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade}/${endereco.estado}</p>\
                        </div>`

listElement.classList.add('dados')

list.appendChild(listElement)

