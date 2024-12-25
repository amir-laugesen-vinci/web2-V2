import "./Footer.css";

interface FooterProps {
  image: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="footer">
      <div>{props.children}</div>
      <img src={props.image} alt="logo" className="logo" />
    </footer>
  );
};

export default Footer;
