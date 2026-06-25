package arrays;

import java.util.Arrays;

public class MergeTwoArrays {

    public static void main(String[] args) {

        int[] arr1 = {3, 5, 6, 7};
        int[] arr2 = {2, 56, 56, 87};

        int[] result = mergeTwoArrays(arr1, arr2);

        System.out.println(Arrays.toString(result));


    }

    public static int [] mergeTwoArrays(int[] arr1, int[] arr2) {

        int[] finalArr = new int[arr1.length + arr2.length];
        int k = 0;

        for (int i = 0; i < arr1.length; i++){
            finalArr[k++] = arr1[i];
        }

        for (int i = 0; i < arr2.length; i++){
            finalArr[k++] = arr2[i];
        }


        return Arrays.stream(finalArr).sorted().toArray();
    }


}
