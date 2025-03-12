import { Menu } from "../Menu/menu";

export const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">HEADER</header>
      <section>{children}</section>
      <footer className="footer">FOOTER</footer>
    </div>
  );
};
