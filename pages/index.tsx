import React from 'react';
import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Example text h1</Htag>
      <Htag tag='h2'>Example text h2</Htag>
      <Htag tag='h3'>Example text h3</Htag>
      <Button appearance='primary' className='sd'>Button primary</Button>
      <Button appearance='ghost'>Button ghost</Button>
    </>
  );
}
