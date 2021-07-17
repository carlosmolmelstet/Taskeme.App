import constants from './constants';
export default {
    title: 'light',
    widthNavBar: constants.sizes.widthNavbar,
    colors: {
        background: constants.colors.white_30,
        scrollbar: constants.colors.grey_20,
        text: constants.colors.white_50,
        title: constants.colors.white, 
        switchBar: constants.colors.green,
        navbar: `linear-gradient(180deg, ${constants.colors.blue_40} 0%, ${constants.colors.green} 100%);`,
    },
};