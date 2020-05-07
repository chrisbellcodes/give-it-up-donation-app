import { useState } from 'react'

const useCreateViceForm = (callback) => {
  const [inputs, setInputs] = useState({
    category_id: '',
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

  const handleInputChange = (e) => {
    console.log(e.target.parentElement);
    e.persist();
    if(e.target.options) {
      inputs.category_id = e.target.value ;
    }
    setInputs(inputs => ({
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
