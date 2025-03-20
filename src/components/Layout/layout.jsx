import { ProgressBar } from "../ProgressBar/progressBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <header className="header">HEADER</header>
      <section>{children}</section>
      <footer className="footer">FOOTER</footer>
    </div>
  );
};
