import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function DocumentUpload() {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "application/pdf",
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0]);
            setPreviewUrl(URL.createObjectURL(acceptedFiles[0]));
        },
    });

    return (
        <div className={"m-6"}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop a PDF file here, or click to select file</p>
            </div>
            <br />
            {previewUrl && (
                <div>
                    <p>{`File '${file.name}' has been selected.`}</p>
                    <embed src={previewUrl} type="application/pdf" width="100%" height="800px" />
                </div>
            )}
        </div>
    );
};
