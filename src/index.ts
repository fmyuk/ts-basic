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
import { isUserSignedIn, isUserSignedIn2 } from "./function/parameters";

// logMessage("Hello TypeScript!");
// logMessage2("Hello TypeScript!");
// logMessage3("Hello TypeScript!");
// logMessage4("Hello TypeScript!");
// alwaysThrowError("Hello TypeScript!");

isUserSignedIn("ABC", "user");
isUserSignedIn("DEF");
isUserSignedIn2("ABC");
