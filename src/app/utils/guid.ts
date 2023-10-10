function generateRandomGuid(): string {
  const cryptoObj = window.crypto;
  if (cryptoObj && cryptoObj.getRandomValues) {
    // Use crypto.getRandomValues if available
    const buffer = new Uint8Array(16);
    cryptoObj.getRandomValues(buffer);

    // Set the version (4) and variant (8, 9, A, or B) bits
    buffer[6] = (buffer[6] & 0x0f) | 0x40; // version 4
    buffer[8] = (buffer[8] & 0x3f) | 0x80; // variant

    // Convert the bytes to a hexadecimal string
    return Array.from(buffer)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  } else {
    // Fallback for browsers that do not support crypto.getRandomValues
    // This is not as secure as using crypto.getRandomValues
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}

export default generateRandomGuid;
