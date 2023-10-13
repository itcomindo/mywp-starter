"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.masmonsWPStarter', () => {
        const rootPath = vscode.workspace.rootPath;
        if (!rootPath) {
            vscode.window.showErrorMessage('Harap buka workspace terlebih dahulu.');
            return;
        }
        // Fungsi untuk membuat file dengan konten tertentu
        const createFile = (filePath, content) => {
            fs.writeFileSync(filePath, content, 'utf8');
        };
        // Template konten file
        const indexContent = `<?php
/**
 * Silence is golden
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;
`;
        const genericPHPContent = (filename) => `<?php
/**
 * File ${filename}
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;
`;
        const styleContent = `/**
=========================
* Theme Name: Unamed Theme
* Theme URI: https://budiharyono.com/
* Description: Unamed theme
* Version: 1.0
*=========================
*/
/**
=========================
* Theme Name: GRS Theme
* Theme URI: https://budiharyono.com/
* Description: GRS Theme
* Version: 1.0
*=========================
*/
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Rajdhani:wght@300;500;600;700&family=Roboto:wght@100;400;700;900&display=swap");
:root {
  --font-clamp-1: clamp(0.875rem, 0.8341rem + 0.1211vw, 0.9375rem);
  --font-clamp-2: clamp(0.9375rem, 0.8966rem + 0.1211vw, 1rem);
  --font-clamp-3: clamp(1rem, 0.9591rem + 0.1211vw, 1.0625rem);
  --font-clamp-4: clamp(1.0625rem, 1.0216rem + 0.1211vw, 1.125rem);
  --font-clamp-5: clamp(1.1875rem, 1.0649rem + 0.3632vw, 1.375rem);
  --font-clamp-6: clamp(1.25rem, 1.0866rem + 0.4843vw, 1.5rem);
  --font-clamp-7: clamp(1.375rem, 1.1298rem + 0.7264vw, 1.75rem);
  --font-clamp-8: clamp(1.5rem, 1.1731rem + 0.9685vw, 2rem);
  --font-clamp-9: clamp(1.625rem, 1.1347rem + 1.4528vw, 2.375rem);
  --font-clamp-10: clamp(1.75rem, 1.178rem + 1.6949vw, 2.625rem);
  --font-clamp-11: clamp(1.0625rem, 0.8068rem + 0.6818vw, 1.625rem);
  /*=========================Coloring=========================*/
  --color-background: #f0f8ff;
  --color-text: #333333;
  --color-accent-1: #ff0000;
  --color-accent-1-dark: #8b0000;
  --color-accent-2: #008000;
  --color-accent-2-dark: #006400;
  --color-accent-3: #0000ff;
  --color-accent-3-dark: #00008b;
  --color-accent-4: #ffff00;
  --color-accent-4-dark: #7e7e10;
  --transparent-light-1: rgba(255, 255, 255, 0.1);
  --transparent-light-2: rgba(255, 255, 255, 0.2);
  --transparent-light-3: rgba(255, 255, 255, 0.3);
  --transparent-light-4: rgba(255, 255, 255, 0.4);
  --transparent-light-5: rgba(255, 255, 255, 0.5);
  --transparent-light-6: rgba(255, 255, 255, 0.6);
  --transparent-light-7: rgba(255, 255, 255, 0.7);
  --transparent-light-8: rgba(255, 255, 255, 0.8);
  --transparent-light-9: rgba(255, 255, 255, 0.9);
  --transparent-dark-1: rgba(0, 0, 0, 0.1);
  --transparent-dark-2: rgba(0, 0, 0, 0.2);
  --transparent-dark-3: rgba(0, 0, 0, 0.3);
  --transparent-dark-4: rgba(0, 0, 0, 0.4);
  --transparent-dark-5: rgba(0, 0, 0, 0.5);
  --transparent-dark-6: rgba(0, 0, 0, 0.6);
  --transparent-dark-7: rgba(0, 0, 0, 0.7);
  --transparent-dark-8: rgba(0, 0, 0, 0.8);
  --transparent-dark-9: rgba(0, 0, 0, 0.9);
  /* Fonts */
  --font-primary: "roboto", sans-serif;
  --font-display: "rajdhani", sans-serif;
  --font-writing: "Great Vibes", cursive;
  /* box shadows */
  --box-shadows-1: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --box-shadows-2: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --box-shadows-3: 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  --box-shadows-4: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --box-shadows-5: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  /*=========================Border Radius=========================*/
  --border-radius-1: 0.125rem;
  --border-radius-2: 0.25rem;
  --border-radius-3: 0.375rem;
  --border-radius-4: 0.5rem;
  --border-radius-5: 0.75rem;
  --border-radius-6: 1rem;
  --border-radius-7: 1.5rem;
  --border-radius-full: 50%;
}
::-webkit-scrollbar {
  background-color: transparent;
  width: 0px;
  height: 0px;
}
/* smooth scroll */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: 1rem;
  line-height: 1.7;
  background-color: var(--color-background);
  color: var(--color-text);
}
a {
  color: var(--color-text);
  text-decoration: none;
}
section,
.section {
  width: 100vw;
  padding: 0 1rem;
  position: relative;
  box-sizing: border-box;
}
div,
span {
  box-sizing: border-box;
  padding: 0;
  position: relative;
}
.container {
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
}
.h100 {
  height: 100%;
}
.w100 {
  width: 100%;
  max-width: 100%;
}
.hw100 {
  height: 100%;
  width: 100%;
}
.lw75-mw100 {
  width: 75%;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-justify {
  text-align: justify;
}
.no-scroll {
  overflow: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.5;
  margin: 0.5rem 0;
}

/* @todo font section font */
.section-head {
  font-size: var(--font-clamp-9);
  line-height: 1.2;
  margin: 4px 0;
}

.section-head-small {
  font-size: var(--font-clamp-4);
  line-height: 1.2;
  margin-top: 4px;
  margin-bottom: 4px;
}
.section-head-medium {
  font-size: var(--font-clamp-7);
  line-height: 1.2;
  margin-top: 4px;
  margin-bottom: 4px;
}

.section-head-big {
  font-size: var(--font-clamp-11);
  line-height: 1.2;
  margin: 4px 0;
}

/* @todo section subhead */
.section-subhead {
  font-size: var(--font-clamp-4);
  line-height: 1.2;
  margin-top: 4px;
  margin-bottom: 4px;
}
.section-subhead-small {
  font-size: var(--font-clamp-2);
}

.section-subhead-medium {
  font-size: var(--font-clamp-6);
}
.tebal {
  font-weight: 900;
}
.tipis {
  font-weight: 100;
}
.wa-bg {
  background: linear-gradient(to bottom, green, darkgreen);
  color: white;
}
.call-bg {
  background: linear-gradient(to bottom, #0ba5be, #00718f);
  color: white;
}
.email-bg {
  background: linear-gradient(to bottom, rgb(136, 62, 74), rgb(95, 11, 25));
  color: white;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}

`;
        const functionsContent = `<?php
/**
 * Functions.php
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */

defined('ABSPATH') || exit;

		// add theme support.
		add_theme_support('title-tag');
		add_theme_support('post-thumbnails');
		add_theme_support('menus');

/**
 * Function load Carbon Fields
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_call_carbon_fields()
{
	require_once 'vendor/autoload.php';
	\\Carbon_Fields\\Carbon_Fields::boot();
}
add_action('after_setup_theme', 'mm_call_carbon_fields');

/**
 * Function is_devmode
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_is_devmode() {
	// Cek apakah $_SERVER['REMOTE_ADDR'] tersedia sebelum membandingkannya.
	if (isset($_SERVER['REMOTE_ADDR']) && in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1'), true)) {
		return true;
	}
	return false;
}

require_once get_template_directory(). '/inc/inc.php';
require get_template_directory(). '/assets/assets.php';
`;
        const singleContent = `<?php
/**
 * Single Template
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;
get_header();
get_template_part('template-parts/single/single-template');
get_footer();`;
        const pageContent = `<?php
/**
 * Page Template
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;
get_header();
get_template_part('template-parts/single/page-template');
get_footer();`;
        const searchContent = `<?php
/**
 * Search Template
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;
get_header();
get_template_part('template-parts/single/search-template');
get_footer();`;
        const footerContent = `<?php
/**
 * Footer
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;

wp_footer();
?>
</body>

</html>`;
        const headerContent = `<?php
/**
 * Header
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */

defined('ABSPATH') || exit;
?>

<!DOCTYPE html>
<html lang="id-ID" class="no-js" itemscope itemtype="https://schema.org/WebPage">

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="googlebot" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php
	wp_body_open();
	get_template_part('template-parts/header/header-template');
`;
        const archiveContent = `<?php
/**
 * Archive.php
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;

get_header();
get_template_part('template-parts/archives/archives-template');
get_footer();`;
        const page404Content = `<?php
/**
 * 404.php
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;

get_header();
get_template_part('template-parts/archives/archives-template');
get_footer();`;
        const frontPageContent = `<?php
/**
 * Frontpage
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;

get_header();
get_template_part('template-parts/single/front-page-template');
get_footer();`;
        const homeContent = `<?php
/**
 * Home
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;

get_header();
get_template_part('template-parts/single/front-page-template');
get_footer();`;
        const themeOptionsContent = `<?php

/**
 * File theme-options.php
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;

use Carbon_Fields\\Container;
use Carbon_Fields\\Field;


/**
 * Function Theme Options
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_theme_options()
{
    Container::make('theme_options', 'Theme Options')
        ->add_fields([
            Field::make('text', 'starter', 'Start Ganti ini Yak')
        ]);
}
add_action('carbon_fields_register_fields', 'mm_theme_options');
`;
        const menusContent = `<?php
/**
 * File menus.php
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;
/**
 * Function mm_register_menus
 *
 * Description: Header Menu, Category Menu, Footer Menu
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_register_menus()
{
    register_nav_menus([
        'header-menu' => 'Header Menu',
        'category-menu' => 'Category Menu',
        'footer-menu' => 'Footer Menu'
    ]);
}
add_action('after_setup_theme', 'mm_register_menus');
add_action('after_setup_theme', 'mm_register_menus');
/**
 * Function mm_show_header_menu
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_show_header_menu()
{
    wp_nav_menu([
        'theme_location' => 'header-menu',
        'container' => 'nav',
        'container_id' => 'header-menu',
        'container_class' => 'header-menu',
        'menu_id' => 'header-menu-item-wr',
        'menu_class' => 'horizontal-menu',
    ]);
}
/**
 * Function mm_show_category_menu
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_show_category_menu()
{
    wp_nav_menu([
        'theme_location' => 'category-menu',
        'container' => 'nav',
        'container_id' => 'category-menu',
        'container_class' => 'category-menu',
        'menu_id' => 'category-menu-item-wr',
        'menu_class' => 'horizontal-menu',
    ]);
}
/**
 * Function mm_show_footer_menu
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_show_footer_menu()
{
    wp_nav_menu([
        'theme_location' => 'footer-menu',
        'container' => 'nav',
        'container_id' => 'footer-menu',
        'container_class' => 'footer-menu',
        'menu_id' => 'footer-menu-item-wr',
        'menu_class' => 'vertical-menu',
    ]);
}
`;
        const assetsContent = `<?php
/**
 * File assets.php
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 1.0.0
 */
defined('ABSPATH') || exit;
/**
 * Function mm_theme_version
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_theme_version()
{
    return wp_get_theme()->get('Version');
}

/**
 * Function mm_enqueue_styles
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */
function mm_enqueue_styles()
{
    wp_enqueue_style('mm-normalize', 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css', array(), '8.0.1', 'all');
    wp_enqueue_style('mm-fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css', array(), '6.2.0', 'all');
    wp_enqueue_style('mm-animate', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', array(), '4.1.1', 'all');
    if (mm_is_devmode()) {
        wp_enqueue_style('mm-style', get_stylesheet_uri(), array(), mm_theme_version(), 'all');
    } else {
        wp_enqueue_style('mm-style', get_template_directory_uri() . '/style.min.css', array(), mm_theme_version(), 'all');
    }
    if (is_single() || is_page()) {
        if (mm_is_devmode()) {
            wp_enqueue_style('mm-page-style', get_template_directory_uri() . '/assets/css/single.css', array(), mm_theme_version(), 'all');
        } else {
            wp_enqueue_style('mm-page-style', get_template_directory_uri() . '/assets/css/single.min.css', array(), mm_theme_version(), 'all');
        }
    }
    if (is_search()) {
        if (mm_is_devmode()) {
            wp_enqueue_style('mm-search-style', get_template_directory_uri() . '/assets/css/search.css', array(), mm_theme_version(), 'all');
        } else {
            wp_enqueue_style('mm-search-style', get_template_directory_uri() . '/assets/css/search.min.css', array(), mm_theme_version(), 'all');
        }
    }
    if (is_tag() || is_category()) {
        if (mm_is_devmode()) {
            wp_enqueue_style('mm-archive-style', get_template_directory_uri() . '/assets/css/archive.css', array(), mm_theme_version(), 'all');
        } else {
            wp_enqueue_style('mm-archive-style', get_template_directory_uri() . '/assets/css/archive.min.css', array(), mm_theme_version(), 'all');
        }
    }
    if (is_404()) {
        if (mm_is_devmode()) {
            wp_enqueue_style('mm-404-style', get_template_directory_uri() . '/assets/css/404.css', array(), mm_theme_version(), 'all');
        } else {
            wp_enqueue_style('mm-404-style', get_template_directory_uri() . '/assets/css/404.min.css', array(), mm_theme_version(), 'all');
        }
    }
}
add_action('wp_enqueue_scripts', 'mm_enqueue_styles');


/**
 * Function mm_load_scripts
 *
 * @package MasmonsTheme
 * @since 019
 */
function mm_load_scripts()
{
    // dequeue jquery.
    wp_deregister_script('jquery');
    wp_enqueue_script('mm-jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js', array(), '3.7.0', true);
    if (mm_is_devmode()) {
        wp_enqueue_script('mm-global-js', get_template_directory_uri() . '/assets/js/global.js', array(), mm_theme_version(), true);
    } else {
        wp_enqueue_script('mm-global-js', get_template_directory_uri() . '/assets/js/global.min.js', array(), mm_theme_version(), true);
    }
}
add_action('wp_enqueue_scripts', 'mm_load_scripts');

`;
        const templatePartsContent = `<?php
/**
 * Template Part
 *
 * @package MasmonsTheme
 * @author Budi Haryono <mail.budiharyono@gmail.com>
 * @since 019
 */

defined('ABSPATH') || exit;
require_once get_template_directory() . '/template-parts/menus/menus.php';
`;
        const imagesContent = `<?php

  /**
   * File images.php
   *
   * @package MasmonsTheme
   * @author Budi Haryono <mail.budiharyono@gmail.com>
   * @since 1.0.0
   */
  defined('ABSPATH') || exit;

  define('MM_IMAGE_DIR', get_template_directory_uri() . '/assets/images/');

  `;
        // Membuat direktori dan file utama
        const mainFiles = ['index.php', 'functions.php', 'home.php', 'front-page.php', 'style.css', 'style.min.css', '404.php', 'archive.php', 'comments.php', 'page.php', 'single.php', 'header.php', 'footer.php', 'search.php', 'screenshot.png'];
        mainFiles.forEach(file => {
            if (file.endsWith('.php')) {
                if (file === 'index.php') {
                    createFile(path.join(rootPath, file), indexContent);
                }
                else if (file === 'functions.php') {
                    createFile(path.join(rootPath, file), functionsContent);
                }
                else if (file === 'single.php') {
                    createFile(path.join(rootPath, file), singleContent);
                }
                else if (file === 'page.php') {
                    createFile(path.join(rootPath, file), pageContent);
                }
                else if (file === 'search.php') {
                    createFile(path.join(rootPath, file), searchContent);
                }
                else if (file === 'footer.php') {
                    createFile(path.join(rootPath, file), footerContent);
                }
                else if (file === 'header.php') {
                    createFile(path.join(rootPath, file), headerContent);
                }
                else if (file === 'archive.php') {
                    createFile(path.join(rootPath, file), archiveContent);
                }
                else if (file === '404.php') {
                    createFile(path.join(rootPath, file), page404Content);
                }
                else if (file === 'front-page.php') {
                    createFile(path.join(rootPath, file), frontPageContent);
                }
                else if (file === 'home.php') {
                    createFile(path.join(rootPath, file), homeContent);
                }
                else {
                    createFile(path.join(rootPath, file), genericPHPContent(file));
                }
            }
            else if (file.endsWith('.css')) {
                createFile(path.join(rootPath, file), styleContent);
            }
            else {
                fs.writeFileSync(path.join(rootPath, file), '', 'utf8');
            }
        });
        // Membuat direktori assets dan sub-direktorinya
        const assetsDir = path.join(rootPath, 'assets');
        fs.mkdirSync(assetsDir);
        // createFile(path.join(assetsDir, 'assets.php'), genericPHPContent('assets.php'));
        createFile(path.join(assetsDir, 'assets.php'), assetsContent);
        createFile(path.join(assetsDir, 'index.php'), indexContent);
        const assetsSubDirs = ['css', 'js', 'images'];
        assetsSubDirs.forEach(dir => {
            const dirPath = path.join(assetsDir, dir);
            fs.mkdirSync(dirPath);
            createFile(path.join(dirPath, 'index.php'), indexContent);
            if (dir === 'css') {
                ['front-page.css', 'front-page.min.css', 'single.css', 'single-min.css', 'page.css', 'page.min.css', 'archive.css', 'archive.min.css', '404.css', '404.min.css'].forEach(file => {
                    fs.writeFileSync(path.join(dirPath, file), '', 'utf8');
                });
            }
            else if (dir === 'js') {
                createFile(path.join(dirPath, 'global.js'), '');
            }
            else if (dir === 'images') {
                createFile(path.join(dirPath, 'images.php'), imagesContent);
            }
        });
        // Membuat direktori inc dan sub-direktorinya
        const incDir = path.join(rootPath, 'inc');
        fs.mkdirSync(incDir);
        createFile(path.join(incDir, 'index.php'), indexContent);
        createFile(path.join(incDir, 'inc.php'), genericPHPContent('inc.php'));
        const incSubDirs = ['fields', 'libs', 'components', 'plugins'];
        incSubDirs.forEach(dir => {
            const dirPath = path.join(incDir, dir);
            fs.mkdirSync(dirPath);
            createFile(path.join(dirPath, 'index.php'), indexContent);
            if (dir === 'fields') {
                createFile(path.join(dirPath, 'theme-options.php'), themeOptionsContent);
            }
            else if (dir === 'fields') {
                createFile(path.join(dirPath, 'fields.php'), genericPHPContent('fields.php'));
            }
            else if (dir === 'libs') {
                createFile(path.join(dirPath, 'libs.php'), genericPHPContent('libs.php'));
            }
            else if (dir === 'components') {
                createFile(path.join(dirPath, 'components.php'), genericPHPContent('components.php'));
            }
            else if (dir === 'plugins') {
                createFile(path.join(dirPath, 'plugins.php'), genericPHPContent('plugins.php'));
            }
        });
        // Membuat direktori template-parts dan sub-direktorinya
        const templatePartsDir = path.join(rootPath, 'template-parts');
        fs.mkdirSync(templatePartsDir);
        createFile(path.join(templatePartsDir, 'template-parts.php'), templatePartsContent);
        createFile(path.join(templatePartsDir, 'index.php'), indexContent);
        const templatePartsSubDirs = ['header', 'sections', 'footer', 'menus', 'single', 'archives'];
        templatePartsSubDirs.forEach(dir => {
            const dirPath = path.join(templatePartsDir, dir);
            fs.mkdirSync(dirPath);
            createFile(path.join(dirPath, 'index.php'), indexContent);
            if (dir === 'header') {
                createFile(path.join(dirPath, 'header-template.php'), genericPHPContent('header-template.php'));
            }
            else if (dir === 'sections') {
                ['about-sections.php', 'services-section.php', 'counter-section.php', 'testimonials-section.php', 'pricing-section.php', 'faq-section.php', 'cta-section.php'].forEach(file => {
                    createFile(path.join(dirPath, file), genericPHPContent(file));
                });
            }
            else if (dir === 'footer') {
                createFile(path.join(dirPath, 'footer-template.php'), genericPHPContent('footer-template.php'));
            }
            else if (dir === 'menus') {
                createFile(path.join(dirPath, 'menus.php'), menusContent);
            }
            else if (dir === 'single') {
                ['single-template.php', 'page-template.php'].forEach(file => {
                    createFile(path.join(dirPath, file), genericPHPContent(file));
                });
            }
            else if (dir === 'archives') {
                createFile(path.join(dirPath, 'archives-template.php'), genericPHPContent('archives-template.php'));
            }
        });
        // create dir end above this line.
        vscode.window.showInformationMessage('Struktur tema WP berhasil di-generate.');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map