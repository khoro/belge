import nextBuild from 'next/dist/build';
import nextExport from 'next/dist/export';
import { fetchIcons } from './lib/icons';
import { join } from 'path';

const exportOptions = {
  outdir: join(process.cwd(), '.belge')
};

fetchIcons()
  .then(() => nextBuild(__dirname))
  .then(() => nextExport(__dirname, exportOptions))
