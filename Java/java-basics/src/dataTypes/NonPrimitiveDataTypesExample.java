package dataTypes;

public class NonPrimitiveDataTypesExample {

    static void main() {

        String str1 = "Hello";
        String str2 = str1;       // copy reference (same object)
        str2 = str2 + " Abu";     // but String is immutable → new object created
        System.out.println("str1: " + str1);  // still "Hello"


        // Better example with array (mutable)
        int[] arr1 = {10, 20, 30};
        int[] arr2 = arr1;        // same reference!
        arr2[0] = 99;
        System.out.println("arr1[0]: " + arr1[0]);  // 99 (changed!)

        char [] ch1 = {'a', 'b', 'c', 'c'};
        char [] ch2 = ch1;
        ch2[0]= 'A';
        System.out.println("Ch1 " + ch1[0]);
        System.out.println("Ch2 " + ch2[0]);
    }
}
