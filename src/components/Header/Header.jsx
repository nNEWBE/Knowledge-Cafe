import profile from '../../assets/Profile.svg'
const Header = () => {
    return (
      <header className="flex justify-between items-center border-b-2 pb-4">
        <h1 className="text-4xl bg-red-500">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </header>
    );
};

export default Header;