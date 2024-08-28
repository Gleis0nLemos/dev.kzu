const Header = () => {
  return (  
    <div>
      <nav className="flex justify-center items-center pt-8">
        <ul className="flex gap-5 items-center text-sm">
          <li className="bg-type-gray px-5 py-1 rounded-full">
            <a 
              href="#" 
              className="text-secondary hover:text-tertiary"
            >
                Home
            </a>
          </li>
          <li><a href="#" className="text-secondary hover:text-tertiary">About</a></li>
          <li><a href="#" className="text-secondary hover:text-tertiary">Projects</a></li>
          <li><a href="#" className="text-secondary hover:text-tertiary">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
 
export default Header;