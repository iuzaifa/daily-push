package basics;

public class FibonacciSeries {

    public static void main(String[] args) {
        int n = 5;
        fibonacci(n);
        fibonacciTest(n);
    }

    public static void fibonacci(int n) {
        if (n < 1) {
            System.out.println("Invalid number of terms!");
            return;
        }

        int a = 0;
        int b = 1;

        System.out.print("Fibonacci Series (" + n + " terms): ");

        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");

            // Generate next number
            int next = a + b;
            a = b;
            b = next;
        }

        System.out.println(); // new line at end
    }


    public static int fibonacciTest(int n) {
        if ( n == 0 )return  0;
        if (n == 1 || n == 2) {
            return 1;
        }

        int basecase0 = 0;
        int basecase1 = 1;
        int temp = 0;
        for (int i = 3; i <= n; i++){
            temp = basecase0 + basecase1;
            basecase0 = basecase1;
            basecase1 = temp;
            System.out.print(temp +", ");
        }

        return temp;
    }
}