import React from 'react';
import { Button, Htag, P, Tag } from '../components';

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
      <Tag size='s'>Small tag</Tag> 
      <Tag size='m' color='red'>Medium red tag</Tag> 
      <Tag size='m' color='green'>Medium green tag</Tag> 
      <Tag color='primary'>Default primary tag</Tag> 
    </>
  );
}
