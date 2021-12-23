import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Gandalf',
                job: 'Wizard'
            },
            {
                name: 'Legolas',
                job: 'Elf'
            },
            {
                name: 'Aragorn',
                job: 'Action Hero'
            }
        ];

        return(
            <div className='App'>
                <Table characterData={characters}/>
            </div>
        )
    }
}

export default App;