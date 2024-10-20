import Container from './src/container.vue';
import Aside from './src/aside.vue';
import Footer from './src/footer.vue';
import Header from './src/header.vue';
import Main from './src/main.vue';
import type { SFCWithInstall } from 'element-plus/es/utils';
export declare const ElContainer: SFCWithInstall<typeof Container> & {
    Aside: typeof Aside;
    Footer: typeof Footer;
    Header: typeof Header;
    Main: typeof Main;
};
export default ElContainer;
export declare const ElAside: SFCWithInstall<typeof Aside>;
export declare const ElFooter: SFCWithInstall<typeof Footer>;
export declare const ElHeader: SFCWithInstall<typeof Header>;
export declare const ElMain: SFCWithInstall<typeof Main>;
export declare type ContainerInstance = InstanceType<typeof Container>;
export declare type AsideInstance = InstanceType<typeof Aside>;
export declare type FooterInstance = InstanceType<typeof Footer>;
export declare type HeaderInstance = InstanceType<typeof Header>;
export declare type MainInstance = InstanceType<typeof Main>;
