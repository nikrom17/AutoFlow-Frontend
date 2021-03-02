import { notification } from 'antd';

export const toastError = (description: string, message: string) =>
  notification['error']({
    description,
    message,
  });

export const handelError = (response: any) => {
  const { code, description, message } = response;
  switch (code) {
    case 404:
      toastError(description, message);
      break;
    case 500:
      toastError(description, message);
      break;
    default:
      toastError('Server Offline', message);
  }
};
