package com.example.mobileux1_practical_6;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private String pTo, pMsg;
    private EditText edTo, edMsg;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edTo = (EditText) findViewById(R.id.txtMainTo);
        edMsg = (EditText) findViewById(R.id.txtMainMsg);

    }

    @Override
    public void onClick(View v) {
        pTo = edTo.getText().toString();
        pMsg = edMsg.getText().toString();

        switch (v.getId()) {
            case R.id.btnSend:
                Intent i = new Intent(this, SendMessage.class);
                i.putExtra("strTo",pTo);
                i.putExtra("strMsg",pMsg);
                startActivity(i);
                break;
        }
    }

}