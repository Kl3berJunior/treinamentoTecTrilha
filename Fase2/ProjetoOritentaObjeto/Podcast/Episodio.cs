class Episodio
{
    public string Titulo { get; set; }
    public int Duracao { get; set; }
    public int Ordem { get; set; }
    public string Resumo { get; set; }
    public List<Convidado> Convidados = new List<Convidado>();

    // Construtor de Episodio
    public Episodio(string titulo, int duracao, int ordem, string resumo)
    {
        Titulo = titulo;
        Duracao = duracao;
        Ordem = ordem;
        Resumo = resumo;
    }

    public void AdicionaConvidado(Convidado convidado)
    {
        Convidados.Add(convidado);
    }

    public string ExibeConvidados()
    {
        string feat = "";

        foreach(var convidado in Convidados)
        {
            feat += (convidado.Nome + "," + " ");
        }

        return feat;
    }
}