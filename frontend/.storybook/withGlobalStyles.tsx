import { StoryFn } from '@storybook/addons';
import GlobalStyles from '../src/styles/Global';

const withGlobalStyles = (storyfn: StoryFn ) =>(
    <>
        <GlobalStyles />
        {storyfn()}
    </>
);

export default withGlobalStyles;