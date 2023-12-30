import { AuthAndOauthItems } from "./AuthAndOauthItems"
import { NavProps } from "./interfacesNav"

export const Nav: React.FC<NavProps> = ({isDarkMode, toggleDarkMode}) => {
  return <AuthAndOauthItems isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
}

