import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/ storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/ storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args}/>;

const mockStoreData = {
    loginForm: { username: '123', password: '123' }
};

export const Primary = Template.bind({});

Primary.args = {
};

Primary.decorators = [StoreDecorator(mockStoreData)];

export const Dark = Template.bind({});

Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(mockStoreData)];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({ loginForm: { ...mockStoreData, error: 'ERROR' } })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];
