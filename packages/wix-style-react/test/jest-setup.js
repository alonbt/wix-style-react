import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'node-fetch';

jest.mock('../src/utils/deprecationLog');

global.fetch = fetch;

Enzyme.configure({ adapter: new Adapter() });

// Prevent `eyes.it` to initialize itself
process.env.EYES_API_KEY = '';
