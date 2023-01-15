package com.example.adhocpractical;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import java.util.List;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

  //      DatabaseHandler db = new DatabaseHandler(this);

        // Inserting Contacts
/*        Log.d("Insert Data : ", "Inserting ..");
        db.addContact(new Contact("Mary Jane", "86552288"));
        db.addContact(new Contact("Nina Kim", "91198800"));
        db.addContact(new Contact("Tommy Tan", "92681122"));
        db.addContact(new Contact("Koji Lim", "95334321"));

        // Reading all contacts
        Log.d("Reading: ", "Reading all contacts..");
        List<Contact> contacts = db.getAllContacts();

        for (Contact cn : contacts) {
            String log = "Id: " + cn.getID() + " ,Name: " + cn.getName() + " ,Phone: " +
                    cn.getPhoneNumber();
            // Writing Contacts to log
            Log.d("Name: ", log);

        }
*/
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.btnAddContact:
                Intent i = new Intent(this, AddContact.class);
                startActivity(i);
                break;
            case R.id.btnListAll:
                Intent l = new Intent(this, ListContact.class);
                startActivity(l);
                break;

        }
    }
}