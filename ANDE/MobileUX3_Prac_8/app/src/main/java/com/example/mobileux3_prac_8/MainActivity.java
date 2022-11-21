package com.example.mobileux3_prac_8;

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
    public void onClick(View v) {
        Intent i ;
        switch (v.getId()) {
            case R.id.btnListView:
                i = new Intent(this, ListViewActivity.class);
                startActivity(i);
                break;
            case R.id.btnRecycleView:
                i = new Intent(this, RecycleViewActivity.class);
                startActivity(i);
                break;
        }
    }
}