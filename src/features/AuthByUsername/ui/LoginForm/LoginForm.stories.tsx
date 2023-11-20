import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/ storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';
import { StoreProvider } from 'app/providers/StoreProvider';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => ((
    <StoreProvider>
        <LoginForm {...args}/>
    </StoreProvider>
));

export const Primary = Template.bind({});

Primary.args = {
};

export const Dark = Template.bind({});

Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
