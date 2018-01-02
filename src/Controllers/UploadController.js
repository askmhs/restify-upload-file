import mv from 'mv';

export class UploadController {

    /**
     * UploadController constructor
     *
     * @param image
     */
    constructor(image) {
        this._image = image;
    }

    /**
     * Upload
     *
     * @returns {Promise<void>}
     */
    async upload() {
        /**
         * This will create an array os string from the image name, ex: ["a", "b", "c"]
         *
         * @type {*|string[]}
         */
        let name = this._image.name.split(".");

        /**
         * Get image extension
         *
         * @type {*|string}
         */
        const extension = name[name.length - 1];

        /**
         * This will move file to uploads directory and give it custom name
         *
         * @type {string}
         */
        const new_path = `uploads/${new Date().getTime()}.${extension}`;

        /**
         * Upload image
         */
        return mv(this._image.path, new_path, {
            mkdirp: true // This will allow mv to create new directory and or subdirectory
        }, (err, result) => {
            if (err) {
                throw err;
            } else {
                return result;
            }
        });
    }
}