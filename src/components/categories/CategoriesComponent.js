import React from 'react';

class CategoriesComponent extends React.Component {
    render() {
        const {categories} = this.props;
        return (
            <div>
                <ul>
                {categories.map((c, index) => 
                    <li key={index}>{c.name}</li>
                )}
                </ul>
            </div>
            
        );
    }    
}

export default CategoriesComponent;

