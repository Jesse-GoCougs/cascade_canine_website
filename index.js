// Require the cloudinary library
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const os = require('os');

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
  secure: true
});

// Log the configuration
console.log(cloudinary.config());

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath, publicId = null) => {

    // Use the uploaded file's name as the asset's public ID and
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      ...(publicId && { public_id: publicId }),
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};


/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
const getAssetInfo = async (publicId) => {

    // Return colors in the response
    const options = {
      colors: true,
    };

    try {
        // Get details about the asset
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors;
        } catch (error) {
        console.error(error);
    }
};

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image  
// focused on the faces, applying an outline of the  
// first color, and setting a background of the second color.
//////////////////////////////////////////////////////////////
const createImageTag = (publicId, ...colors) => {

    // Set the effect color and background color
    const [effectColor, backgroundColor] = colors;

    // Create an image tag with transformations applied to the src URL
    let imageTag = cloudinary.image(publicId, {
      transformation: [
        { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
        { radius: 'max' },
        { effect: 'outline:10', color: effectColor },
        { background: backgroundColor },
      ],
    });

    return imageTag;
};


//////////////////
//
// Main function
//
//////////////////
(async () => {

    // Set the folder containing images to upload
    const folderPath = '/Users/Jesse/Desktop/images/assests';

    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const files = fs.readdirSync(folderPath).filter(file =>
        validExtensions.includes(path.extname(file).toLowerCase())
    );

    console.log(`Found ${files.length} image(s) to upload...\n`);

    const results = [];

    for (const file of files) {
        const imagePath = path.join(folderPath, file);
        const fileSizeBytes = fs.statSync(imagePath).size;
        const maxBytes = 10 * 1024 * 1024; // 10MB

        let uploadPath = imagePath;
        let tempPath = null;

        // Compress if over 10MB
        if (fileSizeBytes > maxBytes) {
            console.log(`Compressing: ${file} (${(fileSizeBytes / 1024 / 1024).toFixed(1)}MB)`);
            tempPath = path.join(os.tmpdir(), `compressed_${file}`);
            await sharp(imagePath)
                .jpeg({ quality: 75 })
                .toFile(tempPath);
            uploadPath = tempPath;
        }

        console.log(`Uploading: ${file}`);
        const originalName = path.parse(file).name;
        const publicId = await uploadImage(uploadPath, originalName);

        // Clean up temp file if created
        if (tempPath) fs.unlinkSync(tempPath);

        if (publicId) {
            const secureUrl = `https://res.cloudinary.com/${cloudinary.config().cloud_name}/image/upload/${publicId}.jpg`;
            results.push({ file, publicId, secureUrl });
            console.log(`  ✓ public_id: ${publicId}`);
            console.log(`  ✓ url: ${secureUrl}\n`);
        }
    }

    console.log('=== Upload Summary ===');
    results.forEach(r => console.log(`${r.file} → ${r.secureUrl}`));

})();