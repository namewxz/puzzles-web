// 允许导入 JSON
declare module '*.json' {
  const value: any;
  export default value;
}

// 修复 emcc-runtime 找不到
declare module '../assets/puzzles/emcc-runtime' {
  const PuzzleModule: any;
  export default PuzzleModule;
}

// 修复 wasm 类型缺失
declare module '*/emcc-runtime' {
  const PuzzleModule: any;
  export default PuzzleModule;
}
