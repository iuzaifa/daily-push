package basics;

public class FibonacciSeries {

    public static void main(String[] args) {
        int n = 9;
        fibonacci(n);
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
}