import { EditForm } from 'components/EditForm/EditForm';

const { EditIcon } = require('@chakra-ui/icons');
const {
  useDisclosure,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  FocusLock,
  PopoverCloseButton,
  Portal,
} = require('@chakra-ui/react');

const { useRef } = require('react');

export const PopoverForm = ({ contact }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={true}
        border={'none'}
      >
        <PopoverTrigger>
          <IconButton
            w={8}
            h={8}
            icon={<EditIcon />}
            variant="ghost"
            color="#ffd76d"
            _hover={{ bg: '#ffd76d55' }}
            _focus={{ bg: '#ffd76d55' }}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            bg="#1a1d2b"
            borderRadius="8px"
            borderColor={'#ffd86d78'}
          >
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverCloseButton />
              <EditForm onCancel={onClose} contact={contact} />
            </FocusLock>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};
