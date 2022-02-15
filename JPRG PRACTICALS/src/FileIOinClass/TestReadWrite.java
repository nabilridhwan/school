package FileIOinClass;

import java.io.*;

public class TestReadWrite {

    public void writeToFile(File f, int[] values){
        try{
            PrintWriter theWriterOutsteam = new PrintWriter(f);
            for(int i = 0; i < values.length; i++){
                theWriterOutsteam.println(values[i]);
            }
            theWriterOutsteam.close();
        }
        catch(FileNotFoundException e){
            System.out.println("File not found");
        }
    }

    public static void main(String[] args) {

        // no need to create File objects.  We can put the filenames directly.
//        File theInputFile = new File("input.txt");
//        File theOutputFile = new File("output.txt");

        try{
//            BufferedReader theBufferedReader = new BufferedReader(new FileReader(theInputFile));
            BufferedReader theBufferedReader = new BufferedReader(new FileReader("number.txt"));
            // using PrintWriter with FileOutputStream is not neccesary.
            // Convenience method is provided using String.
            //PrintWriter theWriterOutsteam = new PrintWriter(new FileOutputStream(theOutputFile));
//            PrintWriter theWriterOutsteam = new PrintWriter(theOutputFile);
            PrintWriter theWriterOutsteam = new PrintWriter("output.txt");
            String theString;
            while((theString = theBufferedReader.readLine())!=null){
                theWriterOutsteam.println(theString);
            }
            // close the file we were reading
            theBufferedReader.close();
            // close the file we were writing to
            theWriterOutsteam.close();
        }
        catch(FileNotFoundException e){
            System.out.println("File not found");
        }
        catch(IOException ioe){
            System.out.println("Problem with IO");
            ioe.printStackTrace();
        }
    }
}
