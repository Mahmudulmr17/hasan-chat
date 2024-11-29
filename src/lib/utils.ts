import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Clone React element.
 * The function clones React element and adds Tailwind CSS classnames to the cloned element
 * @param element the React element to clone
 * @param classNames Tailwind CSS classnames
 * @returns { React.ReactElement } - Cloned React element
 */
export function cloneElement(element: React.ReactElement, classNames: string) {
  return React.cloneElement(element, {
    className: twMerge(element.props.className, classNames),
  });
}

/**
 * Merge multiple class names using clsx and tailwind-merge
 * @param inputs - Array of class names or class value objects
 * @returns {string} - Merged class names string with conflicts resolved
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-2 py-1', 'bg-blue-500') // 'px-2 py-1 bg-blue-500'
 *
 * // With conditional classes
 * cn('px-2', { 'bg-blue-500': true, 'bg-red-500': false }) // 'px-2 bg-blue-500'
 *
 * // Resolving Tailwind conflicts
 * cn('px-2 py-1', 'px-4') // 'py-1 px-4'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
