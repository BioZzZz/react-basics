import { LoginForm } from "../LoginForm/loginForm";
import { ProgressBar } from "../ProgressBar/progressBar";
import { ThemeContext } from "../ThemeContext/themeContext";
import { ThemeConstextSwitcher } from "../ThemeContextSwitcher/themeContextSwitcher";
import { UserContext } from "../UserContext/userContext";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <UserContext>
        <ThemeContext>
          <div className="header">
            HEADER
            <div>
              <LoginForm />
              <ThemeConstextSwitcher />
            </div>
          </div>
          <section>{children}</section>
          <footer className="footer">FOOTER</footer>
        </ThemeContext>
      </UserContext>
    </div>
  );
};
