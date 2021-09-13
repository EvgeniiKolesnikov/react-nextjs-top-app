import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

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
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);