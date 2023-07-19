class Musica
{
    public string Nome { get; }
    public Banda Artista { get; }
    public int Duracao { get; }
    public bool Disponivel { get; set; }
    public string DescricaoResumida => $"A música {Nome} pertence a banda {Artista.Nome}";

    public Musica(string nome, Banda artista, int duracao)
    {
        Nome = nome;
        Artista = artista;
        Duracao = duracao;
    }

    public void ExibirFichaTecnica()
    {
        Console.WriteLine($"Nome: {Nome}");
        Console.WriteLine($"Artista: {Artista.Nome}");
        Console.WriteLine($"Duração: {Duracao}");
        if (Disponivel)
        {
            Console.WriteLine("Disponivel no plano");
        }
        else { Console.WriteLine("Adquira o plano Plus+"); }
        Console.WriteLine(DescricaoResumida);
    }
}