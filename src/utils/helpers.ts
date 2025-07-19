type ClassItem = string | string[] | Record<string, boolean>;

export const classes = (...classes: ClassItem[]) => {
  let result = "";

  classes.forEach((c) => {
    if (c == null) return;
    if (typeof c === "string") return (result += `${c} `);
    if (Array.isArray(c)) return (result += c.join(" ") + " ");
    else {
      for (const [key, value] of Object.entries(c)) {
        if (value) {
          result += `${key} `;
        }
      }
      return;
    }
  });

  return result.trim();
};
