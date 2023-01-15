package com.example.adhocpractical;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import java.time.Duration;
import java.util.List;

public class AddContact extends AppCompatActivity implements View.OnClickListener{

    EditText tName, tEmail;
    DatabaseHandler db ;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_contact);

        db  = new DatabaseHandler(this);
        tName = (EditText) findViewById((R.id.edtext_name));
        tEmail = (EditText) findViewById((R.id.edtext_email));
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.btnAddNewContactInfo:
                String contactName = tName.getText().toString();
                String phone_number = tEmail.getText().toString();
                db.addContact(new Contact(contactName, phone_number));

                // Reading all contacts
                Log.d("Reading: ", "Reading all contacts..");
                List<Contact> contacts = db.getAllContacts();

//                Toast
                Toast.makeText(getApplicationContext(), "Contact created!", Toast.LENGTH_LONG).show();

//                for (Contact cn : contacts) {
//                    String log = "Id: " + cn.getID() + " ,Name: " + cn.getName() + " ,Phone: " +
//                            cn.getEmailAddress();
//                    // Writing Contacts to log
//                    Log.d("Name: ", log);
//                }

                break;
        }


    }
}