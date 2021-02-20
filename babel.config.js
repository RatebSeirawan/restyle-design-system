const path = require('path')

const ROOT_PATH = path.resolve(__dirname, './');
const BASE_PATH = path.resolve(ROOT_PATH, './src/');

module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.ts', '.ios.tsx', '.android.ts', '.android.tsx', '.json', '.svg', '.png', '.jpg', '.native.ts', '.native.tsx', '.shared.ts', '.shared.tsx', '.web.css'],
          alias: {
            components: path.resolve(BASE_PATH, 'components'),
            constants: path.resolve(BASE_PATH, 'constants'),
            hooks: path.resolve(BASE_PATH, 'hooks'),
            screens: path.resolve(BASE_PATH, 'screens'),
            types: path.resolve(BASE_PATH, 'types'),
            assets: path.resolve(ROOT_PATH, 'assets'),
          },
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
