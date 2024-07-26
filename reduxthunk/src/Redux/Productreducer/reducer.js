
import {load,success,err} from './actiontype'

let initial={
    isload:false,
    data:[],
    iserr:false
}


const reducer=(state=initial,action)=>{
    switch(action.type){
        case load:
            return{
                ...state,
                isload:true
            }
        case success:
            return {
                ...state,
                data:action.payload,
                isload:false
            }
        case err:
            return{
                ...state,
                iserr:true,
                isload:false
            }
        default : return state
    }
}


export default reducer