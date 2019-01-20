require('@babel/register')({ cwd: __dirname });
require(`./${process.argv[2]}`);
