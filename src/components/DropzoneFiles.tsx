import { Box, Flex, Text } from "@chakra-ui/layout";
import Dropzone from "react-dropzone";
import { FaFolderPlus } from "react-icons/fa";

type DropzoneProps = {
  handleUpload: (files) => void;
};

const DropzoneFiles = ({ handleUpload }: DropzoneProps) => {
  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) return <Text>Upload your files</Text>;

    if (isDragReject) return <Text color="red.400">Unsupported file</Text>;

    return <Text>Drop to make upload</Text>;
  };

  return (
    <Dropzone accept="image/*" onDropAccepted={handleUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <Box borderRadius="10px" background="white" p="4" mt="6">
          <Flex
            {...getRootProps()}
            border="1px dashed rgba(58, 50, 192, 0.2)"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            py="4"
            borderRadius="10px"
          >
            <input {...getInputProps()} />
            <FaFolderPlus size="30px" color="#EABD1E" />
            {renderDragMessage(isDragActive, isDragReject)}
          </Flex>
        </Box>
      )}
    </Dropzone>
  );
};

export default DropzoneFiles;
