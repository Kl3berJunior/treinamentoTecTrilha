export class UsuarioService {

    private usuarios = [];

    public criaUsuario(usuario) {
        this.usuarios.push(usuario);

        return usuario;
    }

    public mostraUsuarios() {
        return this.usuarios
    }

}