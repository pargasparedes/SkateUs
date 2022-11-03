const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    name: String
    username: String
    email: String
    password: String
    token: String
    createdAt: String
}

input UserInput {
    name: String!
    username: String!
}

input RegisterInput {
    name: String
    username: String
    email: String
    password: String
    confirmPassword: String
}

input LoginInput {
    email: String
    password: String
}

type Query {
    user(ID: ID!): User!
    getUsers(amount: Int!): [User]
}

type Mutation {
    createUser(userInput: UserInput): User!
    deleteUser(ID: ID!): Boolean
    editUser(ID: ID!, userInput: UserInput): Boolean

    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
}
`;

module.exports = typeDefs;