export enum TipoDeNotificacao{
    SUCESSO,
    ATENCAO,
    FALHA
}

export interface INotificacao{
    titulo: string,
    texto: string,
    tipo: TipoDeNotificacao,
    id: number
}