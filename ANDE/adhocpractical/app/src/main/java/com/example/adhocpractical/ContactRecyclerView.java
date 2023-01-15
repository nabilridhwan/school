package com.example.adhocpractical;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

public class ContactRecyclerView extends RecyclerView.Adapter<ContactRecyclerView.MyViewHolder> {

    private List<Contact> allContacts;

    public ContactRecyclerView(List<Contact> contacts){
        this.allContacts = contacts;
    }

    @NonNull
    @Override
    public ContactRecyclerView.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.contact_recycler_view, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull ContactRecyclerView.MyViewHolder holder, int position) {

        Contact currentContact = this.allContacts.get(position);

        Log.d("CURRENT CONTACT", currentContact.getName());

        holder.contactName.setText(currentContact.getName());
        holder.contactEmail.setText("Email: " + currentContact.getEmailAddress());
    }


    public class MyViewHolder extends RecyclerView.ViewHolder {

        private final TextView contactEmail;
        private final TextView contactName;

        public MyViewHolder(final View view) {
            super(view);
            contactEmail = view.findViewById(R.id.contactEmail);
            contactName = view.findViewById(R.id.contactName);
        }
    }


    @Override
    public int getItemCount() {
        return this.allContacts.size();
    }
}
