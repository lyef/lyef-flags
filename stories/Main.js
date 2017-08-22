import React from 'react';
import Flag from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('Flag', module)
    .add('small brazil flag', () => (
        <Flag country="br" size="small" />
    ))
    .add('small canada flag', () => (
        <Flag country="ca" size="small" />
    ))
    .add('normal brazil flag', () => (
        <Flag country="br" size="normal" />
    ))
    .add('big brazil flag', () => (
        <Flag country="br" size="big" />
    ))
    .add('ultra brazil flag', () => (
        <Flag country="br" size="ultra" />
    ))
    .add('more than one small flag', () => (
        <div className="flags">
            <Flag country="ca" size="small" />
            <Flag country="br" size="small" />
            <Flag country="us" size="small" />
            <Flag country="mx" size="small" />
            <Flag country="ru" size="small" />
        </div>
    ))
    .add('more than one sized flag', () => (
        <div className="flags">
            <Flag country="br" size="small" />
            <Flag country="br" size="normal" />
        </div>
    ));
