import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    MediaPlaceholder, 
    BlockControls, 
    MediaReplaceFlow,
    InspectorControls,
    URLInput
} from '@wordpress/block-editor';
import { 
    ToolbarGroup, 
    ToolbarButton, 
    PanelBody, 
    ToggleControl 
} from '@wordpress/components';
import { link } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
    const { title, body, imageUrl, imageId, reversed, buttonText, buttonUrl } = attributes;
    const [ isEditingURL, setIsEditingURL ] = useState( false );

    const onSelectImage = ( media ) => {
        setAttributes( { imageUrl: media.url, imageId: media.id } );
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Layout Settings' ) }>
                    <ToggleControl
                        label={ __( 'Reverse Layout' ) }
                        checked={ reversed }
                        onChange={ ( val ) => setAttributes( { reversed: val } ) }
                    />
                </PanelBody>
            </InspectorControls>

            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={ link }
                        title={ __( 'Edit Link' ) }
                        onClick={ () => setIsEditingURL( ! isEditingURL ) }
                        isActive={ isEditingURL }
                    />
                </ToolbarGroup>
                { imageUrl && (
                    <ToolbarGroup>
                        <MediaReplaceFlow
                            mediaId={ imageId }
                            mediaURL={ imageUrl }
                            allowedTypes={ [ 'image' ] }
                            onSelect={ onSelectImage }
                            name={ __( 'Replace Image' ) }
                        />
                    </ToolbarGroup>
                ) }
            </BlockControls>

            <div { ...useBlockProps({ className: reversed ? 'is-reversed' : '' }) }>
                <div className="block-image-wrapper">
                    { imageUrl ? (
                        <img src={ imageUrl } alt={ title } />
                    ) : (
                        <MediaPlaceholder
                            onSelect={ onSelectImage }
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: 'Select Image' } }
                        />
                    ) }
                </div>
                
                <div className="block-content-wrapper">
                    <RichText
                        tagName="h2"
                        value={ title }
                        onChange={ ( val ) => setAttributes( { title: val } ) }
                        placeholder={ __( 'Heading...' ) }
                    />
                    <RichText
                        tagName="p"
                        value={ body }
                        onChange={ ( val ) => setAttributes( { body: val } ) }
                        placeholder={ __( 'Description...' ) }
                    />
                    
                    <div className="block-button-wrapper" style={{ position: 'relative' }}>
                        <RichText
                            tagName="span"
                            className="custom-button"
                            value={ buttonText }
                            onChange={ ( val ) => setAttributes( { buttonText: val } ) }
                            placeholder={ __( 'Button text...' ) }
                        />
                        
                        { isEditingURL && (
                            <div className="button-url-popover" style={{ 
                                position: 'absolute', left: 0, top: '100%', zIndex: 99, 
                                background: '#fff', padding: '10px', border: '1px solid #ccc',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '250px'
                            }}>
                                <URLInput
                                    value={ buttonUrl }
                                    onChange={ ( url ) => setAttributes( { buttonUrl: url } ) }
                                />
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </>
    );
}