import {headerLogo} from '../assets/images';
import {hamburger} from "../assets/icons";
import {navLinks} from "../constants";
import { useState } from 'react';

const Nav = () => {

  const [isActive, setActive] = useState(false);

  const handleClick = event => {
    console.log(isActive);
    setActive(current => !current);
  }

  return (
    <header className="padding-l py-8 absolute z-10 w-full border-[red] ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block pr-6 cursor-pointer' onClick={handleClick}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>




        {/* Sidebar */}
      <div className={`w-[400px] h-screen rounded-sm absolute z-50 bg-[#f0f0f0] top-0 right-0  ${isActive ? 'right-0' : 'left-[-400px]'}`}>
            <div className='p-8 flex justify-end text-[25px] text-slate-gray cursor-pointer' onClick={handleClick}>
            <i class="fa-solid fa-xmark"></i>
            </div>
            <div>
              <ul>
                {navLinks.map((item) => (
                  <li className="pl-12 pt-6" key={item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray' onClick={handleClick}>{item.label}</a>
                  </li>
                ))}
              </ul>

            </div>
      </div>
      </nav>
    </header>
  )
}

export default Nav
