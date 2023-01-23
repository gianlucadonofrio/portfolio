import { useState } from 'react'

export const useForm = (initalForm) => {
  const [formState, setFormState] = useState(initalForm)

  const onResetForm = () => {
    setFormState(initalForm)
  }

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }
  return { ...formState, formState, onInputChange, onResetForm }
}
