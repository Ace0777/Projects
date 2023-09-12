package Main;

import Song.FavoriteSong;
import TypeOfSongs.Music;
import TypeOfSongs.Podcast;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {

        Music music = new Music();
        music.setTitle("Forever");
        music.setArtist("Kiss");

        for (int i = 0; i < 7; i++) {
            music.reproduction();
        }
        for (int i = 0; i < 20; i++) {
            music.like();
        }

        Podcast podcast = new Podcast();
        podcast.setTitle("Bolha dev");
        podcast.setHost("Marcos Mendes");

        for (int i = 0; i < 150; i++) {
            podcast.reproduction();
        }
        for (int i = 0; i < 120; i++) {
            podcast.like();
        }

        FavoriteSong favoriteSong = new FavoriteSong();

        ArrayList<String> buscaPorArtista = new ArrayList<>();

        buscaPorArtista.add("luis");
        buscaPorArtista.add("teste");
        Collections.sort(buscaPorArtista);

        favoriteSong.addFavoriteSong(music);
        favoriteSong.addFavoriteSong(podcast);


    }
}