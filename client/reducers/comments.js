// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of current state

// import store from '../';

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;
