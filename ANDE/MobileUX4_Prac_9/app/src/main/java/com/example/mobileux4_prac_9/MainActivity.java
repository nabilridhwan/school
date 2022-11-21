package com.example.mobileux4_prac_9;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public void onClick(View view) {


        Intent i;
        switch (view.getId()) {
            case R.id.btnCustomButton:
                i = new Intent(this, CustomStyleActivity.class);
                startActivity(i);
                break;
            case R.id.btnCustomTheme:
                i = new Intent(this, CustomThemeActivity.class);
                startActivity(i);
                break;

        }


    }
}