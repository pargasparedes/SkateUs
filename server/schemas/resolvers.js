const { User } = require('../models');

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
            console.log(res._doc);
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
        }
    }
};

module.exports = resolvers;