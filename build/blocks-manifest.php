<?php
// This file is generated. Do not modify it manually.
return array(
	'custom-design-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/custom-design-block',
		'version' => '0.1.0',
		'title' => 'Custom Design Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Custom image and text block with a functional link.',
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'custom-design-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h2'
			),
			'body' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			),
			'imageUrl' => array(
				'type' => 'string'
			),
			'imageId' => array(
				'type' => 'number'
			),
			'reversed' => array(
				'type' => 'boolean',
				'default' => false
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Learn More'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	)
);
