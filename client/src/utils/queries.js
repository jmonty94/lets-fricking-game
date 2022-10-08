import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query Query {
    me {
      _id
      username
      email
      xboxUsername
      psnUsername
      steamUsername
      nintendoUsername
      currentTeam {
        name
        game
      }
    }
  }
`;

export const QUERY_TEAMS = gql`
  query teams {
    teams {
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
        email
        xboxUsername
        psnUsername
        steamUsername
        nintendoUsername
      }
    }
  }
`;

export const QUERY_MY_TEAM = gql`
  query Query {
    myTeam {
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
        email
        xboxUsername
        psnUsername
        steamUsername
        nintendoUsername
      }
    }
  }
`;


