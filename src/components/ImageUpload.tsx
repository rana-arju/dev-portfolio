/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";
import { CircleX, CloudUpload } from "lucide-react";

const CLOUD_NAME = "db8l1ulfq";
const UPLOAD_PRESET = "portfolio";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

interface FileType {
  uid: string;
  name: string;
  status?: string;
  url?: string;
}

interface ImageUploadProps {
  onUploadComplete: (urls: string[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUploadComplete }) => {
  const [fileList, setFileList] = useState<FileType[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleUpload = async () => {
    setUploading(true);
    const uploadedUrls: string[] = [];

    for (const file of fileList) {
      const formData = new FormData();
      formData.append("file", file as any);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const response = await axios.post(CLOUDINARY_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("response", response);

        uploadedUrls.push(response.data.secure_url);
      } catch (error) {
        console.error("Upload Error:", error);
        toast("Upload Failed");
      }
    }

    setUploading(false);
    if (uploadedUrls.length > 0) {
      toast("Upload Successful");
    }

    onUploadComplete(uploadedUrls);
    setFileList([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).map((file) =>
        Object.assign(file, {
          uid: Math.random().toString(36).substring(2),
          preview: URL.createObjectURL(file),
        })
      );
      setFileList((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (uid: string) => {
    setFileList((prev) => prev.filter((file) => file.uid !== uid));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f9004d] file:text-white hover:file:bg-[#d0003f] pb-10 mt-5"
        />
        <Button
          onClick={handleUpload}
          disabled={fileList.length === 0 || uploading}
          className="bg-[#f9004d] hover:bg-[#d0003f] text-white mt-6"
        >
          {uploading ? (
            <>
              <CloudUpload className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <CloudUpload className="mr-2 h-4 w-4" />
              Upload
            </>
          )}
        </Button>
      </div>
      {fileList.length > 0 && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Selected Files:</h3>
          <ul className="space-y-2">
            {fileList.map((file) => (
              <li key={file.uid} className="flex items-center justify-between">
                <span className="truncate max-w-[200px]">{file.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(file.uid)}
                  className="text-red-500 hover:text-red-700"
                >
                  <CircleX className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
