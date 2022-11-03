package com.example.mobileux2_practical_7;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.btnStartQuiz:
                Intent i = new Intent(this, Activity_UserInfo.class);
                startActivity(i);
                break;
        }

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        super.onCreateOptionsMenu(menu);
        MenuInflater inflater = getMenuInflater();

        inflater.inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.about:
                // Do Something
                Toast.makeText(getApplicationContext(), "About...", Toast.LENGTH_SHORT).show();
                return true;
            case R.id.help:
                // Do Something
                Toast.makeText(getApplicationContext(), "Help...", Toast.LENGTH_SHORT).show();
                return true;
            case R.id.pref:
                // Do Something
                Intent prefIntent = new Intent(getApplicationContext(), Activity_Pref.class);
                startActivity(prefIntent);
                return true;
        }
        return false;

    }
}