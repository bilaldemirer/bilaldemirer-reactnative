export const titleFormatter = words => {
  var n = words?.split(' ');
  var title = n.length > 2 ? n[0] + ' ' + n[1] : words;
  return title;
};

// to avoid having too long titles
