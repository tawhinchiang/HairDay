# HairDay 💇

Um aplicativo web desenvolvido para estudos práticos em consumo de APIs, organização em módulos e controle de versão. A aplicação simula um sistema de agendamento para salão de beleza com interface moderna e responsiva.

## 📌 Índice

- [Objetivo do Projeto](#-objetivo-do-projeto)
- [Requisitos](#-requisitos)
- [Stack Tecnológico](#-stack-tecnológico)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Guia de Desenvolvimento](#-guia-de-desenvolvimento)
- [Módulos](#-módulos)
- [Serviços de API](#-serviços-de-api)
- [Troubleshooting](#-troubleshooting)
- [Contribuição](#-contribuição)

## 🎯 Objetivo do Projeto

Este projeto foi criado com fins educacionais para:
- **Consumir APIs**: Praticar requisições HTTP e integração com servidores
- **Organização em Módulos**: Estruturar código de forma escalável e manutenível
- **Controle de Versão**: Aplicar boas práticas de versionamento com Git
- **Construir Interface Real**: Criar uma aplicação funcional com casos de uso práticos

## ✅ Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js**: v18.0.0 ou superior (v25.9.0 recomendado)
- **npm**: v9.0.0 ou superior (incluído com Node.js)
- **Git**: Para controle de versão

### Verificar Versões

```bash
node --version
npm --version
git --version
```

## 🛠️ Stack Tecnológico

### Versões Principais

| Ferramenta | Versão | Descrição |
|-----------|--------|-----------|
| **Node.js** | `^25.9.0` | Runtime JavaScript |
| **NPM** | Incluso com Node.js | Gerenciador de pacotes |
| **Webpack** | `^5.89.0` | Bundler de módulos |
| **Webpack CLI** | `^5.1.4` | Interface de linha de comando |
| **Webpack Dev Server** | `^4.15.1` | Servidor de desenvolvimento com hot-reload |
| **JSON Server** | `^1.0.0-alpha.21` | Servidor JSON simulado para desenvolvimento |

### Dependências

- **Babel** (`^7.23.7`): Transpilador JavaScript
  - `@babel/core` - Core do Babel
  - `@babel/preset-env` - Configuração de compatibilidade
  - `babel-loader` - Loader para Webpack
- **Webpack Loaders**:
  - `css-loader` (`^6.8.1`) - Processamento de CSS
  - `style-loader` (`^3.3.3`) - Injeção de estilos
  - `html-webpack-plugin` (`^5.6.0`) - Geração de HTML
  - `copy-webpack-plugin` (`^11.0.0`) - Cópia de arquivos estáticos
- **Day.js** (`^1.11.10`): Manipulação de datas e horas

## 🚀 Instalação

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/hairday.git
cd hairday
```

### Passo 2: Instalar Dependências

```bash
npm install
```

Isso irá instalar todas as dependências listadas no `package.json`:
- Webpack e plugins
- Babel para transpilação
- Day.js para manipulação de datas
- JSON Server para simular API

### Passo 3: Verificar Instalação

```bash
npm run build
```

Se nenhum erro for exibido, a instalação foi bem-sucedida!

## 💻 Como Usar

### Executar em Desenvolvimento

A forma mais prática é usar dois terminais simultaneamente:

**Terminal 1 - Servidor JSON (API)**
```bash
npm run server
```
Saída esperada:
```
  ✓ watch ./server.json
  Loading ./server.json
  Done
  Resources
  http://localhost:3333/schedules
  Home
  http://localhost:3333/
```

**Terminal 2 - Servidor de Desenvolvimento**
```bash
npm run dev
```
Saída esperada:
```
<i>  [webpack-dev-server] Project is running at:
<i> http://localhost:8080/
```

Acesse [http://localhost:8080](http://localhost:8080) no navegador.

### Compilar para Produção

```bash
npm run build
```

Gera a pasta `dist/` com os arquivos otimizados prontos para deploy.

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com hot-reload |
| `npm run build` | Compila projeto para producão |
| `npm run server` | Executa JSON Server na porta 3333 |

## 📁 Estrutura do Projeto

```
HairDay/
├── src/                              # Código-fonte da aplicação
│   ├── main.js                       # Arquivo de entrada principal
│   │
│   ├── assets/                       # Imagens e recursos estáticos
│   │
│   ├── libs/                         # Bibliotecas e configurações
│   │   └── dayjs.js                 # Configuração de Day.js (datas/horas)
│   │
│   ├── modules/                      # Módulos da aplicação
│   │   ├── page-load.js             # Lógica de carregamento inicial
│   │   │
│   │   ├── form/                    # Módulo de formulário
│   │   │   ├── date-change.js       # Evento ao mudar data
│   │   │   ├── hours-click.js       # Evento ao clicar em hora
│   │   │   ├── hours-load.js        # Carregamento das horas disponíveis
│   │   │   └── submit.js            # Submissão e validação formulário
│   │   │
│   │   └── schedules/               # Módulo de agendamentos
│   │       ├── cancel.js            # Cancelar agendamento
│   │       ├── load.js              # Carregar agendamentos
│   │       └── show.js              # Exibir agendamentos na tela
│   │
│   ├── services/                     # Serviços de API (requisições HTTP)
│   │   ├── api-config.js            # Configuração base da API
│   │   ├── schedule-cancel.js       # DELETE /schedules/:id
│   │   ├── schedule-fetch-by-day.js # GET /schedules (por data)
│   │   └── schedule-new.js          # POST /schedules (novo)
│   │
│   ├── styles/                       # Estilos CSS
│   │   ├── global.css               # Estilos globais
│   │   ├── form.css                 # Estilos do formulário
│   │   └── schedule.css             # Estilos do calendário
│   │
│   └── utils/                        # Funções utilitárias
│       └── opening-hours.js         # Horários de funcionamento
│
├── index.html                        # HTML entrada (template)
├── webpack.config.js                 # Configuração Webpack
├── package.json                      # Dependências e scripts npm
├── package-lock.json                 # Lock de versões (não editar)
├── server.json                       # Banco de dados JSON (API simulada)
└── README.md                         # Este arquivo
```

## 🎓 Guia de Desenvolvimento

### Arquitetura Modular

O projeto segue uma arquitetura modular com separação clara de responsabilidades:

```
Camada de Apresentação (Módulos)
          ↓
Camada de Dados (Services)
          ↓
Camada de Rede (API)
          ↓
JSON Server (Banco de Dados)
```

### Exemplo: Novo Agendamento

1. **Usuário interage** → `form/submit.js` captura evento
2. **Validação** → `utils/opening-hours.js` verifica disponibilidade
3. **Requisição HTTP** → `services/schedule-new.js` envia dados
4. **API processa** → JSON Server salva em `server.json`
5. **Atualização** → `schedules/show.js` renderiza novo agendamento

### Fluxo de Dados

```javascript
// Exemplo de como os módulos se conectam:
import { newSchedule } from './services/schedule-new.js';
import { loadSchedules } from './schedules/load.js';

async function handleSubmit(formData) {
  try {
    await newSchedule(formData);      // Envia ao servidor
    await loadSchedules();             // Recarrega lista
  } catch (error) {
    console.error('Erro ao agendar:', error);
  }
}
```

## 🧩 Módulos

### Module: Form

Responsável por toda interação com o formulário de agendamento.

**Arquivo** | **Responsabilidade**
---|---
`date-change.js` | Atualiza horas disponíveis quando data muda
`hours-click.js` | Seleciona/deseleciona horário
`hours-load.js` | Carrega matriz de horas do dia
`submit.js` | Valida e submete agendamento

**Exemplo de uso:**
```javascript
// modules/form/submit.js
export async function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  await newSchedule(Object.fromEntries(formData));
}
```

### Module: Schedules

Responsável por exibir, atualizar e cancelar agendamentos.

**Arquivo** | **Responsabilidade**
---|---
`load.js` | Busca agendamentos da API
`show.js` | Renderiza agendamentos no DOM
`cancel.js` | Remove agendamento após confirmação

**Exemplo de uso:**
```javascript
// modules/schedules/show.js
export function showSchedules(schedules) {
  const container = document.querySelector('#schedules');
  container.innerHTML = schedules
    .map(item => `<div class="schedule">${item.name}</div>`)
    .join('');
}
```

## 📡 Serviços de API

Todos os serviços lidam com requisições à API do JSON Server.

### API Base URL

```javascript
// services/api-config.js
const API_BASE_URL = 'http://localhost:3333';
```

### schedule-new.js (POST)

Cria novo agendamento.

```javascript
export async function newSchedule(data) {
  const response = await fetch(`${API_BASE_URL}/schedules`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  if (!response.ok) throw new Error('Erro ao criar agendamento');
  return await response.json();
}
```

**Payload esperado:**
```json
{
  "id": "123abc",
  "name": "Cliente",
  "when": "2025-04-10",
  "time": "14:00"
}
```

### schedule-fetch-by-day.js (GET)

Busca agendamentos de um dia específico.

```javascript
export async function fetchSchedulesByDay(date) {
  const response = await fetch(`${API_BASE_URL}/schedules?when=${date}`);
  if (!response.ok) throw new Error('Erro ao buscar agendamentos');
  return await response.json();
}
```

### schedule-cancel.js (DELETE)

Cancela um agendamento existente.

```javascript
export async function cancelSchedule(id) {
  const response = await fetch(`${API_BASE_URL}/schedules/${id}`, {
    method: 'DELETE'
  });
  
  if (!response.ok) throw new Error('Erro ao cancelar agendamento');
  return await response.json();
}
```

## 🔧 Configuração Webpack

### webpack.config.js

```javascript
// Bundler que processa:
// - Transpilação ES6 → ES5 (Babel)
// - Minificação CSS e JS
// - Cópia de assets
// - Injeção automática em HTML
```

**Principais plugins:**
- `html-webpack-plugin`: Gera `index.html` automaticamente
- `copy-webpack-plugin`: Copia imagens/assets na build
- `style-loader` + `css-loader`: Processa CSS

## 🐛 Troubleshooting

### Problema: "Cannot find module"

**Solução:**
```bash
# Reinstale todas as dependências
rm -rf node_modules package-lock.json
npm install
```

### Problema: "Port 3333 is already in use"

**Solução:**
```bash
# Especifique outra porta
npm run server -- --port 3334
```

### Problema: "Module not found at localhost:3333"

**Solução:**
```bash
# Certifique-se de que JSON Server está rodando
npm run server
# Em outro terminal
npm run dev
```

### Problema: Build quebrado após mudanças

**Solução:**
```bash
# Limpe cache e rebuilde
npm run build -- --mode=development
```

### Problema: Hot-reload não funciona

**Solução:**
1. Verifique se `webpack-dev-server` está rodando
2. Recarregue a página manualmente (F5)
3. Verifique se não há erros no console

## 📚 Conceitos Aprendidos

- ✅ **Fetch API**: Requisições HTTP (GET, POST, DELETE)
- ✅ **Modularização ES6**: `import/export` para organização
- ✅ **Programação Assíncrona**: `async/await` e Promises
- ✅ **Manipulação DOM**: Seletores, criação e atualização de elementos
- ✅ **Webpack**: Build tools e bundling
- ✅ **Babel**: Transpilação de código moderno
- ✅ **JSON Server**: API mock para desenvolvimento
- ✅ **Git**: Versionamento de código
- ✅ **Day.js**: Manipulação de datas/horas


## 📖 Recursos Úteis

- [Documentação Day.js](https://day.js.org)
- [JSON Server](https://github.com/typicode/json-server)
- [Webpack](https://webpack.js.org)
- [Fetch API MDN](https://developer.mozilla.org/docs/Web/API/Fetch_API)
- [ES6 Modules](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import)

---

**Desenvolvido por**: Tawhin Chiang  
**Objetivo**: Estudos práticos em desenvolvimento web moderno  
**Data**: 2025
