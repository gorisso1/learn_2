const baseConfig = {

    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
}

// Объединяем конфигурации в один объект
module.exports = { ...baseConfig, ...nextConfig };