using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.Funcionarios
{
    public class Funcionario
    {
        public string Nome { get; set; }
        public string CPF { get; private set; }
        public double Salario { get; private set; }
        public static int TotalFuncionarios { get; private set; }

        public virtual double GetBonificacao()
        {
            return this.Salario * 0.10;
        }

        public Funcionario(string cpf, double salario)
        {
            this.Salario = salario;
            this.CPF = cpf;
            TotalFuncionarios++;
        }

        public void AumentaSalario()
        {
            this.Salario = Salario + (this.Salario * 0.1);
        }

    }
}
