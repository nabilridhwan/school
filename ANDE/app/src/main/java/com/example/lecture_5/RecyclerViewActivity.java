package com.example.lecture_5;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.AdapterView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;

public class RecyclerViewActivity extends AppCompatActivity {

    ArrayList<RecyclerItem> mCountries = new ArrayList<RecyclerItem>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recycler_view);

        bindCountriesData();
        setUIRef();
    }

    private void bindCountriesData(){
        mCountries.add(new RecyclerItem("Canada", "Canadian Dollar"));
    }

    private void setUIRef(){
        RecyclerView recyclerView = findViewById(R.id.myCountryList);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(new RecyclerItemArrayAdapter(mCountries, new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Log.d("TAG", "onItemClick: " + i);
                TextView tv = (TextView) view;
                Toast.makeText(RecyclerViewActivity.this, tv.getText(), Toast.LENGTH_SHORT).show();
            }
        }));
    }
}