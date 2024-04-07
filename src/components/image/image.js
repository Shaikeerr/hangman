import image1 from './hangman_images/image_1.webp';
import image2 from './hangman_images/image_2.webp';
import image3 from './hangman_images/image_3.webp';
import image4 from './hangman_images/image_4.webp';
import image5 from './hangman_images/image_5.webp';
import image6 from './hangman_images/image_6.webp';
import image7 from './hangman_images/image_7.webp';
import defaultImage from './hangman_images/default.webp';

function Image({ errorCount }) {
    let image = null;
    
    switch (errorCount) {
        case 1:
            image = image1;
            break;
        case 2:
            image = image2;
            break;
        case 3:
            image = image3;
            break;
        case 4:
            image = image4;
            break;
        case 5:
            image = image5;
            break;
        case 6:
            image = image6;
            break;
        case 7:
            image = image7;
            break;
        default:
            image = defaultImage;
            break;
    }

    return (
        <img src={image} alt="Hangman" />
    );

}

export default Image;