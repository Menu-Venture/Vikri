/** @format */

import React, { useRef, useState } from 'react';
import './Dropdown.css';
import Button from './Button';
const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className='dropdown'>
      <Button tag='a' color='dark' wideMobile onClick={onClick}>
        View Samples of Digital Menu
      </Button>

      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : ''}`}>
        {isActive ? <Option /> : ''}
      </nav>
    </div>
  );
};

export default DropdownMenu;

export const Option = () => {
  return (
    <ul className='dropdown-content'>
      <li >
        <a href='/messages' color='black'>
          Product 1 : PDF
        </a>
        {console.log('1')}
      </li>
      <li>
        <a href='/trips'>Product 2 : Plain Menu</a>
      </li>
      <li>
        <a href='/saved'>Product 3 : Main Menu</a>
        {console.log('3')}
      </li>
      <li>
        <a href='/saved'>Product 4 : Category Menu</a>
      </li>
    </ul>
  );
};
//https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
// import React from 'react';

// import './Dropdown.css';
// const { useState, useEffect } = React;

// const data = [
//   { id: 0, label: 'PDF Menu', Url: '' },
//   { id: 1, label: 'Plain Product', Url: '' },
//   { id: 2, label: 'Main Product', Url: '' },
//   { id: 3, label: 'Category Product', Url: '' },
// ];

// const Dropdown = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [items, setItem] = useState(data);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const toggleDropdown = () => setOpen(!isOpen);

//   const handleItemClick = (id) => {
//     selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
//   };

//   return (
//     <div className='dropdown'>
//       <div className='dropdown-header' onClick={toggleDropdown}>
//         {selectedItem
//           ? items.find((item) => item.id == selectedItem).label
//           : 'Sample Links'}
//         <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
//       </div>
//       <div className={`dropdown-body ${isOpen && 'open'}`}>
//         {items.map((item) => (
//           <div
//             className='dropdown-item'
//             onClick={(e) => handleItemClick(e.target.id)}
//             id={item.id}>
//             <span
//               className={`dropdown-item-dot ${
//                 item.id == selectedItem && 'selected'
//               }`}>
//               •{' '}
//             </span>
//             {item.id + ' : ' + item.label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
