import { Container, Button, FormControl } from "react-bootstrap"
import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../store/hooks.js'

import { decrement, increment, incrementByAmount, incrementAsync } from '../store/Slice/counterSlice'

// Test
function About() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  const [ incrementAmount, setIncrementAmount ] = useState(0);

  return (
    <>
      <Container className="text-white">
        <h1 className="text-center">Ajna</h1>
        <h3>All Eyes On Me</h3>
        <p>
          All Seeing Eye is Watching Ya
        </p>
        <hr />
        <h1> {count} </h1>
        <Button onClick={() => dispatch(increment())} variant="success">+</Button>
        <Button onClick={() => dispatch(decrement())} variant="danger">-</Button>
          <FormControl value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className="my-3">
          </FormControl>
          <Button
             onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
            >
          </Button>
      </Container>
    </>
  )
}

export default About;
