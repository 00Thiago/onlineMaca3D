# Visualizador 3D - Como Executar

## Opções de Execução

### 🐳 Opção 1: Com Docker

#### Pré-requisitos
- Docker instalado
- Docker Compose instalado

#### Como executar
```bash
# Construir e executar
docker-compose up --build -d

# Parar o container
docker-compose down
```

### 💻 Opção 2: Sem Docker (Node.js local)

#### Pré-requisitos
- Node.js instalado (v14 ou superior)
- npm instalado

#### Como executar

**Método 1: npm scripts (recomendado)**
```bash
# Instalar dependências (primeira vez)
npm install

# Executar servidor local
npm run start:local

# Ou executar e abrir navegador automaticamente
npm run dev
```

**Método 2: Comando npm padrão**
```bash
# Instalar dependências (primeira vez)
npm install

# Executar servidor (configurado para Docker/produção)
npm start
```

**Método 3: Comando direto**
```bash
# Instalar http-server globalmente (primeira vez)
npm install -g http-server

# Executar servidor
http-server . -p 8080 -a localhost --cors
```

## Scripts npm disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `npm start` | `http-server . -p 8080 -a 0.0.0.0 --cors` | Servidor para Docker/produção |
| `npm run start:local` | `http-server . -p 8080 -a localhost --cors` | Servidor para desenvolvimento local |
| `npm run dev` | `http-server . -p 8080 -a localhost --cors -o` | Servidor local + abre navegador |
| `npm run install-server` | `npm install -g http-server` | Instala http-server globalmente |

## Acessar a aplicação

Após executar qualquer método, acesse: **http://localhost:8080**
