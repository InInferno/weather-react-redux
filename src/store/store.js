import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { weatherData } from './reducers/weatherData';


const store = createStore(
    weatherData,
    composeWithDevTools(applyMiddleware(thunk))
);

// store.subscribe(() => console.info('subscribe', store.getState()))

export default store;
