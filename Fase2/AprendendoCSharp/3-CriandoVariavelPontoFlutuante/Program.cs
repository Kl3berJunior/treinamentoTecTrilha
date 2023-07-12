using System;

class Programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("3 - Imposto de Renda\n\n");

        Console.WriteLine("Informe qual o seu salario:");
        float salario;
        salario = float.Parse(Console.ReadLine()); if (salario > 4664.68)
        {
            Console.WriteLine("Burguês safado paga imposto sim");
        }else if(salario <= 4664.68 && salario >= 3751.06)
        {
            Console.WriteLine("Ihhh, Vai pagar imposto comedia");
        }else if (salario >= 2826.66 && salario <= 3751.05)
        {
            Console.WriteLine("Não é lá essas coisas todas mais ainda assim paga imposto otario");
        }else if (salario >= 2112.01 && salario <= 2862.65)
        {
            Console.WriteLine("Isso que dá vencer na vida, agora vai pagar imposto kkk");
        }
        else
        {
            Console.WriteLine("Pobre não paga imposto");
        }




        Console.WriteLine("\n\nTecla enter para fechar ...");
        Console.ReadLine();
    }
}