// resolvers.js

const { GraphQLScalarType } = require("graphql");

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()), d.getFullYear()].join("/");
}

// Define Date scalar type.

const GQDate = new GraphQLScalarType({
  name: "GQDate",
  description: "Date type",
  parseValue(value) {
    // value comes from the client
    return value; // sent to resolvers
  },
  serialize(value) {
    // value comes from resolvers
    return value; // sent to the client
  },
  parseLiteral(ast) {
    // value comes from the client
    return new Date(ast.value); // sent to resolvers
  }
});

// data store with default data
const customers = [
  {
    id: 1,
    firstName: "Johan",
    lastName: "Peter",
    dob: new Date("2014-08-31"),
    email: "johan@gmail.com",
    street: "Strasse",
    housenumber: "1",
	postalcode: "12345",
	city: "Ort1"
  },
  {
    id: 2,
    firstName: "Alex",
    lastName: "Bierdeckel",
    dob: new Date("2014-07-31"),
    email: "ab@gmail.com",
    street: "Strasse",
    housenumber: "2",
	postalcode: "47895",
	city: "Ort2"
  },
  {
    id: 3,
    firstName: "Silke",
    lastName: "Hill",
    dob: new Date("2010-08-31"),
    email: "sill@gmail.com",
    street: "Strasse",
    housenumber: "3",
	postalcode: "15984",
	city: "Ort3"
  }
];

const resolvers = {
  Query: {
    Customers: () => customers, // return all customers
    Customer: (_, { id }) =>
      customers.find(customer => customer.id == id) // return customer by id
  },
  Mutation: {
    // create a new customer
    createCustomer: (root, args) => {
      // get next customer id
      const nextId =
        customers.reduce((id, customer) => {
          return Math.max(id, customer.id);
        }, -1) + 1;
      const newCustomer = {
        id: nextId,
        firstName: args.firstName,
        lastName: args.lastName,
        dob: args.dob,
        email: args.email,
        street: args.street,
        housenumber: args.housenumber,
		postalcode: args.postalcode,
		city: args.city
      };
      // add customer to collection
      customers.push(newCustomer);
      return newCustomer;
    }, // delete customer by id
    deleteCustomer: (root, args) => {
      // find index by id
      const index = customers.findIndex(
        customer => customer.id == args.id
      );
      // remove customer by index
      customers.splice(index, 1);
    }, // update customer
    updateCustomer: (root, args) => {
      // find index by id
      const index = customers.findIndex(
        customer => customer.id == args.id
      );
      customers[index].firstName = args.firstName;
      customers[index].lastName = args.lastName;
      customers[index].dob = args.dob;
      customers[index].email = args.email;
      customers[index].street = args.street;
      customers[index].housenumber = args.housenumber;
	  customers[index].postalcode = args.postalcode;
      customers[index].city = args.city;
      return customers[index];
    }
  },
  GQDate
};

module.exports.Resolvers = resolvers;