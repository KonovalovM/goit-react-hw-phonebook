
import { deleteContact } from 'redux/operations';
import { List, Item, Title, Button } from './ContactListStyled';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();   

  const ContactItem = contacts.map(({ id, name, number }) => {
    return (  
      
      <Item key={id}>
        <Title>
          {name}: {number}
        </Title>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </Item>
    );
  });

  return <List>{ContactItem}</List>
};

