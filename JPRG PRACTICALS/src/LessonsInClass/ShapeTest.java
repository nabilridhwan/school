package LessonsInClass;

public class ShapeTest {
    Shape[] shapes = new Shape[10];
    public ShapeTest() {
        randomlyCreateShapes(shapes);
        drawShapes(shapes);
    }

    public void randomlyCreateShapes(Shape[] theShapes){
        for(int i=0; i<theShapes.length; i++){
            int shapeType = (int)(Math.random()*3);
            if(shapeType == 0){
                theShapes[i] = new Circle();
            }else if(shapeType == 1){
                theShapes[i] = new Rectangle();
            }else if(shapeType == 2){
                theShapes[i] = new Triangle();
            }
        }
    }

    public void displayShapes(){
        for(int i=0; i<shapes.length; i++){
            shapes[i].display();
        }
    }

    public static void drawShapes(Shape[] theShapeList){
        for (int i = 0; i < theShapeList.length; i++) {
            theShapeList[i].display();
        }
    }

    public static void main (String[] args) {
        ShapeTest shapeTest =  new ShapeTest();
    }
}
