<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://erezbentovim.com
 * @since      1.0.0
 *
 * @package    Rtl_Support_For_Oxygen_Builder
 * @subpackage Rtl_Support_For_Oxygen_Builder/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Rtl_Support_For_Oxygen_Builder
 * @subpackage Rtl_Support_For_Oxygen_Builder/includes
 * @author     Erez Ben Tovim <erezbt@gmail.com>
 */
class Rtl_Support_For_Oxygen_Builder_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'rtl-support-for-oxygen-builder',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
