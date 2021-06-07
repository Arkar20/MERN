 export const uploadImage = (e) => {
       
        const config = {
         
        onUploadProgress: function(progressEvent) {
         var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted)
     }
         }
        const fd = new FormData();
        fd.append('file', image)
        fd.append('upload_preset', 'mern-insta')
        fd.append('cloud_name', 'dv5lnanfw')
         axios.post('https://api.cloudinary.com/v1_1/dv5lnanfw/image/upload',fd,config).then(res=>setUploadedImg(res.data.url))
            
    }