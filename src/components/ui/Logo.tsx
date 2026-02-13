import LogoImg from "/logo.svg";

export default function Logo() {
    return (
        <div>
            <img src={LogoImg} alt="Logo" className="w-32 drop-shadow-md drop-shadow-white/80" />
        </div>
    )
};