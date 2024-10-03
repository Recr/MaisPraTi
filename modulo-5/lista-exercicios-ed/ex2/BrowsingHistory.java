package ex2;

public class BrowsingHistory {
    private SinglyLinkedList<String> history = new SinglyLinkedList<>();
    int maxSize = 5;

    public void add (String url) {
        if (history.size() < maxSize) {
            history.add(url);
        } else {
            history.remove(0);
            history.add(url);
        }
    }

    public void printHistory () {
        for (int i = 0; i < history.size(); i++) {
            System.out.println(i+1 + ": " + history.get(i));
        }
        System.out.println();
    }

    public static void main(String[] args) {
        BrowsingHistory chrome = new BrowsingHistory();
        chrome.add("www.google.com");
        chrome.add("www.youtube.com");
        chrome.add("www.gmail.com");
        chrome.add("www.github.com");
        chrome.add("www.instagram.com");
        chrome.printHistory();
        chrome.add("www.spotify.com"); //replaces the index 0
        chrome.printHistory();
    }


}
