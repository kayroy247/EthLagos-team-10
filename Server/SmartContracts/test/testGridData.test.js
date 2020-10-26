const GridData = artifacts.require("GridData");

before(async () => {
    gridinfo = await GridData.deployed();
});

it("can send data to the Grid", async () => {
    const data = await gridinfo.set();
    assert.equal(data, "The data sent to the grid.");
});

it("can fetch the collection of all Grid Data", async () => {
    const data = await gridinfo.get();
    assert.equal(data, "The hashed data exists in the collection.");
});