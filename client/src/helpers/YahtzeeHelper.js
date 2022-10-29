const baseRollsURL = 'http://localhost:9000/api/rolls';


export const postRoll = (payload) => {
    return fetch(baseRollsURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
};

export const putRoll = (payload) => {
    const id = payload[0]._id;
    const newPayload = {};
        newPayload['roll'] = payload[0].roll;

    return fetch(baseRollsURL + id, {
        method: 'PUT',
        body: JSON.stringify(newPayload),
        headers: {'Content-Type': 'application/json'}
    })
};



// Keep as much of the game logic in here as we can.

// export const calculateCategoryScore = () => {
//     // TODO write the big if elseif statement here for all 13 categories
// }


// TODO another function here to calculate the bonuses
// are there two different bonuses? Needs two different functions?
