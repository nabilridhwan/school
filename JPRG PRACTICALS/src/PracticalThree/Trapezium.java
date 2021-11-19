package PracticalThree;

public class Trapezium {
    private float base;
    private float top;
    private float height;

    public Trapezium(float innerBase, float innerTop, float innerHeight){
        base = innerBase;
        top = innerTop;
        height = innerHeight;
    }

    public float getBase() {
        return base;
    }

    public float getHeight() {
        return height;
    }

    public float getTop() {
        return top;
    }

    public float calculateArea(){
        return (base+top) * height / 2;
    }
}
