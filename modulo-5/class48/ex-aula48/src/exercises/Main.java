package exercises;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] array = new int[0];

        array = add(array, 10);
        array = add(array, 30);
        array = remove(array, 0);
        array = add(array, 27);
        array = add(array, 78);
        System.out.println(Arrays.toString(array));
        invert(array);
        System.out.println(Arrays.toString(array));
        System.out.println(includes(array, 29));
        System.out.println(includes(array, 27));

        //Matrices

        int[][] matrix = {
                {1,2,3,4},
                {5,6,7,8},
                {9,10,11,12},
                {13,14,15,16}
        };

        //Sum of the main and secondary diagonals

        int mainDiagonal = 0;
        for (int i = 0; i < matrix.length; i++)
            mainDiagonal += matrix[i][i];

        int secondaryDiagonal = 0;
        for (int i = 0; i < matrix.length; i++)
            secondaryDiagonal += matrix[matrix[i].length-1-i][i];


        int diagonalsSum = mainDiagonal + secondaryDiagonal;
        System.out.println(diagonalsSum);

//       //Rotate Matrix

        for(int[] row: matrix)
            System.out.println(Arrays.toString(row));

        System.out.println();

        matrix = rotate(matrix);

        for(int[] row: matrix)
            System.out.println(Arrays.toString(row));

        //Find ocurrences
        int[][] nums = {
                {1,2,3,4},
                {5,6,7,5},
                {9,5,11,12},
                {13,14,5,16}
        };
        findOccurrences(nums, 5);
        findOccurrences(nums, 10);

    }

    //add elements to the end
    public static int[] add (int[] targetArray, int element) {
        int[] newArray = new int[targetArray.length+1];
        for(int i = 0; i < targetArray.length; i++)
            newArray[i] = targetArray[i];
        newArray[newArray.length -1] = element;
        return newArray;
    }

    //remove element at specified index
    public static int[] remove(int[] targetArray, int index) {
        int[] newArray = new int[targetArray.length - 1];
        int current = 0;
        for(int i = 0; i < targetArray.length; i++) {
            if(i != index) {
                newArray[current] = targetArray[i];
                current++;
            }
        }
        return newArray;
    }

    //invert elements positions in an array
    public static void invert (int[] targetArray) {
        int start = 0;
        int end = targetArray.length - 1;
        while (start < end) {
            int temp = targetArray[start];
            targetArray[start] = targetArray[end];
            targetArray[end] = temp;
            start++;
            end--;
        }
    }

    //search for a given element inside a given array
    public static boolean includes (int[] targetArray, int targetElement){
        for (int i = 0; i < targetArray.length; i++)
            if(targetArray[i] == targetElement)
                return true;
        return false;
    }

    public static int[][] rotate(int[][] targetmatrix) {
        int size = targetmatrix.length;
        int[][] rotatedMatrix = new int[size][size];
        for (int i = 0; i < size; i++)
            for (int j = 0; j < targetmatrix[i].length; j++)
                rotatedMatrix[j][size - 1 - i] = targetmatrix[i][j];
        return rotatedMatrix;
    }

    public static void findOccurrences (int[][] searchedMatrix, int target) {
        boolean found = false;
        for (int i = 0; i < searchedMatrix.length; i++)
            for (int j = 0; j < searchedMatrix[i].length; j++)
                if (searchedMatrix[i][j] == target) {
                    System.out.println("'" + target + "' Found at position {" + i + "," + j + "}.");
                    found = true;
                }
        if (!found) {
            System.out.println("No occurrences of the number " + target + " were found!");
        }

    }
}