
using System;
class programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("Executando encadeamento de FOR\n");
        Console.WriteLine("Com o break");
        for (int contadorLinhas = 0; contadorLinhas < 10; contadorLinhas++)
        {
            for(int contadorColunas = 0;contadorColunas < 10;contadorColunas++)
            {
                string estrela = "*";
                Console.Write(estrela);

                if(contadorColunas >= contadorLinhas) { break; }
            }
            Console.WriteLine();
        }

        Console.WriteLine("\nSem o break");
        for (int contadorLinhas = 0; contadorLinhas < 10; contadorLinhas++)
        {
            for (int contadorColunas = 0; contadorColunas <= contadorLinhas; contadorColunas++)
            {
                string estrela = "*";
                Console.Write(estrela);
            }
            Console.WriteLine();
        }

        Console.WriteLine("Tecle qualquer botão para fechar");
        Console.ReadLine();
    }
}

