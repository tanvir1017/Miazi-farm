export const handelPasswordEye = (
  type: string,
  state1?: boolean,
  setState1?: any,
  state2?: boolean,
  setState2?: any
) => {
  if (type !== "seeConfirmPassword") {
    if (state1) {
      setState1(false);
    } else {
      setState1(true);
    }
  } else {
    if (state2) {
      setState2(false);
    } else {
      setState2(true);
    }
  }
};
