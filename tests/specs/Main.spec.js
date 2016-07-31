import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Flag from '../../src/Main';

describe('<Flag />', () => {

   it('should have props for country and size', () => {
        const wrapper = shallow(<Flag country="br" size="small" />);
        expect(wrapper.props().name).to.be.defined;
        expect(wrapper.props().small).to.be.defined;
    });

    it('should render an image element', () => {
        const wrapper = shallow(<Flag country="br" size="small" />);
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('should get have br on img src when country br is passed', () => {
        const wrapper = shallow(<Flag country="br" size="small" />);
        expect(wrapper.find('img').props().src.includes('br')).to.equal(true);
    });

    it('should get have small on img src when size small is passed', () => {
        const wrapper = shallow(<Flag country="br" size="small" />);
        expect(wrapper.find('img').props().src.includes('small')).to.equal(true);
    });

    it('should get have normal on img src when size normal is passed', () => {
        const wrapper = shallow(<Flag country="br" size="normal" />);
        expect(wrapper.find('img').props().src.includes('normal')).to.equal(true);
    });

    it('should get have big on img src when size big is passed', () => {
        const wrapper = shallow(<Flag country="br" size="big" />);
        expect(wrapper.find('img').props().src.includes('big')).to.equal(true);
    });

    it('should get have ultra on img src when size ultra is passed', () => {
        const wrapper = shallow(<Flag country="br" size="ultra" />);
        expect(wrapper.find('img').props().src.includes('ultra')).to.equal(true);
    });
});
