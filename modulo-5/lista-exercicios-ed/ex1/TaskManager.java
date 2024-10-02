//Obs: The use of the scanner class might cause some unexpected behaviors.
//I'm using a variable called flush in some parts of the code to flush the stream.

package ex1;

import java.util.LinkedList;
import java.util.Scanner;

public class TaskManager {
    public static void main(String[] args) {
        LinkedList<Task> taskManager = new LinkedList<>();
        boolean loop = true;
        while (loop) {
            System.out.println("\nTask Manager\n");
            System.out.println("Choose an option:");
            System.out.println("1 - Add task");
            System.out.println("2 - Mark task as complete/incomplete");
            System.out.println("3 - Remove task");
            System.out.println("4 - List tasks");
            System.out.println("5 - Exit");
            Scanner input = new Scanner(System.in);
            String flush; //flush command line
            int option;
            try {
                System.out.flush();
                option = input.nextInt();
                flush = input.nextLine();
            } catch (Exception e) {
                System.err.println("Invalid Option");
                continue;
            }
            int index;
            switch (option) {
                case 1:
                    System.out.println("Type the task name: ");
                    //flush = input.nextLine();
                    Task newTask = new Task(input.nextLine());
                    taskManager.add(newTask);
                    break;

                case 2:
                    System.out.print("Type the index of the task you want to mark: ");
                    try {
                        index = input.nextInt();
                        flush = input.nextLine();
                    } catch (Exception e) {
                        System.err.println("Invalid Index");
                        continue;
                    }
                    if (index < taskManager.size()) {
                        Task editedTask = taskManager.get(index);
                        editedTask.isComplete = editedTask.isComplete? false: true;
                        System.out.println("Task completion changed!");
                    } else {
                        System.out.println("Invalid Index!");
                    }
                    break;

                case 3:
                    System.out.print("Type the index of the task you want to remove: ");
                    try {
                        index = input.nextInt();
                        flush = input.nextLine();
                    } catch (Exception e) {
                        System.err.println("Invalid Index");
                        continue;
                    }
                    if (index < taskManager.size()) {
                        taskManager.remove(index);
                        System.out.println("Task removed!");
                    } else {
                        System.out.println("Invalid Index!");
                    }
                    break;

                case 4:
                    for(Task task: taskManager) {
                        System.out.println(task);
                    }
                    break;

                case 5:
                    loop = false;
                    System.out.println("Exiting...");
                    break;

                default:
                    System.out.println("Invalid Option");
                    break;
            }
        }
    }
}
