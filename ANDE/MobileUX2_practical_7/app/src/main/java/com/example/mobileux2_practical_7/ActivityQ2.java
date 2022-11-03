package com.example.mobileux2_practical_7;

import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

public class ActivityQ2 extends AppCompatActivity {

    private String currentSelection = "";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_q2);

        Button submitButton = (Button) findViewById(R.id.nextQuestionButton);

        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                handleSubmitButtonClick(view);
            }
        });
    }



    public void onCheckboxClickedQuizTwo(View view){
//        Set the current selected option into
        currentSelection = ((CheckBox) view).getText().toString();
    }

    public void handleSubmitButtonClick(View view) {
        if(currentSelection.isEmpty()){
            AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(this);
            alertDialogBuilder.setMessage("You have not selected anything").setTitle("Ay!");

            AlertDialog alertDialog = alertDialogBuilder.create();

            alertDialog.setButton(AlertDialog.BUTTON_POSITIVE, "OK", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialogInterface, int i) {

                }
            });

            alertDialog.show();
        }
    }
}
