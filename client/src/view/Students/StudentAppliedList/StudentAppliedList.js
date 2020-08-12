import React, { Fragment } from "react";
import { Table, Header, Button } from "semantic-ui-react";

const StudentAppliedList = (props) => {
  const studentList = props.location.state;

  const downloadFile = (fileName, content) => {
    let aLink = document.createElement("a");
    let blob = base64ToBlob(content); //new Blob([content]);

    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", true, true); //initEvent support firefox
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);

    aLink.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true, view: window })
    );
  };

  //base64 convert to blob
  const base64ToBlob = (code) => {
    let parts = code.split(";base64,");
    let contentType = parts[0].split(":")[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;

    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  };

  const handleDownloadResume = (name, resume) => {
    downloadFile(name + "_resume", resume);
  };

  return (
    <Fragment>
      <Header as="h2">Applied Student List</Header>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Student Name</Table.HeaderCell>
            <Table.HeaderCell>Student Number</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Resume</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {studentList &&
            studentList.map((student) => {
              return (
                <Table.Row key={student._id}>
                  <Table.Cell>
                    <Header>{student.name}</Header>
                  </Table.Cell>
                  <Table.Cell singleLine>{student.studentNumber}</Table.Cell>
                  <Table.Cell>{student.email}</Table.Cell>
                  <Table.Cell>{student.description}</Table.Cell>
                  <Table.Cell>
                    <Button
                      color="orange"
                      onClick={() =>
                        handleDownloadResume(student.name, student.resume)
                      }
                    >
                      Click to download resume
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      <Button
        icon="left chevron"
        basic
        secondary
        floated="right"
        onClick={() => props.history.goBack()}
        content="Back"
      />
    </Fragment>
  );
};

export default StudentAppliedList;
