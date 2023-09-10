package Song;

public class Song {

    private String title;
    private  int totalReproductions;
    private int totalLikes;
    private int classification;



    public void like(){
        this.totalLikes++;
    }
    public void reproduction(){
        this.totalReproductions++;
    }


    public int getTotalReproductions() {
        return totalReproductions;
    }

    public int getTotalLikes() {
        return totalLikes;
    }

    public int getClassification() {
        return classification;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
