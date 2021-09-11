import React from 'react';
import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Example text h1</Htag>
      <Htag tag='h2'>Example text h2</Htag>
      <Htag tag='h3'>Example text h3</Htag>
      <Button appearance='primary' arrow='right'>Button primary</Button>
      <Button appearance='ghost' arrow='down'>Button ghost</Button>
      <P size='l'>Large p</P>
      <P size='m'>Medium p</P>
      <P size='s'>Small/default p</P>
    </>
  );
}
