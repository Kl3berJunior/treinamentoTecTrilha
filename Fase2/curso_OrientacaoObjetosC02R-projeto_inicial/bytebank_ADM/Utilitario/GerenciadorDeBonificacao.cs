using bytebank_ADM.Funcionarios;

namespace bytebank_ADM.Utilitario
{
    public class GerenciadorDeBonificacao
    {
        public double TotalBonificao { get; private set; }

        public void Registrar(Funcionario funcionario)
        {
            this.TotalBonificao += funcionario.GetBonificacao();
        }

    }
}
