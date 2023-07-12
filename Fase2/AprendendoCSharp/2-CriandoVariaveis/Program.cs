using Microsoft.VisualBasic;
using System;

class Programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("Projeto 2 - Criando Variaveis\n\n");
        

        Console.WriteLine("Digite o ano de nascimento para calcular a idade");
        int anoDeNacimento;
        anoDeNacimento = int.Parse(s: Console.ReadLine());

        int idade;
        int anoAtual = DateTime.Now.Year;
        idade = anoAtual - anoDeNacimento;
        
        Console.WriteLine("Você tem " + idade + " anos de idade");

        Console.WriteLine("\n\nTecla enter para fechar ...");
        Console.ReadLine();
    }
}