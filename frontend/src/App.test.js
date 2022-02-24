import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders without crashing', function () {
  let mountedQuote;

  beforeEach(()=>{
      mountedQuote = shallow(<Home />);
  })
  
  it('renders without crashing', function() {
      const mountedQuote = shallow(<Home />);
      expect(mountedQuote.length).toBeGreaterThan(0);
  });

  it('renders a string', () => {
      const quote = mountedQuote.find('h2');
      expect(quote.length).toBeGreaterThan(0);
  });
  
});

/*test('renders login form', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/