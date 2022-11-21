package com.example.mobileux3_prac_8;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.Toast;

import java.util.ArrayList;

public class RecycleViewActivity extends AppCompatActivity {

    private RecyclerView mRecyclerView;
    private ArrayList<RecylerItem> mCountries = new ArrayList<RecylerItem>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recycleview);

        bindCountriesData();

        setUIRef();
    }

    private void setUIRef(){

        mRecyclerView = findViewById(R.id.myCountryList);
        mRecyclerView.setLayoutManager(new LinearLayoutManager(this, RecyclerView.VERTICAL, false));

        RecyclerItemArrayAdapter myRecyclerViewAdapter = new RecyclerItemArrayAdapter(mCountries, new RecyclerItemArrayAdapter.MyRecyclerViewItemClickListener() {
            @Override
            public void onItemClicked(int position) {

                Toast.makeText(RecycleViewActivity.this, mCountries.get(position).getName(), Toast.LENGTH_SHORT).show();
            }
        });

        mRecyclerView.setAdapter(myRecyclerViewAdapter);

    }

    private void bindCountriesData(){
        mCountries.add(new RecylerItem(R.drawable.canada, "Canada", "Canadian Dollar"));
        mCountries.add(new RecylerItem(R.drawable.norway,"Norway", "Norwegian Krone"));
        mCountries.add(new RecylerItem(R.drawable.malaysia, "Malaysia", "Malaysian Ringgit"));
        mCountries.add(new RecylerItem(R.drawable.singapore, "Singapore", "Singapore Dollar"));
        mCountries.add(new RecylerItem(R.drawable.usa,"United States of America", "United States Dollar"));

    }
}