const { ApolloError } = require('apollo-server-express');
const { User } = require('../models');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resolvers = {
    Query: {
        async user(_, {ID}) {
            return await User.findById(ID)
        },
        async getUsers(_, {amount}) {
            return await User.find().sort({ createdAt: -1 }).limit(amount)
        }
    },
    Mutation: {
        async createUser(_, {userInput: {name, username}}) {
            const createdUser = new User({
                name: name,
                username: username,
                createdAt: new Date().toISOString()
            });

            const res = await createdUser.save(); // Saving on MongoDB
            
            return {
                id: res.id,
                ...res._doc
            }
        },
        
        async deleteUser(_, {ID}) {
            const wasDeleted = (await User.deleteOne({ _id: ID})).deletedCount;
            return wasDeleted; //returns 1 if an user was deleted, it returns 0 if nothing was deleted
        },

        async editUser(_, {ID, userInput: {name, username}}) {
            const wasEdited = (await User.updateOne({ _id: ID}, {name: name, username: username})).modifiedCount;
            return wasEdited; // returns 1 if an user was edited, it returns 0 if nothing was edited
        },

        ////////// New Mutations ///////////

        async registerUser(_, {registerInput: { name, username, email, password } }) {

            // Check if an old user exists with email attempting to register
            const oldUser = await User.findOne({ email });

            // Throw error if user exists
            if (oldUser) {
                throw new ApolloError('An user is already registered with the email' + email, 'USER_ALREADY_EXISTS')
            };

            // Encrypt password using bcrypt
            var encryptedPassword = await bcrypt.hash(password, 10);

            // Build mongoose new User model
            const newUser = new User({
                name: name,
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword,
                createdAt: new Date().toISOString()
            });

            // Create JsonWebToken and attatch it
            const token = jwt.sign(
                { user_id: newUser._id, email },
                "BOLT_PERRO",
                {
                    expiresIn: "1h"
                }
            );

            newUser.token = token;

            // Save user in MongoDB
            const res = await newUser.save();

            return {
                id: res.id,
                ...res._doc
            }

        },

        async loginUser(_, {loginInput: { email, password }}) {
            // Check if user exists using email
                const user = await User.findOne({ email });
                if(user){
                // Check if entered password matches encrypted password
                if (user && (await bcrypt.compare(password, user.password))) {
                    // Create a new token
                    const token = jwt.sign(
                        { user_id: user._id, email },
                        "BOLT_PERRO",
                        {
                            expiresIn: "1h"
                        }
                    );

                    // Attatch token to user trying to log in
                    user.token = token;

                return {
                    id: user.id,
                    ...user._doc
                    }
                } else {
                // If user doesnt exist throw error
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD')
                };
             } else {
                throw new ApolloError('Email not found. Please register', 'NOT_AN_USER')
             };
        }
    }
};

module.exports = resolvers;