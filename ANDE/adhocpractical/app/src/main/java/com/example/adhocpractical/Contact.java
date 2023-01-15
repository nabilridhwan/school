package com.example.adhocpractical;

public class Contact {

    int _id;
    String _name;
    String _email_address;

    // Constructor
    public Contact(){

    }

    // Constructor
    public Contact(int id, String name, String emailAddress){
        this._id = id;
        this._name = name;
        this._email_address = emailAddress;
    }

    // Constructor
    public Contact(String name, String inEmailAddress){
        this._name = name;
        this._email_address = inEmailAddress;
    }

    public int getID(){
        return this._id;
    }

    public void setID(int id){
        this._id = id;
    }

    public String getName(){
        return this._name;
    }

    public void setName(String name){
        this._name = name;
    }

    public String getEmailAddress(){
        return this._email_address;
    }

    public void setEmailAddress(String inEmailAddress){
        this._email_address = inEmailAddress;
    }


}
