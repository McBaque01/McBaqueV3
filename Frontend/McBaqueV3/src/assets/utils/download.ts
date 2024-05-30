
import myCv from "../media/file/MarkJohnBaqueCV.pdf"
interface DownloadType {
    path: string;
}

export const DownloadCV = () => {
    const file: DownloadType= {path: myCv};
    // Trigger download
    window.open(file.path, '_blank');
}