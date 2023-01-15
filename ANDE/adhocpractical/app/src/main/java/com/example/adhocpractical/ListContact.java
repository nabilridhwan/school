package com.example.adhocpractical;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import java.util.List;

public class ListContact extends AppCompatActivity {
    DatabaseHandler db ;
    RecyclerView contactsRV;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Log.d("ONCREATE", "ONCREATE CALLED");
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_contact);

        contactsRV = (RecyclerView) findViewById(R.id.contactsRV);

        db  = new DatabaseHandler(this);
        List<Contact> contacts = db.getAllContacts();

        setAdapter(contactsRV, contacts);

    }

    private void setAdapter(RecyclerView rv, List<Contact> contacts) {
        ContactRecyclerView adapter = new ContactRecyclerView(contacts);

        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getApplicationContext(), LinearLayoutManager.VERTICAL, false);

//        Set the properties for the adapter
        rv.setLayoutManager(layoutManager);
        rv.setItemAnimator(new DefaultItemAnimator());
        rv.setAdapter(adapter);
    }

}