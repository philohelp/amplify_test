/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTestComment = /* GraphQL */ `
  query GetTestComment($id: ID!) {
    getTestComment(id: $id) {
      id
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listTestComments = /* GraphQL */ `
  query ListTestComments(
    $filter: ModelTestCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTestTalk = /* GraphQL */ `
  query GetTestTalk($id: ID!) {
    getTestTalk(id: $id) {
      id
      clientId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTestTalks = /* GraphQL */ `
  query ListTestTalks(
    $filter: ModelTestTalkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestTalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
