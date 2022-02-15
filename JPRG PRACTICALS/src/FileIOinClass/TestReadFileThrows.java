package FileIOinClass;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class TestReadFileThrows {

    private static String filename = "src/FileIOinClass/number.txt";

    private static String readFile(String filename) throws IOException {
        StringBuilder sb = new StringBuilder();
        BufferedReader br = null;

        br = new BufferedReader(new FileReader(filename));


        String line = br.readLine();

        while (line != null) {
            sb.append(line).append("\n");
            line = br.readLine();
        }

        br.close();
        return sb.toString();
    }

    public static void main(String[] args){
        String content = "";
        try{
            content = readFile("hi");
        }catch(IOException e){
            e.printStackTrace();
        }

        System.out.println(content);
    }
}
