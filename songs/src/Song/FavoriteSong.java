package Song;

public class FavoriteSong {
    public void addFavoriteSong(Song song){
        if (song.getClassification() > 10){
            System.out.println(song.getTitle() + " Its excellent!");
        }else {
            System.out.println(song.getTitle() + " Its nice!");
        }
    }
}
