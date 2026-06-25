package arrays;

public class FindLargestElement {
    public static void main(String[] args) {

        int[] arr = {4,6,7,8,9,2,6,8};
        System.out.println(largest(arr));
    }

    private static int largest(int[] arr) {

        int largest = arr[0];
        for (int i = 0; i < arr.length-1; i++) {
            if(arr[i+1] > largest) {
                largest = arr[i+1];
            }
        }

        return  largest;

    }


}
