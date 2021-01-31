// todo allow for creating and editing of tag colors
export default (status: string) => {
  switch (status) {
    case 'Automated':
        return 'yellow'
    case 'Follow Up':
        return 'red'
    case 'On Hold':
        return 'orange'
    case 'With Client':
        return 'lime'
    default:
      console.error('Invalid Status')
  }
}