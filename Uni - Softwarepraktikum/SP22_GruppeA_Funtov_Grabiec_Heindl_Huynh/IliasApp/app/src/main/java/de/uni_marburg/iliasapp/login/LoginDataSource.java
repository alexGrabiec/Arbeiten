package de.uni_marburg.iliasapp.login;


import org.ksoap2.SoapEnvelope;
import org.ksoap2.serialization.SoapObject;
import org.ksoap2.serialization.SoapSerializationEnvelope;
import org.ksoap2.transport.HttpTransportSE;

import java.io.IOException;

/**
 * Class that handles authentication w/ login credentials and retrieves user information.
 */
public class LoginDataSource {

    private final String NAMESPACE = "urn:ilUserAdministration";
    final String SOAP_ACTION = "urn:ilUserAdministration#login";
    String URL = "https://ilias-test.hrz.uni-marburg.de:443/webservice/soap/server.php";
    String client_id = "mriliastest";
    SoapObject request;
    SoapSerializationEnvelope envelope;
    HttpTransportSE androidHttpTransport;
    String sid;

    public LoginResult<LoggedInUser> login(String username, String password) {

        request = new SoapObject(NAMESPACE, "login");
        request.addProperty("client", client_id);
        request.addProperty("username", username);
        request.addProperty("password", password);

        envelope = new SoapSerializationEnvelope(SoapEnvelope.VER11);

        envelope.setOutputSoapObject(request);

        androidHttpTransport = new HttpTransportSE(URL);
        androidHttpTransport.setReadTimeout(200000);

        RunnableDataThread f = new RunnableDataThread();
        Thread t = new Thread(f);
        t.start();
        try {
            t.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Boolean correctLogin = f.getValue();


        if(correctLogin && f.getValue() != null){
            LoggedInUser user =
                    new LoggedInUser(
                            f.getResult(),
                            username);
            return new LoginResult.Success<>(user);
        // backdoor for test login
        } else if (username.equals("test")){
            LoggedInUser user =
                    new LoggedInUser(
                            "111",
                            "testUser");
            return new LoginResult.Success<>(user);

        } else {
            return new LoginResult.Error(new IOException("Error logging in"));
        }

    }


    public void logout() {
        this.sid = "0";
    }



    /**
     * Class to execute the API call on a separate thread so UI stays responsive.
     */
    public class RunnableDataThread implements Runnable {
        private volatile boolean correctLogin;
        String result;
        private String sid;

        @Override
        public void run() {
            try {
                androidHttpTransport.call(SOAP_ACTION, envelope);
                 result = (String) envelope.getResponse(); //get response
                 correctLogin = true;

            } catch (Exception e) {
                e.printStackTrace();
                System.out.println(e.getClass());
                correctLogin = false;
            }
        }

        public Boolean getValue() {
            return correctLogin;
        }
        public String getResult() {
            return result;
        }

        public void setSid(String sid){
            this.sid = sid;
        }
    }


}