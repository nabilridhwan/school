package com.example.picgallery_prac_11;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageSwitcher;
import android.widget.ImageView;
import android.widget.Toast;
import android.widget.ViewSwitcher;

public class MainActivity extends AppCompatActivity {

    private ImageSwitcher sw;
    private Button moveLeft, moveRight;

    int imageResIds[] = {
            R.drawable.p1,
            R.drawable.p2,
            R.drawable.p3,
            R.drawable.p4,
            R.drawable.p5,
            R.drawable.p6,
            R.drawable.p7,
            R.drawable.p8,
            R.drawable.p9,
    };

    int imageCount = imageResIds.length;

    int currentIndex = -1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        moveLeft = (Button) findViewById(R.id.btnLeft);
        moveRight = (Button) findViewById(R.id.btnRight);
        moveLeft.setEnabled(false);

        sw = (ImageSwitcher) findViewById(R.id.imageSwitcher);

        sw.setFactory(new ViewSwitcher.ViewFactory() {
            public ImageView makeView() {
                ImageView imageView = new ImageView(getApplicationContext());
                imageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
                imageView.setLayoutParams(new ImageSwitcher.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
                imageView.setImageResource(imageResIds[0]);
                return imageView;
            }
        });

        moveLeft.setOnClickListener(v -> {
            currentIndex--;
            sw.setImageResource(imageResIds[currentIndex]);
            moveRight.setEnabled(true);

            moveLeft.setEnabled(currentIndex != 0);

            sw.setImageResource(imageResIds[currentIndex]);

            Toast.makeText(getApplicationContext(), "Previous Image " + currentIndex, Toast.LENGTH_SHORT).show();
        });

        moveRight.setOnClickListener(v -> {
            currentIndex++;
            sw.setImageResource(imageResIds[currentIndex]);
            moveLeft.setEnabled(true);

            moveRight.setEnabled(currentIndex != imageCount - 1);

            sw.setImageResource(imageResIds[currentIndex]);

            Toast.makeText(getApplicationContext(), "Next Image " + currentIndex, Toast.LENGTH_SHORT).show();
        });
    }
}