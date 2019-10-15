import { TipoSetor } from '../tipo-setor/tipo-setor';

export class Usuario {
    _id: String;
    nome_usuario: String;
    login_usuario: String;
    senha_usuario: String;
    tipo_setor: TipoSetor;
}