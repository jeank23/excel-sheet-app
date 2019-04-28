import React, { Component } from 'react';

class App extends Component {

  render() {
    const rows = 4;
    const columns = 4;
    let rowElements = [];
    let columnElements = [];
    let thFlag = false;

    for(let r = 0; r < rows; r++){
      for(let c = 0; c < columns; c++){
        columnElements.push(!thFlag ? <th key={'c'+c+' - r'+r}>holaTH</th> : <td key={'c'+c+' - r'+r}>holaTD</td>); 
      }
      rowElements.push(
        <tr key={'row'+r}>
          {columnElements.map(item => {
            return item;
          })}
        </tr>
      );

      thFlag = true;
      columnElements = [];
    }
    return (
      <table> 
        <tbody>
        { rowElements.map(item => {
          return item;
        }) }
        </tbody>
      </table>
    );
  }
}

export default App;


