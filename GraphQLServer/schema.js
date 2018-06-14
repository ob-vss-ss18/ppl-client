// schema.js

const schema = `
# declare custom scalars for date as GQDate
scalar GQDate

# customer type
type Customer {
    id: ID!
    firstName: String
    lastName: String
    dob: GQDate
    email: String
    street: String
    housenumber: String
	postalcode: String
	city: String
}

type Query {
    # Return a customer by id
    Customer(id: ID!): Customer
    # Return all customers
    Customers(limit: Int): [Customer]
}

type Mutation {
    # Create a customer
    createCustomer (firstName: String,lastName: String, dob: GQDate, email: String, street: String, housenumber: String, postalcode: String, city: String): Customer
    # Update a customer
    updateCustomer (id: ID!, firstName: String,lastName: String, dob: GQDate, email: String, street: String, housenumber: String, postalcode: String, city: String): Customer
    # Delete a customer
    deleteCustomer(id: ID!): Customer
}
`;

module.exports.Schema = schema;