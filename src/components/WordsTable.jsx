
import Data from '../utils/data.json'; // Импорт данных из JSON-файла
import './WordsTable.css';

function WordsTable() {
  return (
    <table>
      <thead className='Thead'>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item, index) => (
          <tr key={index}>
            <td>{item.word}</td>
            <td>{item.transcription}</td>
            <td>{item.translation}</td>
            <td>{item.theme}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WordsTable