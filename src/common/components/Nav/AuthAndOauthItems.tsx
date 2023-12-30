import { useHandleContext } from "@/contexts/ContextSessionProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NavProps } from "./interfacesNav";

export const AuthAndOauthItems: React.FC<NavProps>  = ({isDarkMode,toggleDarkMode}) => {
  const { dataToken } = useHandleContext();
  const router = useRouter();
  return (
    <nav className="border-2 w-[250px] flex justify-around">
      {dataToken ? (
        <>
          <button onClick={toggleDarkMode}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
          <Link href={"#"}>mi prfile</Link>
          <Link href={"#"}>consig</Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              router.replace("/");
            }}
          >
            Exit
          </button>
        </>
      ) : (
        <>
          <button onClick={toggleDarkMode}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
          <Link href={"#"}>Home</Link>
          <Link href={"/login"}>Sign In</Link>
          <Link href={"#"}>About</Link>
        </>
      )}
    </nav>
  );
};
