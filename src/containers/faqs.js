import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Accordion, OptForm } from '../components/index';
import faqsData from '../fixtures/faqs.json';
import { useRouter } from 'next/router'
import { SignUp } from '../components/reduxFeatures/Redux/actions/user'



export function FaqsContainer() {

  const initialState = {
    email: ''
  };

  const dispatch = useDispatch()
  const router = useRouter()

  const [state, setState] = useState(initialState);
  const {email} = state


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignUp(email))
    router.push('/register')
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({ ...prev, [inputName]: value }))
  };


  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id.toString()}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm onSubmit={handleSubmit}>
        <OptForm.Input 
          aria-describedby="emailAddressHelp"
          className= 'opt-input'
          placeholder="Email address"
          type="email"
          name="email"
          value={state.email}
          onChange={handleInput} 
        />
        <OptForm.Button type="submit">Show Me</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to Explore? Enter your email to create your free membership.</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
