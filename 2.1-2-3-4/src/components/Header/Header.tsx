interface HeaderProps {
    image: string;
    children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
    return (
        <footer>
            <img src={props.image} alt="logo" />
            {props.children}
        </footer>
    );
}

export default Header;