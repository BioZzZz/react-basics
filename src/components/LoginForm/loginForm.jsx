import { use } from "react";
import { Button } from "../Button/button";
import { UserContext } from "../UserContext";
import styles from "./loginForm.module.css";

export const LoginForm = () => {
  const { user, loginFunction, logoutFunction } = use(UserContext);

  return (
    <>
      {user === null ? (
        <Button onClick={loginFunction} className={styles.button}>
          {"Login"}
        </Button>
      ) : (
        <>
          <span>{user}</span>
          <Button onClick={logoutFunction} className={styles.button}>
            {"Logout"}
          </Button>
        </>
      )}
    </>
  );
};
