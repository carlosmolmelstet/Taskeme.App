import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        widthNavBar: string,
        colors: {
            navbar: string;
            background: string;
            scrollbar: string;
            text: string,
            title: string,
            switchBar: string,
        };
    }
}