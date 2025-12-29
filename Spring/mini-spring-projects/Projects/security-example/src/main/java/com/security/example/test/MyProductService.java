package com.security.example.test;

import java.util.ArrayList;
import java.util.List;

public class MyProductService {

    private List<MyProduct> productAlmira = new ArrayList<>();

    public void startMyProductFactory(){
        for(int i=1;i<100;i++) {
            MyProduct myProduct = new MyProduct();
            myProduct.setId(i);
            myProduct.setName("Bottle_"+i);
            productAlmira.add(myProduct);

        }
    }


}
