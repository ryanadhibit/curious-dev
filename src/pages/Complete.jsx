import React, { useRef, useState, useLayoutEffect } from 'react';
// import React from 'react';
// import Skeleton from "react-loading-skeleton";
import { Box, ResponsiveContext, Text, Button } from 'grommet';
import Barcode from 'react-barcode';
// import { useSelector } from "react-redux";
// import moment from "moment";
import html2canvas from 'html2canvas';

// components
// import AppBar from '../components/AppBar';
// import Stepper from '../components/Stepper';
// import BarcodeComponent from '../components/Barcode';

// hooks
// import { useForm } from "../contexts/FormContext";

// configs
// import envConfig from '../configs/env.config';

export default function Complete() {
  //   const form = useForm();
  //   const answer = useSelector((state) => state.answer);
  const [divHeight, setDivHeight] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  //   const [stepperHeight, setStepperHeight] = useState(0);
  //   const [isSafari] = useState(
  //     /constructor/i.test(window.HTMLElement) ||
  //       (function (p) {
  //         return p.toString() === '[object SafariRemoteNotification]';
  //       })(
  //         !window['safari'] ||
  //           (typeof safari !== 'undefined' && window['safari'].pushNotification)
  //       )
  //   );
  const divRef = useRef(null);
  // const stepperRef = useRef(null);

  useLayoutEffect(() => {
    setDivHeight(divRef.current.clientHeight);
    setDivWidth(divRef.current.clientWidth);
    //   setStepperHeight(stepperRef.current.clientHeight);
  }, []);

  const saveAsImage = () => {
    window.scrollTo(0, 0);
    const input = document.getElementById('to-save');
    html2canvas(input, {
      width: divWidth,
      height: divHeight,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      let link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'COVID-19_vaccine_by_Siloam_Hospitals.png';
      link.click();
    });
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box width='100vw' background='#F2F2F2'>
          {/* <AppBar size={size} /> */}
          <Box
            margin={{
              top: size === 'small' ? '64px' : '100px',
              bottom: size === 'small' ? '24px' : '10px',
            }}
            flex={size === 'small' ? true : false}
            overflow={size === 'small' ? 'auto' : 'unset'}
            justify={size === 'small' ? 'between' : 'start'}
          >
            {/* <Stepper
              step={4}
              size={size}
              style={{ position: 'fixed' }}
              propsRef={stepperRef}
            /> */}
            <Box
              overflow={size === 'small' ? 'auto' : 'unset'}
              flex={false}
              className='content'
              id='to-save'
              ref={divRef}
              //   pad={{
              //     horizontal: size === 'small' ? '16px' : 'large',
              //     top: `${stepperHeight + 8}px`,
              //   }}
            >
              <Box
                className='icon'
                fill='horizontal'
                flex={false}
                align='center'
              >
                <Text
                  size={size === 'small' ? '16px' : '32px'}
                  style={{ fontWeight: '600' }}
                  textAlign='center'
                >
                  Terima kasih telah melengkapi lembar persetujuan vaksinasi
                  COVID-19
                </Text>
              </Box>
              <Box margin={{ top: '12px' }}>
                <Text
                  size={size === 'small' ? '14px' : '24px'}
                  style={{ fontWeight: '400' }}
                  textAlign='center'
                >
                  Simpan halaman ini untuk ditunjukkan kepada petugas kami saat
                  hari pendaftaran
                </Text>
              </Box>
              <Box margin={{ top: '24px' }} align='center'>
                <Box
                  background='#ffffff'
                  round={{ size: 'medium' }}
                  border={{ size: 'medium', color: 'accent-2' }}
                  pad='small'
                  elevation='small'
                  width={size === 'small' ? '100%' : '72%'}
                  style={{ textAlign: 'center' }}
                >
                  <Box>
                    <Text
                      size={size === 'small' ? '24px' : '48px'}
                      style={{
                        fontWeight: '700',
                        letterSpacing: '0.5em',
                      }}
                      textAlign='center'
                    >
                      ABC123
                    </Text>
                  </Box>
                  <Box margin={{ top: '12px' }}>
                    <Text size={size === 'small' ? '12px' : '14px'}>
                      Nama penerima vaksin
                    </Text>
                    <Text
                      margin={{ top: '6px' }}
                      size={size === 'small' ? '16px' : '18px'}
                      style={{ fontWeight: '700' }}
                    >
                      This is name
                    </Text>
                    <Text
                      size={size === 'small' ? '12px' : '14px'}
                      margin={{ top: '12px' }}
                    >
                      Jadwal Vaksinasi
                    </Text>
                    <Text
                      margin={{ top: '6px' }}
                      size={size === 'small' ? '16px' : '18px'}
                      style={{ fontWeight: '700' }}
                    >
                      This is location
                    </Text>
                    <Text
                      margin={{ top: '4px' }}
                      size={size === 'small' ? '16px' : '18px'}
                      style={{ fontWeight: '700' }}
                    >
                      2012 - 01 - 02
                    </Text>
                    <Text
                      margin={{ top: '4px' }}
                      size={size === 'small' ? '16px' : '18px'}
                      style={{ fontWeight: '700' }}
                    >
                      09:00 - 10:00
                    </Text>
                    <Text
                      size={size === 'small' ? '12px' : '14px'}
                      margin={{ top: '12px' }}
                    >
                      Program Vaksinasi
                    </Text>
                    <Text
                      margin={{ top: '4px' }}
                      size={size === 'small' ? '16px' : '18px'}
                      style={{ fontWeight: '700' }}
                    >
                      ke - 1
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box margin={{ bottom: '12px' }} align='center' pad='small'>
                <Barcode
                  value={'ABC123'}
                  width={size === 'small' ? 2 : 4}
                  height={size === 'small' ? 70 : 100}
                  displayValue={false}
                />
              </Box>
            </Box>
            <Button
              style={{ width: size === 'small' ? '100%' : '270px' }}
              primary
              onClick={saveAsImage}
              label='Simpan dokumen ini'
            />
            {/* <Box
              pad={size === 'small' ? '16px' : 'large'}
              flex={false}
              fill='horizontal'
              justify='center'
              align='center'
            >
              {!form.source && !isSafari ? (
                <Button
                  style={{ width: size === 'small' ? '100%' : '270px' }}
                  primary
                  onClick={saveAsImage}
                  label='Simpan dokumen ini'
                />
              ) : (
                <Button
                  style={{
                    width: size === 'small' ? '100%' : '60%',
                    color: '#444444',
                  }}
                  color='brand'
                  secondary
                  label={
                    <Text
                      size='12px'
                      textAlign='center'
                      style={{ fontWeight: '700' }}
                    >
                      Silahkan melakukan{' '}
                      <Text
                        size='12px'
                        style={{ fontStyle: 'italic', fontWeight: '700' }}
                      >
                        screenshot
                      </Text>{' '}
                      halaman ini
                    </Text>
                  }
                />
              )}
            </Box> */}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}
