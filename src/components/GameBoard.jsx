
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null], 
];

export default function GameBoard({onSelectSquare,turns}) {
  let GameBoard = initialGameBoard;


  for(const turn of turns){
    const { square, player} = turn;
    const  { row, col} = square;

    GameBoard[row][col] = player;
  }





    // const [GameBoard, setGameBoard] = useState(initialGameBoard)

    // const handleSelectSquare = (rowIndex,colIndex) => {
    //     setGameBoard((prevGameBoard)=> {
    //         const updatedBoard = [...prevGameBoard.map((innerArray)=>( [...innerArray]))]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // };
   
  return (
    <ol id="game-board">
      {GameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
