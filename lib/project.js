import packageFile from '@project/package.json';
import belgeFile from '@project/belge.json';

export default {
  name: packageFile.name,
  ...belgeFile,
  require: require.context('@project', true)
}
