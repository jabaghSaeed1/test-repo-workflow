import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { title, body, imageUrl, reversed, buttonText, buttonUrl } = attributes;

    return (
        <div { ...useBlockProps.save({
            className: reversed ? 'is-reversed' : ''
        }) }>
            { imageUrl && (
                <div className="block-image-wrapper">
                    <img src={ imageUrl } alt={ title } />
                </div>
            ) }
            <div className="block-content-wrapper">
                <RichText.Content tagName="h2" value={ title } />
                <RichText.Content tagName="p" value={ body } />
                
                { buttonUrl && (
                    <div className="block-button-wrapper">
                        <a href={ buttonUrl } className="custom-button">
                            <RichText.Content value={ buttonText } />
                        </a>
                    </div>
                ) }
            </div>
        </div>
    );
}