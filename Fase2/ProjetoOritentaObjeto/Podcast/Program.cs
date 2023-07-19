
// Primeiro programa POO em C#
Convidado convidado1 = new Convidado("Alura");

Episodio episodio1 = new Episodio("Primeiro POO em C#", 600, 1, "Primeiro programa POO em C#, sendo realizado atraves de um desafio do ALURA");
episodio1.AdicionaConvidado(convidado1);


Podcast podcast1 = new Podcast("Youtube", "TectrilhaCast");
podcast1.AdiocionaEpisodio(episodio1);

podcast1.ExibirDetalhes();

Console.WriteLine("Tecle entrar para fechar ...");
Console.ReadLine();
