import React from 'react';
import { shallow } from 'enzyme';
import TopBar from '../layout/Topbar';

describe('renders without crashing', function () {
    let mountedTopbar;

    beforeEach(()=>{
        mountedTopbar = shallow(<TopBar />);
    })
    
    it('renders without crashing', function() {
        const mountedTopbar = shallow(<TopBar />);
        expect(mountedTopbar.length).toBeGreaterThan(0);
    });

    it('renders a string', () => {
        const bar = mountedTopbar.find('span').text();
        expect(bar.length).toBeGreaterThan(0);
    });
    
});