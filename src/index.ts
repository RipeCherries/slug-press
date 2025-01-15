export interface SlugPressOptions {
  separator?: string;
  removeSpecialChars?: boolean;
}

export const slugPress = (input: string, options: SlugPressOptions = {}): string => {
  const { separator = '-', removeSpecialChars = true } = options;

  // Removing spaces at the edges of a line
  let result = input.trim();

  // Deleting all characters except letters, numbers, and spaces
  if (removeSpecialChars) {
    result = result.replace(/[^\w\s]/g, ' ');
    result = result.trim();
  }

  // Replacing spaces with a separator
  result = result.replace(/\s+/g, separator);

  return result;
};
