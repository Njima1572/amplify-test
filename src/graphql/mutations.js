/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      name
      description
      location {
        id
        name
        url
        createdAt
        updatedAt
      }
      status
      timeslots {
        id
        startAt
        duration
        createdAt
        updatedAt
      }
      leader {
        id
        name
        type
        createdAt
        updatedAt
      }
      assigned {
        id
        name
        type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      name
      description
      location {
        id
        name
        url
        createdAt
        updatedAt
      }
      status
      timeslots {
        id
        startAt
        duration
        createdAt
        updatedAt
      }
      leader {
        id
        name
        type
        createdAt
        updatedAt
      }
      assigned {
        id
        name
        type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      name
      description
      location {
        id
        name
        url
        createdAt
        updatedAt
      }
      status
      timeslots {
        id
        startAt
        duration
        createdAt
        updatedAt
      }
      leader {
        id
        name
        type
        createdAt
        updatedAt
      }
      assigned {
        id
        name
        type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const createTimeslot = /* GraphQL */ `
  mutation CreateTimeslot(
    $input: CreateTimeslotInput!
    $condition: ModelTimeslotConditionInput
  ) {
    createTimeslot(input: $input, condition: $condition) {
      id
      startAt
      duration
      createdAt
      updatedAt
    }
  }
`;
export const updateTimeslot = /* GraphQL */ `
  mutation UpdateTimeslot(
    $input: UpdateTimeslotInput!
    $condition: ModelTimeslotConditionInput
  ) {
    updateTimeslot(input: $input, condition: $condition) {
      id
      startAt
      duration
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimeslot = /* GraphQL */ `
  mutation DeleteTimeslot(
    $input: DeleteTimeslotInput!
    $condition: ModelTimeslotConditionInput
  ) {
    deleteTimeslot(input: $input, condition: $condition) {
      id
      startAt
      duration
      createdAt
      updatedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      author {
        id
        name
        type
        createdAt
        updatedAt
      }
      content
      createdAt
      comments {
        nextToken
      }
      images
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      author {
        id
        name
        type
        createdAt
        updatedAt
      }
      content
      createdAt
      comments {
        nextToken
      }
      images
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      author {
        id
        name
        type
        createdAt
        updatedAt
      }
      content
      createdAt
      comments {
        nextToken
      }
      images
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      authod {
        id
        name
        type
        createdAt
        updatedAt
      }
      content
      createdAt
      attachedTo {
        id
        content
        createdAt
        images
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      authod {
        id
        name
        type
        createdAt
        updatedAt
      }
      content
      createdAt
      attachedTo {
        id
        content
        createdAt
        images
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      authod {
        id
        name
        type
        createdAt
        updatedAt
      }
      content
      createdAt
      attachedTo {
        id
        content
        createdAt
        images
        updatedAt
      }
      updatedAt
    }
  }
`;
