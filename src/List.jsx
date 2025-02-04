
function List(){
    const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

    const listItems = fruits.map((fruit) =>
        <li>{fruit}</li>
    );

    return(
        <ol>{listItems}</ol>

    ); 



}



export default List;