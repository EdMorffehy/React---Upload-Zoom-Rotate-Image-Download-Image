import React, {useState} from 'react';
import {Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import 'antd/dist/antd.css';
import defaultLogo from "./assets/img/defalt.png"
import FileSaver from 'file-saver';

const App = () => {

    const [file, setFile] = useState({})
    const [uploadDefaultLogo, setUploadDefaultLogo] = useState(defaultLogo);
    const uploadImage = ({file}) => {
        setFile(file)

        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function() {
            setUploadDefaultLogo(reader.result);
        };
    }

    return (
        <div className="main">
            <h1>
                Upload, Zoom + Rotate Image, Download Image
            </h1>
           <div>
               <div className="container">
                   <ImgCrop  rotate modalTitle={'Добавить фото'}>
                       <Upload
                           customRequest={uploadImage}
                           listType="picture-card">
                           <img src={uploadDefaultLogo}  className="images"  alt="images" />
                       </Upload>
                   </ImgCrop>
                   <button className="button"  onClick={() => FileSaver.saveAs(file)}>
                       Download
                   </button>
               </div>
           </div>
        </div>
    );
};

export default App;