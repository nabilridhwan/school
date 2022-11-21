package com.example.lecture_5;

public class RecyclerItem {

    private String name;
    private String currency;

    public RecyclerItem(String name, String currency){
        this.name = name;
        this.currency = currency;
    }

    public String getName() {
        return name;
    }

    public String getCurrency() {
        return currency;
    }
}
