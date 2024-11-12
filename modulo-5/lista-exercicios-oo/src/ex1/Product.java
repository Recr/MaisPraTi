package ex1;

public class Product {

    private String name;
    private Double price;
    private Long quantity;

    public Product(String name, Double price, Long quantity) {
        this.name = name;
        if (price < 0)
            throw new Error("Price cannot be negative");
        this.price = price;
        if (quantity < 0)
            throw new Error("Quantity cannot be negative");
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        if (price < 0)
            throw new Error("Price cannot be negative");
        this.price = price;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        if (quantity < 0)
            throw new Error("Quantity cannot be negative");
        this.quantity = quantity;
    }
}
