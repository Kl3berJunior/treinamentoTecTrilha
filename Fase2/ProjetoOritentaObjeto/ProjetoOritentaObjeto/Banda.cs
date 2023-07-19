class Banda
{
    private List<Album> albums = new List<Album>();
    public string Nome { get; }

    public void AdicionarAlbum(Album album)
    {
        albums.Add(album);
    }

    public Banda(string nome)
    {
        Nome = nome;
    }

    public void ExibirDiscografia()
    {
        Console.WriteLine($"Discografia da banda {Nome}\n");

        albums.ForEach(album =>
        {
            Console.WriteLine($"Álbum: {album.Nome} ({album.DuracaoTotal})");
        });
    }

}