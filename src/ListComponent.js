const wowCharacters = [
    {
        id: 1,
        name: "Arthas",
        class: "Paladin",
        level: 60,
    },
    {
        id: 2,
        name: "Jaina",
        class: "Mage",
        level: 40,
    },
    {
        id: 3,
        name: "Thrall",
        class: "Shaman",
        level: 50,
    },
];

function ListComponent(){
    /* This maps the list of characters and displays them in a list */
    const listItems = wowCharacters.map(characters => {
        const itemText = `${characters.name} is a ${characters.class}`;
        return <li>{itemText}</li>
    })
    /* -----------------------------------------------------------------*/

    /* This filters and sort the list from the lowest level to highest level */
    const filterList = wowCharacters
    .filter((characters) => {
        return characters.level > 25;
    })
    .sort((a, b) => {
        return a.level - b.level;
    })
    .map((characters) => {
        return <li>{characters.name} - {characters.level} level</li>
    });

    return (
        <div>
            <ul>
                {listItems}
                {filterList}
            </ul>
        </div>
    )
}

export default ListComponent;