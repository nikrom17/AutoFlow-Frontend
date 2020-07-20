import { toastError } from "@utils/utils";

const BASEURL = "http://127.0.0.1:5000";

const get = async (url: string) => {
  try {
    const response = await fetch(`${BASEURL}/${url}`);
    return await response.json();
  } catch (error) {
    toastError(error);
  }
};

export default {
  get,
};
