import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {

    private usuarios: Usuario[] = [];

    public criaUsuario(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);

        return usuario;
    }

    public mostraTodosUsuarios() {
        return this.usuarios
    }

    public buscaPorNomeDeUsuario(nomeDoUsuario: string) {
        return this.usuarios.find(usuario => usuario.nomeDoUsuario == nomeDoUsuario)
    }

}