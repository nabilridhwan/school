package com.example.userinteraction_prac_10;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class BroadcastActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_broadcastrec);
    }

    public void onClickShowBroadcast(View view) {

        EditText st = (EditText) findViewById(R.id.txtMsg);

        Intent intent = new Intent(this, ReceivedBroadCast.class);

        intent.putExtra("msg", st.getText().toString());
        intent.setAction("com.example.CUSTOM_INTENT");
        sendBroadcast(intent);


    }
}