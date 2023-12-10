import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import useTheme from "../../Hooks/useTheme";
function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const themeIconChanger = () => {
    if (theme == "dark") return <BsMoon></BsMoon>;
    else return <FiSun></FiSun>;
  };

  return (
    <button
      className=" p-1 md:p-2 rounded-full mx-2 md:mx-5"
      onClick={toggleTheme}
    >
      {themeIconChanger()}
    </button>
  );
}
export default ThemeButton;