package de.uni_marburg.iliasapp;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import java.io.IOException;

//http://openmensa.org/api/v2/canteens/113/meals
//http://testserver.aeq-web.com/android_http_request

public class Mensa extends AppCompatActivity {

    //String SERVER_URL = "http://openmensa.org/api/v2/canteens/113/meals";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mensa);
        //new HttpTask().execute(SERVER_URL);

    }
/*
    private class HttpTask extends AsyncTask<String, Void, String> {
        @Override
        protected String doInBackground(String... strURLs) {
            URL url = null;
            HttpURLConnection conn = null;
            try {
                url = new URL(strURLs[0]);
                conn = (HttpURLConnection) url.openConnection();
                int responseCode = conn.getResponseCode();

                if (responseCode == HttpURLConnection.HTTP_OK) {
                    InputStream in = url.openStream();
                    BufferedReader reader = new BufferedReader(new InputStreamReader(in));
                    StringBuilder result = new StringBuilder();
                    String line;
                    while ((line = reader.readLine()) != null) {
                        result.append(line);
                    }
                    return result.toString();
                    //return result.toString().replace("/N/", System.getProperty("line.separator"));

                } else {
                    return "Fail (" + responseCode + ")";
                }
            } catch (IOException e) {
                return "Unable to connect";
            }
        }

        @Override
        protected void onPostExecute(String result) {
            TextView view_result = (TextView) findViewById(R.id.testText);
            view_result.setText(result);
        }
    }*/


    public void getHTMLText() throws IOException {





    }





}