import express, { response } from 'express';

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

/* 
GET: Buscar uma ou mais informações do back-end
POST: Criar uma nova informação no back-end
PUT: Alterar alguma informação do back-end
DELETE: Apagar alguma informação do backend 
*/

// POST http://localhost:3333/users => Criar um usuario
// GET http://localhost:3333/users => Listar usuario
// GET http://localhost:3333/users/5 => Buscar usuario 5

// Tipos de Parâmetros
// Request Params: Parâmetros que estão incluídos na própria rota que identificam um recurso
// Query Param: Parâmetros que vêm na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualizaçao de informações

const users = [
    'Fábio',
    'Maria Laura',
    'Veridiana',
    'Irene',
    'Mariah',
    'Aline',
    'Luciene'];

app.get('/users', (req, res) => {
    const search = String(req.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    console.log('Listagem de usuários')
    return res.json(filteredUsers)
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    const user = users[id];
    return res.json(user)
});

app.post('/users', (req, res) => {
    const data = req.body;
    
    const user = {
        name: data.nome,
        email: data.email
    }
    return res.json(user);
});

app.listen(3333)