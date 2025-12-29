package com.security.example.test;

// POJO (Plain Java Object) Entity, Model --> Object
public class MyProduct {
    private int id;
    private String name;

    public MyProduct() {

    }

    public MyProduct(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }


}
