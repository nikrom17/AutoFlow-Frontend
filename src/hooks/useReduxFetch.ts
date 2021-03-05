import { useEffect, useRef } from 'react';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetching, getErrors } from 'src/redux/commonSelectors';

const useReduxFetch = (
  actions: { (data?: any): void }[]
): {
  isFetching: boolean;
  error: {} | null;
} => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);
  const errors = useSelector(getErrors);

  const actionsRef = useRef(actions);

  useEffect(() => {
    actionsRef.current.forEach((action) => {
      dispatch(action());
    });
  }, [actionsRef, dispatch]);

  return { isFetching, error: !isEmpty(errors) };
};
export default useReduxFetch;
