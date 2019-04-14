
const editSearch = (searchText) => ({
  type: 'EDIT_SEARCH',
  searchText
});

export const startEditSearch = (searchText) => {
  return (dispatch, getState) => {
    dispatch(editSearch(searchText))
  };
};
