package com.example.mobileux3_prac_8;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

public class ListViewActivity extends AppCompatActivity {

    ListView listView;
    TextView textView;
    String[] listItem;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_listview);

        listView = (ListView) findViewById(R.id.listview);
        textView = (TextView) findViewById(R.id.textViewProg);

        listItem = getResources().getStringArray(R.array.prog_lang);

        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, R.layout.proglist, R.id.textViewProg, listItem);

        listView.setAdapter(adapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                String value = adapter.getItem(i);
//                textView.setText(value);
                Toast.makeText(ListViewActivity.this, value, Toast.LENGTH_SHORT).show();
            }
        });
    }
}