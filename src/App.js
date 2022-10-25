// import "./styles.css";

export default function App() {
  let arr = [
    [1, 1, 2, 2, 6, 5, 5, 8],
    [3, 3, 4, 4, 6, 7, 7, 8],
  ];
  let flatArr = arr.flat();

  const invertPositions = (positionMap) => {
    let invertedMap = "";

    for (let i = 0; i < positionMap.length; i += 4) {
      let slice = positionMap.slice(i, i + 4);
      switch (slice) {
        case "0000":
          invertedMap += "1001";
          break;
        case "1001":
          invertedMap += "0000";
          break;
        case "0001":
          invertedMap += "0000";
          break;
        case "0010":
          invertedMap += "1001";
          break;
        default:
          console.log(`Sorry, we are out of`);
      }
    }
    return invertedMap;
  };

  const isValidArray = (array) => {
    let bitArr = "";
    array.map((number, index) => {
      let verticalIndex =
        array.length / 2 > index
          ? index + array.length / 2
          : index - array.length / 2;

      if (number === array[verticalIndex]) {
        bitArr += "1";
      } else if (number === array[index + 1]) {
        bitArr += "00";
      }

      return <p>{bitArr}</p>;
    });
    console.log(invertPositions(bitArr));
    console.log(bitArr);
  };

  const [inputList, setInputList] = useState([{ m: "", n: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {inputList.map((x, i) => {
        <>
          <label>m=</label>
          <input
            name="arrayWidth"
            placeholder="m"
            value={x.m}
            onChange={(e) => handleInputChange(e, i)}
          />
          <br />
          <input
            name="arrayWidth"
            placeholder="n"
            value={x.n}
            onChange={(e) => handleInputChange(e, i)}
          />
          <input />
          <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        </>;
      })}
    </div>
  );
}
