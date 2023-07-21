using ByteBank.Funcionarios;
using bytebank_ADM.Funcionarios;
using bytebank_ADM.SistemaInterto;
using bytebank_ADM.Utilitario;
using ByteBank_ADM.Funcionarios;

#region
Auxiliar pedro = new Auxiliar("999.999.999-99");
pedro.Nome = "Pedro";
Console.WriteLine(pedro.Nome);
Console.WriteLine(pedro.GetBonificacao());


Diretor roberta = new Diretor("999.999.999-99");
roberta.Nome = "Roberta";
Console.WriteLine(roberta.Nome);
Console.WriteLine(roberta.GetBonificacao());


GerenciadorDeBonificacao gerenciador = new GerenciadorDeBonificacao();
gerenciador.Registrar(pedro);
gerenciador.Registrar(roberta);


Console.WriteLine("O total de bonificações foi de: " + gerenciador.TotalBonificao);


pedro.AumentaSalario();
roberta.AumentaSalario();
Console.WriteLine("O novo salario do Pedro é: " + pedro.Salario);
Console.WriteLine("O novo salario da Roberta é: " + roberta.Salario);
#endregion


CalcularBonificacao();
void CalcularBonificacao()
{
    GerenciadorDeBonificacao gerenciador = new GerenciadorDeBonificacao();

    Designer ulisses = new Designer("123456789");
    ulisses.Nome = "Ulisses Solza";

    Diretor paula = new Diretor("987654321");
    paula.Nome = "Paula Gomes";

    GerenteDeConta higor = new GerenteDeConta("999888777");
    higor.Nome = "Higor Meirels";

    Auxiliar camila = new Auxiliar("111222333");
    camila.Nome = "Camila Dias";

    gerenciador.Registrar(camila);
    gerenciador.Registrar(higor);
    gerenciador.Registrar(paula);
    gerenciador.Registrar(ulisses);

    Console.WriteLine("Total de bonificação = " + gerenciador.TotalBonificao);

}


void UsarSistema()
{
    SistemaInterno sistema = new SistemaInterno();



}

Console.WriteLine("O total de funcionarios é: " + Funcionario.TotalFuncionarios);
