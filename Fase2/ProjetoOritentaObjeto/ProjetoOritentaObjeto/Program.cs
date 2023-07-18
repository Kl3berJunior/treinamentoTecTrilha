Album albumDoQueen = new Album();
albumDoQueen.Nome = "A nigth at the opera";

Musica musica1 = new Musica();
musica1.Nome = "Love of my life";

Musica musica2 = new Musica();
musica2.Nome = "Bohemia Rhapsody";

albumDoQueen.AdicionarMusica(musica1);
albumDoQueen.AdicionarMusica(musica2);

albumDoQueen.ExibirMusicasDoAlbum();
























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
