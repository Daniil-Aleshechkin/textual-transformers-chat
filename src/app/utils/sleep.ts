function sleep(ms: Number) {
  return new Promise((resolve) => setTimeout(resolve, ms as number));
}

export default sleep;
