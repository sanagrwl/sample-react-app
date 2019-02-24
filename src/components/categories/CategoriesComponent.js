import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class CategoriesComponent extends React.Component {
    render() {
        const {categories} = this.props;
        return (
            <div>
                {categories.map(c => 
                    <ListItem>
                        <ListItemText>{c.name}</ListItemText>
                    </ListItem>
                )}
            </div>
            
        );
    }    
}

export default CategoriesComponent;

