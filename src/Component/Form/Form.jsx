import React from 'react'
import './Form.css'
import { maraStore } from '../../Store/Store'
import { useContext } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {


  let { transactions, userSection, productSection, updateSection } = useContext(maraStore);
  let { register } = useForm()
  let [newdesc, setDesc] = useState("");
  let [newamount, SetAmount] = useState(0)




  const handleSubmit = (e) => {

    e.preventDefault();

    if (Number(newamount) === 0) {
      alert('Please Enter the Amount')
      return false
    }
    // if(Number(newamount) < 0) {
    //     alert('Please Enter the Valid Amount')
    //     return false
    // }



    console.log(newdesc, newamount, e.id);

    userSection({
      id: Math.floor(Math.random() * 1000),
      desc: newdesc,
      amount: Number(newamount),

    })

    setDesc('');
    SetAmount(0);

  }


  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0)

        income += transactions[i].amount

    }
    return income;
  }

  const getExpnse = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)

        expense += transactions[i].amount
    }
    return expense;
  }


  return (

    <div className='container'>

      <h1 className='text-center'>Expense Tracker by <br /> Rehan Hamza</h1>


      <h3>CURRENT BALANCE <br /> <span className='value'>${getIncome() + getExpnse()}</span></h3>

      <div className='income-container'>

        <h3>INCOME <br /> <span className='income-value'>${getIncome()}</span></h3>
        <h3>EXPENSE <br /> <span className='expense-value'>${getExpnse()}</span> </h3>

      </div>

      <h3 className='History'>Transaction History</h3>

      <hr />

      <ul className='transaction-list'>
        {transactions.map((transObj, index) => {


          return (


            <li key={index.id}>
              <span>{transObj.desc}</span>
              <span>${transObj.amount}</span>

              <span>
                <button onClick={() => {

                  productSection(transObj.id);

                  console.log('index :', index);

                }}>delete</button>
              </span>



              <span>
                <button onClick={() => {
                  let upDataAmount = +prompt("Enter Amount")
                  if (isNaN(upDataAmount)) {
                    return true
                  }
                  if (upDataAmount) {

                    transObj.amount = upDataAmount
                    updateSection(transObj);
                  } else {
                    return false
                  }


                }}>
                  Edit</button>
              </span>

            </li>
          )
        })}


      </ul>


      <h3 className='new-transaction'>Add New Transaction</h3>

      <hr />

      <form className='transaction-form' onSubmit={handleSubmit}>
        <label className='content'>Description
          <br />

          <input className='text' type="text" value={newdesc} onChange={(ev) => setDesc(ev.target.value)} placeholder='Detail of Transaction' />

        </label>
        <br />
        <label className='content'>Transaction Amount

          <br />
          <input className='text' type="number" value={newamount} onChange={(e) => SetAmount(e.target.value)} placeholder='Dollar Value of Transaction' />

        </label>
        <br />

        <input className='btn' type="submit" value='Add Transaction' />


      </form>

    </div>

  )
}

export default Form