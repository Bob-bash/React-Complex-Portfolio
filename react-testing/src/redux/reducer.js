const inistate={
    items:[],
    totals:[]
}

export default function reducer( state = inistate, action ) {
	switch ( action.type ) { 
    case "ITEMS":return{...state,items:[...state.items,action.item]}
    case "ITEMS1":return{ ...state,items:[...state.items.slice(0,action.id), ...state.items.slice(action.id + 1)]}
    case "TOTALS":return{...state,totals:[...state.totals,action.total]}
    case "TOTALS1":return{ ...state,totals:[...state.totals.slice(0,action.id), ...state.totals.slice(action.id + 1)]}
	default : return state
    }
}