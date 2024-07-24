
let initial={
    isloading:false,
    data:[],
    iserror:false
}

const productreducer=(state=initial,action)=>{
    switch(action.type){
        case "LOAD" :
            return {
                ...state,
                isloading:true
            }
        case "SUCCESS" :
            return{
                ...state,
                isloading:false,
                data:action.payload,
            }
        case "ERR":
            return{
                ...state,
                isloading:false,
                iserror:true
            }
        default: return state;
    }
}

export default productreducer