package books;

public class Book {
	
	String ISBN;
	String Title;
	String Author;
	String Publisher;
	int Quantity;
	int Price;
	
	public Book(String iSBN, String title, String author, String publisher, int quantity, int price) {
		ISBN = iSBN;
		Title = title;
		Author = author;
		Publisher = publisher;
		Quantity = quantity;
		Price = price;
	}

	public String getISBN() {
		return ISBN;
	}

	public void setISBN(String iSBN) {
		ISBN = iSBN;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	public String getAuthor() {
		return Author;
	}

	public void setAuthor(String author) {
		Author = author;
	}

	public String getPublisher() {
		return Publisher;
	}

	public void setPublisher(String publisher) {
		Publisher = publisher;
	}

	public int getQuantity() {
		return Quantity;
	}

	public void setQuantity(int quantity) {
		Quantity = quantity;
	}

	public int getPrice() {
		return Price;
	}

	public void setPrice(int price) {
		Price = price;
	}
	
	
	
	
}
