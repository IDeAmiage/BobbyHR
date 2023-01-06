/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config) => {
        // this will override the experiments
        config.experiments = { ...config.experiments, topLevelAwait: true };
        // this will just update topLevelAwait property of config.experiments
        // config.experiments.topLevelAwait = true
        return config;
        },
    reactStrictMode: true,
    experimental:{appDir: true},
};
