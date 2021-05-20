import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import fileSize from "filesize";
import { uniqueId } from "lodash";
import { useEffect, useState } from "react";
import DropzoneFiles from "../components/DropzoneFiles";
import FileList from "../components/FileList";
import Header from "../components/Header";
import ShareFiles from "../components/ShareFiles";
import api from "../services/api";
import { useFetch } from "../hooks/useFetch";
import useSWR from "swr";

const SendFiles = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [shareType, setShareType] = useState(1);
  const { data } = useSWR("posts", async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  useEffect(() => {
    if (data) {
      setUploadedFiles(
        data.map((file) => ({
          id: file._id,
          name: file.name,
          readableSize: fileSize(file.size),
          preview: file.url,
          uploaded: true,
          url: file.url,
        }))
      );
    }
  }, [data]);

  const handleUpload = (files) => {
    const upFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: fileSize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles(uploadedFiles.concat(upFiles));
    upFiles.forEach(uploadProcess);
  };

  const updateFile = (id, data) => {
    setUploadedFiles(
      uploadedFiles.map((uploadedFile) => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    );
  };

  const handleDelete = async (id) => {
    await api.delete(`posts/${id}`);

    setUploadedFiles(uploadedFiles.filter((file) => file.id !== id));
  };

  const uploadProcess = (uploadedFile) => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("posts", data, {
        onUploadProgress: (e) => {
          /*const progress = parseInt(
            String(Math.round((e.loaded * 100) / e.total))
          );

          updateFile(uploadedFile.id, {
            progress,
          });*/
        },
      })
      .then((response) => {
        /*updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url,
        });*/
      })
      .catch(() => {
        updateFile(uploadedFile.id, {
          error: true,
        });
      });
  };

  useEffect(() => {
    return uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Flex
      px="6"
      pt="6"
      height="100vh"
      backgroundColor="#F3F6FA"
      flexDir="column"
    >
      <Header title="Send Files" />
      <DropzoneFiles handleUpload={handleUpload} />
      {uploadedFiles.length !== 0 ? (
        <>
          <FileList files={uploadedFiles} handleDelete={handleDelete} />
          <ShareFiles shareType={shareType} setShareType={setShareType} />
        </>
      ) : (
        <Flex alignItems="center" justifyContent="center" mt="12">
          <Heading>No files uploaded</Heading>
        </Flex>
      )}
    </Flex>
  );
};

export default SendFiles;
