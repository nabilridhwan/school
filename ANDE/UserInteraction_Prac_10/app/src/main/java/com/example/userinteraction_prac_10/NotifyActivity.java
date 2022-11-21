package com.example.userinteraction_prac_10;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class NotifyActivity extends AppCompatActivity {

    // id for Notification Channel
    public static final String NOTIFICATION_CHANNEL_ID = "10001";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_notify);

        final Button notify = (Button) findViewById(R.id.notify);

        notify.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {

                NotificationCompat.Builder builder = new NotificationCompat.Builder(getBaseContext(), NOTIFICATION_CHANNEL_ID);

                builder.setSmallIcon(R.drawable.ic_launcher_background);

                Intent intent = new Intent(getBaseContext(), NotifyMessage.class);

                PendingIntent pendingIntent = PendingIntent.getActivity(getBaseContext(), 0, intent, 0);

                builder.setContentIntent(pendingIntent);
                builder.setContentTitle("Notification");
                builder.setContentText("This is a notification");

                NotificationManager notificationManager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);

                if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
                    int importance = NotificationManager.IMPORTANCE_HIGH;
                    NotificationChannel notificationChannel = new NotificationChannel(NOTIFICATION_CHANNEL_ID, "NOTIFICATION_CHANNEL_NAME", importance);
                    builder.setChannelId(NOTIFICATION_CHANNEL_ID);
                    notificationManager.createNotificationChannel(notificationChannel);

                    notificationManager.notify(0, builder.build());
                }
            }
        });
    }
}