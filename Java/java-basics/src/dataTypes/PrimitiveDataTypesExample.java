package dataTypes;

public class PrimitiveDataTypesExample {
    public static void main(String[] args) {
        
        // Whole numbers (integers)
        byte small = 120;
        short medium = 30000;
        int normal = 2000000000;
        long veryBig = 9223372036854775807L;  // note the L
        
        // Decimal numbers
        float piFloat = 3.14159f;   // note the f
        double piDouble = 3.141592653589793;
        
        // Character
        char grade = 'A';
        
        // Boolean
        boolean isJavaFun = true;
        
        // Print them
        System.out.println("byte: " + small);
        System.out.println("short: " + medium);
        System.out.println("int: " + normal);
        System.out.println("long: " + veryBig);
        System.out.println("float: " + piFloat);
        System.out.println("double: " + piDouble);
        System.out.println("char: " + grade);
        System.out.println("boolean: " + isJavaFun);
    }
}