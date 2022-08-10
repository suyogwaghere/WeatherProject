package controlStatement;

import java.util.Scanner;

public class PrimeNumber {
    public static void main(String[] args) {
        int num;
        boolean prime = true;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        num = sc.nextInt();
        for (int i = 2; i < num; i++) {

            if (num % i == 0) {
                prime = false;
                break;
            }
            System.out.println(prime);
        }
    }
}