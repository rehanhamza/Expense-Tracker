import React from 'react'
import Form from './Component/Form/Form'
import {TransactionProvider} from './Store/Store'

const App = () => {
  return (
    <div>
      <TransactionProvider>

      <Form />
      </TransactionProvider>
    </div>
  )
}

export default App