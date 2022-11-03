package com.example.mobileux2_practical_7;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;

public class ActivityQuizQ extends AppCompatActivity {

    private String currentSelection = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_q1);

        Button submitButton = (Button) findViewById(R.id.nextQuestionButton);

        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                handleSubmitButtonClick(view);
            }
        });
    }

    public void onCheckboxClickedQuiz(View view){
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
        }else{
//            There is a selection
            Intent nextQuestionIntent = new Intent(getApplicationContext(), ActivityQ2.class);
            startActivity(nextQuestionIntent);
        }
    }
}