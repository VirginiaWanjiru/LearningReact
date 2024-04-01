
const products =[
    {title:'Banana',isFruit:true,id:1},
    {title:'Onion',isFruit:false,id:2},
    {title:'Mangoes',isFruit:true,id:3},
    {title:'Nyanyas',isFruit:false,id:4}

];

const listItems = products.map(product=>
    <li key={product.id}>
        {product.title}
        </li>
    
    );

    

export default function ShoppingList(){

        const listItems = products.map(product=>
            <li 
            key={product.id}
            style={{
                color:product.isFruit? 'magenta':'darkgreen'
            }}
            >
                {product.title}
            </li>);

            return(
                <ul>{listItems}</ul>
            )
    }