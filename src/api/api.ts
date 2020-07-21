import { handelError } from "@utils/errorHandling";
const throwError = (response: any) => {
  throw response;
};

const BASEURL = "http://127.0.0.1:5000";

const get: any = async (url: string) => {
  try {
    let response: any = await fetch(`${BASEURL}/${url}`);
    response = await response.json();
    return response.code === 200 ? response : throwError(response);
  } catch (error) {
    handelError(error);
    throw new Error("api error");
  }
};

export default {
  get,
};
