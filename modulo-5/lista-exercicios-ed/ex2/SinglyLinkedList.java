package ex2;

public class SinglyLinkedList<E>  {
    Node <E> head;
    int size;

    SinglyLinkedList() {
    }

    public boolean add (E data) {
        Node<E> newNode = new Node<>(data);
        if (head == null) {
            this.head = newNode;
            size++;
        } else {
            addRecursive(head, newNode);
        }
        return true;
    }

    private void addRecursive (Node<E> current, Node<E> newNode) {
        if (current.next == null) {
            current.next = newNode;
            size++;
        } else {
            addRecursive(current.next, newNode);
        }
    }

    public int size () {
        return this.size;
    }

    public E get (int index) {
        if (!(index < size || index > 0)) {
            String IndexOutOfBoundsException;
            throw new IndexOutOfBoundsException();
        }
        Node<E> searched = head;
        for (int i = 0; i < index; i++) {
            searched = searched.next;
        }
        return searched.data;
    }

    public E remove (int index) {
        if (!(index < size || index > 0)) {
            String IndexOutOfBoundsException;
            throw new IndexOutOfBoundsException();
        }
        Node<E> previous = head;
        Node<E> toDelete = head;
        for (int i =0; i < index; i++) {
            previous = toDelete;
            toDelete = toDelete.next;
        }

        if (toDelete == head) {
            if (head.next != null) {
                head = head.next;
                size--;
            } else {
                head = null;
                size = 0;
            }
        } else if (toDelete.next == null) {
            previous.next = null;
            size--;
        } else {
            previous.next = toDelete.next;
            size--;
        }
        return toDelete.data;
    }

    private static class Node<E> {
        E data;
        Node<E> next;

        public Node (E data) {
            this.data = data;
            this.next = null;
        }

    }
}
