package br.com.alura.TabelaFipe.principal;

import br.com.alura.TabelaFipe.model.Modelo;
import br.com.alura.TabelaFipe.model.Veiculo;
import br.com.alura.TabelaFipe.model.VeiculoEspecifico;
import br.com.alura.TabelaFipe.service.ConsumoApi;
import br.com.alura.TabelaFipe.service.ConverteDados;


import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Principal {

    private Scanner sc = new Scanner(System.in);

    private ConsumoApi consumo = new ConsumoApi();

    private ConverteDados conversor = new ConverteDados();

    private final String URL = "https://parallelum.com.br/fipe/api/v1/";

    private final String MARCAS = "/marcas";


    public void exibeMenu(){

       var menu ="""
                  Escolha um tipo de veículo:
                 1- Carro
                 2- Moto
                 3- Caminhão
                 """;

        System.out.println(menu);
        var tp = sc.nextLine();

        String endereco;

        if (tp.toLowerCase().contains("carr")){
            endereco = URL + "carros/marcas";


        }else  if (tp.toLowerCase().contains("mot")){
            endereco = URL + "motos/marcas";

        }else {
            endereco = URL + "caminhoes/marcas";
        }

        var json = consumo.obterDados(endereco);
        var marcas = conversor.obeterList(json, Veiculo.class);
        marcas.stream().sorted(Comparator.comparing(Veiculo::codigo))
                .forEach(System.out::println);

        System.out.println("Informe o codigo da marca para consultar: ");
        var codigoMarca = sc.nextLine();
        endereco += "/" + codigoMarca + "/modelos";
        json = consumo.obterDados(endereco);
        var modeloLista = conversor.obterDados(json, Modelo.class);

        System.out.println("\n Modelos dessa marca: ");
        modeloLista.modelos().stream().sorted(Comparator.comparing(Veiculo::nome))
                .forEach(System.out::println);

        System.out.println("\nDigite o nome do carro a ser buscado");
        var nomeVeiculo = sc.nextLine();
        List<Veiculo> modelosFiltrados = modeloLista.modelos().stream()
                .filter(m -> m.nome().toLowerCase().contains(nomeVeiculo.toLowerCase()))
                .collect(Collectors.toList());

        System.out.println("\nModelos filtrados");
        modelosFiltrados.forEach(System.out::println);

        System.out.println("Informe o codigo do modelo para consultar: ");
        var codigoModelo = sc.nextLine();

        endereco += "/" + codigoModelo + "/anos";
        json = consumo.obterDados(endereco);
        List<Veiculo> anos =  conversor.obeterList(json,Veiculo.class);
        List<VeiculoEspecifico> veiculos = new ArrayList<>();

        for(int i = 0; i < anos.size(); i++){
            var enderecoAnos = endereco + "/" + anos.get(i).codigo();
            json = consumo.obterDados(enderecoAnos);
            VeiculoEspecifico veiculoEspecifico = conversor.obterDados(json, VeiculoEspecifico.class);
            veiculos.add(veiculoEspecifico);
        }

        System.out.println("\nTodos os veiculos filtrados com avaliação por ano: ");
        veiculos.forEach(System.out::println);
    }

}
