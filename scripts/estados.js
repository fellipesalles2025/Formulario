const estadoSelect = document.querySelector('#estado');

const cidadeSelect = document.querySelector('#cidade');

// Função para carregar os estados
async function carregarEstados() {
  try {
    const response = await fetch('https://brasilapi.com.br/api/ibge/uf/v1');

    const estados = await response.json();

    estados.sort((a, b) => a.nome.localeCompare(b.nome));

    estados.forEach(estado => {

      const option = document.createElement('option');

      option.value = estado.sigla;

      option.textContent = estado.nome;

      estadoSelect.appendChild(option);
    });

  } catch (error) {

    console.error('Erro ao carregar estados:', error);

  }
}

// Função para carregar as cidades com base no estado selecionado
async function carregarCidades(uf) {
  try {
    const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`);

    const cidades = await response.json();

    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>'; // Limpa as cidades anteriores

    cidades.forEach(cidade => {

      const option = document.createElement('option');

      option.value = cidade.nome;

      option.textContent = cidade.nome;

      cidadeSelect.appendChild(option);

    });

    cidadeSelect.disabled = false;

  } catch (error) {

    console.error('Erro ao carregar cidades:', error);
  }
}

// Evento para carregar as cidades ao selecionar um estado
estadoSelect.addEventListener('change', () => {

  const uf = estadoSelect.value;

  if (uf) {

    carregarCidades(uf);

  } else {

    cidadeSelect.disabled = true;

    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
  }
});

// Carregar os estados ao iniciar
carregarEstados();
