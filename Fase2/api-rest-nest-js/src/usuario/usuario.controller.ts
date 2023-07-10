import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) { }
    @Post()
    public criaUsuario(@Body() usuario: Usuario): Usuario {

        const usuarioCriado = this.usuarioService.criaUsuario(usuario);
        return usuarioCriado;
    }

    @Get()
    public mostraTodosUsuarios() {
        return this.usuarioService.mostraTodosUsuarios();
    }

    @Get(':nomeDoUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDoUsuario') nomeDoUsuario: string) {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDoUsuario);
        return usuarioEncontrado;
    }
}
