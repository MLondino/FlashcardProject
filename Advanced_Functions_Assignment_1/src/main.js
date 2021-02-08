/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  let found = parks.filter((park) => park.location.state === state)
  return found
}

function getWishlistParksForUser(parks,users,username) {
  const foundList = users[username].wishlist
  const found = []; 
  for (let value of foundList) { 
    for (let park of parks) { 
      if (park.id === value) { 
        found.push(park)
      } 
    } 
  } 
  return found
}

function userHasVisitedAllParksInState(parks, users, state, username) {
  let foundState = parks.filter((park) => park.location.state === state)
  let stateId = foundState.map((park) => park.id)
  let visitedParks = users[username].visited
  if (foundState.length != visitedParks.length) return false
  else {
    for(let i = 0; i < foundState.length; i++){
      if(foundState[i] != visitedParks[i])
        return true
    }
  }
}

function userHasVisitedParkOnWishlist(users, usernameA, usernameB) {
  let listA = users[usernameA].wishlist
  let listB = users[usernameB].visited
  let result = listA.some((value, i) => value === listB[i])
  return result
}

function getUsersForUserWishlist(users, username) {
  let userList = users[username].wishlist
  let result = []
  let final = []
  for (let name in users) {
    result = users[name].visited
    for (let i = 0; i < userList.length; i++) {
      console.log(userList[i])
            
    }
    }
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
