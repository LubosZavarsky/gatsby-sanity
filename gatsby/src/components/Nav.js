import React, { useState } from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-3 bg-yellow-200">
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        role="presentation"
      >
        👾
      </div>
      <nav>
        <ul className={` md:flex gap-3  ${!isOpen && 'hidden'}`}>
          <li className="hover:underline">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              activeClassName="active"
            >
              Home
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              to="/#about"
              onClick={() => setIsOpen(false)}
              activeClassName="active"
            >
              About
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              to="/events"
              onClick={() => setIsOpen(false)}
              activeClassName="active"
            >
              Events
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              activeClassName="active"
              partiallyActive={true}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
