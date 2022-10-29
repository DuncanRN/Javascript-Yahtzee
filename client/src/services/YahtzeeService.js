const baseRollsURL = 'http://localhost:9000/api/rolls';

const YahtzeeService = {

    getRolls() {
      return fetch(baseRollsURL)
      .then(res => res.json());
    },

    addRoll(roll) {
      return fetch(baseRollsURL, {
        method: 'POST',
        body: JSON.stringify({"roll" : roll}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
    },

    updateRoll(roll) {
    return fetch(baseRollsURL + roll._id, {
      method: 'PUT',
      body: JSON.stringify(roll),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteRoll(id) {
    return fetch(baseRollsURL + id, {
      method: 'DELETE'
    });
  }



// Keep as much of the game logic in here as we can.

// export const calculateCategoryScore = () => {
//     // TODO write the big if elseif statement here for all 13 categories
// }


// TODO another function here to calculate the bonuses
// are there two different bonuses? Needs two different functions?
};

export default YahtzeeService;