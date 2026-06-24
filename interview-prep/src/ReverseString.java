public class ReverseString {

    public static void main(String[] args) {

        String str = "JavaInterviewPrep";
        System.out.println(reversStr(str));
    }

    private static String reversStr(String str) {
        int length = str.length()-1;
        String rev = "";
        for (int i = length ; i >= 0; i--){
            rev += str.charAt(i);
        }
        return  rev.toLowerCase();
    }


}
