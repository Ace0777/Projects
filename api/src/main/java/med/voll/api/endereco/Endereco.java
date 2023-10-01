package med.voll.api.endereco;


import jakarta.persistence.Embeddable;

@Embeddable
public class Endereco {

   private String logradouro;
    private  String bairro;
    private String cep;
    private String cidade;
    private String uf;
    private String complemento;
    private String numero;


}
