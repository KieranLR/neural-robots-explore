import * as tf from '@tensorflow/tfjs'

export class ImageUtilities {

    static loadimage(src) {
        return new Promise(
            (resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () =>
                    resolve(tf.browser.fromPixels(img));
                img.onerror = (err) => reject(err);
            });
    }
}