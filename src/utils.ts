export const generateRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const mapData = (data: string[]) => {
  return data.map((value) => {
    return {
      label: value,
      value: generateRandomNumber(1,3000)
    }
  })
}