Banda queen = new Banda("Queen");

Album albumDoQueen = new Album("A nigth at the opera");
Musica musica1 = new Musica("Love of my life", queen, 196);
Musica musica2 = new Musica("Bohemia Rhapsody", queen, 278)
{
    Disponivel = false
};

albumDoQueen.AdicionarMusica(musica1);
albumDoQueen.AdicionarMusica(musica2);
queen.AdicionarAlbum(albumDoQueen);

albumDoQueen.ExibirMusicasDoAlbum();
queen.ExibirDiscografia();

musica1.ExibirFichaTecnica();
musica2.ExibirFichaTecnica();

























/*
Musica musica1 = new Musica();
musica1.Nome = "Melhor Só";
musica1.Artista = "Kawe & Bacu Exu Do Blues";
musica1.Duracao = 273;
musica1.Disponivel = true; 
musica1.ExibirFichaTecnica();



Musica musica2 = new Musica();
musica2.Nome = "Vertigo";
musica2.Artista = "U2";
musica2.Duracao = 367;
musica2.Disponivel = false;
musica2.ExibirFichaTecnica();

Console.WriteLine("Tecle enter pra fechar...");
Console.ReadLine();*/
