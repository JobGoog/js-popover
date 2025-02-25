import Popover from '../src/popover';

test('Popover toggles in DOM', () => {
  document.body.innerHTML = '<button class="btn-toggle-popover">Toggle</button>';
  const button = document.querySelector('.btn-toggle-popover');

  const popover = new Popover(button, 'Test title', 'Test content');

  // На старте поповер не должен быть в DOM
  expect(document.querySelector('.popover-container')).toBeNull();

  // После клика появляется
  button.click();
  expect(document.querySelector('.popover-container')).not.toBeNull();

  // После повторного клика исчезает
  button.click();
  expect(document.querySelector('.popover-container')).toBeNull();
});
