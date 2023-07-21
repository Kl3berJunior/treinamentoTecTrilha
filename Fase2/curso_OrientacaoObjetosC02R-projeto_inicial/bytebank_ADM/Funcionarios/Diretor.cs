using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.Funcionarios
{
    public class Diretor : Funcionario
    {

        public Diretor(string cpf) : base(cpf, 5000)
        {
            
        }

        public override double GetBonificacao()
        {
            return this.Salario * 0.5;
        }

        public override void AumentaSalario()
        {
            this.Salario *= 1.15;
        }
        public string Senha { get; set; }

        public bool Autenticar(string senha)
        {
            return this.Senha == senha;
        }
    }
}
