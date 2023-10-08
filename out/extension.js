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
 * ${filename}
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
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Great+Vibes&family=Mulish:wght@200;400;500;600;700;800;900;1000&display=swap");
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
  	--font-primary: "Mulish", sans-serif;
  	--font-display: "Bebas Neue", cursive;
  	--font-writing: "Great Vibes", cursive;
}
::-webkit-scrollbar {
	width: 0px;
	height: 0px;
	background-color: transparent;
  }
  /* smooth scroll */
  html {
	scroll-behavior: smooth;
  }

  body {
	font-family: var(--font-primary);
	font-size: 16px;
	line-height: 1.7;
	background-color: black;
	color: var(--color-light-1);
  }
  a {
	text-decoration: none;
	color: var(--color-text);
  }
  section,
  .section {
	width: 100vw;
	padding: 0 1rem;
	box-sizing: border-box;
	position: relative;
  }
  div {
	padding: 0;
	box-sizing: border-box;
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
        const functionsContent = `<? php
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

		function mm_crb_load() {
			// Memeriksa apakah kelas Carbon Fields sudah ada.
			if (class_exists('\Carbon_Fields\Carbon_Fields')) {
        require_once 'vendor/autoload.php';
	\Carbon_Fields\Carbon_Fields:: boot();
}
}
add_action('after_setup_theme', 'mm_crb_load');

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
        const searchContent = `
		<?php
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
        // Membuat direktori dan file utama
        const mainFiles = ['index.php', 'functions.php', 'style.css', '404.php', 'archive.php', 'comments.php', 'page.php', 'single.php', 'header.php', 'footer.php', 'search.php', 'screenshot.png'];
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
        createFile(path.join(assetsDir, 'assets.php'), genericPHPContent('assets.php'));
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
                createFile(path.join(dirPath, 'images.php'), genericPHPContent('images.php'));
            }
        });
        // Membuat direktori inc dan sub-direktorinya
        const incDir = path.join(rootPath, 'inc');
        fs.mkdirSync(incDir);
        createFile(path.join(incDir, 'index.php'), indexContent);
        createFile(path.join(incDir, 'inc.php'), genericPHPContent('inc.php'));
        const incSubDirs = ['fields', 'libs', 'components'];
        incSubDirs.forEach(dir => {
            const dirPath = path.join(incDir, dir);
            fs.mkdirSync(dirPath);
            createFile(path.join(dirPath, 'index.php'), indexContent);
            if (dir === 'fields') {
                createFile(path.join(dirPath, 'theme-options.php'), genericPHPContent('theme-options.php'));
            }
            else if (dir === 'libs') {
                createFile(path.join(dirPath, 'libs.php'), genericPHPContent('libs.php'));
            }
            else if (dir === 'components') {
                createFile(path.join(dirPath, 'components.php'), genericPHPContent('components.php'));
            }
        });
        // Membuat direktori template-parts dan sub-direktorinya
        const templatePartsDir = path.join(rootPath, 'template-parts');
        fs.mkdirSync(templatePartsDir);
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
                createFile(path.join(dirPath, 'menus.php'), genericPHPContent('menus.php'));
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