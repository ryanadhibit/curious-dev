import React, { useState } from 'react';
import { Box, Button, Layer as Dialog, Text, CheckBox } from 'grommet';
import { FormClose } from 'grommet-icons';
// import agreement from '../constant/agreement';

const agreement = {
  intro: {
    id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  terms: [
    {
      desc: {
        id: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        en: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
    },
    {
      desc: {
        id: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        en: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    },
    {
      desc: {
        id: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        en: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    },
    {
      desc: {
        id: 'Excepteur sint occaecat cupidatat non proident',
        en: 'Excepteur sint occaecat cupidatat non proident',
      },
    },
    {
      desc: {
        id: 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
        en: 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    },
  ],
  check: {
    id: 'Amet massa vitae tortor condimentum lacinia. Porta nibh venenatis cras sed felis',
    en: 'Amet massa vitae tortor condimentum lacinia. Porta nibh venenatis cras sed felis',
  },
};

export default function About() {
  const [isOpen, setIsOpen] = useState(true);
  const [checked, setChecked] = useState(false);
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
          // style={{ borderRadius: '12px' }}
          // overflow='auto'
        >
          <Box
            flex={false}
            // margin={{ top: '36px' }}
            pad={{ horizontal: 'large', top: 'large' }}
            // overflow='scroll'
          >
            <FormClose
              color='status-critical'
              size='large'
              onClick={() => setIsOpen(false)}
              style={{ cursor: 'pointer', alignSelf: 'flex-end' }}
            />
          </Box>
          <Box overflow='auto'>
            <Text size='16px' style={{ marginBottom: '.5rem' }}>
              {JSON.stringify(checked)}
            </Text>
            <Text size='16px' style={{ marginBottom: '.5rem' }}>
              {agreement.intro.id}
            </Text>
            <Text size='14px' style={{ fontStyle: 'italic' }}>
              {agreement.intro.en}
            </Text>
            <ol>
              {agreement.terms.map((item, index) => (
                <li key={index}>
                  <Text size='16px'>{item.desc.id}</Text>
                  <br />
                  <Text size='14px' style={{ fontStyle: 'italic' }}>
                    {item.desc.en}
                  </Text>
                </li>
              ))}
            </ol>
            <Box width='100%' flex={false}>
              <CheckBox
                checked={checked}
                onChange={() => setChecked(true)}
                label={
                  <Box>
                    <Text
                      size='16px'
                      style={{ lineHeight: '1.5rem', marginBottom: '0.5rem' }}
                    >
                      {agreement.check.id}
                    </Text>
                    <Text
                      size='14px'
                      style={{ lineHeight: '1.5rem', fontStyle: 'italic' }}
                    >
                      {agreement.check.en}
                    </Text>
                  </Box>
                }
              />
            </Box>
            <Box
              width='100%'
              flex={false}
              pad={{ horizontal: 'large', bottom: 'medium' }}
            >
              <Button
                primary
                // disabled={status === 'loading' || !checked}
                margin={{ top: '36px' }}
                label='Kirim'
                onClick={() => console.log('klik')}
              />
            </Box>
          </Box>
          {/* <Box
            overflow='auto'
            fill
            round='medium'
            align='start'
            justify='start'
            background='white'
            style={{ position: 'relative' }}
          >
            <Box
              pad={{ horizontal: 'medium' }}
              fill='horizontal'
              round={{ corner: 'top', size: 'medium' }}
              background='white'
              flex={false}
              style={{
                position: 'fixed',
                top: '0',
                alignItems: 'flex-end',
                background: 'blue',
                zIndex: '10',
              }}
            >
              <FormClose
                color='status-critical'
                size='large'
                onClick={() => setIsOpen(false)}
                style={{ cursor: 'pointer' }}
              />
            </Box> */}
          {/* <Box
              flex={false}
              margin={{ top: '36px' }}
              pad={{ horizontal: 'large', top: 'large' }}
              // style={{ position: 'relative' }}
            >
              <Text size='16px' style={{ marginBottom: '.5rem' }}>
                {agreement.intro.id}
              </Text>
              <Text size='14px' style={{ fontStyle: 'italic' }}>
                {agreement.intro.en}
              </Text>
              <ol>
                {agreement.terms.map((item, index) => (
                  <li key={index}>
                    <Text size='16px'>{item.desc.id}</Text>
                    <br />
                    <Text size='14px' style={{ fontStyle: 'italic' }}>
                      {item.desc.en}
                    </Text>
                  </li>
                ))}
              </ol>
              <CheckBox
                // checked={checked}
                // onChange={onClickCheck}
                label={
                  <Box>
                    <Text
                      size='16px'
                      style={{ lineHeight: '1.5rem', marginBottom: '0.5rem' }}
                    >
                      {agreement.check.id}
                    </Text>
                    <Text
                      size='14px'
                      style={{ lineHeight: '1.5rem', fontStyle: 'italic' }}
                    >
                      {agreement.check.en}
                    </Text>
                  </Box>
                }
              />
            </Box>
            <Box
              width='100%'
              flex={false}
              pad={{ horizontal: 'large', bottom: 'medium' }}
            >
              <Button
                primary
                // disabled={status === 'loading' || !checked}
                margin={{ top: '36px' }}
                label='Kirim'
                // onClick={onSubmit}
              />
            </Box>
          </Box> */}
        </Dialog>
      )}
    </div>
  );
}
