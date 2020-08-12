import React, { Fragment, useState } from "react";
import { Icon, Label } from "semantic-ui-react";
import { Upload, message, Button } from "antd";
import "antd/dist/antd.css";
import { config } from "../../common/config/config";
import Axios from "axios";

/**
 * @author @binjiasata
 * @description Upload project logo component.
 */

const path = config();

const UploadFile = ({ info, setInfo }) => {
  const [fileList, setFileList] = useState([]);
  let fileName = "";

  // For saving images in database, convert image to base64 format
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  // send post to trigger upload, this post does not do anything
  const customRequest = ({ onSuccess }) => {
    Axios.post(path + "image/upload", {})
      .then((res) => {
        onSuccess(null, res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
      setFileList([]);
      setInfo({
        ...info,
        uploadStatus: "format error",
      });
    } else if (!isLt1M) {
      setFileList([]);
      setInfo({
        ...info,
        uploadStatus: "size error",
      });
    }
    // upload base64 image
    else if (e.file.status === "done") {
      getBase64(e.file.originFileObj, (logoUrl) => {
        setInfo({
          ...info,
          logoUrl: logoUrl,
          uploadStatus: "success",
        });
      });
      fileName = e.file.name;
      // message.success(`${e.file.name} file uploaded successfully`);
    } else if (e.file.status === "error") {
      setInfo({
        ...info,
        uploadStatus: "failed",
      });
      fileName = e.file.name;
      // message.error(`${e.file.name} file upload failed.`);
    }
  };

  console.log(info.uploadStatus);
  return (
    <Fragment>
      <Upload
        customRequest={customRequest}
        name="logoUrl"
        onChange={uploadOnChange}
        fileList={fileList}
      >
        <Button>
          <Icon name="upload" /> Click to Upload
        </Button>
        {info.uploadStatus === "success" ? (
          <Label basic color="green" pointing="left">
            {`${fileName} file uploaded successfully`}
          </Label>
        ) : info.uploadStatus === "failed" ? (
          <Label basic color="red" pointing="left">
            {`${fileName} file upload failed.`}
          </Label>
        ) : info.uploadStatus === "format error" ? (
          <Label basic color="red" pointing="left">
            You can only upload JPG/PNG file!
          </Label>
        ) : info.uploadStatus === "size error" ? (
          <Label basic color="red" pointing="left">
            Image must smaller than 1MB!
          </Label>
        ) : (
          ""
        )}
      </Upload>
    </Fragment>
  );
};

export default UploadFile;
