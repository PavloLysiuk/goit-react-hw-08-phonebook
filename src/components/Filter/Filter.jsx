import { SearchIcon } from '@chakra-ui/icons';
import { FormControl, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  return (
    <>
      {contacts.length !== 0 && (
        <FormControl mb={2}>
          <Input
            name="filter"
            placeholder="Find contacts by name or phone number"
            _placeholder={{ opacity: 0.5, color: '#ffd76d' }}
            type="text"
            value={filterValue}
            onChange={event => dispatch(setFilter(event.target.value))}
            pos="relative"
            bg={'#1a1d2b'}
            borderColor={'#ffd86d78'}
          />
          <SearchIcon
            pos="absolute"
            top="50%"
            transform="translateY(-50%)"
            right="16px"
            zIndex={2}
            color="#ffd76d"
          />
        </FormControl>
      )}
    </>
  );
};
