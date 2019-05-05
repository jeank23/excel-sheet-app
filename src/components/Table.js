import React, {Component} from 'react';
import Cell from './Cell';

class Table extends Component {

    state = {
        rowElementsState: [],
    }
    
    
    componentWillMount(){
        const rows = 1000;
        const columns = 24;
        this.rowElements = [];
        this.columnElements = [];
        let thFlag = false;


        for(let r = 0; r < rows; r++){
            for(let c = 0; c < columns; c++){
            this.columnElements.push(!thFlag || c === 0 ? <th key={'c'+c+' - r'+r}>holaTH</th> : <td key={'c'+c+' - r'+r}><Cell/></td>); 
            }

            this.rowElements.push(<tr key={'row'+r}>{this.columnElements}</tr>);

            thFlag = true;
            this.columnElements = [];
        }

        this.setState({
            rowElementsState: this.rowElements
        });
    }

    render(){
        return (
          <table> 
            <tbody>
            { this.state.rowElementsState }
            </tbody>
          </table>
        );
    }
}

export default Table;