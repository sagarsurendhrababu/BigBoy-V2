import {createContext,useReducer} from 'react';
import Reducer from './Reducer';
import Store from './Store';

export const Context = createContext();

function Provider(props) {

    const [state, dispatch] = useReducer(Reducer, Store);

    return (
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider;


