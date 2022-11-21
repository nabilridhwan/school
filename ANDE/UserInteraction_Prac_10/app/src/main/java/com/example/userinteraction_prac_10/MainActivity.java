package com.example.userinteraction_prac_10;

import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    Button smsButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        smsButton = (Button) findViewById(R.id.btnSMSReceived);

//        Set the sms button to disabled unless the sms permission is granted
        smsButton.setEnabled(false);

        requestSmsPermission();
    }

    private void requestSmsPermission() {
        String permission = Manifest.permission.RECEIVE_SMS;

//        Check if the permission is already granted
        int grant = checkSelfPermission(permission);

//        If the permission has not been granted, request it
        if (grant != PackageManager.PERMISSION_GRANTED) {
            String[] permission_list = new String[1];
            permission_list[0] = permission;
            requestPermissions(permission_list, 1);
            smsButton.setEnabled(true);
        } else {
            Toast.makeText(this, "SMS Permission already granted", Toast.LENGTH_SHORT).show();
            smsButton.setEnabled(true);
        }
    }

    @Override
    public void onClick(View view) {
        Intent i;
        switch (view.getId()) {
            case R.id.btnSharedPref:
                i = new Intent(this, SharedPrefActivity.class);
                startActivity(i);
                break;
            case R.id.btnBoardcastR:
                i = new Intent(this, BroadcastActivity.class);
                startActivity(i);
                break;
            case R.id.btnNotify:
                i = new Intent(this, NotifyActivity.class);
                startActivity(i);
                break;

            case R.id.btnSMSReceived:
                i = new Intent(this, SMSReceived.class);
                startActivity(i);
                break;

        }
    }

}