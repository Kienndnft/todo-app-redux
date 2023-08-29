import { createSelector } from 'reselect';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;

//console.log({ todoListSelector, searchTextSelector });

//reselect

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    //console.log({ todoList, searchText });
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
  }
);
