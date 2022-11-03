package com.example.mobileux1_practical_6;

import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class SendMessage extends AppCompatActivity {

    private String dTo, dMsg;
    TextView rtxtTo,rtxtMsg;


    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_message);

        rtxtTo = (TextView) findViewById(R.id.txtToSend);
        rtxtMsg = (TextView) findViewById(R.id.textToMsg);

        Bundle getData = getIntent().getExtras();

        if(getData != null){
            dTo = getData.getString("strTo");
            dMsg = getData.getString("strMsg");

            rtxtTo.setText(dTo);
            rtxtMsg.setText(dMsg);
        }else{
            Toast.makeText(getApplicationContext(), "Failed to get Data", Toast.LENGTH_LONG).show();
        }

    }
}
