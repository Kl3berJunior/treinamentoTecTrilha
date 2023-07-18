class Programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("Executando Calcula Poupança\n\n");

        double investimentoWhile = 1000;

        // Rendimento de 0.5% ao mês == 0,005

        Console.WriteLine("Calculo pelo metodo While");
        int mesWhile = 1;
        while (mesWhile <= 12)
        {
            investimentoWhile = investimentoWhile + (investimentoWhile * 0.005);
            Console.WriteLine("O valor do mês " + mesWhile + " é " + investimentoWhile.ToString("F") + " reais.");
            mesWhile++;
        }
        Console.WriteLine("O valor retornado do investimento é de " + investimentoWhile.ToString("F") + " reais.\n\n");


        Console.WriteLine("Calculo pelo metodo FOR");
        double investimentoFor = 1000;
        for (int mesFor = 1; mesFor <= 12; mesFor++)
        {
            investimentoFor *= 1.005;
            Console.WriteLine("O valor do mês " + mesFor + " é " + investimentoFor.ToString("F") + " reais.");
        }
        Console.WriteLine("O valor retornado do investimento é de " + investimentoFor.ToString("F") + " reais.\n\n");


        Console.WriteLine("Calculo pelo metodo FOR com condição");
        double investimentoForFor = 1000;
        double fatorRendimento = 1.005;
        for (int anos = 1; anos <= 5; anos++)
        {
            Console.WriteLine("No ano " + anos + " o fator rendimento é de " + fatorRendimento + "\n");

            for (int mes = 1; mes <= 12; mes++)
            {
                investimentoForFor *= fatorRendimento;
            }
            fatorRendimento += 0.001;
        }
        Console.WriteLine("O valor retornado do investimento é de " + investimentoForFor.ToString("F") + " reais.\n\n");






















        Console.WriteLine("Tecle enter para fechar");
        Console.ReadLine();
    }
}