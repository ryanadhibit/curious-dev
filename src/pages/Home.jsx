import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// actions
import { getHospitals } from '../stores/actions';

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const hospital = useSelector((state) => state.hospital);
  useEffect(() => {
    dispatch(getHospitals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const buttonClick = () => {
    history.push('/about');
  };
  return (
    <Container maxWidth='md'>
      <Box my={4}>
        <h1>this is HOME page</h1>
        <ul>
          {hospital.data.length > 0 &&
            hospital.data.map((item) => (
              <li key={item.hospital_id}>{item.alias}</li>
            ))}
        </ul>
        <Button variant='contained' color='primary' onClick={buttonClick}>
          Hello World
        </Button>
      </Box>
    </Container>
  );
}
