public class App {
    public static void main(String[] args) throws Exception {

        Multifuncional copiadora = new Copiadora();
        Multifuncional escaneadora = new Escaneadora();
        Multifuncional impressora = new Impressora();

        Usuario novoUsuario = new Usuario();

        novoUsuario.setMultifuncional(copiadora);
        novoUsuario.realizaTarefa();
        novoUsuario.setMultifuncional(escaneadora);
        novoUsuario.realizaTarefa();
        novoUsuario.setMultifuncional(impressora);
        novoUsuario.realizaTarefa();
        

    }
}
