<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://erezbentovim.com
 * @since      1.0.0
 *
 * @package    Rtl_Support_For_Oxygen_Builder
 * @subpackage Rtl_Support_For_Oxygen_Builder/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Rtl_Support_For_Oxygen_Builder
 * @subpackage Rtl_Support_For_Oxygen_Builder/public
 * @author     Erez Ben Tovim <erezbt@gmail.com>
 */
class Rtl_Support_For_Oxygen_Builder_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Rtl_Support_For_Oxygen_Builder_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Rtl_Support_For_Oxygen_Builder_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/rtl-support-for-oxygen-builder-public.css', array(), $this->version, 'all' );

	}


	public function enqueue_styles_frontend() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Oxygen_Builder_Rtl_Support_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Oxygen_Builder_Rtl_Support_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		
			wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/oxygen-rtl.css', array(), $this->version, 'all' );
		

	}
	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Rtl_Support_For_Oxygen_Builder_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Rtl_Support_For_Oxygen_Builder_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/rtl-support-for-oxygen-builder-public.js', array( 'jquery' ), $this->version, false );

	}

}
