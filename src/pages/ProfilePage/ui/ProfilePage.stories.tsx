import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/ storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/ storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});

Light.args = {};

Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});

Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
