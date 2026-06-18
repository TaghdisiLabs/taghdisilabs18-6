export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function clamp(min: number, max: number, value: number) {
  return Math.min(Math.max(value, min), max);
}

export function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
