import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        String email = "example@example.com";
        boolean isValidEmail = isEmail(email);
        System.out.println("Is email valid? " + isValidEmail);
    }

    public static boolean isEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        Pattern pattern = Pattern.compile(emailRegex);
        return pattern.matcher(email).matches();
    }
}