import { useState } from 'react'

const useCreateViceForm = (callback) => {
  const [inputs, setInputs] = useState({
    category_id: null,
    name: '',
    description: '',
    amount: 0
  })

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    callback(inputs)
  }

  const handleInputChange = (e, catId) => {
    e.persist();
    setInputs(inputs =>({
      ...inputs,
      [e.target.name]: e.target.value
    }))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useCreateViceForm
