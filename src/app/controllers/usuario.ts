export class Usuario {
    public _id: String = void(0);
    public nome_usuario: String = void(0);
    public login_usuario: String = void(0);
    public senha_usuario: String = void(0);
    public setor: Setor = void(0);
    
    constructor(){}
}

interface Setor {
    _id: String,
    nome: String
}