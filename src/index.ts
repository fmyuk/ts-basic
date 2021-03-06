// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("Hello World!");
// world.sayHello(root);

// 03.基本の型定義
// import { anySample, primitiveSample, notExistSample, unknownSample } from "./basic";

// primitiveSample();
// notExistSample();
// anySample();
// unknownSample();

// 04.関数の型定義
// import { alwaysThrowError, logMessage, logMessage2, logMessage3, logMessage4 } from "./function/basic";
// import { logMessage6, logMessage7 } from "./function/basic";
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from "./function/parameters";

// logMessage("Hello TypeScript!");
// logMessage2("Hello TypeScript!");
// logMessage3("Hello TypeScript!");
// logMessage4("Hello TypeScript!");
// alwaysThrowError("Hello TypeScript!");

// isUserSignedIn("ABC", "user");
// isUserSignedIn("DEF");
// isUserSignedIn2("ABC");
// const sum = sumProductsPrice(100, 200, 300, 400, 500);
// console.log("Function parameters sample 5:", sum);
// logMessage6("Hello TypeScript!");
// logMessage7("Hello TypeScript!");

// 05.オブジェクトの型定義
// import objectSample from "./object/object";
// import typeAliasSample from "./object/alias";

// // objectSample();
// typeAliasSample();

// 06.配列とタプルの型定義
// import tupleSample from "./array/tuple";
// import arraySample from "./array/array";

// arraySample();
// tupleSample();

// 07.ジェネリック型ポリモーフィズム
import genericsAdvancedSample from "./generics/advanced";
import genericsBasicSample from "./generics/basic";

genericsBasicSample();
genericsAdvancedSample();
