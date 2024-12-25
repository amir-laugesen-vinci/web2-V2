import "./Header.css";

interface HeaderProps {
  image: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <img src={props.image} alt="logo" className="logo" />
      <div>{props.children}</div>
    </header>
  );
};

export default Header;