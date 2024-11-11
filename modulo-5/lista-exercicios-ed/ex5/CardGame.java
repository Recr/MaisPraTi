package ex5;

import java.util.LinkedList;
import java.util.Scanner;

public class CardGame {
    public static void main(String[] args) {
        LinkedList<String> deck = new LinkedList<>();
        String text = "";
        int option = 1;
        while (option != 0) {
            System.out.println("\nText Editor\n");
            System.out.println("Choose an option:");
            System.out.println("1 - Add Card");
            System.out.println("2 - Remove Card");
            System.out.println("3 - Reorganize Cards");
            System.out.println("4 - See Deck");
            System.out.println("0 - Exit");
            Scanner input = new Scanner(System.in);
            String flush; //flush command line
            try {
                option = input.nextInt();
                flush = input.nextLine();
            } catch (Exception e) {
                System.err.println("Invalid Option");
                continue;
            }
            int index;
            switch (option) {
                case 1:
                    System.out.println("Type the card name: ");
                    text = input.nextLine();
                    deck.add(text);
                    break;

                case 2:
                    if (deck.size() == 0) {
                        System.err.println("No Cards in the deck!");
                    } else {
                        int cardPosition;
                        try {
                            cardPosition = input.nextInt();
                            flush = input.nextLine();
                        } catch (Exception e) {
                            System.err.println("Invalid Option");
                            continue;
                        }
                        if (cardPosition >= 0 && cardPosition < deck.size()) {
                            deck.remove(cardPosition);
                        } else {
                            System.err.println("Invalid Option");
                        }
                    }
                    break;

                case 3:
                    System.out.println("Which card you want to move?");
                    int firstCardPosition;
                    try {
                        firstCardPosition = input.nextInt();
                        flush = input.nextLine();
                    } catch (Exception e) {
                        System.err.println("Invalid Option");
                        continue;
                    }
                    if (firstCardPosition < 0 || firstCardPosition >= deck.size()) {
                        System.err.println("Invalid Option");
                        continue;
                    }
                    System.out.println("Where do you want to move it?");
                    int secondCardPosition;
                    try {
                        secondCardPosition = input.nextInt();
                        flush = input.nextLine();
                    } catch (Exception e) {
                        System.err.println("Invalid Option");
                        continue;
                    }
                    if (secondCardPosition < 0 || secondCardPosition >= deck.size()) {
                        System.err.println("Invalid Option");
                        continue;
                    }
                    String aux = deck.get(firstCardPosition);
                    deck.set(firstCardPosition, deck.get(secondCardPosition));
                    deck.set(secondCardPosition, aux);
                    break;

                case 4:
                    for (int i = 0; i < deck.size(); i++) {
                        System.out.println("Card " + i + ": " + deck.get(i));
                    }
                    break;

                case 0:
                    System.out.println("Exiting...");
                    break;

                default:
                    System.err.println("Invalid Option");
                    break;
            }

        }
    }
}
