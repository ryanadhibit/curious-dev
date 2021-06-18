import React, { useState } from 'react';
import {
  // Box,
  // Button,
  Layer as Dialog,
  // Text,
  // CheckBox
} from 'grommet';
// import { FormClose } from 'grommet-icons';
// import agreement from '../constant/agreement';

export default function About() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <h1>this is about page</h1>
      <button onClick={() => setIsOpen(true)}>open dialog</button>
      {isOpen && (
        <Dialog
          position='center'
          animation='slide'
          onClickOutside={() => setIsOpen(false)}
          onEsc={() => setIsOpen(false)}
          responsive={false}
          full='horizontal'
          margin={{ vertical: '36px' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Dialog>
      )}
    </div>
  );
}
