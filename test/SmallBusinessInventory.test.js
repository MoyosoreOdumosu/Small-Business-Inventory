
// Import the SmallBusinessInventory contract from the artifacts
const SmallBusinessInventory = artifacts.require("SmallBusinessInventory");

// Define the contract test suite
contract("SmallBusinessInventory", accounts => {
    // Declare variables for the contract instance and the owner of the contract
    let instance;
    let owner = accounts[0];

    // Before running the tests, deploy the contract
    before(async () => {
        instance = await SmallBusinessInventory.deployed();
    });

    // Test case: Check if a product is added correctly
    it("should add a product correctly", async () => {
        // Add a product with name "Product 1", quantity 100, and price 1
        await instance.addProduct("Product 1", 100, 1, {from: owner});
        // Retrieve the product details
        const product = await instance.products(0);
        // Check if the product details are correct
        assert.equal(product.name, "Product 1");
        assert.equal(product.quantity.toNumber(), 100);
        assert.equal(product.price.toNumber(), 1);
    });

    // Test case: Check if the product quantity is updated correctly
    it("should update quantity correctly", async () => {
        // Update the quantity of the product at index 0 to 50
        await instance.updateQuantity(0, 50, {from: owner});
        // Retrieve the updated product details
        const product = await instance.products(0);
        // Check if the quantity is updated correctly
        assert.equal(product.quantity.toNumber(), 50);
    });

    // Test case: Check if selling a product updates the quantity correctly
    it("should sell product correctly", async () => {
        // Sell 10 units of the product at index 0
        await instance.sellProduct(0, 10, {from: owner});
        // Retrieve the updated product details
        const product = await instance.products(0);
        // Check if the quantity is updated correctly
        assert.equal(product.quantity.toNumber(), 40);
    });

    // Test case: Check if the product quantity is retrieved correctly
    it("should check product quantity correctly", async () => {
        // Retrieve the quantity of the product at index 0
        const quantity = await instance.checkProductQuantity(0);
        // Check if the quantity is correct
        assert.equal(quantity.toNumber(), 40);
    });
});
```
