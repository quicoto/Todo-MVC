import {
  ItemList,
} from './item';

import {
  escapeForHTML,
} from './helpers';

export default class Template {
  /**
   * Format the contents of a todo list.
   *
   * @param {ItemList} items Object containing keys you want to find in the template to replace.
   * @returns {!string} Contents for a todo list
   */
  itemList(items) {
    let output = '';
    let dayOfTheWeek = 0;

    items.forEach((item) => {
      let dayHeading = '';
      const itemDay = new Date(item.date).getDay();

      if (dayOfTheWeek !== itemDay) {
        dayHeading = `<time>${new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(item.date))}</time>`;
        dayOfTheWeek = itemDay;
      }

      output
      += `<li data-id="${item.id}"${item.completed ? ' class="completed"' : ''}>
        ${dayHeading}
        <div class="view">
          <input class="toggle" type="checkbox" ${item.completed ? 'checked' : ''}>
          <label>${escapeForHTML(item.title)}</label>
          <button class="destroy"></button>
        </div>
      </li>`;
    });

    return output;
  }

  /**
   * Format the contents of an "items left" indicator.
   *
   * @param {number} activeTodos Number of active todos
   *
   * @returns {!string} Contents for an "items left" indicator
   */
  itemCounter(activeTodos) {
    return `${activeTodos} item${activeTodos !== 1 ? 's' : ''} left`;
  }
}
