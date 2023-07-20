using bytebank_ADM.Funcionarios;
using bytebank_ADM.Utilitario;

Funcionario pedro = new Funcionario("999.999.999-99",1500);
pedro.Nome = "Pedro";
Console.WriteLine(pedro.Nome);
Console.WriteLine(pedro.GetBonificacao()); 


Diretor roberta = new Diretor("999.999.999-99", 3000);  
roberta.Nome = "Roberta";
Console.WriteLine(roberta.Nome);
Console.WriteLine(roberta.GetBonificacao());


GerenciadorDeBonificacao gerenciador = new GerenciadorDeBonificacao();
gerenciador.Registrar(pedro);
gerenciador.Registrar(roberta);

Console.WriteLine("O total de bonificações foi de: " + gerenciador.TotalBonificao);
Console.WriteLine("O total de funcionarios é: " + Funcionario.TotalFuncionarios);