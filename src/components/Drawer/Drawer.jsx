import { useRef } from 'react';
import { IoMdContact } from 'react-icons/io';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

export const MobileMenu = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        color="#ffd76d"
        variant="ghost"
        p={0}
      >
        <IoMdContact color="#ffd76d" size={40} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background={'#1a1d2b'}>
          <DrawerCloseButton />
          <DrawerBody p={4}>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
