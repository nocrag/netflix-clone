
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import profileImg from "../../assets/images/avatar.jpeg";
import SearchInput from "../SearchInput/";
import "./style.css";

export default function Header({
    setMoviesNameFilter,
    setIsMobileBagOpen,
}) {
    return (
        <header className="header">
            <Logo
                className="header__logo"
                role="button"
                onClick={() => setIsMobileBagOpen(false)}
            />
            <SearchInput setMoviesNameFilter={setMoviesNameFilter} />
            <div className="header__item-container">
                Welcome, JG
                <img
                    className="item-container__img"
                    src={profileImg}
                    alt="profile"
                />
            </div>
        </header>
    );
}