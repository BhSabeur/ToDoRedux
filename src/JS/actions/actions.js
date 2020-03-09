import {
  ADD_TASK,
  DEL_TASK,
  CHECK_TASK,
  EDIT_TASK
} from "../constant/action-types.js";

export const addItem = payload => {
  return {
    type: ADD_TASK,
    payload
  };
};
export const delItem = payload => {
  return {
    type: DEL_TASK,
    payload
  };
};
export const completeItem = payload => {
  return {
    type: CHECK_TASK,
    payload
  };
};
export const editItem = payload => {
  return {
    type: EDIT_TASK,
    payload
  };
};
