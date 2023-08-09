import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import axios from 'axios';

const incbyam = "incrementbyamount"
// store asla pahije - global state 
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

const history = [];

//  reducer 
function reducer(state = { amount: 1 }, action) {
    if (action.type === incbyam) {
        return { amount: action.payload };
    }
    return state;

}

// store.subscribe(() => {
//     history.push(store.getState());
//     console.log(history);
// })

// api call 
// async function getData() {

//     console.log(data);
// }
// getData();

async function init(dispatch, getState) {
    const { data } = await axios.get('http://localhost:3000/accounts/1');
    dispatch({ type: incbyam, payload: data.amount })
}

setTimeout(() => {
    store.dispatch(init);
}, 5000)



