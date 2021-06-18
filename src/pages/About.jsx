import React, { useState } from 'react';
import { Box, Button, Layer as Dialog, Text, CheckBox } from 'grommet';
import { FormClose } from 'grommet-icons';
import agreement from '../constant/agreement';

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
          <Box
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
              }}
            >
              <FormClose
                color='status-critical'
                size='large'
                onClick={() => setIsOpen(false)}
                style={{ cursor: 'pointer' }}
              />
            </Box>
            <Box
              flex={false}
              margin={{ top: '36px' }}
              pad={{ horizontal: 'large', top: 'large' }}
            >
              <Text size='16px' style={{ marginBottom: '.5rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
              <Text size='14px' style={{ fontStyle: 'italic' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
              <ol>
                <li>
                  <Text size='16px'>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Text>
                  <br />
                  <Text size='14px' style={{ fontStyle: 'italic' }}>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Text>
                </li>{' '}
                <li>
                  <Text size='16px'>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Text>
                  <br />
                  <Text size='14px' style={{ fontStyle: 'italic' }}>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Text>
                </li>
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
          </Box>
        </Dialog>
      )}
    </div>
  );
}
