import React from "react";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

export const slidesData = [
    {
        title: 'Order your favourite food here',
        description: 'Choose from a diverse menu of delicious dishes.',
        image: 'https://static.vecteezy.com/system/resources/previews/028/080/335/non_2x/generative-ai-cloth-store-aesthetic-background-of-clothes-hanging-on-hangers-muted-neutral-colors-photo.jpg',
    },
    {
        title: 'Fresh Ingredients',
        description: 'We only use the freshest ingredients.',
        image: 'https://img.pikbest.com/ai/illus_our/20230427/bdfff933dfa4018859531904cdb5bf5b.jpg!w700wp',
    },
    {
        title: 'Fast Delivery',
        description: 'Get your food delivered quickly.',
        image: 'https://example.com/image3.jpg',
    },
];

