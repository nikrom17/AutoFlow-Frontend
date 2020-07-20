import { notification } from "antd";

export const toastError = (error: Error) =>
  notification["error"]({
    message: error.name,
    description: error.message,
  });
