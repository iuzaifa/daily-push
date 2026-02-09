package basics;

public class Factorial {

    static void main() {
        System.out.println(FactorialOfNNumbers(5));

    }


    public static int  FactorialOfNNumbers(int n){

        int temp = 1;

        for (int i = 1; i <= n; i++){
            temp = temp * i;
        }

        return temp;
    }
}
