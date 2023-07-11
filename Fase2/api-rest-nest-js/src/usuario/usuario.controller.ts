import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBiudel } from "../core/http/nest-response-biulder";


@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) { }

    @Post()
    public criaUsuario(@Body() usuario: Usuario,): NestResponse {

        const usuarioCriado = this.usuarioService.criaUsuario(usuario);
        return new NestResponseBiudel()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
                'Locarion': `/users/${usuarioCriado.nomeDoUsuario}`
            })
            .comBody(usuarioCriado)
            .build();

        // res.status(HttpStatus.CREATED)
        //     .location(`/users/${usuarioCriado.nomeDoUsuario}`)
        //     .json(usuarioCriado)
        // return usuarioCriado;
    }

    @Get()
    public mostraTodosUsuarios() {
        return this.usuarioService.mostraTodosUsuarios();
    }

    @Get(':nomeDoUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDoUsuario') nomeDoUsuario: string) {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDoUsuario);

        if(!usuarioEncontrado){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuario não encontrado'
            });
        }
        return usuarioEncontrado;
    }
}
