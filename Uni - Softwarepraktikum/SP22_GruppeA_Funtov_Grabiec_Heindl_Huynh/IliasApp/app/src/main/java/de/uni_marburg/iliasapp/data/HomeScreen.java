package de.uni_marburg.iliasapp.data;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.view.View;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

import de.uni_marburg.iliasapp.Kalender;
import de.uni_marburg.iliasapp.MainActivity;
import de.uni_marburg.iliasapp.MeineVeranstaltungen;
import de.uni_marburg.iliasapp.Mensa;
import de.uni_marburg.iliasapp.Modul;
import de.uni_marburg.iliasapp.R;
import de.uni_marburg.iliasapp.Raumsuche;

public class HomeScreen extends AppCompatActivity {

    public static ArrayList<Modul> modulListe = new ArrayList<>();
    Bundle bundle;
    public String sessionId;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.homescreen);
         bundle = getIntent().getExtras();
         sessionId = bundle.getString("sid");

        AssetManager assetManager = getAssets();

    }



    public void buttonVeranstaltungsplan(View view) {

        //Starte Veranstaltungsplan (Main Activity)
        Intent veranstaltungsplanClass = new Intent(this, MainActivity.class);
        veranstaltungsplanClass.putExtra("sid",sessionId);
        startActivity(veranstaltungsplanClass);
    }

    public void buttonRaumplan(View view) {
        // Startet Raumsuche (Raumsuche)
        Intent raumsuche = new Intent(this, Raumsuche.class);
        startActivity(raumsuche);
    }

    public void buttonmVeranstaltungen(View view) {
        //Starte Veranstaltungsplan (Main Activity)
        Intent meineVeranstaltungsplanClass = new Intent(this, MeineVeranstaltungen.class);


        startActivity(meineVeranstaltungsplanClass);
    }

    public void buttonmKalender(View view) {
        //Starte Veranstaltungsplan (Main Activity)
        Intent meineKalenderClass = new Intent(this, Kalender.class);


        startActivity(meineKalenderClass);
    }
    public void buttonmMensa(View view) {
        //Starte Mensa
        Intent meineMensaClass = new Intent(this, Mensa.class);


        startActivity(meineMensaClass);
    }
}