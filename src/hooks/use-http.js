import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { loadingActions } from "../store/loading";
import { errorActions } from "../store/error";

const useHttp = () => {
  const dispatch = useDispatch();

  const sendRequests = useCallback(
    async (requestConfig, applyData) => {
      dispatch(loadingActions.loading(true));
      dispatch(errorActions.error(false));
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        applyData(responseData);
      } catch (error) {
        dispatch(errorActions.error(error.message));
      }
      dispatch(loadingActions.loading(false));
    },
    [dispatch]
  );

  return {
    sendRequests,
  };
};

export default useHttp;
