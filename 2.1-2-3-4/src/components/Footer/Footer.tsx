interface FooterProps {
    image: string;
    children: React.ReactNode;
    }


const Footer = (props: FooterProps) => {
    return (
        <footer>
            <img src={props.image} alt="logo" />
            {props.children}
        </footer>
    );
}

export default Footer;