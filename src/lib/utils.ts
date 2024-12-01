import { PROJECT_HOMEResult } from "@/sanity/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isEven(number: number) {
  return number % 2 === 0
}

export const filterProjectsByTag = (projects: PROJECT_HOMEResult, tagSlug: string): PROJECT_HOMEResult => {

  return projects.filter((project) =>
    project?.tags?.some((tag) => tag?.slug?.current === tagSlug)
  );
};

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}


