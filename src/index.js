import './index.css';
import Popover from './popover';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn-toggle-popover');

  new Popover(
    button,
    'Popover title',
    'And here\'s some amazing content. It\'s very engaging, right?'
  );
});
