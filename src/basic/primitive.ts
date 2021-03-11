export default function primitiveSample(): void {
  let name: string = "Hello World";
  console.log("primitive sample 1:", typeof name, name);

  let age: number = 28;
  console.log("primitive sample 2:", typeof age, age);

  let isSingle: boolean = true;
  console.log("primitive sample 3:", typeof isSingle, isSingle);

  const isOver20: boolean = age >= 20;
  console.log("primitive sample 4:", typeof isOver20, isOver20);
}