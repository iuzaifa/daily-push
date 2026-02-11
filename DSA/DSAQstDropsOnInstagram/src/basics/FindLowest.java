package basics;

public class FindLowest {
    static void main() {
        int []  ar  = {7, 12, 9, 4, 11};
        System.out.println(lowest(ar));;
    }

    private static int lowest(int[] ar) {


        int temp = ar[0];
        for (int i = 0; i < ar.length; i++){

            if (ar[i] < temp ){
                temp = ar[i];
            }
        }

        return temp;

    }


}
