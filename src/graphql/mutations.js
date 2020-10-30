/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTestTalk = /* GraphQL */ `
  mutation CreateTestTalk(
    $input: CreateTestTalkInput!
    $condition: ModelTestTalkConditionInput
  ) {
    createTestTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTestTalk = /* GraphQL */ `
  mutation UpdateTestTalk(
    $input: UpdateTestTalkInput!
    $condition: ModelTestTalkConditionInput
  ) {
    updateTestTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTestTalk = /* GraphQL */ `
  mutation DeleteTestTalk(
    $input: DeleteTestTalkInput!
    $condition: ModelTestTalkConditionInput
  ) {
    deleteTestTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createTestComment = /* GraphQL */ `
  mutation CreateTestComment(
    $input: CreateTestCommentInput!
    $condition: ModelTestCommentConditionInput
  ) {
    createTestComment(input: $input, condition: $condition) {
      id
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const updateTestComment = /* GraphQL */ `
  mutation UpdateTestComment(
    $input: UpdateTestCommentInput!
    $condition: ModelTestCommentConditionInput
  ) {
    updateTestComment(input: $input, condition: $condition) {
      id
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteTestComment = /* GraphQL */ `
  mutation DeleteTestComment(
    $input: DeleteTestCommentInput!
    $condition: ModelTestCommentConditionInput
  ) {
    deleteTestComment(input: $input, condition: $condition) {
      id
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
