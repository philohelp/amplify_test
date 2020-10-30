/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTestTalk = /* GraphQL */ `
  subscription OnCreateTestTalk($name: String) {
    onCreateTestTalk(name: $name) {
      id
      clientId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTestTalk = /* GraphQL */ `
  subscription OnUpdateTestTalk($id: ID, $name: String, $description: String) {
    onUpdateTestTalk(id: $id, name: $name, description: $description) {
      id
      clientId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTestTalk = /* GraphQL */ `
  subscription OnDeleteTestTalk($id: ID) {
    onDeleteTestTalk(id: $id) {
      id
      clientId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTestComment = /* GraphQL */ `
  subscription OnCreateTestComment {
    onCreateTestComment {
      id
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTestComment = /* GraphQL */ `
  subscription OnUpdateTestComment {
    onUpdateTestComment {
      id
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTestComment = /* GraphQL */ `
  subscription OnDeleteTestComment {
    onDeleteTestComment {
      id
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
