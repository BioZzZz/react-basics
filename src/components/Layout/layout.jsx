import { LoginForm } from "../LoginForm/loginForm";
import { ProgressBar } from "../ProgressBar/progressBar";
import { ThemeContextSwitcher } from "../ThemeContextSwitcher/themeContextSwitcher";
import { Cart } from "../Cart/cart";
import styles from "./layout.module.css";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <ProgressBar />
      <div className={styles.header}>
        HEADER
        <div>
          <LoginForm />
          <ThemeContextSwitcher />
        </div>
      </div>
      <section>
        <Outlet />
      </section>
      <Cart />
      <footer className={styles.footer}>FOOTER</footer>
    </div>
  );
};
