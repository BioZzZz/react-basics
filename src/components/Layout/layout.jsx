"use client";

import { LoginForm } from "../LoginForm/loginForm";
import { ProgressBar } from "../ProgressBar/progressBar";
import { ThemeContext } from "../ThemeContext/themeContext";
import { ThemeContextSwitcher } from "../ThemeContextSwitcher/themeContextSwitcher";
import { UserContext } from "../UserContext/userContext";
import { Cart } from "../Cart/cart";
import styles from "./layout.module.css";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <UserContext>
        <ThemeContext>
          <div>
            <ProgressBar />
            <div className={styles.header}>
              HEADER
              <div>
                <LoginForm />
                <ThemeContextSwitcher />
              </div>
            </div>
            <section>{children}</section>
            <Cart />
            <footer className={styles.footer}>FOOTER</footer>
          </div>
        </ThemeContext>
      </UserContext>
    </Provider>
  );
};
