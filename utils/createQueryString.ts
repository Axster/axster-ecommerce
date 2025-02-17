/* eslint-disable @typescript-eslint/no-unused-vars */

export const createQueryString = (
  params: Record<string, string | number>
) => {
  return Object.entries(params)
    .filter(
      ([_, value]) =>
        value.toString().trim() !== ""
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};
