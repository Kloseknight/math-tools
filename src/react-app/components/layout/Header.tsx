import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] bg-clip-text text-transparent">
            <Link to="/">CSEC Mathematics Calculator</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
