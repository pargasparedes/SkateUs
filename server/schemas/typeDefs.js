const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    name: String
    username: String
    createdAt: String
}

input UserInput {
    name: String
    username: String
}

type Query {
    user(ID: ID!): User!
    getUsers(amount: Int!): [User]
}

type Mutation {
    createUser(userInput: UserInput): User!
    deleteUser(ID: ID!): Boolean
    editUser(ID: ID!, userInput: UserInput): Boolean
}
`;

module.exports = typeDefs;