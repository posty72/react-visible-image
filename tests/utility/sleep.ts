const SECOND = 1000;

export const sleep = async (seconds: number) =>
    new Promise((resolve) => setTimeout(resolve, seconds * SECOND));
