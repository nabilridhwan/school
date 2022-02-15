package SerializableTest;
import java.io.*;

public class Rectangle implements Serializable{

    private int width;
    private int height;
    
    public Rectangle(int inWidth, int inHeight){
        width = inWidth;
        height = inHeight;


    }
    
    public int getWidth(){
        return width;
    }
    public void setWidth(int inWidth){
        width = inWidth;
    }
    public int getHeight(){
        return height;
    }
    public void setHeight(int inHeight){
        height = inHeight;
    }
    public int calculateArea(){
        return width * height;
    }
}
