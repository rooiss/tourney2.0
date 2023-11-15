import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-center h-screen"
    >
      <div className="flex flex-col items-center bg-gray-200 p-8 rounded-md space-y-3 > *">
        <input
          placeholder="First Name"
          {...register('firstName', { required: true })}
        />
        <input
          placeholder="Last Name"
          {...register('lastName', { required: true })}
        />
        <input placeholder="Email" {...register('email', { required: true })} />
        <input
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <button type="submit">Sign Up</button>
      </div>
    </form>
  )
}
