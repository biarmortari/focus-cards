export async function getRandomAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");

  if (!response.ok) {
    throw new Error("Failed to fetch advice");
  }

  const data = await response.json();
  return data.slip.advice;
}
