package FileIOinClass;

import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class PrintWriterTest {

    public static void main(String[] args) throws IOException {
        PrintWriter pw = new PrintWriter(new FileWriter("src/FileIOinClass/test.txt", true));


        for(int i = 0; i < 200; i++){
            pw.println("Random Number :" + i);
        }

        pw.close();
    }
}
