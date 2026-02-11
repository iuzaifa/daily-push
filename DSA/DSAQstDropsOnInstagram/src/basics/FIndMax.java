package basics;

public class FIndMax {
    static void main() {
        int []  ar  = {7,789 ,12, 9, 4, 11, 99, 00, 88, 9, 567};
        System.out.println(max(ar));

    }

    private static int max(int[] ar) {

        int mx = ar[0];
        for (int i =0; i < ar.length; i++){
            if (ar[i] > mx){
                mx = ar[i];
            }
        }

        return mx;
    }
}
