﻿using bytebank_ADM.Funcionarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank_ADM.Funcionarios
{
    public class GerenteDeConta : Funcionario
    {
        public GerenteDeConta(string cpf) : base(cpf, 4000)
        {

        }

        public override double GetBonificacao()
        {
            return Salario * 0.25;
        }

        public override void AumentaSalario()
        {
            Salario *= 1.05;
        }

        public string Senha { get; set; }

        public bool Autenticar(string senha)
        {
            return this.Senha == senha;
        }


    }
}