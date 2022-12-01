export const initialstate = {
    loading : true,
    error :'',
    post : []
}

export const reducer = ( state=initialstate, action) => {
    switch (action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error :''
            }

        case 'FETCH_ERROR':
            return{
                loading:false,
                post:[],
                error:action.error,

            }
            default:
                return state;
    }
}