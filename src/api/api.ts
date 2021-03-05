import { handelError } from '@utils/errorHandling';

const BASEURL = 'http://127.0.0.1:5000';

const throwError = (response: any) => {
  throw response;
};

const get: any = async (url: string) => {
  try {
    let response: any = await fetch(`${BASEURL}/${url}`);
    response = await response.json();
    return response.code === 200 ? response : throwError(response);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      handelError(error);
    }
    throw new Error(error);
  }
};

export default {
  get,
};
