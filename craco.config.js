const CracoAlias = require('craco-alias');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: path.resolve(__dirname, 'tsconfig.paths.json'), // 절대 경로로 수정
      },
    },
  ],
};
