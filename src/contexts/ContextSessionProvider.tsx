"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useSessionUser } from "@/hooks/useSessionUser";
import { ContextValue } from "@/models/sessionInterfaces";
import { useRouter } from "next/navigation";
const Context = createContext<ContextValue | undefined>(undefined);

export const useHandleContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "useHandleContext debe ser utilizado dentro de un ContextSessionProvider"
    );
  }

  return context;
};

export const ContextSessionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const { session, data } = useSessionUser();
  const [dataToken, setDataToken] = useState("");
  const router = useRouter()

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", JSON.stringify(data.Login))
    }
    captureToken();

  }, [data]);

  const captureToken = () => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      router.replace('/dashboard')
      setDataToken(userToken);
    }
  };

  const contextValue: ContextValue = {
    session,
    dataToken
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
