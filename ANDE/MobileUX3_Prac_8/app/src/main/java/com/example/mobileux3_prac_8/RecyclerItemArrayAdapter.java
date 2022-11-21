package com.example.mobileux3_prac_8;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class RecyclerItemArrayAdapter extends RecyclerView.Adapter<RecyclerItemArrayAdapter.MyViewHolder> {

    private ArrayList<RecylerItem> mCountries;
    private MyRecyclerViewItemClickListener mItemClickListener;


    public RecyclerItemArrayAdapter(ArrayList<RecylerItem> countries, MyRecyclerViewItemClickListener itemClickListener) {
        this.mCountries = countries;
        this.mItemClickListener = itemClickListener;
    }

    class MyViewHolder extends RecyclerView.ViewHolder{
        private final TextView textViewName;
        private final TextView textViewCurrency;
        private final ImageView imageViewFlag;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            textViewName = itemView.findViewById(R.id.countryName);
            textViewCurrency = itemView.findViewById(R.id.currency);
            imageViewFlag = itemView.findViewById(R.id.imageView);
        }
    }

    public interface MyRecyclerViewItemClickListener{
        void onItemClicked(int position);
    }

    @NonNull
    @Override
    public RecyclerItemArrayAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_recycleritem, parent, false);

        final MyViewHolder myViewHolder = new MyViewHolder(view);

        myViewHolder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mItemClickListener.onItemClicked(myViewHolder.getLayoutPosition());
            }
        });

        return myViewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerItemArrayAdapter.MyViewHolder holder, int position) {
        String currency = "Currency: " + mCountries.get(position).getCurrency();

        holder.textViewName.setText(mCountries.get(position).getName());
        holder.textViewCurrency.setText(currency);
        holder.imageViewFlag.setImageResource(mCountries.get(position).getImageResId());
    }

    @Override
    public int getItemCount() {
        return mCountries.size();
    }

    @Override
    public int getItemViewType(int position) {
        return position;
    }

    @Override
    public long getItemId(int position) {
        return position;
    }
}
