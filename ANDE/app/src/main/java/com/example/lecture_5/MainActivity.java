package com.example.lecture_5;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ListView listView = (ListView) findViewById(R.id.listview);

        String[] prog_lang_from_string_xml = getResources().getStringArray(R.array.prog_lang);

        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, R.layout.listview_item, R.id.textViewProg, prog_lang_from_string_xml);

        listView.setAdapter(adapter);

//        Set an onclick listener to the adapter
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                String value = adapter.getItem(i);
                Toast.makeText(MainActivity.this, value, Toast.LENGTH_SHORT).show();
            }
        });

    }
}