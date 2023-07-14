using System;

class Programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("Executando as condicionais");

        int idadeJoao = 16;

        if(idadeJoao >= 18)
        {
            Console.WriteLine("Pode entrar");
        }
        else
        {
            Console.WriteLine("Não Pode entrar");
        }


        Console.WriteLine("Tecle enter para fechar ...");
        Console.ReadLine();
    }
}