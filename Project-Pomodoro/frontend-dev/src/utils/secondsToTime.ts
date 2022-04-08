export function secondsTotime(second: number): string {
  const numberMin = 60;
  const zeroToLeft = (n: number) => n.toString().padStart(2, '0');
  const min = Math.floor((second / numberMin) % numberMin);
  const sec = Math.floor((second % numberMin) % numberMin);
  return `${zeroToLeft(min)}:${zeroToLeft(sec)}`;
}
