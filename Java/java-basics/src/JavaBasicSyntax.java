/**
 * A demonstration of Java syntax evolution, comparing the classic
 * entry point with the modern, simplified version.
 */
public class JavaBasicSyntax {

    // This represents the modern, simplified syntax introduced in recent Java versions.
    // In Java 21+ (Preview), the 'public static' and 'String[] args' are no longer strictly required.
    /*
    static void main() {
        System.out.println("Hello! Running with the modern Java syntax.");
    }
    */

    // This is the classic, standard Java entry point used in older versions and 
    // enterprise environments (Java 8, 11, 17, etc.).
    public static void main(String[] args) {
        System.out.println("This is the classic, standard Java syntax.");
    }
}