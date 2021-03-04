// todo allow for creating and editing of tag colors
export default (status: string) => {
  switch (status) {
    case 'Automated':
      return 'yellow';
    case 'Hot Lead':
      return 'red';
    case 'On Hold':
      return 'orange';
    case 'With Client':
      return 'purple';
    case 'Follow Up':
      return 'blue';
    default:
      console.error('Invalid Status');
  }
};
