import { Provider } from "react-redux";
import { LoginForm } from "../LoginForm/loginForm";
import { ProgressBar } from "../ProgressBar/progressBar";
import { ThemeContext } from "../ThemeContext/themeContext";
import { ThemeConstextSwitcher } from "../ThemeContextSwitcher/themeContextSwitcher";
import { UserContext } from "../UserContext/userContext";
import { store } from "../../redux/store";
import { Cart } from "../Cart/cart";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <Provider store={store}>
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
            <Cart />
            <footer className={styles.footer}>FOOTER</footer>
          </ThemeContext>
        </UserContext>
      </Provider>
    </div>
  );
};
