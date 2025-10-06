import Image from "next/image";
import Link from "next/link"; 
import UserDropdown from "./UserDropdown";
import NavItems from "./NavItems";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image
                        src="/assets/images/logo.png"
                        width={140}
                        height={32}
                        alt="Logo "
                    />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
                <UserDropdown />
            </div>
        </header>
    );
};

export default Header;
