import { useForm } from "react-hook-form"


export default function FormHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" type="email" {...register("email", { required: true })} />
      {errors.email && <span>La contraseña es requerida</span>}

      <input type="password" {...register("password", { required: true })} />

      {errors.password && <span>La contraseña es requerida</span>}


      <input type="submit" />
    </form>
  )
}

