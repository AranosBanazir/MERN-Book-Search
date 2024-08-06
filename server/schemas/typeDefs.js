const typeDefs = `
  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    savedBooks: [BookInput]
  }

  input BookInput {
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(user: UserInput!): Auth
    deleteUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, book: BookInput!): Book
    deleteBook(userId: ID!, bookId: String!): Book
  }
`;

module.exports = typeDefs;
