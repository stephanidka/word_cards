
import Data from '../../utils/data.json'; // Импорт данных из JSON-файла
import './WordsTable.css';
import edit from '../../images/edit-ic.png';
import bin from '../../images/bin-ico.png'
import React, { useState } from 'react';

function WordsTable() {

const [data, setData] = useState(Data);
const [editIndex, setEditIndex] = useState(null)

const [inputValue, setInputValue] = useState(
  {
    word: '',
    transcription: '',
    translation: '',
    theme: ''
  }
);

const handleEditClicked = (index) => {
  setEditIndex(index)
  const item = data[index];
  setInputValue({
    word: item.word,
    transcription: item.transcription,
    translation: item.translation,
    theme: item.theme
  });
}

const handleChangeInputValue = (event) => {
  const { name, value } = event.target;
  setInputValue(prevValue => ({
    ...prevValue,
    [name]: value
  }));
};

const handleSaveClicked = () => {
  const newData = [...data];
  newData[editIndex]  = { ...inputValue };
  setData(newData);
  setEditIndex(null);
}

// const inputValide = () => {
//   return inputValue.word && inputValue.translation && inputValue.transcription && inputValue.theme
// };

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
        {data.map((item, index) => (       
              <tr key={index}> 
              {editIndex === index ? (
                <>
                    <td>
                    <input type="text" className='EditInput'
                     placeholder={item.word}
                     name="word"
                     value={inputValue.word}
                     onChange={handleChangeInputValue}
                     /></td>

                     <td><input className='EditInput'
                     type="text" 
                     name="translation"
                     placeholder={item.translation}
                     value={inputValue.translation}
                     onChange={(event) => setInputValue(event.target.value)}
                   /></td>

                   <td><input className='EditInput'
                    type="text" 
                    name="transcription"
                    placeholder={item.transcription}
                    value={inputValue.transcription}
                    onChange={(event) => setInputValue(event.target.value)} 
                   /></td>

                   <td><input className='EditInput'
                    type="text" 
                    name="theme"
                    placeholder={item.theme} 
                    value={inputValue.theme}
                    onChange={(event) => setInputValue(event.target.value)}
                  /></td>
                       <td style={{ textAlign: 'right' }}>
                         <button
                          onClick = {handleSaveClicked}
                          // disabled={!inputValide()} // еще подумать
                          >✓</button>
                         <button 
                          onClick={() => setEditIndex(null)}
                          >☓</button>
                         <button><img src={edit} alt='edit' /></button>
                         <button><img src={bin} alt='delete' /></button>
                       </td> 
                       </>
                      ) : (
                        <>
            <td>{item.word}</td>
            <td>{item.transcription}</td>
            <td>{item.translation}</td>
            <td>{item.theme}</td>
            <td style={{ textAlign: 'right' }}>
              <button style={{display: 'none'}}>✓</button>
              <button style={{display: 'none'}}>☓</button>
              <button onClick={() => handleEditClicked(index)}><img src={edit} alt='edit' /></button>
              <button><img src={bin} alt='delete' /></button>
            </td>
            </>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WordsTable