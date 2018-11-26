import * as React from 'react';
import * as Sinon from 'sinon';
import { shallow } from 'enzyme';
import { Arrow } from '../components/arrow';

describe('Arrow', () => {
  it('should render without crashing', () => {
    const comp = shallow(<Arrow onClick={() => undefined} />);
    expect(comp.exists()).toBe(true);
  });
  it('should set direction as left if it is not defined', () => {
    const comp = shallow(<Arrow onClick={() => undefined} />);
    const icon = comp.find('i');
    expect(icon.prop('id')).toEqual('left');
    expect(icon.prop('className')).toContain('fa-chevron-circle-left');
  });
  it('should pass given direction into icon element', () => {
    const comp = shallow(<Arrow direction="right" onClick={() => undefined} />);
    const icon = comp.find('i');
    expect(icon.prop('id')).toEqual('right');
    expect(icon.prop('className')).toContain('fa-chevron-circle-right');
  });
  it('should call spy when simulate click event', () => {
    const onClickSpy = Sinon.spy();
    const comp = shallow(<Arrow onClick={onClickSpy} />);
    comp.simulate('click');
    expect(onClickSpy.callCount).toEqual(1);
  });
});
