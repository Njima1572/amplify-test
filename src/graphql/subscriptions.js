/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTimeslot = /* GraphQL */ `
  subscription OnCreateTimeslot {
    onCreateTimeslot {
      id
      startAt
      duration
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimeslot = /* GraphQL */ `
  subscription OnUpdateTimeslot {
    onUpdateTimeslot {
      id
      startAt
      duration
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimeslot = /* GraphQL */ `
  subscription OnDeleteTimeslot {
    onDeleteTimeslot {
      id
      startAt
      duration
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
