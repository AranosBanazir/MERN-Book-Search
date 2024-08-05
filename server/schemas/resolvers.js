const {signToken, AuthenticationError} = require('../utils/auth')
const {User} = require('../models')
const resolvers = {
    Query:{
        users: async () =>{
            return User.find()
        },
        user: async (parent, args, context) =>{
            if (context.user){
                return User.findById(context.user._id)
            }
        }
    },

    Mutation: {
        addUser: async (parent, {username, email, password}, context) =>{
            const user = User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })
            console.log(email)
            console.log(user)

            if (!user) {
              throw AuthenticationError
            }
      
            const isCorrectPassword = user.isCorrectPassword(password)
      
            if (!isCorrectPassword) {
              throw AuthenticationError
            }
      
            const token = signToken(user)
            return { token, user }
          },
          saveBook: async (parent, { userId, book }, context) => {
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { savedBooks: book } },
              );
            }
            throw AuthenticationError;
          },
          deleteBook: async (parent, { book }, context) => {
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: book } },
              );
            }
            throw AuthenticationError;
          },
        deleteUser: async () =>{
            
        }
    }
}

module.exports = resolvers