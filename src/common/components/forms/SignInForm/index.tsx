import { Formik } from "formik"
import { useHandleContext } from "@/contexts/ContextSessionProvider"
import { Credentials } from "@/models/sessionInterfaces"
import { GeneralInputs } from "../../GeneralInput"
import { validateForm } from "./validateSchema"

export const SignInForm = () => {
const {session} = useHandleContext()

return(
  <Formik
    initialValues={validateForm.initials}
    validationSchema={validateForm.schema}
    onSubmit={({email, password}:Credentials)=>{
      session({email, password})

    }}
  >
    {
      ({
        handleBlur,
        handleSubmit,
        handleChange,
        values
      })=>{
        return(
          <form onSubmit={handleSubmit} className="flex border-2  rounded-xl h-[200px] flex-col w-[300px] p-4 justify-around">

            <GeneralInputs 
              initialValues={validateForm.initials}
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
            <button className=" bg-orange-500 p-2" type="submit">
              Sing In
            </button>
          </form>
        )
      }
    }

  </Formik>
  )
}