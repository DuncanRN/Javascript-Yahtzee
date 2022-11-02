const baseRollsURL = 'http://localhost:9000/api/rolls';

// MAKE NEW SERVICE FOR PLAYER SERVICE?
//DO WE NEED A FETCH FOR PLAYERS NOW

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

//UPDATE PLAYER   - PUT

  //   updatePlayer(player) {
  //   return fetch(baseRollsURL + player._id, {
  //     method: 'PUT',
  //     body: JSON.stringify(player),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json());
  // },

//POST PLAYER

//   export const postPlayer = (payload) => {
//   return fetch(baseURL, {
//       method: 'POST',
//       body: JSON.stringify(payload),
//       headers: { 'Content-Type': 'application/json'}
//   })
//   .then(res => res.json())
// }

  // deleteRoll(id) {
  //   return fetch(baseRollsURL + id, {
  //     method: 'DELETE'
  //   });
  // }



};

export default YahtzeeService;