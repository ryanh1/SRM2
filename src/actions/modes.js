
const toggleSearchMode = () => ({
  type: 'TOGGLE_SEARCH_MODE'
});

export const startToggleSearchMode = () => {
  return (dispatch) => {
    dispatch(toggleSearchMode())
  };
};
