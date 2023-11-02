


const TransactionReducer = ((oldData, newData) => {
  switch (newData.type) {
    case 'Add_Data': {
 
      return [newData.payload, ...oldData];
    }
    case 'user_Delete': {
      console.log(newData.payload);
      return oldData =  oldData.filter(item => item.id != newData.payload);
    }
    case 'user_update' : {
    let findUpdate=oldData.filter((data)=>{
   return   data.id==newData.payload.id
    })
return [...oldData]
    }
    
    default: {
    return oldData;
    }
  }
});

export default TransactionReducer;
