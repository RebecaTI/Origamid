import React from 'react';
import Button from './Button';
import Input from './Input';

const Form2 = () => {
  const arr = ['Item 1', 'Item 2'];
  return (
    <div >
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label='Password' />
      <Button items={arr} />
    </div>
  )
}

export default Form2;
