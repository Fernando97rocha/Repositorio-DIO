public class Usuario {

    private Multifuncional multifuncional;

    public void setMultifuncional(Multifuncional multifuncional) {
        this.multifuncional = multifuncional;
    }

    public void realizaTarefa() {
        multifuncional.executa();
    }


}


