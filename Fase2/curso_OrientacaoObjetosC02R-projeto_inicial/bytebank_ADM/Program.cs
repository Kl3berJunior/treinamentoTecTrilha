using bytebank_ADM.Funcionarios;

Funcionario pedro = new Funcionario("Pedro", "999.999.999-99", 3500.00);
Console.WriteLine(pedro.Nome);
Console.WriteLine(pedro.GetBonificacao());