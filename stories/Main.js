import React from 'react';
import Hello from '../src/Main'; // This is our component
import { storiesOf } from '@kadira/storybook';

storiesOf('Hello', module)
    .add('with lyef name', () => (
        <Hello name="lyef" />
    ))
    .add('with another name', () => (
        <Hello name="another" />
    ))
