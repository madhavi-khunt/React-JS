import {legacy_createStore} from 'redux'


let initial=0

const reducer=(state=initial,action)=>{

    switch(action.type){
        case "Add" :
            return state+1;
        case "Minus":
            return state-1;
        default :
            return state;
    }

}

const store=legacy_createStore(reducer)


export default store