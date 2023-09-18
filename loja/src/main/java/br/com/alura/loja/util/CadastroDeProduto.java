package br.com.alura.loja.util;

import br.com.alura.loja.dao.CategoriaDao;
import br.com.alura.loja.dao.ProdutoDao;
import br.com.alura.loja.modelo.Categoria;
import br.com.alura.loja.modelo.Produto;

import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.util.List;

public class CadastroDeProduto {

    public static void main(String[] args) {
        cadastrarProduto();
        EntityManager em = JPAUtil.getEntityManager();
        ProdutoDao produtoDao = new ProdutoDao(em);

       Produto p = produtoDao.buscarPorId(1l);
        System.out.println(p.getPreco());

       List<Produto> todos =  produtoDao.buscarTodos();
       todos.forEach(p2 -> System.out.println(p2.getNome()));

       List<Produto> todos2 =  produtoDao.buscarPorNome("Iphone XR");
       todos2.forEach(p3 -> System.out.println(p3.getNome()));

        List<Produto> todos3 =  produtoDao.buscarPorNomeDaCategoria("CELULARES");
        todos3.forEach(p4 -> System.out.println(p4.getNome()));


        BigDecimal precoDoProduto = produtoDao.buscarPrecoDoProdutoComNome("Iphone XR");
        System.out.println("Preco do Produto: " +precoDoProduto);
    }

    private static void cadastrarProduto() {
        Categoria celulares = new Categoria("CELULARES");
        Produto celular = new Produto("Iphone XR","Muito legal!",new BigDecimal(800),celulares);


        EntityManager em = JPAUtil.getEntityManager();
        ProdutoDao produtoDao = new ProdutoDao(em);
        CategoriaDao categoriaDao = new CategoriaDao(em);

        em.getTransaction().begin();

        categoriaDao.cadastrar(celulares);
        produtoDao.cadastrar(celular);

        em.getTransaction().commit();
        em.close();
    }
}
