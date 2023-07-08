import type { Preview, Story } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/ storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/ storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/ storybook/RouteDecorator/RouteDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    },
    decorators: [
        (Story: Story) => (
            <StyleDecorator>
                <Story />
            </StyleDecorator>
        ),
        (Story: Story) => ThemeDecorator(Theme.LIGHT)(Story),
        (Story: Story) => RouteDecorator(Story)
    ]
};

export default preview;
