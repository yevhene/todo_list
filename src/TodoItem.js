import React from 'react';

const TodoItem = ({ name, completed, index, onComplete }) =>
  <li>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onComplete(index, e.target.checked)}
      />
      {name}
    </label>
  </li>

export default TodoItem;
