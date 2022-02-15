package FileIOinClass;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

public class FormTest extends JFrame {
    private JPanel panel1;
    private JTextField cInput;
    private JButton convertButton;
    private JTextField fInput;

    public FormTest(String title){
        super(title);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setContentPane(panel1);
        convertButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try{
                    fInput.setText(String.valueOf(convertCtoF(Double.parseDouble(cInput.getText()))));
                }catch(Exception ex){
                   ex.printStackTrace();
                   ErrorMessageDialog eD = new ErrorMessageDialog("An error occirred");
                   eD.setVisible(true);
                }
            }
        });
        fInput.addKeyListener(new KeyAdapter() {
            @Override
            public void keyTyped(KeyEvent e) {
                super.keyTyped(e);
                System.out.println(e.getKeyChar());
            }
        });
    }

    private double convertCtoF(double c){
        return (c * 9/5) + 32;
    }

    public static void main(String[] args) {
        FormTest form = new FormTest("My App");
        form.setSize(300,200);
        form.setVisible(true);


    }
}
