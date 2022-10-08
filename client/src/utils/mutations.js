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
      token
      profile {
        username
        email
        _id
      }
    }
  }
`;

export const EDIT_TAGS = gql`
  mutation Mutation($xboxUsername: String, $psnUsername: String, $steamUsername: String, $nintendoUsername: String) {
    editTags(xboxUsername: $xboxUsername, psnUsername: $psnUsername, steamUsername: $steamUsername, nintendoUsername: $nintendoUsername) {
      username
      xboxUsername
      psnUsername
      nintendoUsername
      steamUsername
    }
  }
`;

export const ADD_TEAM = gql`
  mutation Mutation($name: String!, $squadSize: Int!, $game: String!, $deviceType: String!, $skill: String!) {
    addTeam(name: $name, squadSize: $squadSize, game: $game, deviceType: $deviceType, skill: $skill) {
      name
      squadSize
      game
      deviceType
      skill
      owner {
        username
      }
      squadMembers {
        username
        email
        xboxUsername
        psnUsername
        steamUsername
        nintendoUsername
      }
    }
  }
`

export const JOIN_TEAM = gql`
  mutation Mutation($teamId: ID!) {
    joinTeam(teamId: $teamId) {
      _id
      name
      squadSize
      game
      deviceType
      skill
      owner {
        username
      }
      squadMembers {
        username
      }
    }
  }
`;
