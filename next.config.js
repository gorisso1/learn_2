
const baseConfig = {
    distDir: 'build',
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

const nextConfig = {
    output: 'export',
};

module.exports = Object.assign({}, baseConfig, nextConfig);

