public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        IPhone novoIphone = new IPhone();
        novoIphone.ligar();
        novoIphone.atender();
        novoIphone.iniciarCorreioVoz();
        novoIphone.tocar();
        novoIphone.pausar();
        novoIphone.selecionarMusica();
        novoIphone.adicionarNovaAba();
        novoIphone.exibirPagina();
        novoIphone.atualizarPagina();
    }
}