class Podcast
{
    public string Host { get; }
    public string Nome { get; }
    public int TotalEpisodios = 0;
    public List<Episodio> Episodios = new List<Episodio>();

    // Construtor de Podcast
    public Podcast(string host, string nome)
    {
        Host = host;
        Nome = nome;
    }

    public void AdiocionaEpisodio(Episodio episodio)
    {
        TotalEpisodios++;
        Episodios.Add(episodio);
    }

    public void ExibirDetalhes()
    {
        Console.WriteLine($"O PODCAST {Nome} é transmitido na plataforma {Host}.\nTendo um total de {TotalEpisodios} episidios");
        Console.WriteLine("Lista de episodios:");
        Episodios.ForEach(episodio =>
        {
            if(episodio.Convidados.Count > 0)
            {
            Console.WriteLine($"EP.{episodio.Ordem} {episodio.Titulo} feat {episodio.ExibeConvidados()}");

            }
            else
            {
                Console.WriteLine($"EP.{episodio.Ordem} {episodio.Titulo}");
            }
        });
    }
}