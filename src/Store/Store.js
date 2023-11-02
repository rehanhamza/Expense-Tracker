import React, { createContext, useReducer } from "react";
import TransactionReducer from "../Component/Form/Reducer";


const initialTransaction = [
    // { amount: 500, desc: 'Cash' },
    // { amount: -40, desc: 'Book' },
    // { amount: -200, desc: 'Camera', id},

]


export const maraStore = createContext(initialTransaction)


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction)

    function userSection(transObj) {
        dispatch({
            type: 'Add_Data',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
               id: transObj.id
            },
        
        })

     
      
    }

    function productSection(id){
        dispatch({
            type: 'user_Delete',
            payload: id
        })
        console.log(id);
    }

    function updateSection(transObj){
        dispatch({
            type : 'user_update',
            payload :  {
                amount: transObj.amount,
                desc: transObj.desc,
               id: transObj.id
        }
        })
    }

    return (
        <maraStore.Provider value={{

            transactions: state,
            userSection,
            productSection,
            updateSection
        }
        }>
            {children}
        </maraStore.Provider>
    )
}
