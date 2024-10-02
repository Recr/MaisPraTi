package ex1;

public class Task {
    String taskDescription;
    boolean isComplete;

    public Task (String taskDescription) {
        this.taskDescription = taskDescription;
        this.isComplete = false;
    }

    public void setCompletion (boolean isComplete) {
        this.isComplete = isComplete;
    }

    @Override
    public String toString () {
        return taskDescription + " | Complete = " + isComplete;
    }
}
