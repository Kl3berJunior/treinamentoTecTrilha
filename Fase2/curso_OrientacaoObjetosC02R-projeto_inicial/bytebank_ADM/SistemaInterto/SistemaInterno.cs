using bytebank_ADM.Funcionarios;
using ByteBank_ADM.Funcionarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.SistemaInterto
{
    internal class SistemaInterno
    {
        public bool Logar(Diretor funcionario, string senha)
        {
            bool usuarioAutenticado = funcionario.Autenticar(senha);
            if(usuarioAutenticado)
            {
                Console.WriteLine("Boas vindas ao Sistema");
                return true;
            }
            else
            {
                Console.WriteLine("Falha na autentificação");
                return false;
            }
        }

        public bool Logar(GerenteDeConta funcionario, string senha)
        {
            bool usuarioAutenticado = funcionario.Autenticar(senha);
            if (usuarioAutenticado)
            {
                Console.WriteLine("Boas vindas ao Sistema");
                return true;
            }
            else
            {
                Console.WriteLine("Falha na autentificação");
                return false;
            }
        }
    }
}
