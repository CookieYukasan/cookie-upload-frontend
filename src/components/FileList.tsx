import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { CircularProgress } from "@chakra-ui/progress";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaBars, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type FileListProps = {
  files: [] | any[];
  handleDelete: (id) => void;
};

const FileList = ({ files, handleDelete }: FileListProps) => {
  return (
    <>
      <Heading mt="12" mb="4" fontSize="2xl">
        Your files
      </Heading>
      {files.map((file: any) => (
        <SimpleGrid gap="4" templateColumns="1fr 3fr 1fr" key={file.id} mb="4">
          <Image
            src={file.url ? file.url : file.preview}
            width="70px"
            height="70px"
            borderRadius="15px"
          />
          <Flex flexDir="column" justifyContent="center">
            <Text>{file.name}</Text>
            <Flex>
              <Text color="#70709E">{file.readableSize}</Text>
              <Text
                position="relative"
                ml="6"
                _before={{
                  content: "''",
                  width: 2,
                  height: 2,
                  background: "#10105D",
                  position: "absolute",
                  left: -4,
                  top: "35%",
                  borderRadius: "50%",
                }}
              >
                {String(file.name).split(".")[1]}
              </Text>
            </Flex>
          </Flex>
          {!file.uploaded && !file.error && (
            <CircularProgress
              value={file.progress}
              size="35px"
              color="#002DCD"
              alignSelf="center"
              justifySelf="flex-end"
            />
          )}

          {file.uploaded && file.url && (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaBars />}
                variant="ghost"
              />
              <MenuList>
                <CopyToClipboard text={file.url}>
                  <MenuItem>Copy URL</MenuItem>
                </CopyToClipboard>
                <MenuItem onClick={() => handleDelete(file.id)}>
                  Delete File
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </SimpleGrid>
      ))}
    </>
  );
};

export default FileList;
