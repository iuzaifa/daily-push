import java.util.HashSet;
import java.util.Set;

public class FindDuplicateCharacters {
    public static void main(String[] args) {


        String string = "programming";
        duplicateChars(string);
    }

    private static   void  duplicateChars(String string) {
        Set<Character> seen = new HashSet<>();

        for (char ch : string.toCharArray()){
            if(!seen.add(ch)){
                System.out.println(ch);
            }
        }
    }
}
