interface Product {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product) {
    console.log(product.name + " has been saved.");
}
save({ id: 1, name: "Laptop", unitPrice: 3000 });

interface PersonService {
    save();
}

class CustomerService implements PersonService {
    save() {
    }
}