export const encode = (value: string) => {
  if (typeof window !== "undefined") {
    return window.btoa(value);
  }

  return Buffer.from(value).toString("base64");
};
