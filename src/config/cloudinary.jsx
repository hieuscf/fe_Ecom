import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const CloudinaryComponent = () => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dwtuyzsl5' } });

    const img = cld.image('cld-sample-5')
        .format('auto')
        .quality('auto')
        .resize(auto().width(500).height(500).gravity(autoGravity()));

    return <AdvancedImage cldImg={img} />;
};

export default CloudinaryComponent;
