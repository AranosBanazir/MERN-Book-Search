import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation ADD_USER($user: UserInput!) {
    addUser(user: $user) {
        token
        user {
        username
        _id
        }
    }
    }
`


export const LOGIN = gql`
    mutation LOGIN($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
        }
    }
`

export const SAVE_BOOK = gql`
    mutation SAVE_BOOK($userId: ID!, $bookId: String!) {
        saveBook(userId: $userId, bookId: $bookId) {
            _id  
        }
    }
`

// export const DELETE_BOOK = gql`
    

// `