import Scroll from "./modules/scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import ScrollAnime from "./modules/ScrollAnime.js";
import DropDownMenu from "./modules/dropdownmenu.js";
import MenuMobile from "./modules/mobilemenu.js";
import WorkingHour from "./modules/workinghour.js";
import createAnimals from "./modules/fetchanimals.js";
import fetchBitcoin from "./modules/fetchbitcoin.js";
import { SlideNav } from "./modules/slide.js";

const scroll = new Scroll("[data-menu='soft'] a[href^='#']");
scroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  '[data-modal="on"]',
  '[data-modal="close"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnime = new ScrollAnime("[data-anime='scroll']");
scrollAnime.init();

const dropdownMenu = new DropDownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const workingHour = new WorkingHour("[data-week]");
workingHour.init();

createAnimals("./animalsapi.json", ".numbers_grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc_price");

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addControl(".custom_control");
