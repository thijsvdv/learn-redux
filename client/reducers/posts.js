// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of current state

// import store from '../';

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}

export default posts;
