import React from 'react';

function ProductsList({productsList}) {
    return (
        <ul>
            {
                productsList.length > 0
                    ? productsList.map((product, key) => <li key={key}>{product}</li>)
                    : <li>Список пуст!</li>
            }
        </ul>
    );
}

export default ProductsList;