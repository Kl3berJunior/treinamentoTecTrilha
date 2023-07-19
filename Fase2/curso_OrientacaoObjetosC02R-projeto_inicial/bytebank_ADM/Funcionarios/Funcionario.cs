﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.Funcionarios
{
    public class Funcionario
    {
        public string Nome { get; set; }
        public string CPF { get; set; }
        public double Salario { get; set; }

        public Funcionario(string nome, string cPF, double salario)
        {
            Nome = nome;
            CPF = cPF;
            Salario = salario;
        }

        public double GetBonificacao()
        {
            return this.Salario * 0.10;
        }

    }
}
