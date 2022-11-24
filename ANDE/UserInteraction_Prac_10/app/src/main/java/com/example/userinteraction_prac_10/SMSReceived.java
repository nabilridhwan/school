package com.example.userinteraction_prac_10;

import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.provider.Telephony;
import android.telephony.SmsMessage;
import android.widget.TextView;
import android.widget.Toast;

public class SMSReceived extends AppCompatActivity {

    private static final int NOTIFY_ME_ID = 1337;

    TextView smsTv;

    private BroadcastReceiver mReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            SmsMessage[] messages = Telephony.Sms.Intents.getMessagesFromIntent(intent);
            String message = messages[0].getDisplayMessageBody();
            // TODO Auto-generated method stub
//            String msg = intent.getStringExtra("msg");

            smsTv.setText(message);
            Toast.makeText(context, "Received Message: " + message, Toast.LENGTH_SHORT).show();
        }
    };

    private IntentFilter filter = new IntentFilter("android.provider.Telephony.SMS_RECEIVED");


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sms);
        smsTv = (TextView) findViewById(R.id.textViewSMS);
    }

    @Override
    protected void onResume() {
        this.registerReceiver(mReceiver, filter);
        super.onResume();
    }

    @Override
    protected void onPause() {
        this.unregisterReceiver(mReceiver);
        super.onPause();
    }
}