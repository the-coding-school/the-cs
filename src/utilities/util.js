export function tryRequire(path) {
  try {
    return require(path);
  }
  catch(e) {
    console.log(`Failure while attempting require: ${e.message}`);
    return null;
  }
}
