
export const fileUpload = async(file) => {
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/rikhardt/image/upload'

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudRest = await resp.json();
            return cloudRest.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (error) {
        throw error;
    }
    
}
