const fs = require('fs').promises;

async function exec() {
  const toExec = [];

  try {
    const files = await fs.readdir('../shared/consts');
    toExec.push(
      ...files.map(file => {
        return fs.copyFile('../shared/consts/' + file, './src/shared/consts/' + file);
      })
    );
  } catch (err) {
    console.error('Error reading directory:', err);
  }

  await Promise.all(toExec);
}

exec()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
