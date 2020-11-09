import * as actions from "../actionTypes/actionTypes";
const initialstate = {
  isSuccess: false,
  isRequest: false,
  isError:false
};

const GetWeatherReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actions.Get_Weather_Request :
      return {
        ...state,
        isSuccess: false,
        isRequest: true,
        isError:false
      };

    case actions.Get_Weather_Success:
      return {
        ...state,
        isSuccess: true,
        isRequest: false,
        isError:false,
        response: action.payload.response,
      };

    case actions.Get_Weather_Error:
      return {
        ...state,
        isSuccess: false,
        isRequest: false,
        isError:true,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default GetWeatherReducer;
