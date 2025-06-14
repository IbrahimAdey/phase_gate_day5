import java.util.*;

public class StudentGrades {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter number of students: ");
        int numStudents = input.nextInt();

        System.out.print("Enter number of subjects: ");
        int numSubjects = input.nextInt();

        String[] subjects = new String[numSubjects];
        for (int i = 0; i < numSubjects; i++) {
            System.out.print("Enter subject " + (i + 1) + " name: ");
            subjects[i] = input.next();
        }

        String[] studentNames = new String[numStudents];
        int[][] scores = new int[numStudents][numSubjects];

        for (int i = 0; i < numStudents; i++) {
            System.out.print("Enter name of student " + (i + 1) + ": ");
            studentNames[i] = input.next();
            for (int j = 0; j < numSubjects; j++) {
                int score;
                do {
                    System.out.print("Enter score for " + subjects[j] + ": ");
                    score = input.nextInt();
                } while (score < 0 || score > 100);
                scores[i][j] = score;
            }
        }

        int[] totalScores = new int[numStudents];
        int[] passCounts = new int[numSubjects];
        int[] failCounts = new int[numSubjects];

        for (int i = 0; i < numStudents; i++) {
            for (int j = 0; j < numSubjects; j++) {
                int score = scores[i][j];
                totalScores[i] += score;
                if (score >= 50) {
                    passCounts[j]++;
                } else {
                    failCounts[j]++;
                }
            }
        }

        int bestSubjectIndex = 0, worstSubjectIndex = 0;
        for (int j = 1; j < numSubjects; j++) {
            if (passCounts[j] > passCounts[bestSubjectIndex]) bestSubjectIndex = j;
            if (failCounts[j] > failCounts[worstSubjectIndex]) worstSubjectIndex = j;
        }

        int bestStudentIndex = 0, worstStudentIndex = 0;
        for (int i = 1; i < numStudents; i++) {
            if (totalScores[i] > totalScores[bestStudentIndex]) bestStudentIndex = i;
            if (totalScores[i] < totalScores[worstStudentIndex]) worstStudentIndex = i;
        }

        System.out.println("\n=== CLASS SUMMARY ===");
        System.out.println("Best Subject (most passed): " + subjects[bestSubjectIndex]);
        System.out.println("Worst Subject (most failed): " + subjects[worstSubjectIndex]);
        System.out.println("Best Student: " + studentNames[bestStudentIndex] + " with total: " + totalScores[bestStudentIndex]);
        System.out.println("Worst Student: " + studentNames[worstStudentIndex] + " with total: " + totalScores[worstStudentIndex]);

        for (int i = 0; i < numStudents; i++) {
            System.out.print(studentNames[i] + ": ");
            for (int j = 0; j < numSubjects; j++) {
                System.out.print(subjects[j] + "=" + scores[i][j] + " ");
            }
            System.out.println("Total=" + totalScores[i]);
        }
    }
}