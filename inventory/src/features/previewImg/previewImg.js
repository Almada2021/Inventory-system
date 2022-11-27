import { useState } from "react";

export const previewImg = (event) => {
    if (event.target.files && event.target.files[0]) {
        setImage( URL.createObjectURL(event.target.files[0]))
        return uploadInputRef.current = URL.createObjectURL(event.target.files[0])
      }
}
export default function useChangeImg(){
    
}