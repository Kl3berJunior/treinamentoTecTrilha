import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";

export class Usuario {
    id: number;

    @IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório.'
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser uma string.'
    })
    @IsNomeDeUsuarioUnico({
        message: 'nomeDoUsuario precisa ser único'
    })
    nomeDoUsuario: string;

    @IsEmail({}, {
        message: 'email precisa ser um endereço de email válido.'
    })
    email: string;

    @IsNotEmpty({
        message: 'senha é obrigatório.'
    })
    senha: string;

    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório.'
    })
    nomeCompleto: string;

    dataDeEntrada: Date;
}