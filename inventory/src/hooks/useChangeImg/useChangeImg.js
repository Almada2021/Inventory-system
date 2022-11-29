import { useState } from "react";

export default function useChangeImg(ref){
    const [img, setImage] = useState()
    const previewImg = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage( URL.createObjectURL(event.target.files[0]))
            return ref.current = URL.createObjectURL(event.target.files[0])
        }
    }
    return [img, previewImg]   
}