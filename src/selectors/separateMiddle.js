const separateMiddle = (note, searchText, leadingChars, trailingChars) => {
  const i = note.toLowerCase().indexOf(searchText);
  const endOfTerm = i + searchText.length;
  const start = Math.max(0, i - leadingChars);
  const end = Math.min(note.length, i + trailingChars);
  const preceeding = (start === 0 ? '' : '...');
  const trailing = (end === note.length ? '' : '...');

  const result = [preceeding, note.substring(start, i),note.substring(i,endOfTerm),note.substring(endOfTerm,end), trailing];
  return result;
}

export default separateMiddle;
