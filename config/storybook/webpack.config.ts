import webpack from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config, mode }: { config: webpack.Configuration, mode: 'DEVELOPMENT' | 'PRODUCTION' }) => {
    const isDev = mode === 'DEVELOPMENT';

    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config.resolve.modules = [paths.src, 'node_modules'];
    config.resolve.extensions.push('.ts', '.tsx');

    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | '...') => {
            if (rule !== '...' && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    });

    config.module.rules.push(buildCssLoader(isDev));

    config.plugins.push(
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev)
        })
    );

    return config;
};
