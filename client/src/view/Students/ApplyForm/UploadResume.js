import React, { Fragment, useState } from "react";
import { Icon, Label } from "semantic-ui-react";
import { Upload, Button } from "antd";
import "antd/dist/antd.css";
import Axios from "axios";
import { config } from "../../../common/config/config";

/**
 * @author @binjiasata
 * @description Upload project logo component.
 */

const path = config();

const UploadResume = ({ applyInfo, setApplyInfo }) => {
  const [fileList, setFileList] = useState([]);
  let fileName = "";

  // For saving images in database, convert pdf to base64 format
  const getBase64 = (pdf, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(pdf);
  };

  // send post to trigger upload, this post does not do anything
  const customRequest = ({ onSuccess }) => {
    Axios.post(path + "file/upload", {})
      .then((res) => {
        onSuccess(null, res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // limit file type to PDF and size < 2 MB.
  const uploadOnChange = (e) => {
    let fileListTemp = [...e.fileList];
    fileListTemp = fileListTemp.slice(-1);
    setFileList(fileListTemp);

    const isLt2M = e.file.size / 1024 / 1024 < 2;
    const isPdf = e.file.type === "application/pdf";

    if (!isPdf) {
      setFileList([]);
      setApplyInfo({
        ...applyInfo,
        uploadStatus: "format error",
      });
    } else if (!isLt2M) {
      setFileList([]);
      setApplyInfo({
        ...applyInfo,
        uploadStatus: "size error",
      });
    }
    // upload base64 image
    else if (e.file.status === "done") {
      getBase64(e.file.originFileObj, (resume) => {
        setApplyInfo({
          ...applyInfo,
          resume: resume,
          uploadStatus: "success",
        });
      });
      fileName = e.file.name;
    } else if (e.file.status === "error") {
      setApplyInfo({
        ...applyInfo,
        uploadStatus: "failed",
      });
      fileName = e.file.name;
    }
  };

  return (
    <Fragment>
      <Upload
        customRequest={customRequest}
        name="resume"
        onChange={uploadOnChange}
        fileList={fileList}
      >
        <Button>
          <Icon name="upload" /> Click to Upload
        </Button>
        {applyInfo.uploadStatus === "success" ? (
          <Label basic color="green" pointing="left">
            {`${fileName} file uploaded successfully`}
          </Label>
        ) : applyInfo.uploadStatus === "failed" ? (
          <Label basic color="red" pointing="left">
            {`${fileName} file upload failed.`}
          </Label>
        ) : applyInfo.uploadStatus === "format error" ? (
          <Label basic color="red" pointing="left">
            You can only upload PDF file!
          </Label>
        ) : applyInfo.uploadStatus === "size error" ? (
          <Label basic color="red" pointing="left">
            Image must smaller than 2MB!
          </Label>
        ) : (
          ""
        )}
      </Upload>
    </Fragment>
  );
};

export default UploadResume;
