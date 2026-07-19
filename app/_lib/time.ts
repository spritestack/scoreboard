export function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hundredths = Math.floor((ms % 1000));

  return `${minutes}:${seconds.toString().padStart(2, "0")}.${hundredths
    .toString()
    .padStart(3, "0")}`;
}

export function convertToMilliseconds(str: string): number {
  const digits = str.replace(/\D/g, "");

  if (isNaN(parseInt(digits))) return 0;

  if (digits.length <= 2) return parseInt(digits) * 1000;
  if (digits.length <= 4)
    return (
      parseInt(digits.slice(0, -2)) * 60 * 1000 +
      parseInt(digits.slice(-2)) * 1000
    );

  return (parseInt(digits.slice(0, -4)) * 60 * 1000
    + parseInt(digits.slice(-4, -2)) * 1000
    + parseInt(digits.slice(-2)) * 10
  );
}