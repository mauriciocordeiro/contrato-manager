import { TipoContaInterface } from '../tipo-conta/tipo-conta.interface';
import { StatusContaInterface } from '../status-conta/status-conta.interface';

export interface ContaInterface {
    _id: String,
    tipo_conta: TipoContaInterface,
    status_conta: StatusContaInterface,
    valor_conta: Number,
    valor_pago: Number
}