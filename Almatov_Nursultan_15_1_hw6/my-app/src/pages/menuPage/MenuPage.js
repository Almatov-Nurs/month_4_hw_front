import React, {useState} from 'react';
import Menu from "../../components/menu/Menu";

function MenuPage(props) {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div>
            <button onClick={handleMenu}>menu</button>
            <Menu menuStatus={menu}/>
        </div>
    );
}

export default MenuPage;