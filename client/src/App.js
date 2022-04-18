import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/build/vhessbuild3.loader.js",
  dataUrl: "/build/vhessbuild3.data",
  frameworkUrl: "/build/vhessbuild3.framework.js",
  codeUrl: "/build/vhessbuild3.wasm",
});

function App() {
  return <Unity unityContext={unityContext} />;
}

export default App;