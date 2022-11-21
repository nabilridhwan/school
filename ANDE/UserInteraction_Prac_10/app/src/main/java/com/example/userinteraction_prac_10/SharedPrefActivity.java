package com.example.userinteraction_prac_10;

import androidx.appcompat.app.AppCompatActivity;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class SharedPrefActivity extends AppCompatActivity implements View.OnClickListener {

    SharedPreferences prefs;
    EditText edUName, edPw;
    Button bLogin;

    public static final String MyPREFERENCES = "LoginPref";
    public static final String UName = "unameKey";
    public static final String Upw = "upwKey";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sharedpref);

        edUName = (EditText) findViewById(R.id.txtUserID);
        edPw = (EditText) findViewById(R.id.txtPw);
        bLogin = (Button) findViewById(R.id.btnLogin);

//        Load the preferences

        prefs = getSharedPreferences(MyPREFERENCES, MODE_PRIVATE);

        String gUID = prefs.getString(UName, "");
        String gPW = prefs.getString(Upw, "");

        edUName.setText(gUID);
        edPw.setText(gPW);
    }

    @Override
    protected void onPause() {
        super.onPause();

        edUName = (EditText) findViewById(R.id.txtUserID);
        edPw = (EditText) findViewById(R.id.txtPw);
        bLogin = (Button) findViewById(R.id.btnLogin);

        prefs = getSharedPreferences(MyPREFERENCES, MODE_PRIVATE);

        String uID = edUName.getText().toString();
        String uPW = edPw.getText().toString();


        SharedPreferences.Editor editor;
        editor = prefs.edit();

        editor.putString(UName, uID);
        editor.putString(Upw, uPW);
        editor.apply();
    }

    @Override
    public void onClick(View view) {

        edUName = (EditText) findViewById(R.id.txtUserID);
        edPw = (EditText) findViewById(R.id.txtPw);
        bLogin = (Button) findViewById(R.id.btnLogin);

        prefs = getSharedPreferences(MyPREFERENCES, MODE_PRIVATE);

        String uID = edUName.getText().toString();
        String uPW = edPw.getText().toString();

        SharedPreferences.Editor editor;
        editor = prefs.edit();

        editor.putString(UName, uID);
        editor.putString(Upw, uPW);
        editor.apply();


    }
}