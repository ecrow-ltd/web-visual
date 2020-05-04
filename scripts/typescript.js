const ts = require('typescript');

function compile(configuration) {
  // Extract configuration from config file
  let config = readConfigFile(configFileName);

  // Compile
  let program = ts.createProgram(config.fileNames, config.options);
  let emitResult = program.emit();

  // Report errors
  reportDiagnostics(
    ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics),
  );

  // Return code
  let exitCode = emitResult.emitSkipped ? 1 : 0;
  process.exit(exitCode);
}

module.exports = { compile };
