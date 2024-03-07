const SmallBusinessInventory = artifacts.require("SmallBusinessInventory");

contract("SmallBusinessInventory", accounts => {
    let instance;
    let owner = accounts[0];

    before(async () => {
        instance = await SmallBusinessInventory.deployed();
    });

    it("should add a product correctly", async () => {
        await instance.addProduct("Product 1", 100, 1, {from: owner});
        const product = await instance.products(0);
        assert.equal(product.name, "Product 1");
        assert.equal(product.quantity.toNumber(), 100);
        assert.equal(product.price.toNumber(), 1);
    });

    it("should update quantity correctly", async () => {
        await instance.updateQuantity(0, 50, {from: owner});
        const product = await instance.products(0);
        assert.equal(product.quantity.toNumber(), 50);
    });

    it("should sell product correctly", async () => {
        await instance.sellProduct(0, 10, {from: owner});
        const product = await instance.products(0);
        assert.equal(product.quantity.toNumber(), 40);
    });

    it("should check product quantity correctly", async () => {
        const quantity = await instance.checkProductQuantity(0);
        assert.equal(quantity.toNumber(), 40);
    });
});
