const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');
const createUser = () => {
    const newUser = {
        password: faker.internet.password(20,true,/[A-Z]/, 'Brian'),
        phoneNumber: faker.phone.number('###-###-####'), 
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.number({min: 1, max: 10}),
        email: faker.internet.email(),

    };
    return newUser;
};
const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.number({min: 1, max: 10}),
        name: faker.company.name(),
        address: {street:faker.address.streetAddress(true),
                    city: faker.address.cityName(),
                    state: faker.address.state(),
                    zipCode: faker.address.zipCode(),
                    country: "USA"}

    }
    return newCompany;
};
const newFakeUser = createUser();
console.log(newFakeUser);
const newFakeCompany = createCompany();
console.log(newFakeCompany);

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello Brian" });
});
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});
app.get("/api/user/company", (req, res) => {
    res.json({company: createCompany(), user: createUser()});
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );