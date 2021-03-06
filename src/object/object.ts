export default function objectSample() {
  const a: object = {
    name: "User",
    age: 28
  }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string,
    name: string
  } = {
    language: "Japanese",
    name: "Japan"
  };
  console.log("Object object sample 1:", country);

  country = {
    language: "English",
    name: "United Sates of America"
  }
  console.log("Object object sample 2:", country);

  // オプショナルとreadonly
const user: {
  age: number,
  lastName: string,
  readonly firstName: string,
  gender?: string
} = {
  age: 28,
  lastName: "Yamada",
  firstName: "Taro"
};
user.gender = "male";
user.lastName = "Kamado";
// user.firstName = "Tanjiro";
console.log("Object object sample 3:", user);

// インデックスシグネチャ
const capitals: {
  [countryName: string]: string
} = {
  Japan: "Tokyo",
  Korea: "Seoul"
};

capitals.China = "Beijing";
capitals.Canada = "Ottawa";

console.log("Object object sample 4:", capitals);
}
