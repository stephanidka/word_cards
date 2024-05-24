
import Data from '../../utils/data.json'; // Импорт данных из JSON-файла
import './WordsTable.css';
import edit from '../../images/edit-ic.png';
import bin from '../../images/bin-ico.png'
import React, { useState } from 'react';

const [editClicked, SetEditClicked] = useState(false)

const handleEditClicked = () => SetEditClicked(!editClicked)

function WordsTable() {
  return (
    <table>
      <thead className='Thead'>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item, index) => (
          <tr key={index}>
            {editClicked ? (
                    <td><input 
                    type="text" 
                    value={item.word} 
                     /></td>

                     <td><input 
                     type="text" 
                     value={item.translation} 
                   /></td>

                   <td><input 
                     type="text" 
                     value={item.transcription} 
                   /></td>

                   <td><input 
                    type="text" 
                    value={item.theme} 
                  /></td>
                       <td style={{ textAlign: 'right' }}>
                         <button>✓</button>
                         <button>☓</button>
                         <button><img src={edit} alt='edit' /></button>
                         <button><img src={bin} alt='delete' /></button>
                       </td> ) : (
          
            <td>{item.word}</td>
            <td>{item.transcription}</td>
            <td>{item.translation}</td>
            <td>{item.theme}</td>
            <td style={{ textAlign: 'right' }}>
              <button style={{display: 'none'}}>✓</button>
              <button style={{display: 'none'}}>☓</button>
              <button><img src={edit} alt='edit' /></button>
              <button><img src={bin} alt='delete' /></button>
            </td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WordsTable