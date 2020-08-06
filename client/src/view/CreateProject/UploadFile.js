import React, { Fragment, useState } from "react";
import { Icon } from "semantic-ui-react";
import { Upload, message, Button } from "antd";
import "antd/dist/antd.css";
import { config } from "../../common/config/config";

/**
 * @author @binjiasata
 * @description Upload project logo component.
 */

const path = config();

const UploadFile = ({ info, setInfo }) => {
  const [fileList, setFileList] = useState([]);

  // For saving images in database, convert image to base64 format
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  // limit image type to JPG and PNG and size < 1 MB.
  const uploadOnChange = (e) => {
    let fileListTemp = [...e.fileList];
    fileListTemp = fileListTemp.slice(-1);
    setFileList(fileListTemp);

    const isLt1M = e.file.size / 1024 / 1024 < 1;
    const isJpgOrPng =
      e.file.type === "image/jpeg" || e.file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      setFileList([]);
    } else if (!isLt1M) {
      message.error("Image must smaller than 1MB!");
      setFileList([]);
    }
    // upload base64 image
    else if (e.file.status === "done") {
      getBase64(e.file.originFileObj, (logoUrl) => {
        setInfo({
          ...info,
          logoUrl: logoUrl,
        });
      });
      message.success(`${e.file.name} file uploaded successfully`);
    } else if (e.file.status === "error") {
      message.error(`${e.file.name} file upload failed.`);
    }
  };
  return (
    <Fragment>
      <Upload
        action={path + "image/upload"}
        name="logoUrl"
        onChange={uploadOnChange}
        fileList={fileList}
      >
        <Button>
          <Icon name="upload" /> Click to Upload
        </Button>
      </Upload>
    </Fragment>
  );
};

export default UploadFile;
