package com.example.lecture_5;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class RecyclerItemArrayAdapter extends RecyclerView.Adapter<RecyclerItemArrayAdapter.MyViewHolder> {

    ArrayList<RecyclerItem> recyclerItems;
    AdapterView.OnItemClickListener onItemClickListener;

    public RecyclerItemArrayAdapter(ArrayList<RecyclerItem> recyclerItems, RecyclerItemArrayAdapter.My) {
        this.onItemClickListener = onItemClickListener;
        this.recyclerItems = recyclerItems;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.listview_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.tv.setText(recyclerItems.get(position).getName());
        holder.tv.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onItemClickListener.onItemClick(null, view, position, 0);
            }
        });
    }

    @Override
    public int getItemCount() {
        return recyclerItems.size();
    }

    public AdapterView.OnItemClickListener getOnItemClickListener() {
        return onItemClickListener;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        private final TextView tv;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            tv = itemView.findViewById(R.id.textViewProg);
        }
    }
}
