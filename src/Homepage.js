import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
    const { theme } = useTheme();
    return (
      <h2
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        {children}
      </h2>
    );
  };

const Paragraph = ({ children }) => {
    const { theme } = useTheme();
    return (
      <p
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        {children}
      </p>
    );
  };

  const Content = () => {
    return (
      <div>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </div>
    );
  };

function Homepage(){
    const { theme } = useTheme();
    return (
        <div className="App"
            style={{
                backgroundColor: theme === "light" ? "white" : "black",
        }}>
            <Title><h1>Home Page</h1></Title>
            <Content />
        </div>
    );
}



export default Homepage;