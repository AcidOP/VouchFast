/* eslint-disable no-restricted-globals */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// Create a JSON type definition without the any type
type JsonData =
  | string
  | number
  | boolean
  | null
  | JsonData[]
  | { [key: string]: JsonData };

export const downloadJson = (data: JsonData, filename: string = 'data.json') => {
  // Convert the data to a JSON string
  let jsonString = JSON.stringify(data, null, 2);

  // Remove special characters
  jsonString = jsonString
    .replace(/\\n/g, '')
    .replace(/\\r/g, '')
    .replace(/\\t/g, '')
    .replace(/\\/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Create a Blob with the cleaned JSON string
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // Create a link element and trigger the download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up by revoking the Blob URL
  URL.revokeObjectURL(url);
};
