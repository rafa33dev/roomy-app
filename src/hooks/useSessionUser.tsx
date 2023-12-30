import { useMutation } from "@apollo/client"
import { LOGIN } from "@/graphql/sessionUser"
import {Credentials} from '@/models/sessionInterfaces'

export const useSessionUser = () => {
  const [halndleSession,{data}] = useMutation(LOGIN)

  const session = async ({email, password}: Credentials) => {
     try {
     await halndleSession({
        variables:{
          email,
          password
        }
      })
     } catch (error) {
      console.error('error al iniciar la session.', error);
     }
  }

  return {
    session,
    data
  }
}