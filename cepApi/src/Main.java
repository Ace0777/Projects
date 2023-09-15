import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        SearchCep searchCep = new SearchCep();

        System.out.println("Enter a zip code: ");
        var zip = scanner.nextLine();

        try {
            Address address = searchCep.search(zip);
            FileGenerator generator = new FileGenerator();
            generator.toJson(address);
        } catch (RuntimeException | IOException e){
            System.out.println(e.getMessage());
        }

    }
}