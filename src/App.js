import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    async componentDidMount() {
        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        data = await data.json();
        this.setState({
            monsters: data
        }, function(){
            console.log(this.state.monsters)
        })
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    render() {
        const { monsters, searchField } = this.state;
        
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            <div className='App'>
                <SearchBox 
                    placeholder='Search Monster' 
                    handleChange={this.handleChange} />
                <CardList 
                    monsters={filteredMonsters} />
            </div>
        )
    }
}

export default App;
