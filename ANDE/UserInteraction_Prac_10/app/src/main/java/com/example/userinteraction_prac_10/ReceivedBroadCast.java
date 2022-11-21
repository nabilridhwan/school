package com.example.userinteraction_prac_10;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class ReceivedBroadCast extends BroadcastReceiver {


    @Override
    public void onReceive(Context context, Intent intent) {

        String iData = intent.getStringExtra("msg");
        Toast.makeText(context, "Received Message: " + iData, Toast.LENGTH_SHORT).show();

    }
}
