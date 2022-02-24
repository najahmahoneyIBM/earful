import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Home from '../src/components/pages/home/Home';

describe('renders without crashing', function () {
  let mountedLogin;

  beforeEach(()=>{
      mountedLogin = shallow(<Home />);
  })
  
  it('renders without crashing', function() {
      const mountedLogin = shallow(<Home />);
      expect(mountedLogin.length).toBeGreaterThan(0);
  });
  
});

/*test('renders login form', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/