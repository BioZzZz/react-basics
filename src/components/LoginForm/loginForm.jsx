import { use } from "react";
import { Button } from "../Button/button";
import { UserContext } from "../UserContext";
import styles from "./loginForm.module.css";

export const LoginForm = () => {
  const { user, handleLogin, logout } = use(UserContext);

  return (
    <>
      {user === null ? (
        <Button onClick={handleLogin} className={styles.button}>
          Login
        </Button>
      ) : (
        <>
          <span>{user}</span>
          <Button onClick={logout} className={styles.button}>
            Logout
          </Button>
        </>
      )}
    </>
  );
};
