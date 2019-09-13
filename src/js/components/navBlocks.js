import $ from 'jquery';

export default class NavBlocks {
  constructor({ onItemSelected, element }) {
    this.element = element;
    this.menuItems = $('.nav-block', element);

    this.menuItems.on('click', e => {
      console.log('hey yo!: ' + $(e.currentTarget).attr('data-index'));
      onItemSelected($(e.currentTarget).attr('data-index'));
    });
  }
}
