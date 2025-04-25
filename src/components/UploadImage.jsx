import axios from "axios";

export const UploadImage = async (image) => {

    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`,{image},
        {
            method:"POST",
            headers: {
                "content-type": "multipart/form-data"
            },
        }
    )

    return res.data.data.display_url
    
};

