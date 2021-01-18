import styles from './Search.module.scss';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { city } from '../Assets/city';

function SearchComp(props) {
    const [search, setSearch] = useState('');
    const [locations, setLocations] = useState([]);
    const [selLoc, setSelLoc] = useState('');

    const handleLocSel = (loc) => {
        setSelLoc(loc);
        props.updateSelLoc(loc);
    }
    const updateLocations = () => {
        // fetch(`https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?query=${search}`, {
        //     "method": "GET"
        // })
        //     .then(response => response.json())
        //     .then(response => {
        //         setLocations(response);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        setLocations(city);
    }
    const handleSearch = (value) => {
        setSearch(value);
    }

    return <div className={styles.searchPopup}>
        <div className={styles.searchContainer}>
            <Input color="secondary"
                id="input-with-icon-adornment" value={search} onChange={(e) => handleSearch(e.target.value)}
                startAdornment={
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                }
            />
            <Button
                variant="contained"
                color="primary"
                className={styles.button}
                onClick={() => updateLocations()}
            > Search
        </Button>
        </div>
        <div className={styles.searchResultContainer}>
            <List className={styles.list}>
                {locations.map((value, key) => {
                    return (
                        <ListItem key={key} button onClick={() => handleLocSel(value)}>
                            <ListItemText primary={value.title} />
                        </ListItem>
                    )
                })}
            </List>
        </div>
    </div>
}
export default SearchComp