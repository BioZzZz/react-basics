import { LoginForm } from "../LoginForm/loginForm";
import { ProgressBar } from "../ProgressBar/progressBar";
import { ThemeContext } from "../ThemeContext/themeContext";
import { ThemeConstextSwitcher } from "../ThemeContextSwitcher/themeContextSwitcher";
import { UserContext } from "../UserContext/userContext";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <UserContext>
        <ThemeContext>
          <div className={styles.header}>
            HEADER
            <div>
              <LoginForm />
              <ThemeConstextSwitcher />
            </div>
          </div>
          <section>{children}</section>
          <footer className={styles.footer}>FOOTER</footer>
        </ThemeContext>
      </UserContext>
    </div>
  );
};
