import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      profile {
        username
        email
        _id
      }
    }
  }
`;

export const EDIT_PROFILE = gql `
mutation EditTags($xboxUsername: String, $psnUsername: String, $steamUsername: String, $nintendoUsername: String) {
    editTags(xboxUsername: $xboxUsername, psnUsername: $psnUsername, steamUsername: $steamUsername, nintendoUsername: $nintendoUsername) {
      username
      email
      xboxUsername
      psnUsername
      steamUsername
      nintendoUsername
      currentTeam {
      }
    }
  }
`;
