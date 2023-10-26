import { DeleteIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  CircularProgress,
  useDisclosure,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

export const WarningAlert = ({ onClick, isDeleting }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Button
        type="button"
        onClick={onOpen}
        disabled={isDeleting}
        color="#ffd76d"
        variant="ghost"
        w={8}
        h={8}
        _hover={{ bg: '#ff204055' }}
        _focus={{ bg: '#ff204055' }}
      >
        {isDeleting ? (
          <CircularProgress isIndeterminate color="#ffd76d" size="16px" />
        ) : (
          <DeleteIcon color={'#ff2e4d'} />
        )}
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent
          w="320px"
          bg="#1a1d2b"
          boxShadow={'none'}
          borderRadius="8px"
        >
          <AlertDialogHeader color="#ffd76d">
            Deleting contact
          </AlertDialogHeader>
          <AlertDialogCloseButton
            color="#ffffff"
            _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
            _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
          />
          <AlertDialogBody color="#ffffff">
            <WarningIcon mr="8px" color="#ff2e4d" />
            Are you sure? You can't undo this.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              isLoading={isDeleting}
              onClick={onClick}
              variant="outline"
              color="#ffd76d"
              borderColor={'#ffd76d55'}
              _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
              _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
            >
              Yes
            </Button>
            <Button
              ref={cancelRef}
              onClick={onClose}
              ml={3}
              variant="outline"
              color="#ffd76d"
              borderColor={'#ffd76d55'}
              _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
              _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
            >
              No
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
