package SerializableTest;
import java.io.*;

public class DeSerializationTest {
    public static void main(String[] args) {

        Rectangle r = new Rectangle(10, 20);

//        Writing the object
        try{
            ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("Rectangle.ser"));
            oos.writeObject(r);

            oos.close();
//        Reading the object
        File f = new File("Rectangle.ser");

            ObjectInputStream inStream = new ObjectInputStream(new FileInputStream(f));

            Rectangle rRead = (Rectangle)inStream.readObject();

            System.out.println("The area of the rectangle is " + rRead.calculateArea());
            inStream.close();
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
