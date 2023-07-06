import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) { }
    @Post()
    public criaUsuario(@Body() usuario) {
        const usuarioCriado = this.usuarioService.criaUsuario(usuario)
        return usuarioCriado;
    }
    @Get()
    public mostraUsuarios() {
        return this.usuarioService.mostraUsuarios();
    }
}