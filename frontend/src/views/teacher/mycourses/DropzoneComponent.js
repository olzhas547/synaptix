import { useDropzone } from "react-dropzone";
import { RiInboxLine } from 'react-icons/ri';
import axios from 'axios';

export function DropzoneComponent1() {
    const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: async acceptedFiles => {
            acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));

            try {
                const formData = new FormData();
                acceptedFiles.forEach(file => {
                    formData.append('file', file);
                });
                await axios.post('YOUR_UPLOAD_ENDPOINT', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('Files uploaded successfully!');
            } catch (error) {
                console.error('Error uploading files: ', error);
            }
        },
    });

    const file = acceptedFiles[0];

    return (
        <div {...getRootProps()} className="dropzone-container" tabIndex="0" role="button" aria-label="Image-uploader">
            {!file && (
                <>
                    <RiInboxLine aria-hidden="true" color={"#1677FF"} size={50}/>
                    <p>Drag 'n' drop a file here, or click to select an image file</p>
                </>
            )}
            {file && <img src={file.preview} alt={file.path} style={{maxWidth: '40%', height: '40%', display: 'block', margin: '0 auto'}}/>}
        </div>
    );
}

export function DropzoneComponent2() {
    const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: async acceptedFiles => {
            acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));

            try {
                const formData = new FormData();
                acceptedFiles.forEach((file) => {
                    formData.append("file", file);
                });
                await axios.post("YOUR_UPLOAD_ENDPOINT", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('Files uploaded successfully!');
            } catch (error) {
                console.error("Error uploading files:", error);
            }
        },
    });

    const file = acceptedFiles[0];

    return (
        <div {...getRootProps()} className="dropzone-container" tabIndex="0" role="button"
             aria-label="Image-uploader-2">
            {!file && (
                <>
                    <RiInboxLine aria-hidden="true" color={"#1677FF"} size={50}/>
                    <p>Drag 'n' drop a file here, or click to select an image file</p>
                </>
            )}
            {file && <img src={file.preview} alt={file.path} style={{maxWidth: '40%', height: '40%', display: 'block', margin: '0 auto'}}/>}
        </div>
    );
}