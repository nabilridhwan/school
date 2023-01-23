package com.example.dailyactivities;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import androidx.fragment.app.ListFragment;

public class DailyTask extends ListFragment {

    String[] tasklist = new String[] {"ANDE","ADES","DENG","CPF","CCA","Run" };
    String[] todotask = new String[] {"Assignment 1" ,"Assignment 1","Practical 1","Tutorial","Meeting","5 km run"};

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view =inflater.inflate(R.layout.activity_dailytask, container, false);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(getActivity(), android.R.layout.simple_list_item_1, tasklist);
        setListAdapter(adapter);
        return view;
    }
    @Override
    public void onListItemClick(ListView l, View v, int position, long id) {
        DailyDetailTask txt = (DailyDetailTask)getFragmentManager().findFragmentById(R.id.fragment_detailtask);
        txt.change(tasklist[position],todotask[position]);
        getListView().setSelector(android.R.color.holo_blue_dark);
    }
}
