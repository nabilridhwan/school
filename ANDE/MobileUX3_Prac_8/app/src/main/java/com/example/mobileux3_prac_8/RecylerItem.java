package com.example.mobileux3_prac_8;

public class RecylerItem {
    private String name;
    private String currency;
    private int imageResId;

    public RecylerItem(int imageResId, String name, String currency){
        this.imageResId = imageResId;
        this.name = name;
        this.currency = currency;
    }

    public String getName() {
        return name;
    }

    public String getCurrency() {
        return currency;
    }

    public int getImageResId() {
        return imageResId;
    }
}
